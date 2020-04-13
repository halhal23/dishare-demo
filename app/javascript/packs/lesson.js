import Vue from 'vue/dist/vue.esm';

Vue.config.productionTip = false



document.addEventListener('DOMContentLoaded', () => {
  
  new Vue({
    el: '#lesson',
    components: {
      hello: {
        data: function(){
          return {
            count: 0
          }
        },

        template: `
          <p @click="count++;">clicked: {{ count }}</p>
        `
      }
    }
  });
  

})