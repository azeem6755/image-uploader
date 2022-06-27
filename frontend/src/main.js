import Vue from 'vue'
import App from './App.vue'
import {globalMixin} from './mixins/global_mixins'

Vue.config.productionTip = false
Vue.mixin(globalMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
