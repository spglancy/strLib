import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './index.js',
    plugins: [terser()],
    output: {
      file: 'umd/strLibModule.js',
      format: 'umd',
      name: 'strLibModule',
      esModule: false,
    },
  },
  {
    input: './index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm',
    },
  },
];
