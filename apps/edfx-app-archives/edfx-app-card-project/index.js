import config from './config'
import * as data from './data'

export default {
	name: "edfx-app-card-project",
	version: "1.0.0",
	description: "edfx-app-card-project",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-card-project")
	}
}