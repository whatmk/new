import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-visit-widget",
	version: "1.0.0",
	description: "edfx-app-visit-widget",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-visit-widget")
	}
}