import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('toReal', function (value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
