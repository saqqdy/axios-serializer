import type {
	AxiosInstance,
	AxiosResponse,
	CancelToken,
	CancelTokenSource,
	InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import extend from 'js-cool/lib/extend'
import getRandomStr from 'js-cool/lib/getRandomStr'

export const namespace = 'axios-serializer'

export interface AxiosSerializerObject {
	promiseKey: string
	url: string
	promise: Promise<any>
	source: CancelTokenSource
}

export interface AxiosSerializerCurrentStateType {
	lastRequestTime: number
	retryCount: number
}

export interface AxiosSerializerRequestOptions<D = any> extends InternalAxiosRequestConfig<D> {
	[namespace]?: any
	unique?: boolean
	requestOptions?: AxiosSerializerRequestOptions
	cancelToken?: CancelToken
	type?: string
	error?: string
}

export interface AxiosSerializerConfig<D = any> extends InternalAxiosRequestConfig<D> {
	unique?: boolean
	setHeaders?(instance: AxiosInstance): void
	onRequest?(
		config: InternalAxiosRequestConfig,
		requestOptions: AxiosSerializerRequestOptions
	): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
	onRequestError?(error: any): void
	onResponse?(
		res: AxiosResponse<any>,
		requestOptions: AxiosSerializerRequestOptions
	): AxiosResponse<any> | Promise<AxiosResponse<any>>
	onResponseError?(error: any): void
	onError?(error: any): void
	onCancel?(error: any): void
}

/**
 * the config for retry when initialize and return
 *
 * @param  config - AxiosSerializerRequestOptions
 * @return currentState
 */
function getCurrentState(config: AxiosSerializerRequestOptions): AxiosSerializerCurrentStateType {
	const currentState = config[namespace] || {}
	currentState.retryCount = currentState.retryCount || 0
	config[namespace] = currentState
	return currentState
}

/**
 * AxiosSerializer class
 *
 * @return Promise
 */
export class AxiosSerializer {
	axiosInstance: AxiosInstance = null as unknown as AxiosInstance
	waiting: Array<AxiosSerializerObject> = [] // Request Queue
	unique: boolean // Whether to cancel the previous similar requests, default: false
	onCancel // Callback when request is cancelled
	constructor({ unique, onCancel, ...defaultOptions }: AxiosSerializerConfig) {
		this.unique = unique ?? false
		this.onCancel = onCancel ?? null
		// Initialization method
		this.init(defaultOptions)
		return this
	}

	/**
	 * Initialization
	 */
	public init(defaultOptions: AxiosSerializerConfig): void {
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
	public create(options: AxiosSerializerRequestOptions): Promise<any> {
		const { unique = this.unique, url = '' } = options
		const promiseKey = getRandomStr(6) + '_' + Date.now()
		const source: CancelTokenSource = axios.CancelToken.source()
		options.requestOptions = extend(
			true,
			{},
			options
		) as unknown as AxiosSerializerRequestOptions
		options.cancelToken = source.token
		// eslint-disable-next-line no-async-promise-executor
		const promise = new Promise(async (resolve, reject) => {
			// Interface must return in order or need to cancel url same request
			if (unique) {
				let len = this.waiting.length
				while (len > 0) {
					len--
					if (this.waiting[len].url === url) {
						if (unique) this.waiting.splice(len, 1)[0].source.cancel('request canceled')
						else {
							try {
								await this.waiting[len]
								// await this.waiting.splice(len, 1)[0].promise
							} catch {
								this.waiting.splice(len, 1)
								console.info('the task has been dropped')
							}
						}
					}
				}
			}
			// running
			this.axiosInstance(options)
				.then((res: any) => {
					// Request success
					resolve(res)
				})
				.catch((err: any) => {
					// Request cancelled
					if (axios.isCancel(err)) this.onCancel && this.onCancel(err)
					// Request error
					else reject(err)
				})
				.finally(() => {
					const index = this.waiting.findIndex((el: any) => el.promiseKey === promiseKey)
					index > -1 && this.waiting.splice(index, 1)
				})
		})
		this.waiting.push({
			promiseKey,
			url,
			promise,
			source
		})
		return promise
	}
}

export { AxiosSerializer as default }
