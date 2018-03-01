import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.UPCS_URL = 'http://localhost:4001/upcs'

new Vue({
  render: h => h(App)
}).$mount('#app')
