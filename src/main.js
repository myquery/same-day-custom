import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProductionHouse from "@/components/ProductionHouse.vue";
import OrderContainer from "@/components/OrderContainer.vue";

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/order', component: ProductionHouse },
    { path: '/', component: OrderContainer }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
