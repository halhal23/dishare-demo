import Vue from 'vue/dist/vue.esm'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#sign_up_and_in",
    data: {
      isSignUp: false,
      form_title: ''
    },
    methods: {
      onLoginFormClick: function(){
        console.log('login form');
        this.isSignUp = false;
        this.form_title = "Login"
      },
      onSignUpFormClick: function(){
        console.log('signup form');
        this.isSignUp = true;
        this.form_title = 'SignUp'
      },
    }
  })
})  