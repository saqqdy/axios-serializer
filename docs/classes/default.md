[index.md - v1.0.0-beta.7](../README.md) / [Exports](../modules.md) / default

# Class: default

AxiosSerializer class

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [axiosInstance](default.md#axiosinstance)
- [onCancel](default.md#oncancel)
- [unique](default.md#unique)
- [waiting](default.md#waiting)

### Methods

- [create](default.md#create)
- [init](default.md#init)

## Constructors

### constructor

• **new default**(`«destructured»`)

#### Parameters

| Name             | Type                                                                      |
| :--------------- | :------------------------------------------------------------------------ |
| `«destructured»` | [`AxiosSerializerConfig`](../interfaces/AxiosSerializerConfig.md)<`any`\> |

#### Defined in

[src/index.ts:77](https://github.com/saqqdy/axios-serializer/blob/1c86e21/src/index.ts#L77)

## Properties

### axiosInstance

• **axiosInstance**: `AxiosInstance`

#### Defined in

[src/index.ts:73](https://github.com/saqqdy/axios-serializer/blob/1c86e21/src/index.ts#L73)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:76](https://github.com/saqqdy/axios-serializer/blob/1c86e21/src/index.ts#L76)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:75](https://github.com/saqqdy/axios-serializer/blob/1c86e21/src/index.ts#L75)

---

### waiting

• **waiting**: [`AxiosSerializerObject`](../interfaces/AxiosSerializerObject.md)[] = `[]`

#### Defined in

[src/index.ts:74](https://github.com/saqqdy/axios-serializer/blob/1c86e21/src/index.ts#L74)

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

[src/index.ts:142](https://github.com/saqqdy/axios-serializer/blob/1c86e21/src/index.ts#L142)

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

[src/index.ts:88](https://github.com/saqqdy/axios-serializer/blob/1c86e21/src/index.ts#L88)
