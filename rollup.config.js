import { readFileSync } from 'fs';
// import { terser } from 'rollup-plugin-terser'

var intro = readFileSync('src/aby.js', 'utf-8').split('\n').slice(3, 7).join('\n')
console.log(intro)


export default {
    input: './src/aby.js',
    output: [
      {
        format: 'cjs',
        file: 'dist/aby.cjs.js',
        sourcemap: true
      },
      {
        format: 'esm',
        file: 'dist/aby.esm.js',
        sourcemap: true
      },
      // {
      //   file: 'dist/aby.iife.js',
      //   format: 'iife'
      // },
      // {
      //   file: 'dist/aby.iife.min.js',
      //   format: 'iife',
      //   // plugins: [terser()]
      // }
    ],
    plugins: [
        // sourceMaps()
        // terser({ module: true })
    ]
  }