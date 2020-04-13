import Vue from 'vue/dist/vue.esm'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC0mCIH2nIt1xBCl8EeGH29-BVOPJlro5k',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#top-container",
    data: {
      isHidden: true,
      isSearhced: false,
      keyword: '',
      currentRest: {},
      rests: []
    },
    methods: {
      inputKeyword: function(){
        this.isHidden = !this.isHidden;
      },
      searchRest: function(){
        event.preventDefault = false;
        console.log('search start');
        axios.get('http://localhost/axios', {
          params: {
            keyword: this.keyword
          }
        }).then((res)=>{
          this.rests = res.data;
          console.log('rests getted');
          console.log(res);
        }).catch((err)=>{
          console.log(err);
          console.log('ohh error');
        })
        console.log('finish');
      },
      showRestInfo: function(rest){
        this.isSearhced = true;
        this.currentRest = rest;
      }
    }
  })
})