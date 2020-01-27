import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/magic-address.js',
  output: [
    {
      file: './dist/magic-address.min.js',
      format: 'umd',
      name: 'MagicAddress',
      sourcemap: true,
      plugins: [
        terser()
      ]
    }
  ]
}
