export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'edfx-app-login',
		children: [{
			name: 'header',
			className: 'edfx-app-login-header',
			component: 'Layout',
			children: [{
				name: 'logo',
				component: '::img',
				className: 'edfx-app-login-header-logo',
				src: '{{$getLogo()}}'
			}, 'Monkey King']
		}, {
			name: 'content',
			className: 'edfx-app-login-content',
			component: 'Layout',
			children: [{
				name: 'contentLeft',
				className: 'edfx-app-login-content-left',
				component: 'Layout',
			}, {
				name: 'form',
				component: 'Form',
				className: 'edfx-app-login-content-form',
				children: [{
					name: 'item1',
					component: 'Form.Item',
					className: 'edfx-app-login-content-form-title',
					children: '登录'
				}, {
					name: 'item2',
					component: 'Form.Item',
					// validateStatus: "{{data.other.error.mobile?'error':'success'}}",
					// help: '{{data.other.error.mobile}}',
					className: 'edfx-app-login-content-form-mobile',
					children: [{
						name: 'mobile',
						component: 'Input',
						placeholder: '请录入手机号',
						onChange: "{{(e)=>$fieldChange('data.form.account', e.target.value)}}",
						value: '{{data.form.account}}',
						prefix: {
							name: 'userIcon',
							component: 'Icon',
							type: 'user',
						}
					}]
				}, {
					name: 'item3',
					component: 'Form.Item',
					validateStatus: "{{data.other.error.password?'error':'success'}}",
					help: '{{data.other.error.password}}',
					className: 'edfx-app-login-content-form-password',
					children: [{
						name: 'password',
						component: 'Input',
						placeholder: '请录入密码',
						type: 'password',
						onChange: `{{(e)=>$fieldChange('data.form.password', e.target.value)}}`,
						value: '{{data.form.password}}',
						prefix: {
							name: 'passwordIcon',
							component: 'Icon',
							type: 'lock',
						}
					}]
				}, {
					name: 'item4',
					component: 'Form.Item',
					className: 'edfx-app-login-content-form-forget',
					children: [{
						name: 'remember',
						component: 'Checkbox',
						children: '记住我'
					}, {
						name: 'forgot',
						component: '::a',
						style: { float: 'right' },
						onClick: '{{$goForgot}}',
						children: '忘记密码'
					}]
				}, {
					name: 'item5',
					component: 'Form.Item',
					className: 'edfx-app-login-content-form-login',
					children: [{
						name: 'loginBtn',
						component: 'Button',
						type: 'primary',
						children: '登录',
						onClick: '{{$login}}'
					}]
				}, {
					name: 'item6',
					component: 'Form.Item',
					className: 'edfx-app-login-content-form-register',
					children: [{
						name: 'register',
						component: '::a',
						style: { float: 'right' },
						onClick: '{{$goRegister}}',
						children: '没有账户，立即注册'
					}]
				}]
			}, {
				name: 'contentRight',
				className: 'edfx-app-login-content-right',
				component: 'Layout',
			},]
		}, {
			name: 'footer',
			className: 'edfx-app-login-footer',
			component: 'Layout',
			children: 'copyright © 2015-2017 Monkey King'
		}]
	}
}

export function getInitState() {
	return {
		data: {
			form: { account: '', password: '' },
			other: {
				error: {}
			}

		}
	}
}
