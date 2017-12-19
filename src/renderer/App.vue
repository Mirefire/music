<template>
  <div id="app">
    <v-title></v-title>
    <router-view></router-view>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import Title from "@/components/Title/title"
import Bottom from "@/components/bottom"
  export default {
    name: 'musicm',
    components:{
      'v-title':Title,
      'v-bottom':Bottom
    }
  }
</script>

<style>
  /* CSS */
</style>
