<template>
      <div class="music-layout-right">
           <div class="music-layout-border">
               <div class="music-layout-right-header">
                  <div class="music-right-tab">
                  <div class="music-right-item" v-bind:class="{rightavite:style1}" @click="view1">精选</div>
                  <div class="music-right-item" v-bind:class="{rightavite:style2}"  @click="view2">歌手</div>  
                  <div class="music-right-item" v-bind:class="{rightavite:style3}" @click="view3">排行</div>  
                  <div class="music-right-item" v-bind:class="{rightavite:style4}" @click="view4">分类歌单</div>  
                  <div class="music-right-item" v-bind:class="{rightavite:style5}" @click="view5">电台</div>  
                  <div class="music-right-item" v-bind:class="{rightavite:style6}" @click="view6">MV</div>
                  <div class="music-right-item" v-bind:class="{rightavite:style7}" @click="view7">歌词</div>
                  </div>    
               </div>
           </div>
           <div class="music-layout-right-main">
                <transition name="component-fade" mode="in-out">
                            <component v-bind:is="view"></component>
                </transition>
           </div>
        </div>
</template>
<script>
import Music from '@/components/MusicRight/music'
import Radio from '@/components/MusicRight/radio'
import Playlist from '@/components/MusicRight/playlist'
import MV from '@/components/MusicRight/mv'
import Live from '@/components/MusicRight/live'
import Ktv from '@/components/MusicRight/ktv'
import Lyrics from '@/components/MusicRight/lyrics'
export default {
  data(){
    return{
    view:'v-a',
    style1:true,
    style2:false,
    style3:false,
    style4:false,
    style5:false,
    style6:false,
    style7:false,
    }
  },
  components:{
    'v-a':Music,
    'v-b':Live,
    'v-c':Playlist,
    'v-d':Ktv,
    'v-e':Radio,
    'v-f':MV,
    'v-g':Lyrics
  },
     methods: {
     view1:function(){
      this.view = 'v-a'
      this.style1=true
      this.style2=false
      this.style3=false
      this.style4=false
      this.style5=false
      this.style6=false
      this.style7=false
     },
      view2:function(){
       this.view = 'v-b'
       this.style1=false
      this.style2=true
      this.style3=false
      this.style4=false
      this.style5=false
      this.style6=false
      this.style7=false
     },
      view3:function(){
       this.view = 'v-c'
        this.style1=false
      this.style2=false
      this.style3=true
      this.style4=false
      this.style5=false
      this.style6=false
      this.style7=false
     },
      view4:function(){
       this.view = 'v-d'
       this.style1=false
      this.style2=false
      this.style3=false
      this.style4=true
      this.style5=false
      this.style6=false
      this.style7=false
     },
      view5:function(){
       this.view = 'v-e'
       this.style1=false
      this.style2=false
      this.style3=false
      this.style4=false
      this.style5=true
      this.style6=false
      this.style7=false
     },
      view6:function(){
       this.view = 'v-f'
       this.style1=false
      this.style2=false
      this.style3=false
      this.style4=false
      this.style5=false
      this.style6=true
      this.style7=false
     },
      view7:function(){
       this.view = 'v-g'
       this.style1=false
      this.style2=false
      this.style3=false
      this.style4=false
      this.style5=false
      this.style6=false
      this.style7=true
     }
  }
}
</script>

<style scoped>
.music-layout-right {
  width: 69%;
  left: 31%;
  position: fixed;
  height: 524px;
}
.music-layout-border{
  height: 100%;
  border-bottom:1px solid #ccc;
  height: 40px;
  line-height: 40px;  
}
.music-layout-right-header{
  width: 70%;
   height: 40px;
   margin: 0 auto;
  
}
.music-right-tab{
  display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box; /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox; /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex; /* 新版本语法: Opera 12.1, Firefox 22+ */
  height: 40px;
  line-height: 40px;
}
.music-right-item{
  -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD - Firefox 19- */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  text-align: center;
}
.music-layout-right-main{
  width: 100%;
  height: 484px;
  overflow-x: hidden;
}
</style>
