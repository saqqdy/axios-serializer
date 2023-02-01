[index.md - v1.0.0-beta.3](../README.md) / [Exports](../modules.md) / AxiosSerializerConfig

# Interface: AxiosSerializerConfig<D\>

## Type parameters

| Name | Type  |
| :--- | :---- |
| `D`  | `any` |

## Hierarchy

- `InternalAxiosRequestConfig`<`D`\>

  ↳ **`AxiosSerializerConfig`**

## Table of contents

### Properties

- [adapter](AxiosSerializerConfig.md#adapter)
- [auth](AxiosSerializerConfig.md#auth)
- [baseURL](AxiosSerializerConfig.md#baseurl)
- [beforeRedirect](AxiosSerializerConfig.md#beforeredirect)
- [cancelToken](AxiosSerializerConfig.md#canceltoken)
- [data](AxiosSerializerConfig.md#data)
- [decompress](AxiosSerializerConfig.md#decompress)
- [env](AxiosSerializerConfig.md#env)
- [formSerializer](AxiosSerializerConfig.md#formserializer)
- [headers](AxiosSerializerConfig.md#headers)
- [httpAgent](AxiosSerializerConfig.md#httpagent)
- [httpsAgent](AxiosSerializerConfig.md#httpsagent)
- [insecureHTTPParser](AxiosSerializerConfig.md#insecurehttpparser)
- [maxBodyLength](AxiosSerializerConfig.md#maxbodylength)
- [maxContentLength](AxiosSerializerConfig.md#maxcontentlength)
- [maxRate](AxiosSerializerConfig.md#maxrate)
- [maxRedirects](AxiosSerializerConfig.md#maxredirects)
- [method](AxiosSerializerConfig.md#method)
- [onDownloadProgress](AxiosSerializerConfig.md#ondownloadprogress)
- [onUploadProgress](AxiosSerializerConfig.md#onuploadprogress)
- [params](AxiosSerializerConfig.md#params)
- [paramsSerializer](AxiosSerializerConfig.md#paramsserializer)
- [proxy](AxiosSerializerConfig.md#proxy)
- [responseEncoding](AxiosSerializerConfig.md#responseencoding)
- [responseType](AxiosSerializerConfig.md#responsetype)
- [signal](AxiosSerializerConfig.md#signal)
- [socketPath](AxiosSerializerConfig.md#socketpath)
- [timeout](AxiosSerializerConfig.md#timeout)
- [timeoutErrorMessage](AxiosSerializerConfig.md#timeouterrormessage)
- [transformRequest](AxiosSerializerConfig.md#transformrequest)
- [transformResponse](AxiosSerializerConfig.md#transformresponse)
- [transitional](AxiosSerializerConfig.md#transitional)
- [unique](AxiosSerializerConfig.md#unique)
- [url](AxiosSerializerConfig.md#url)
- [validateStatus](AxiosSerializerConfig.md#validatestatus)
- [withCredentials](AxiosSerializerConfig.md#withcredentials)
- [xsrfCookieName](AxiosSerializerConfig.md#xsrfcookiename)
- [xsrfHeaderName](AxiosSerializerConfig.md#xsrfheadername)

### Methods

- [onCancel](AxiosSerializerConfig.md#oncancel)
- [onError](AxiosSerializerConfig.md#onerror)
- [onRequest](AxiosSerializerConfig.md#onrequest)
- [onRequestError](AxiosSerializerConfig.md#onrequesterror)
- [onResponse](AxiosSerializerConfig.md#onresponse)
- [onResponseError](AxiosSerializerConfig.md#onresponseerror)
- [setHeaders](AxiosSerializerConfig.md#setheaders)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

#### Inherited from

InternalAxiosRequestConfig.adapter

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:315

---

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

InternalAxiosRequestConfig.auth

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:316

---

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

InternalAxiosRequestConfig.baseURL

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:305

---

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: `Record`<`string`, `any`\>, `responseDetails`: { `headers`: `Record`<`string`, `string`\> }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name                      | Type                          |
| :------------------------ | :---------------------------- |
| `options`                 | `Record`<`string`, `any`\>    |
| `responseDetails`         | `Object`                      |
| `responseDetails.headers` | `Record`<`string`, `string`\> |

##### Returns

`void`

#### Inherited from

InternalAxiosRequestConfig.beforeRedirect

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:328

---

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

InternalAxiosRequestConfig.cancelToken

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:333

---

### data

• `Optional` **data**: `D`

#### Inherited from

InternalAxiosRequestConfig.data

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:311

---

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.decompress

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:334

---

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name        | Type                             |
| :---------- | :------------------------------- |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

InternalAxiosRequestConfig.env

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:338

---

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

InternalAxiosRequestConfig.formSerializer

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:341

---

### headers

• **headers**: `AxiosRequestHeaders`

#### Inherited from

InternalAxiosRequestConfig.headers

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:348

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

InternalAxiosRequestConfig.httpAgent

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:330

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

InternalAxiosRequestConfig.httpsAgent

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:331

---

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.insecureHTTPParser

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:337

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:325

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxContentLength

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:323

---

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

InternalAxiosRequestConfig.maxRate

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:327

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxRedirects

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:326

---

### method

• `Optional` **method**: `string`

#### Inherited from

InternalAxiosRequestConfig.method

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:304

---

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name            | Type                 |
| :-------------- | :------------------- |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

InternalAxiosRequestConfig.onDownloadProgress

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:322

---

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name            | Type                 |
| :-------------- | :------------------- |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

InternalAxiosRequestConfig.onUploadProgress

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:321

---

### params

• `Optional` **params**: `any`

#### Inherited from

InternalAxiosRequestConfig.params

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:309

---

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions`

#### Inherited from

InternalAxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:310

---

### proxy

• `Optional` **proxy**: `false` \| `AxiosProxyConfig`

#### Inherited from

InternalAxiosRequestConfig.proxy

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:332

---

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

InternalAxiosRequestConfig.responseEncoding

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:318

---

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

InternalAxiosRequestConfig.responseType

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:317

---

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

InternalAxiosRequestConfig.signal

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:336

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Inherited from

InternalAxiosRequestConfig.socketPath

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:329

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

InternalAxiosRequestConfig.timeout

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:312

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

InternalAxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:313

---

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

InternalAxiosRequestConfig.transformRequest

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:306

---

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

InternalAxiosRequestConfig.transformResponse

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:307

---

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

InternalAxiosRequestConfig.transitional

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:335

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L36)

---

### url

• `Optional` **url**: `string`

#### Inherited from

InternalAxiosRequestConfig.url

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:303

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Inherited from

InternalAxiosRequestConfig.validateStatus

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:324

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.withCredentials

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:314

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

InternalAxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:319

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

InternalAxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:320

## Methods

### onCancel

▸ `Optional` **onCancel**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:49](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L49)

---

### onError

▸ `Optional` **onError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:48](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L48)

---

### onRequest

▸ `Optional` **onRequest**(`config`, `requestOptions`): `InternalAxiosRequestConfig`<`any`\> \| `Promise`<`InternalAxiosRequestConfig`<`any`\>\>

#### Parameters

| Name             | Type                                                                        |
| :--------------- | :-------------------------------------------------------------------------- |
| `config`         | `InternalAxiosRequestConfig`<`any`\>                                        |
| `requestOptions` | [`AxiosSerializerRequestOptions`](AxiosSerializerRequestOptions.md)<`any`\> |

#### Returns

`InternalAxiosRequestConfig`<`any`\> \| `Promise`<`InternalAxiosRequestConfig`<`any`\>\>

#### Defined in

[src/index.ts:38](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L38)

---

### onRequestError

▸ `Optional` **onRequestError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:42](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L42)

---

### onResponse

▸ `Optional` **onResponse**(`res`, `requestOptions`): `AxiosResponse`<`any`, `any`\> \| `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Parameters

| Name             | Type                                                                        |
| :--------------- | :-------------------------------------------------------------------------- |
| `res`            | `AxiosResponse`<`any`, `any`\>                                              |
| `requestOptions` | [`AxiosSerializerRequestOptions`](AxiosSerializerRequestOptions.md)<`any`\> |

#### Returns

`AxiosResponse`<`any`, `any`\> \| `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[src/index.ts:43](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L43)

---

### onResponseError

▸ `Optional` **onResponseError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:47](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L47)

---

### setHeaders

▸ `Optional` **setHeaders**(`instance`): `void`

#### Parameters

| Name       | Type            |
| :--------- | :-------------- |
| `instance` | `AxiosInstance` |

#### Returns

`void`

#### Defined in

[src/index.ts:37](https://github.com/saqqdy/axios-serializer/blob/ac75641/src/index.ts#L37)
