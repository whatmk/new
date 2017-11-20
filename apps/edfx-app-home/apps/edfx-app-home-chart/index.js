import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-home-chart",
	version: "1.0.0",
	description: "edfx-app-home-chart",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-home-chart")
	}
}