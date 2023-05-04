import { join, sep } from 'node:path'
import type { RollupOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import cleanup from 'rollup-plugin-cleanup'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import alias, { type ResolverObject } from '@rollup/plugin-alias'
import injectCode from 'rollup-plugin-inject-code'
import filesize from 'rollup-plugin-filesize'
import { visualizer } from 'rollup-plugin-visualizer'
import pkg from '../package.json' assert { type: 'json' }
import { banner, extensions, reporter } from './config'

const nodeResolver = nodeResolve({
	// Use the `package.json` "browser" field
	browser: false,
	extensions,
	preferBuiltins: true,
	exportConditions: ['node'],
	moduleDirectories: ['node_modules']
})
const iifeGlobals = {
	axios: 'axios'
}

const options: RollupOptions = {
	plugins: [
		alias({
			customResolver: nodeResolver as ResolverObject,
			entries: [
				// {
				//     find: /^#lib(.+)$/,
				//     replacement: resolve(__dirname, '..', 'src', '$1.mjs')
				// }
			]
		}),
		nodeResolver,
		commonjs({
			sourceMap: false,
			exclude: ['core-js', 'axios']
		}),
		json(),
		babel({
			babelHelpers: 'bundled',
			extensions,
			exclude: [/node_modules[\\/]core-js/]
		}),
		typescript({
			filterRoot: join(process.cwd(), 'src'),
			compilerOptions: {
				declaration: false,
				sourceMap: true
			}
		}),
		cleanup({
			comments: 'all'
		}),
		filesize({ reporter }),
		visualizer()
	]
}

function externalCjsEsm(id: string) {
	return ['axios', 'js-cool', 'tslib', 'core-js', '@babel/runtime'].some(
		k => id === k || new RegExp('^' + k + sep).test(id)
	)
}

function externalCjsEs5(id: string) {
	return ['axios', 'tslib', 'core-js', '@babel/runtime'].some(
		k => id === k || new RegExp('^' + k + sep).test(id)
	)
}

function externalUmd(id: string) {
	return ['axios'].some(k => id === k || new RegExp('^' + k + sep).test(id))
}

const distDir = (path: string) =>
	process.env.BABEL_ENV === 'es5' ? path.replace('index', 'es5/index') : path

export default (process.env.BABEL_ENV !== 'es5'
	? [
			{
				input: 'src/index.ts',
				output: [
					{
						file: distDir(pkg.main),
						exports: 'auto',
						format: 'cjs'
					},
					{
						file: distDir(pkg.module),
						exports: 'auto',
						format: 'es'
					}
				],
				external: externalCjsEsm,
				...options
			}
	  ]
	: [
			{
				input: pkg.module,
				output: [
					{
						file: distDir(pkg.main),
						exports: 'auto',
						format: 'cjs'
					},
					{
						file: distDir(pkg.module),
						exports: 'auto',
						format: 'es'
					}
				],
				external: externalCjsEs5,
				...options
			}
	  ]
).concat([
	{
		// input: 'src/index.ts',
		input: distDir(pkg.module),
		output: [
			{
				file: distDir('dist/index.iife.js'),
				format: 'iife',
				name: 'AxiosSerializer',
				extend: true,
				globals: iifeGlobals,
				sourcemap: true,
				banner,
				plugins: [
					injectCode({
						path: './node_modules/axios/dist/axios.min.js'
					})
				]
			},
			{
				file: distDir(pkg.unpkg),
				format: 'iife',
				name: 'AxiosSerializer',
				extend: true,
				globals: iifeGlobals,
				sourcemap: true,
				banner,
				plugins: [
					terser(),
					injectCode({
						path: './node_modules/axios/dist/axios.min.js'
					})
				]
			}
		],
		external: externalUmd,
		plugins: [
			nodeResolver,
			commonjs({
				sourceMap: false,
				exclude: ['core-js', 'axios']
			}),
			json(),
			cleanup({
				comments: 'all'
			}),
			filesize({ reporter }),
			visualizer()
		]
	}
])
