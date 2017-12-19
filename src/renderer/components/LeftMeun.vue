<template>
         <div class="music-layout-left">
            <div class="music-layout-border">
                <div class="music-layout-header">
                    <div class="music-layout-tab">            
                      
                        <div class="music-layout-tab-item"  v-bind:class="{ active: mActive }">
                             <!-- <router-link :to="{path:'/music',query:{name:'music'}}"> -->
                         
                             <div class="link" @click="music">
                                    
                            <i class="el-icon-service" v-bind:class="{ mcolor: mActive }"></i>
                            
                            </div>
                           <!-- </router-link> -->
                        </div>
                        
                       
                        <div class="music-layout-tab-item"  v-bind:class="{ active: cActive }">
                             <!-- <router-link :to="{path:'/collect',query:{name:'collect'}}"> -->
                             <div class="link" @click="collect">
                            <i class="el-icon-star-off"  v-bind:class="{ mcolor: cActive }"></i>
                            </div>
                            <!-- </router-link> -->
                        </div>
                        
                        
                        <div class="music-layout-tab-item" v-bind:class="{ active: sActive }">
                            <!-- <router-link :to="{path:'/manner',query:{name:'manner'}}"> -->
                            <div class="link" @click="setting">
                            <i class="el-icon-setting"  v-bind:class="{ mcolor: sActive }"></i>
                            </div>
                             <!-- </router-link> -->
                        </div>
                       
                        
                        <div class="music-layout-tab-item" v-bind:class="{ active: dActive }">
                            <!-- <router-link :to="{path:'/download',query:{name:'download'}}"> -->
                            <div class="link" @click="download">
                            <i class="el-icon-download"  v-bind:class="{ mcolor: dActive }"></i>
                            </div>
                            <!-- </router-link> -->
                        </div>
                        
                    </div>
                </div>
                <div class="music-layout-left-main">
                   <transition name="component-fade" mode="in-out">
                            <component v-bind:is="view"></component>
                        </transition>
                </div>
            </div>
        </div>
</template>
<script>
import Leftmusic from "@/components/MusicLeft/music";
import Leftdownload from "@/components/MusicLeft/download";
import Leftcollect from "@/components/MusicLeft/collect";
import Leftmanner from "@/components/MusicLeft/manner";
export default {
  data() {
    return {
      view: "v-a",
      mActive: true,
      cActive: false,
      dActive: false,
      sActive: false
    };
  },
  components: {
    "v-a": Leftmusic,
    "v-b": Leftcollect,
    "v-c": Leftmanner,
    "v-d": Leftdownload
  },
  created: function() {
    let active = sessionStorage.getItem("active");
    if (active != null || active != "") {
      if (active == "m") {
        this.mActive = true;
        this.cActive = false;
        this.dActive = false;
        this.sActive = false;
        this.view = "v-a";
      } else if (active == "c") {
        this.mActive = false;
        this.cActive = true;
        this.dActive = false;
        this.sActive = false;
        this.view = "v-b";
      } else if (active == "s") {
        this.mActive = false;
        this.cActive = false;
        this.dActive = false;
        this.sActive = true;
        this.view = "v-c";
      } else if (active == "d") {
        this.mActive = false;
        this.cActive = false;
        this.dActive = true;
        this.sActive = false;
        this.view = "v-d";
      }
    }
  },
  methods: {
    music: function() {
      this.mActive = true;
      this.cActive = false;
      this.dActive = false;
      this.sActive = false;
      this.view = "v-a";
      sessionStorage.setItem("active", "m");
    },
    collect: function() {
      this.mActive = false;
      this.cActive = true;
      this.dActive = false;
      this.sActive = false;
      this.view = "v-b";
      sessionStorage.setItem("active", "c");
    },
    setting: function() {
      this.mActive = false;
      this.cActive = false;
      this.dActive = false;
      this.sActive = true;
      this.view = "v-c";
      sessionStorage.setItem("active", "s");
    },
    download: function() {
      this.mActive = false;
      this.cActive = false;
      this.dActive = true;
      this.sActive = false;
      this.view = "v-d";
      sessionStorage.setItem("active", "d");
    }
  },
  destroyed() {
    sessionStorage.removeItem("active");
  }
};
</script>
<style scoped>
.music-layout-left {
  width: 31%;
  left: 0;
  position: fixed;
  height: 100%;
  /* overflow: auto; */
}
.music-layout-left-main{
   width: 100%;
   height: 100%;
   /* position: relative; */
   /* left: 0; */
   /* overflow: auto; */
    /* padding-bottom: 30px; */
}
.music-layout-border {
  border-right: 1px solid #ccc;
  width: 100%;
  height: 100%;
}
.music-layout-header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  width: 100%;
}
.music-layout-tab {
  display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box; /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox; /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex; /* 新版本语法: Opera 12.1, Firefox 22+ */
  height: 40px;
  line-height: 40px;
}
.music-layout-tab-item {
  -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD - Firefox 19- */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  text-align: center;
}
.music-layout-tab-item i {
  font-size: 22px;
  color: #666666;
}


.active {
  border-bottom: 2px solid rgb(198, 47, 47);
  /* color: rgb(198, 47, 47); */
}
.mcolor {
  color: rgb(198, 47, 47) !important;
}
.link {
  height: 100%;
  width: 100%;
}

  
</style>
