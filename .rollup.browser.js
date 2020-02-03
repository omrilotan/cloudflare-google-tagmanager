const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'browser/test.js',
  output: {
    file: 'browser/output.js',
    format: 'iife'
  },
  plugins: [
    commonjs(),
  ]
};
