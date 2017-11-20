import webapi from './webapi'
import logo from './img/logo.png'

var _options = {
	webapi,
	goLogin:{
		appName: 'edfx-app-login',
		appParams: {}
	},
	logo: logo
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config