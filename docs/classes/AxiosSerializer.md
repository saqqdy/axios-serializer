[index.md - v1.0.0-beta.1](../README.md) / [Exports](../modules.md) / AxiosSerializer

# Class: AxiosSerializer

AxiosSerializer class

## Table of contents

### Constructors

- [constructor](AxiosSerializer.md#constructor)

### Properties

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

| Name             | Type                                                              |
| :--------------- | :---------------------------------------------------------------- |
| `«destructured»` | [`AxiosSerializerConfig`](../interfaces/AxiosSerializerConfig.md) |

#### Defined in

[src/index.ts:74](https://github.com/saqqdy/axios-serializer/blob/f2cd39a/src/index.ts#L74)

## Properties

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:73](https://github.com/saqqdy/axios-serializer/blob/f2cd39a/src/index.ts#L73)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:72](https://github.com/saqqdy/axios-serializer/blob/f2cd39a/src/index.ts#L72)

---

### waiting

• **waiting**: [`AxiosSerializerObject`](../interfaces/AxiosSerializerObject.md)[] = `[]`

#### Defined in

[src/index.ts:71](https://github.com/saqqdy/axios-serializer/blob/f2cd39a/src/index.ts#L71)

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

[src/index.ts:131](https://github.com/saqqdy/axios-serializer/blob/f2cd39a/src/index.ts#L131)

---

### init

▸ **init**(`defaultOptions`): `void`

Initialization

#### Parameters

| Name             | Type                                                              |
| :--------------- | :---------------------------------------------------------------- |
| `defaultOptions` | [`AxiosSerializerConfig`](../interfaces/AxiosSerializerConfig.md) |

#### Returns

`void`

#### Defined in

[src/index.ts:85](https://github.com/saqqdy/axios-serializer/blob/f2cd39a/src/index.ts#L85)
