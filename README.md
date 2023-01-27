<div style="text-align: center;" align="center">

# axios-serializer

A serializer for axios

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

## **Full API docs： [API Docs](./docs/modules.md)**

</div>

## Installing

```bash
# use pnpm
$ pnpm install -D axios-serializer

# use npm
$ npm install -D axios-serializer

# use yarn
$ yarn add -D axios-serializer
```

## Usage

1. use `axios-serializer` in async mode
   s

```js
import { axiosSerializer } from 'axios-serializer'

axiosSerializer().then(info => {
  console.log('The package manager is: ', info) // pnpm | null
})
```

2. use `axios-serializer` in sync mode

```js
import { axiosSerializerSync } from 'axios-serializer'

console.log('The package manager is: ', axiosSerializerSync()) // pnpm | null
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
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_axios-serializer
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_axios-serializer
