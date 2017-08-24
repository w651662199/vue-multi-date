import VueMultiDate from './date-picker/rich-calander.vue';

VueMultiDate.install = function(Vue) {
	Vue.component('VueMultiDate', VueMultiDate);
};

export default VueMultiDate;