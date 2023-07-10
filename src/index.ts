import type {
	AxiosInstance,
	AxiosResponse,
	CancelToken,
	CancelTokenSource,
	InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import { extend } from 'js-cool'

// export const namespace = 'axios-serializer' as const

export interface SerializerOptions extends Record<string, unknown> {
	unique?: boolean
	orderly?: boolean
	onCancel?: (err: any) => void
}

export interface SerializerCurrentStateType {
	lastRequestTime: number
	retryCount: number
}

export interface SerializerRequestOptions<D = any> extends InternalAxiosRequestConfig<D> {
	['axios-serializer']?: any
	unique?: boolean
	orderly?: boolean
	requestOptions?: SerializerRequestOptions
	cancelToken?: CancelToken
	type?: string
	error?: boolean
}

export interface SerializerConfig<D = any> extends InternalAxiosRequestConfig<D> {
	unique?: boolean
	setHeaders?(instance: AxiosInstance): void
	onRequest?(
		config: InternalAxiosRequestConfig,
		requestOptions: SerializerRequestOptions
	): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
	onRequestError?(error: any): void
	onResponse?(
		res: AxiosResponse<any>,
		requestOptions: SerializerRequestOptions
	): AxiosResponse<any> | Promise<AxiosResponse<any>>
	onResponseError?(error: any): void
	onError?(error: any): void
	onCancel?(error: any): void
}

export interface Series {
	promiseKey: symbol
	url: string
	promise: Promise<any>
	source: CancelTokenSource
	abortController: AbortController
}

export type WaitingList = Record<string, Series[]>

/**
 * the config for retry when initialize and return
 *
 * @param  config - SerializerRequestOptions
 * @return currentState
 */
function getCurrentState(config: SerializerRequestOptions): SerializerCurrentStateType {
	const currentState = config['axios-serializer'] || {}
	currentState.retryCount = currentState.retryCount || 0
	config['axios-serializer'] = currentState
	return currentState
}

/**
 * AxiosSerializer class
 *
 * @return Promise
 */
class AxiosSerializer {
	axiosInstance: AxiosInstance = null as unknown as AxiosInstance
	waiting: WaitingList = {} // Request Queue
	unique: SerializerOptions['unique'] = false // Whether to cancel the previous similar requests, default: false
	orderly: SerializerOptions['orderly'] = true
	onCancel: SerializerOptions['onCancel'] | null = null
	constructor({ unique, onCancel, ...defaultOptions }: SerializerConfig) {
		this.unique = unique ?? false
		this.onCancel = onCancel ?? null
		// Initialization method
		this.init(defaultOptions)
		return this
	}

	/**
	 * Initialization
	 */
	public init(defaultOptions: SerializerConfig): void {
		const {
			setHeaders,
			onRequest,
			onRequestError,
			onResponse,
			onResponseError,
			onError,
			...options
		} = defaultOptions
		if (!this.axiosInstance) this.axiosInstance = axios.create(options)
		// Set request headers
		setHeaders && setHeaders(this.axiosInstance)
		// Adding a request interceptor
		onRequest &&
			this.axiosInstance.interceptors.request.use(
				(config: InternalAxiosRequestConfig) => {
					const currentState = getCurrentState(config)
					currentState.lastRequestTime = Date.now()
					if (currentState.retryCount > 0) return config // retry re-requests the interface without executing onRequest again
					return onRequest(config, (config as any).requestOptions)
				},
				(err: any) => {
					onRequestError && onRequestError(err)
					onError && onError(err)
					return Promise.reject(err)
				}
			)
		// Adding a response interceptor
		onResponse &&
			this.axiosInstance.interceptors.response.use(
				res => {
					return onResponse(res, (res.config as any).requestOptions)
				},
				(err: any): Promise<any> => {
					const config: any = err.config
					// No request config
					if (!config) {
						onResponseError && onResponseError(err)
						onError && onError(err)
						return Promise.reject(err)
					}
					const currentState = getCurrentState(config)
					currentState.retryCount += 1
					onResponseError && onResponseError(err)
					onError && onError(err)
					return Promise.reject(err)
				}
			)
	}

	/**
	 * Create request
	 */
	public async create<T = any, R = AxiosResponse<T>, D = any>(
		// url: string | SerializerRequestOptions<D>,
		config: SerializerRequestOptions<D>
	): Promise<R> {
		const { unique = this.unique, orderly = this.orderly, url = '' } = config
		const promiseKey = Symbol('promiseKey')
		const abortController = new AbortController()
		const source: CancelTokenSource = axios.CancelToken.source()
		config.requestOptions = extend(true, {}, config) as unknown as SerializerRequestOptions
		config.cancelToken = source.token
		config.signal = abortController.signal

		// Interface must return in order or need to cancel url same request
		unique && this.clear(config.url!)

		const promise = new Promise((resolve, reject) => {
			this.axiosInstance(config)
				.then((res: any) => {
					if (!orderly) resolve(res)
					else
						this.wait(config.url!, promiseKey).then(() => {
							resolve(res)
						})
				})
				.catch((err: any) => {
					// Request cancelled
					if (axios.isCancel(err)) this.onCancel && this.onCancel(err)
					// Request error
					else reject(err)
				})
				.finally(() => {
					const index = this.waiting[config.url!].findIndex(
						el => el.promiseKey === promiseKey
					)
					index > -1 && this.waiting[config.url!].splice(index, 1)
				})
		})
		this.add(config.url!, {
			promiseKey,
			url,
			promise,
			source,
			abortController
		})
		return promise as Promise<R>
	}

	/**
	 * Drop all un-need requests
	 *
	 * @param key - the key of waiting line, usually to be the request url
	 */
	public clear(key?: string) {
		for (const url in this.waiting) {
			// no key => clean all
			if (!key || url === key) {
				const seriesList = this.waiting[url] || []

				for (const series of seriesList) {
					series.source.cancel('request canceled')
					series.abortController.abort()
				}
				this.waiting[url] = []
			}
		}
	}

	/**
	 * Waiting to resolve the series before this request
	 *
	 * @param key - the key of waiting line, usually to be the request url
	 * @param promiseKey - the unique promise key
	 * @returns - Promise<void>
	 */
	private async wait(key: string, promiseKey: symbol) {
		if (!this.orderly) return Promise.resolve()

		const seriesList = this.waiting[key] || []
		let index = seriesList.findIndex(item => item.promiseKey === promiseKey)

		while (index > 0) {
			index--
			// do not waiting self
			if (seriesList[index] && seriesList[index].promiseKey !== promiseKey) {
				try {
					await seriesList[index].promise
					// await seriesList.splice(index, 1)[0].promise
				} catch {
					console.info('The task has been dropped')
				}
				seriesList.splice(index, 1)
			}
		}
	}

	/**
	 * set series to waiting list
	 *
	 * @param key - the key of waiting line, usually to be the request url
	 * @param series - waiting object
	 */
	private add(key: string, series: Series) {
		if (!(key in this.waiting)) this.waiting[key] = []

		this.waiting[key].push(series)
	}
}

export { AxiosSerializer as default }
