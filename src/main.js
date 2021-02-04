import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
}).$mount('#app')
