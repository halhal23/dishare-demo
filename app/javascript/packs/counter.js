import Vue from 'vue/dist/vue.esm'
import CounterApp from './counter_app.vue'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#counter",
    template: '<CounterApp/>',
    components: { CounterApp }
  })
})