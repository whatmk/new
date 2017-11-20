import logo from './img/portalLogo.png'
import webapi from './webapi'

var _options = {
	webapi,
	goAfterLogout: {
		appName: 'edfx-app-login',
		appParams: {}
	},
	menu: [{
		key: '1',
		name: 'about',
		appName: 'edfx-app-portal-about',
		icon: 'question-circle',
		isDefault: true
	}, {
		key: '2',
		name: 'apps',
		icon: 'appstore',
		isExpand:true,
		children: [{
			key: '201',
			name: 'app1',
			appName: 'edfx-app-portal-app1'
		}, {
			key: '202',
			name: 'app2',
			appName: 'edfx-app-portal-app2'
		}]
	}],
	logo
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config
