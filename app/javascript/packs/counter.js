import Vue from 'vue/dist/vue.esm'
import CounterApp from './counter_app.vue'
import Form from './form.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: gon.google_map_api_key,
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})


document.addEventListener('DOMContentLoaded', () => {
  // new Vue({
  //   el: "#counter",
  //   template: '<CounterApp/>',
  //   components: { CounterApp }
  // })
  // new Vue({
  //   el: "#form-test",
  //   template: '<Form/>',
  //   components: { Form }
  // })
  new Vue({
    el: "#app-test",
    data: {
      test: 'test',
      message: '',
      value: '',
      users: [],
      address: ''
    },
    methods: {
      getData: function(){
        axios.get('http://localhost/axios').then((res)=>{
          this.users = [];
          this.users = res.data;
          console.log('getted');
        });
        console.log('end');
      },
      showModal: function(params){
        this.value = params.name;
        this.address = params.address;
      }
    }
  })
})