[index.md - v1.0.0-beta.2](../README.md) / [Exports](../modules.md) / AxiosSerializerConfig

# Interface: AxiosSerializerConfig

## Table of contents

### Properties

- [unique](AxiosSerializerConfig.md#unique)

### Methods

- [onCancel](AxiosSerializerConfig.md#oncancel)
- [onError](AxiosSerializerConfig.md#onerror)
- [onRequest](AxiosSerializerConfig.md#onrequest)
- [onRequestError](AxiosSerializerConfig.md#onrequesterror)
- [onResponse](AxiosSerializerConfig.md#onresponse)
- [onResponseError](AxiosSerializerConfig.md#onresponseerror)
- [setHeaders](AxiosSerializerConfig.md#setheaders)

## Properties

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L36)

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

[src/index.ts:49](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L49)

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

[src/index.ts:48](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L48)

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

[src/index.ts:38](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L38)

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

[src/index.ts:42](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L42)

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

[src/index.ts:43](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L43)

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

[src/index.ts:47](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L47)

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

[src/index.ts:37](https://github.com/saqqdy/axios-serializer/blob/0bfaf47/src/index.ts#L37)
