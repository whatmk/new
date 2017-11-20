import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-login",
	version: "1.0.4",
	description: "edfx-app-login",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-login")
	}
}