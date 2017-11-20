import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-home-list",
	version: "1.0.3",
	description: "edfx-app-home-list",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-home-list")
	}
}