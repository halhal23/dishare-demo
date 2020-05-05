import Vue from 'vue/dist/vue.esm'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'
import GooGleMap from './components/google_map.vue'

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
      rests: [],
      geoPosition: {}
    },
    components: { 'google-map' : GooGleMap },
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
      },
      searchNearRest: function(){
        event.preventDefault = false;
        console.log('search near start');
        axios.get('http://localhost/axios', {
          params: {
            keyword: this.keyword,
            latitude: this.geoPosition.lat,
            longitude: this.geoPosition.lng,
            range: 5
          }
        }).then((res)=>{
          this.rests = res.data;
          console.log('near rests getted');
          console.log(res);
        }).catch((err)=>{
          console.log(err);
          console.log('ohh near error');
        })
        // this.getGeoPosition(this.geoLat, this.geoLng);
      },
      success: function(position){
        this.geoPosition.lat = position.coords.latitude;
        this.geoPosition.lng = position.coords.longitude;
        console.log('success!!' + this.geoPosition);
        console.log(this.geoPosition);
      }
    },
    mounted: function(){
      console.log('mouted');
      if (!navigator.geolocation) {
        alert('Geolocation not supported');
        return;
      }
      navigator.geolocation.getCurrentPosition(this.success, function() {
        alert('Geolocation failed!');
        return;
      });
    }
  })
})