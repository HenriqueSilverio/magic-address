import { terser } from 'rollup-plugin-terser'
import { name, version } from './package.json'

export default {
  input: 'src/magic-address.js',
  output: [
    {
      file: './dist/magic-address.min.js',
      format: 'umd',
      name: 'MagicAddress',
      banner: `/*! ${name} - ${version} */`,
      sourcemap: true,
      plugins: [
        terser()
      ]
    }
  ]
}
