import config from './config'
import * as data from './data'
import MoneyCellHeader from './components/moneyCellHeader'
import MoneyCell from './components/moneyCell'

export default {
	name: "edfx-app-proof-of-charge",
	version: "1.0.1",
	description: "edfx-app-proof-of-charge",
	meta: data.getMeta(),
	components: [{
		appName:'edfx-app-proof-of-charge', 
		name: 'MoneyCellHeader', 
		component: MoneyCellHeader
	},{
		appName:'edfx-app-proof-of-charge', 
		name: 'MoneyCell', 
		component: MoneyCell
	}],
	dependencies:['mk-aar-grid'],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "edfx-app-proof-of-charge")
	}
}