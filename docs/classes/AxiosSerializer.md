[index.md - v1.0.0-beta.4](../README.md) / [Exports](../modules.md) / AxiosSerializer

# Class: AxiosSerializer

AxiosSerializer class

## Table of contents

### Constructors

- [constructor](AxiosSerializer.md#constructor)

### Properties

- [axiosInstance](AxiosSerializer.md#axiosinstance)
- [onCancel](AxiosSerializer.md#oncancel)
- [unique](AxiosSerializer.md#unique)
- [waiting](AxiosSerializer.md#waiting)

### Methods

- [create](AxiosSerializer.md#create)
- [init](AxiosSerializer.md#init)

## Constructors

### constructor

• **new AxiosSerializer**(`«destructured»`)

#### Parameters

| Name             | Type                                                                      |
| :--------------- | :------------------------------------------------------------------------ |
| `«destructured»` | [`AxiosSerializerConfig`](../interfaces/AxiosSerializerConfig.md)<`any`\> |

#### Defined in

[src/index.ts:76](https://github.com/saqqdy/axios-serializer/blob/188f473/src/index.ts#L76)

## Properties

### axiosInstance

• **axiosInstance**: `AxiosInstance`

#### Defined in

[src/index.ts:72](https://github.com/saqqdy/axios-serializer/blob/188f473/src/index.ts#L72)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:75](https://github.com/saqqdy/axios-serializer/blob/188f473/src/index.ts#L75)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:74](https://github.com/saqqdy/axios-serializer/blob/188f473/src/index.ts#L74)

---

### waiting

• **waiting**: [`AxiosSerializerObject`](../interfaces/AxiosSerializerObject.md)[] = `[]`

#### Defined in

[src/index.ts:73](https://github.com/saqqdy/axios-serializer/blob/188f473/src/index.ts#L73)

## Methods

### create

▸ **create**(`options`): `Promise`<`any`\>

Create request

#### Parameters

| Name      | Type                                                                                      |
| :-------- | :---------------------------------------------------------------------------------------- |
| `options` | [`AxiosSerializerRequestOptions`](../interfaces/AxiosSerializerRequestOptions.md)<`any`\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/index.ts:141](https://github.com/saqqdy/axios-serializer/blob/188f473/src/index.ts#L141)

---

### init

▸ **init**(`defaultOptions`): `void`

Initialization

#### Parameters

| Name             | Type                                                                      |
| :--------------- | :------------------------------------------------------------------------ |
| `defaultOptions` | [`AxiosSerializerConfig`](../interfaces/AxiosSerializerConfig.md)<`any`\> |

#### Returns

`void`

#### Defined in

[src/index.ts:87](https://github.com/saqqdy/axios-serializer/blob/188f473/src/index.ts#L87)
