<template>
  <div>
    <h1>count: {{ count }}</h1>
    <button @click="increment">click</button>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      count: 0
    }
  },
  methods: {
    increment: function(){
      this.count+= 5;
    }
  }
}
</script>