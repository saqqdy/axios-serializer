[index.md - v1.0.0-beta.6](../README.md) / [Exports](../modules.md) / AxiosSerializerRequestOptions

# Interface: AxiosSerializerRequestOptions<D\>

## Type parameters

| Name | Type  |
| :--- | :---- |
| `D`  | `any` |

## Hierarchy

- `InternalAxiosRequestConfig`<`D`\>

  ↳ **`AxiosSerializerRequestOptions`**

## Table of contents

### Properties

- [adapter](AxiosSerializerRequestOptions.md#adapter)
- [auth](AxiosSerializerRequestOptions.md#auth)
- [axios-serializer](AxiosSerializerRequestOptions.md#axios-serializer)
- [baseURL](AxiosSerializerRequestOptions.md#baseurl)
- [beforeRedirect](AxiosSerializerRequestOptions.md#beforeredirect)
- [cancelToken](AxiosSerializerRequestOptions.md#canceltoken)
- [data](AxiosSerializerRequestOptions.md#data)
- [decompress](AxiosSerializerRequestOptions.md#decompress)
- [env](AxiosSerializerRequestOptions.md#env)
- [error](AxiosSerializerRequestOptions.md#error)
- [formSerializer](AxiosSerializerRequestOptions.md#formserializer)
- [headers](AxiosSerializerRequestOptions.md#headers)
- [httpAgent](AxiosSerializerRequestOptions.md#httpagent)
- [httpsAgent](AxiosSerializerRequestOptions.md#httpsagent)
- [insecureHTTPParser](AxiosSerializerRequestOptions.md#insecurehttpparser)
- [maxBodyLength](AxiosSerializerRequestOptions.md#maxbodylength)
- [maxContentLength](AxiosSerializerRequestOptions.md#maxcontentlength)
- [maxRate](AxiosSerializerRequestOptions.md#maxrate)
- [maxRedirects](AxiosSerializerRequestOptions.md#maxredirects)
- [method](AxiosSerializerRequestOptions.md#method)
- [onDownloadProgress](AxiosSerializerRequestOptions.md#ondownloadprogress)
- [onUploadProgress](AxiosSerializerRequestOptions.md#onuploadprogress)
- [params](AxiosSerializerRequestOptions.md#params)
- [paramsSerializer](AxiosSerializerRequestOptions.md#paramsserializer)
- [proxy](AxiosSerializerRequestOptions.md#proxy)
- [requestOptions](AxiosSerializerRequestOptions.md#requestoptions)
- [responseEncoding](AxiosSerializerRequestOptions.md#responseencoding)
- [responseType](AxiosSerializerRequestOptions.md#responsetype)
- [signal](AxiosSerializerRequestOptions.md#signal)
- [socketPath](AxiosSerializerRequestOptions.md#socketpath)
- [timeout](AxiosSerializerRequestOptions.md#timeout)
- [timeoutErrorMessage](AxiosSerializerRequestOptions.md#timeouterrormessage)
- [transformRequest](AxiosSerializerRequestOptions.md#transformrequest)
- [transformResponse](AxiosSerializerRequestOptions.md#transformresponse)
- [transitional](AxiosSerializerRequestOptions.md#transitional)
- [type](AxiosSerializerRequestOptions.md#type)
- [unique](AxiosSerializerRequestOptions.md#unique)
- [url](AxiosSerializerRequestOptions.md#url)
- [validateStatus](AxiosSerializerRequestOptions.md#validatestatus)
- [withCredentials](AxiosSerializerRequestOptions.md#withcredentials)
- [xsrfCookieName](AxiosSerializerRequestOptions.md#xsrfcookiename)
- [xsrfHeaderName](AxiosSerializerRequestOptions.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

#### Inherited from

InternalAxiosRequestConfig.adapter

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:319

---

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

InternalAxiosRequestConfig.auth

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:320

---

### axios-serializer

• `Optional` **axios-serializer**: `any`

#### Defined in

[src/index.ts:27](https://github.com/saqqdy/axios-serializer/blob/fb79c22/src/index.ts#L27)

---

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

InternalAxiosRequestConfig.baseURL

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:309

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

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:332

---

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Overrides

InternalAxiosRequestConfig.cancelToken

#### Defined in

[src/index.ts:30](https://github.com/saqqdy/axios-serializer/blob/fb79c22/src/index.ts#L30)

---

### data

• `Optional` **data**: `D`

#### Inherited from

InternalAxiosRequestConfig.data

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:315

---

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.decompress

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:338

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

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:342

---

### error

• `Optional` **error**: `string`

#### Defined in

[src/index.ts:32](https://github.com/saqqdy/axios-serializer/blob/fb79c22/src/index.ts#L32)

---

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

InternalAxiosRequestConfig.formSerializer

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:345

---

### headers

• **headers**: `AxiosRequestHeaders`

#### Inherited from

InternalAxiosRequestConfig.headers

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:352

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

InternalAxiosRequestConfig.httpAgent

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:334

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

InternalAxiosRequestConfig.httpsAgent

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:335

---

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.insecureHTTPParser

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:341

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:329

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxContentLength

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:327

---

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

InternalAxiosRequestConfig.maxRate

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:331

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxRedirects

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:330

---

### method

• `Optional` **method**: `string`

#### Inherited from

InternalAxiosRequestConfig.method

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:308

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

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:326

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

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:325

---

### params

• `Optional` **params**: `any`

#### Inherited from

InternalAxiosRequestConfig.params

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:313

---

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions`

#### Inherited from

InternalAxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:314

---

### proxy

• `Optional` **proxy**: `false` \| `AxiosProxyConfig`

#### Inherited from

InternalAxiosRequestConfig.proxy

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:336

---

### requestOptions

• `Optional` **requestOptions**: [`AxiosSerializerRequestOptions`](AxiosSerializerRequestOptions.md)<`any`\>

#### Defined in

[src/index.ts:29](https://github.com/saqqdy/axios-serializer/blob/fb79c22/src/index.ts#L29)

---

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

InternalAxiosRequestConfig.responseEncoding

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:322

---

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

InternalAxiosRequestConfig.responseType

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:321

---

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

InternalAxiosRequestConfig.signal

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:340

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Inherited from

InternalAxiosRequestConfig.socketPath

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:333

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

InternalAxiosRequestConfig.timeout

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:316

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

InternalAxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:317

---

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

InternalAxiosRequestConfig.transformRequest

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:310

---

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

InternalAxiosRequestConfig.transformResponse

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:311

---

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

InternalAxiosRequestConfig.transitional

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:339

---

### type

• `Optional` **type**: `string`

#### Defined in

[src/index.ts:31](https://github.com/saqqdy/axios-serializer/blob/fb79c22/src/index.ts#L31)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:28](https://github.com/saqqdy/axios-serializer/blob/fb79c22/src/index.ts#L28)

---

### url

• `Optional` **url**: `string`

#### Inherited from

InternalAxiosRequestConfig.url

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:307

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Inherited from

InternalAxiosRequestConfig.validateStatus

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:328

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.withCredentials

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:318

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

InternalAxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:323

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

InternalAxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:324
