const configure = require('craftpack')
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path')

module.exports = configure({
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	entry: {
		main: path.join(__dirname, 'src', 'container.ts'),
	},
})
