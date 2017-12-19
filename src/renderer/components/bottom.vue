<template>
  <div class="bottom-vs" >
   <div class="bottom-play">
      <div class="payleft">
        <img src="/static/up.svg" alt="">
      </div>
      <div class="pay" @click="pay" v-bind:style="styles">
        <!-- <img src="/static/pay.svg" /> -->
          <!-- <i class="el-icon-caret-right"></i> -->
      </div>
      <div class="payright">
        <img src="/static/next.svg" alt="">
      </div>
   </div>
    <div class="paymusic">
      <div class="ge-name"><span class="name-b">张杰 - 逆态度</span><span class="tiem">02:55/03:55</span> </div>
      <div class="height2">
        <el-progress :stroke-width="2" :percentage="10" status='exception'></el-progress>
      </div>
      <audio class="musicp" id="audios"  src="/src/renderer/assets/music/zhangjie.mp3">
        Your browser does not support the audio element.
        </audio>
    </div>
    <div class="bottom-right">
         <div class="botton-right-icom menu-tabs" >
           <div class="menu-tabs-items">
             <i class="el-icon-star-off"></i>
           </div>
           <div class="menu-tabs-items">
              <i class="el-icon-download"></i>
           </div>
           <div class="menu-tabs-items">
              <i class="el-icon-more-outline"></i>
           </div>
           <div class="menu-tabs-items">
              <i class="el-icon-sort"></i>
           </div>
           <div class="menu-tabs-items">
              <i class="el-icon-service"></i>
           </div>
           <div class="menu-tabs-items">
             <div class="music-mi">
              <span class="el-icon-news"></span> 音效
             </div>
           </div>
           <div class="menu-tabs-items">
               <div class="music-ci">词</div>
           </div>
            <div class="menu-tabs-items">
               <i class="el-icon-message"></i>
           </div>
            <div class="menu-tabs-items">
               <i class="el-icon-menu"></i>
           </div>

         </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      paly:1,
      times:'',
      styles:{
        background:"url('/static/pay.svg') no-repeat"
      }
    }
  },
  created () {
    
    
  },
  beforeMount(){
    
  },
  mounted () {
    var audios = document.getElementById('audios');
      var times=audios.duration;
      console.log(times);
     setInterval(function(){
     
     },1000)
  },
  updated(){
   
  //      console.log(chtime);
  //      console.log(audios.currentTime);
  //      console.log(audios.defaultPlaybackRate)
   
  },
  methods:{
    pay:function(){
       if(this.paly==0){
          audios.play()
          this.paly=1;
          this.styles.background = "url('/static/puse.svg') no-repeat"
       }else{
          audios.pause()
          this.paly=0;
          this.styles.background="url('/static/pay.svg') no-repeat"
       }
    }
  }
};
</script>
<style scoped>
.bottom-vs {
  width: 100%;
  height: 68px;
  position: fixed;
  bottom: 0;
  background-color: rgb(198, 47, 47);
  z-index: 1000;
  /* line-height: 68px; */
}
.bottom-play {
  width: 100%;
  height: 100%;
  position: relative;
}
.payleft {
  position: absolute;
  left: 20px;
  top: 15px;
   cursor: pointer;
}
.payleft img{
  height: 35px;
  width: 35px;
}
.pay {
  left: 70px;
  position: absolute;
  top: 10px;
  height: 50px;
  width: 50px;
  background-position: center;
  background-size: 100% 100%;
  cursor: pointer;
}
.payright {
  position: absolute;
  left: 135px;
  top: 15px;
   cursor: pointer;
}
.payright img{
   height: 35px;
  width: 35px;
}
.paymusic{
  position: absolute;
  left: 200px;
  top: 15px;
  width: 40%;
  color: #fff;
  font-size: 14px;
}
.paymusic audio{
  background: rgb(198, 47, 47);
}
.paymusic audio input{
  background: rgb(198, 47, 47);
}
.musicp{
  height: 20px;
  /* background: #ccc; */
  width: 100%;
}
.ge-name{
  line-height: 25px;
  /* margin-bottom: 5px; */
}
.ge-name .name-b{
  position: relative;
  left: 10px;
}
.ge-name .tiem{
  position: relative;
  left: 50%;
  font-size: 12px;
}
.height2{
 
  width: 100%;
}
.height2 .el-progress{
  width: 100%;
}
.bottom-right{
  position: absolute;
  top: 0;
  right: 10px;
  height: 100%;
  width: 40%;
  color: #fff;
}
.botton-right-icom{
  height: 100%;
  width: 100%;
  line-height: 68px;
}
.botton-right-icom .menu-tabs-items{
  text-align: center;
}
.botton-right-icom .menu-tabs-items .el-icon-sort{
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	
}
.music-mi .el-icon-news{
  font-size: 12px;
}
.botton-right-icom .menu-tabs-items i{
  font-size: 19px;
  vertical-align: middle;
}

</style>
