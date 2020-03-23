const path = require('path')

module.exports = {
	outputDir: path.resolve(__dirname, '../backend/public'),
	devServer: {
		proxy: {
			api: {
				target: 'http://localhost:3000/'
			}
		}
	},
	transpileDependencies: ['vuetify']
}

// https://cli.vuejs.org/config/#devserver-proxy
// https://cli.vuejs.org/config/#outputdir
