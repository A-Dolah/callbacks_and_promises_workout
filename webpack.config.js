const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	// entry: ["./callback.js", "./promises.js"],
	entry: './theProject.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	mode: 'development',
	watch: true,
	plugins: [new Dotenv()]
};
