import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {routes} from "@/routes";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.use(VueResource);
// Vue.http.options.root = 'https://vueproject-5776f-default-rtdb.firebaseio.com';
Vue.config.productionTip = false;
Vue.directive('highlight', {
  bind(el, binding, vNode){
    console.log(el);
    console.log(binding);
    console.log(vNode);
    // el.style.backgroundColor = 'yellow'
    el.style.backgroundColor = binding.value
  }
});

Vue.filter('toLowercase', function (value) {
return value.toLowerCase()
})

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
