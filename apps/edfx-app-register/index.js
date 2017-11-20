import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-register",
	version: "1.0.6",
	description: "edfx-app-register",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-register")
	}
}