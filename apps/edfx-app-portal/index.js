import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-portal",
	version: "1.0.40",
	description: "edfx-app-portal",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-portal")
	}
}