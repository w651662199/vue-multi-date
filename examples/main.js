import Vue from 'vue';

import App from './app.vue';

import VueMultiPicker from '../src/index.js';
Vue.use(VueMultiPicker);

new Vue({
	el: '#app',
	template: `<app></app>`,
	components: {
		app: App
	}
});