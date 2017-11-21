import moment from 'moment'

export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'edfx-app-card-department',
		children: [{
			name: 'codeItem',
			component: 'Form.Item',
			label: '部门编码',
			required: true,
			validateStatus: "{{data.other.error.code?'error':'success'}}",
			help: '{{data.other.error.code}}',
			children: [{
				name: 'code',
				component: 'Input',
				value: '{{data.form.code}}',
				onChange: "{{(e)=>$fieldChange('data.form.code',e.target.value)}}"
			}]

		}, {
			name: 'nameItem',
			component: 'Form.Item',
			label: '部门名称',
			required: true,
			validateStatus: "{{data.other.error.name?'error':'success'}}",
			help: '{{data.other.error.name}}',
			children: [{
				name: 'name',
				component: 'Input',
				value: '{{data.form.name}}',
				onChange: "{{(e)=>$fieldChange('data.form.name',e.target.value)}}"
			}]

		}]
	}
}

export function getInitState() {
	return {
		data: {
			form: {
				code: '',
				name: ''
			},
			other: {
				error: {}
			}
		}
	}
}