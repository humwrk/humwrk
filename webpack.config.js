const configure = require('craftpack')
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = configure({
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	entry: {
		gateway: path.join(__dirname, 'src', 'gateway', 'service.ts'),
		projects: path.join(__dirname, 'src', 'projects', 'service.ts'),
	},
	plugins: [new NodemonPlugin()],
})
