import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-card-assets",
	version: "1.0.0",
	description: "edfx-app-card-assets",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-card-assets")
	}
}