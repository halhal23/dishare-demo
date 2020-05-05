<template>
  <div>
    <GmapMap
      :center="restPosition"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
      @dragend="onDragEnd"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in restMarkers"
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
  props: ["lat", "lng", "geolat", "geolng"],
  computed: {
    restPosition: function(){
      // console.log(this.lat);
      console.log(this);
      return {lat: Number(this.geolat), lng: Number(this.geolng)}
    },
    restMarkers: function(){
      // return [{ position : {lat: Number(this.lat), lng: Number(this.lng)}}]
      return [
          { position : {lat: Number(this.lat), lng: Number(this.lng)}},
          { position : {lat: Number(this.geolat), lng: Number(this.geolng)}},
        ]
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