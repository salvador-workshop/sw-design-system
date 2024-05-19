import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import mdx from '@mdx-js/rollup';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './src/index.js',
    output: [
        {
            file: 'dist/sw-design-system.esm.js',
            format: 'esm'
        },
        {
            file: 'dist/sw-design-system.cjs.js',
            format: 'cjs'
        },
    ],
    plugins: [
        resolve({
            extensions: ['.mjs', '.js', '.json', '.node', '.jsx', '.md', '.mdx'],
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        mdx(),
        json(),
        commonjs(),
    ],
    external: ['react', 'react-dom'],
};
