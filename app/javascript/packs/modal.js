import Vue from 'vue/dist/vue.esm'

Vue.config.productionTip = false

Vue.component('open-modal',{
  data: function(){
    return {
      ifModal: true
    }
  },
  methods: {
    clickEvent: function(){
      this.$emit('from-child');
    }
  },
  template : `
  <div id="overlay" v-show="ifModal" v-on:from-parent="ifModal = false">
    <div class="content">
      <p>this is component</p>
      <button @click="clickEvent" class="btn btn-danger">close</button>
    </div>
  </div>
    `
})

new Vue({
  el: "#app",
  data: {
    ifModal: false,
    flg: true
  },
  methods: {
    showModal: function(){
      console.log('click show');
      this.ifModal = true;
    },
    closeModal: function(){
      console.log('click close');
      this.ifModal = false;
    },
    stopEvent: function(event){
      event.stopPropagation();
    },
    toggleFlg: function(){
      this.flg = !this.flg
    }
  }
})