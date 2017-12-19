<template>
    <div class="music-layout">
       <v-leftm></v-leftm>
        <v-rightm></v-rightm>
    </div>
</template>
<script>
import leftm from "@/components/LeftMeun"
import rightm from "@/components/RightMeun"
export default {
   components:{
   'v-leftm': leftm,
    'v-rightm':rightm
  }
};
</script>
<style scoped>



</style>
