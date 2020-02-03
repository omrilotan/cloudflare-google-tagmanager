import {uglify} from 'rollup-plugin-uglify';

export default {
	input: 'src/index.js',
	output: {
		dir: 'dist',
		format: 'iife',
		strict: false
	},
	plugins: [uglify()]
};
