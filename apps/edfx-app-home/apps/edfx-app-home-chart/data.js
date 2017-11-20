export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className:'edfx-app-home-chart',
		children: [{
			name: 'chart',
			component: 'Echarts',
			option: '{{$getOption()}}'
		}]
	}
}

export function getInitState() {
	return {
		data: {
			xAxisData: [],
			seriesData: [[],[]]
		}
	}
}