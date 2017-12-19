<template>
   <div class="music-right-main">
      <div class="ktv-header">
         <div class="ktv-header-title">热门分类</div>
         <div class="ktv-classify">
             <div class="ktv-tab">
               <div class="ktv-tab-item">英文</div>
               <div class="ktv-tab-item">劲爆DJ</div>
               <div class="ktv-tab-item">KTV热歌</div>
               <div class="ktv-tab-item">电子</div>
               <div class="ktv-tab-item">90年代</div>
                <div class="ktv-tab-item">背景音乐</div>
             </div>
              <div class="ktv-tab">
                 <div class="ktv-tab-item">经典</div>
               <div class="ktv-tab-item">情歌</div>
               <div class="ktv-tab-item">寂寞</div>
               <div class="ktv-tab-item">摇滚</div>
               <div class="ktv-tab-item">网络歌曲</div>
                <div class="ktv-tab-item">全部分类</div>
              </div>
         </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.music-right-main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #f1f1f1;
}
.ktv-header {
  width: 90%;
  margin: 0 auto;
}
.ktv-header-title{
  line-height: 40px;
  font-size: 12px;
}
.ktv-tab {
  line-height: 30px;
  display: -webkit-flex;
  /* for uc */
  display: -webkit-box;
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: flex;
}
.ktv-tab-item {
  -ms-flex: 1; /* IE 10 */
  -webkit-flex: 1;
  flex: 1;
  /* for uc */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  font-size: 12px;
  background: #fff;
  text-align: center;
  line-height: 30px;
}
</style>