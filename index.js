import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import app_scm_voucher_card from './apps/app-scm-voucher-card/index.js'
import app_scm_voucher_list from './apps/app-scm-voucher-list/index.js'
import edfx_app_card_assets from './apps/edfx-app-archives/edfx-app-card-assets/index.js'
import edfx_app_card_customer from './apps/edfx-app-archives/edfx-app-card-customer/index.js'
import edfx_app_card_department from './apps/edfx-app-archives/edfx-app-card-department/index.js'
import edfx_app_card_inventory from './apps/edfx-app-archives/edfx-app-card-inventory/index.js'
import edfx_app_card_person from './apps/edfx-app-archives/edfx-app-card-person/index.js'
import edfx_app_card_project from './apps/edfx-app-archives/edfx-app-card-project/index.js'
import edfx_app_card_unit from './apps/edfx-app-archives/edfx-app-card-unit/index.js'
import edfx_app_setting from './apps/edfx-app-archives/edfx-app-setting/index.js'
import edfx_app_hot_search_widget from './apps/edfx-app-dashboard-analysis/apps/edfx-app-hot-search-widget/index.js'
import edfx_app_market_widget from './apps/edfx-app-dashboard-analysis/apps/edfx-app-market-widget/index.js'
import edfx_app_sale_proportion_widget from './apps/edfx-app-dashboard-analysis/apps/edfx-app-sale-proportion-widget/index.js'
import edfx_app_sale_trend_widget from './apps/edfx-app-dashboard-analysis/apps/edfx-app-sale-trend-widget/index.js'
import edfx_app_sale_widget from './apps/edfx-app-dashboard-analysis/apps/edfx-app-sale-widget/index.js'
import edfx_app_trade_widget from './apps/edfx-app-dashboard-analysis/apps/edfx-app-trade-widget/index.js'
import edfx_app_visit_widget from './apps/edfx-app-dashboard-analysis/apps/edfx-app-visit-widget/index.js'
import edfx_app_dashboard_analysis from './apps/edfx-app-dashboard-analysis/index.js'
import edfx_app_home_chart from './apps/edfx-app-home/apps/edfx-app-home-chart/index.js'
import edfx_app_home_list from './apps/edfx-app-home/apps/edfx-app-home-list/index.js'
import edfx_app_home_shortcuts from './apps/edfx-app-home/apps/edfx-app-home-shortcuts/index.js'
import edfx_app_home from './apps/edfx-app-home/index.js'
import edfx_app_login from './apps/edfx-app-login/index.js'
import edfx_app_portal from './apps/edfx-app-portal/index.js'
import edfx_app_agreement from './apps/edfx-app-register/apps/mk-app-agreement/index.js'
import edfx_app_register from './apps/edfx-app-register/index.js'
import edfx_app_root from './apps/edfx-app-root/index.js'
import edfx_app_proof_of_charge from './apps/fi/addVoucher/index.js'

const apps = {
		
	[app_scm_voucher_card.name]: app_scm_voucher_card,	
	[app_scm_voucher_list.name]: app_scm_voucher_list,	
	[edfx_app_card_assets.name]: edfx_app_card_assets,	
	[edfx_app_card_customer.name]: edfx_app_card_customer,	
	[edfx_app_card_department.name]: edfx_app_card_department,	
	[edfx_app_card_inventory.name]: edfx_app_card_inventory,	
	[edfx_app_card_person.name]: edfx_app_card_person,	
	[edfx_app_card_project.name]: edfx_app_card_project,	
	[edfx_app_card_unit.name]: edfx_app_card_unit,	
	[edfx_app_setting.name]: edfx_app_setting,	
	[edfx_app_hot_search_widget.name]: edfx_app_hot_search_widget,	
	[edfx_app_market_widget.name]: edfx_app_market_widget,	
	[edfx_app_sale_proportion_widget.name]: edfx_app_sale_proportion_widget,	
	[edfx_app_sale_trend_widget.name]: edfx_app_sale_trend_widget,	
	[edfx_app_sale_widget.name]: edfx_app_sale_widget,	
	[edfx_app_trade_widget.name]: edfx_app_trade_widget,	
	[edfx_app_visit_widget.name]: edfx_app_visit_widget,	
	[edfx_app_dashboard_analysis.name]: edfx_app_dashboard_analysis,	
	[edfx_app_home_chart.name]: edfx_app_home_chart,	
	[edfx_app_home_list.name]: edfx_app_home_list,	
	[edfx_app_home_shortcuts.name]: edfx_app_home_shortcuts,	
	[edfx_app_home.name]: edfx_app_home,	
	[edfx_app_login.name]: edfx_app_login,	
	[edfx_app_portal.name]: edfx_app_portal,	
	[edfx_app_agreement.name]: edfx_app_agreement,	
	[edfx_app_register.name]: edfx_app_register,	
	[edfx_app_root.name]: edfx_app_root,	
	[edfx_app_proof_of_charge.name]: edfx_app_proof_of_charge,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()