<template>
  <div>
    <GmapMap
      :center="tokyo"
      :zoom="15"
      map-type-id="terrain"
      style="width: 470px; height: 500px"
      @dragend="onDragEnd"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
let tokyo = {lat: 35.681167, lng: 139.767052};
export default {
  data: function(){
    return {
      count: 0,
      markers: [{ position: tokyo }],
      tokyo: tokyo
    }
  },
  methods: {
    increment: function(){
      this.count+= 5;
    },
    onDragEnd: function(){
      console.log('drag end');
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 30px;
}
</style>