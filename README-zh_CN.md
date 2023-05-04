<div style="text-align: center;" align="center">

# axios-serializer

axios-serializer 是一款企业级项目`axios`集成方案，采用 typescript 开发的 axios 扩展，集成了接口并发控制（可取消请求）功能

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

## **[API 文档](./docs/modules.md)** • **[更新日志](./CHANGELOG.md)**

## **使用其他语言阅读：[English](./README.md) | 简体中文**

</div>

## 安装

> `axios-serializer`自带了最新版的 axios，可以不用安装`axios`包

```bash
# 使用pnpm
$ pnpm install axios-serializer

# 使用npm
$ npm install axios-serializer --save

# 使用yarn
$ yarn add axios-serializer
```

## 使用

### 常规用法

```js
// {app_root}/src/plugins/axios.js
import { getCookie, setCookie } from 'js-cool'
import AxiosSerializer from 'axios-serializer'

/**
 * 设置请求头
 *
 * @param {object} instance AxiosInstance
 */
function setHeaders(instance) {
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}
/**
 * 请求拦截器
 *
 * @param {object} config AxiosRequestConfig
 * @param {object} options 请求参数AxiosSerializerRequestOptions
 * @returns AxiosRequestConfig
 */
function onRequest(config, options = {}) {
  // some codes
  return config
}
/**
 * 请求错误时执行
 *
 * @param {object} err Error
 */
function onRequestError(err) {
  console.error(err)
}
/**
 * 响应拦截器
 *
 * @param {object} res AxiosResponse<any>
 * @param {object} options 请求参数AxiosSerializerRequestOptions
 * @returns Promise<unknown>
 */
function onResponse(res, options = {}) {
  if (res.data.success) return res.data
  return Promise.reject(res.data)
}
/**
 * 响应错误时执行
 *
 * @param {object} err Error
 */
function onResponseError(err) {
  console.error(err)
}
/**
 * 请求错误或响应错误都执行
 *
 * @param {object} err Error
 */
function onError(err) {
  console.error(err)
}
/**
 * 请求取消
 *
 * @param {object} err Error
 */
function onCancel(err) {
  console.error(err.message)
}

// 实例化
const axiosSerializer = new AxiosSerializer({
  unique: true, // 是否取消前面的相似请求，默认：false
  setHeaders, // 设置请求头的方法
  onRequest, // 请求拦截器
  onRequestError, // 请求错误时执行
  onResponse, // 响应拦截器
  onResponseError, // 响应错误时执行
  onError, // 请求错误或响应错误都执行
  onCancel // 请求取消时的回调
})

export default options => {
  // 这里设置 unique 和 orderly 优先级高于实例化时候的配置
  options.unique = options.unique ?? false
  // 这里的unique优先级更高
  return axiosSerializer.create(options)
}
```

### 在 vue2.x 里面使用

有时候我们需要在`onRequest`或`onResponse`里面使用`this`（vue 实例），可以这样写

```js
import AxiosSerializer from 'axios-serializer'

let axiosSerializer = null
// 请求拦截器
function onRequest(config, options = {}) {
  // this => vueInstance
  return config
}
// 响应拦截器
function onResponse(res, options = {}) {
  // 隐藏loading动画
  if (this instanceof Vue) {
    this.$loader.hide()
  }
  if (res.data.success) return res.data
  return Promise.reject(res.data)
}

export default options => {
  // 只需要初始化一次
  if (!axiosSerializer)
    axiosSerializer = new AxiosSerializer({
      onRequest: onRequest.bind(this),
      onResponse: onResponse.bind(this)
    })

  // 显示loading动画
  if (this instanceof Vue) {
    this.$loader.show()
  }
  return axiosSerializer.create(options)
}
```

### 使用 unpkg CDN

```html
<!-- 现代浏览器-->
<script src="https://unpkg.com/axios-serializer@1.0.0/dist/index.min.js"></script>

<!-- 兼容IE11 -->
<script src="https://unpkg.com/axios-serializer@1.0.0/dist/es5/index.min.js"></script>
```

## 问题和支持

Please open an issue [here](https://github.com/saqqdy/axios-serializer/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/axios-serializer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/axios-serializer
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/axios-serializer/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/axios-serializer&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/axios-serializer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/axios-serializer?branch=master
[download-image]: https://img.shields.io/npm/dm/axios-serializer.svg?style=flat-square
[download-url]: https://npmjs.org/package/axios-serializer
[gzip-image]: http://img.badgesize.io/https://unpkg.com/axios-serializer/dist/index.mjs?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/axios-serializer/dist/index.mjs?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_axios-serializer
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_axios-serializer
