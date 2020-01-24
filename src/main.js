import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('@/assets/css/style.css')
require('@/assets/css/icon-font.css')

new Vue({
  render: h => h(App),
}).$mount('#app')
