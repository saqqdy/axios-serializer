<div style="text-align: center;" align="center">

# axios-serializer

A serializer for axios

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

### **[Documentation](https://www.saqqdy.com/axios-serializer)** • **[Change Log](./CHANGELOG.md)**

**Read this in other languages: English | [简体中文](./README-zh_CN.md)**

</div>

## Installing

> `axios-serializer` comes with the latest version of axios, so you can install it without the `axios`

```bash
# use pnpm
$ pnpm install axios-serializer

# use npm
$ npm install axios-serializer --save

# use yarn
$ yarn add axios-serializer
```

## Usage

### General use

```js
// {app_root}/src/plugins/axios.js
import { getCookie, setCookie } from 'js-cool'
import AxiosSerializer from 'axios-serializer'

/**
 * Set the request header
 *
 * @param {object} instance AxiosInstance
 */
function setHeaders(instance) {
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}
/**
 * Request Interceptor
 *
 * @param {object} config AxiosRequestConfig
 * @param {object} options request options AxiosSerializerRequestOptions
 * @returns AxiosRequestConfig
 */
function onRequest(config, options = {}) {
  // some codes
  return config
}
/**
 * Execute on request error
 *
 * @param {object} err Error
 */
function onRequestError(err) {
  console.error(err)
}
/**
 * Response Interceptor
 *
 * @param {object} res AxiosResponse<any>
 * @param {object} options request options AxiosSerializerRequestOptions
 * @returns Promise<unknown>
 */
function onResponse(res, options = {}) {
  if (res.data.success) return res.data
  return Promise.reject(res.data)
}
/**
 * Execute in response error
 *
 * @param {object} err Error
 */
function onResponseError(err) {
  console.error(err)
}
/**
 * Execute on request error & response error
 *
 * @param {object} err Error
 */
function onError(err) {
  console.error(err)
}
/**
 * Request Cancelled
 *
 * @param {object} err Error
 */
function onCancel(err) {
  console.error(err.message)
}

// Instantiation
const axiosSerializer = new AxiosSerializer({
  unique: true, // Whether to cancel the previous similar requests, default: false
  setHeaders, // function for setting request headers
  onRequest, // Request Interceptor
  onRequestError, // Execute on request error
  onResponse, // Response Interceptor
  onResponseError, // Execute on response error
  onError, // Execute on request error & response error
  onCancel // Callback when request is cancelled
})

export default options => {
  // Here set the unique and orderly priority higher than the instantiation configuration
  options.unique = options.unique ?? false
  // Here the unique has a higher priority
  return axiosSerializer.create(options)
}
```

### Using with `vue2.0`

Sometimes we need to use `this` (vue instance) inside `onRequest` or `onResponse`, we can use it like this

```js
import AxiosSerializer from 'axios-serializer'

let axiosSerializer = null
// Request Interceptor
function onRequest(config, options = {}) {
  // this => vueInstance
  return config
}
// Response Interceptor
function onResponse(res, options = {}) {
  // hide loading
  if (this instanceof Vue) {
    this.$loader.hide()
  }
  if (res.data.success) return res.data
  return Promise.reject(res.data)
}

export default options => {
  // Only need to initialize once
  if (!axiosSerializer)
    axiosSerializer = new AxiosSerializer({
      onRequest: onRequest.bind(this),
      onResponse: onResponse.bind(this)
    })

  // show loading
  if (this instanceof Vue) {
    this.$loader.show()
  }
  return axiosSerializer.create(options)
}
```

### Using unpkg CDN

```html
<script src="https://unpkg.com/axios-serializer@1.1.0/dist/index.global.prod.js"></script>
```

## Support & Issues

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
[gzip-image]: http://img.badgesize.io/https://unpkg.com/axios-serializer/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/axios-serializer/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_axios-serializer
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_axios-serializer
