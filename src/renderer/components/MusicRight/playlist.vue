<template>
   <div class="music-right-main">
      <div class="playlist">
          <el-tabs :tab-position="tabPosition">
          <el-tab-pane label="华语歌榜">
             <component :is="views"></component>
          </el-tab-pane>
          <el-tab-pane label="欧美歌榜">
             <component :is="viewsd"></component>
          </el-tab-pane>
          <el-tab-pane label="韩国歌榜">
               <component :is="viewsf"></component>
          </el-tab-pane>
          <el-tab-pane label="日本歌榜">
              <component :is="viewsw"></component>
          </el-tab-pane>
          <el-tab-pane label="网红歌榜">

          </el-tab-pane>
          <el-tab-pane label="DJ歌榜">

          </el-tab-pane>
          <el-tab-pane label="粤语歌榜">

          </el-tab-pane>
          <el-tab-pane label="原创歌榜">

          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>
<script>
import Viewge from '@/components/MusicRight/playlist/viewge'
import Viewfe from '@/components/MusicRight/playlist/viewfe'
import Viewze from '@/components/MusicRight/playlist/viewze'
import Viewee from '@/components/MusicRight/playlist/viewee'
export default {
   data() {
      return {
        tabPosition: 'right',
        views:'v-a',
        viewsd:'v-b',
        viewsf:'v-c',
        viewsw:'v-d'
      };
    },
    components: {
      'v-a':Viewge,
      'v-b':Viewfe,
      'v-c':Viewze,
      'v-d':Viewee
    }
}
</script>
<style scoped>
 .playlist{
   margin: 10px;
   width: 100%;
   width: 100%;
 }
</style>