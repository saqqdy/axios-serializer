[index.md - v1.0.0-beta.5](../README.md) / [Exports](../modules.md) / AxiosSerializer

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

[src/index.ts:75](https://github.com/saqqdy/axios-serializer/blob/2b6c28e/src/index.ts#L75)

## Properties

### axiosInstance

• **axiosInstance**: `AxiosInstance`

#### Defined in

[src/index.ts:71](https://github.com/saqqdy/axios-serializer/blob/2b6c28e/src/index.ts#L71)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:74](https://github.com/saqqdy/axios-serializer/blob/2b6c28e/src/index.ts#L74)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:73](https://github.com/saqqdy/axios-serializer/blob/2b6c28e/src/index.ts#L73)

---

### waiting

• **waiting**: [`AxiosSerializerObject`](../interfaces/AxiosSerializerObject.md)[] = `[]`

#### Defined in

[src/index.ts:72](https://github.com/saqqdy/axios-serializer/blob/2b6c28e/src/index.ts#L72)

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

[src/index.ts:140](https://github.com/saqqdy/axios-serializer/blob/2b6c28e/src/index.ts#L140)

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

[src/index.ts:86](https://github.com/saqqdy/axios-serializer/blob/2b6c28e/src/index.ts#L86)
