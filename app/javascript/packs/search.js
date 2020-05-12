import Vue from 'vue/dist/vue.esm'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'
import GooGleMap from './components/google_map.vue'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: gon.google_map_api_key,
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

console.log(gon.google_map_api_key);

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#top-container",
    data: {
      isHidden: true,
      isSearhced: false,
      keyword: '',
      currentRest: {},
      rests: [],
      geoPosition: {},
      debug: 'デバッグです',
      isError: false
    },
    components: { 'google-map' : GooGleMap },
    methods: {
      inputKeyword: function(){
        this.isHidden = !this.isHidden;
      },
      noAxios: function(){
        alert('no axios');
      },
      yesAxios: function(){
        axios.get('https://dishare.work/yesaxios'
        ).then((res)=>{
          alert(res.data.msg);
          console.log(res);
        }).catch((err)=>{
          alert(err);
          console.log(err);
        })
      },
      searchRest: function(){
        // event.preventDefault = false;
        console.log('search start');
        axios.get('https://dishare.work/axios', {
          params: {
            keyword: this.keyword
          }
        }).then((res)=>{
          this.rests = res.data;
          console.log('rests getted');
          console.log(res);
          // 検索結果がnullだった場合の処理
          if (res.data == null) {
            // nullの場合（失敗のケース）
            this.debug = 'NULLが返されてしまいました。'
          } else if (res.data == 'error') {
            this.isError = true;
            console.log(res.data);
            console.log('ohh error');
            this.debug = res.data;
          } else {
            // 成功の場合
            this.debug = '成功しました。'
          }
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
        // event.preventDefault = false;
        console.log('search near start');
        axios.get('https://dishare.work/axios', {
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