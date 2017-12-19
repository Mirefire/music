<template>
   <div class="music-right-main">
      <div class="live-header">
         <div class="live-list">
           <el-breadcrumb >
            <el-breadcrumb-item>内地</el-breadcrumb-item>
            <el-breadcrumb-item>港台</el-breadcrumb-item>
            <el-breadcrumb-item>欧美</el-breadcrumb-item>
            <el-breadcrumb-item>日本</el-breadcrumb-item>
            <el-breadcrumb-item>韩国</el-breadcrumb-item>
            <el-breadcrumb-item>其他</el-breadcrumb-item>
            <el-breadcrumb-item>全部</el-breadcrumb-item>
          </el-breadcrumb>
         </div>
         <div class="live-list">
           <el-breadcrumb >
            <el-breadcrumb-item>男</el-breadcrumb-item>
            <el-breadcrumb-item>女</el-breadcrumb-item>
            <el-breadcrumb-item>组合</el-breadcrumb-item>
             <el-breadcrumb-item>全部</el-breadcrumb-item>
          </el-breadcrumb>
         </div>
         <div class="live-list">
           <el-breadcrumb >
            <el-breadcrumb-item>流行</el-breadcrumb-item>
            <el-breadcrumb-item>嘻哈</el-breadcrumb-item>
            <el-breadcrumb-item>摇滚</el-breadcrumb-item>
            <el-breadcrumb-item>电子</el-breadcrumb-item>
            <el-breadcrumb-item>民谣</el-breadcrumb-item>
            <el-breadcrumb-item>R&B</el-breadcrumb-item>
             <el-breadcrumb-item>轻音乐</el-breadcrumb-item>
            <el-breadcrumb-item>民歌</el-breadcrumb-item>
            <el-breadcrumb-item>爵士</el-breadcrumb-item>
            <el-breadcrumb-item>古典</el-breadcrumb-item>
            <el-breadcrumb-item>民谣</el-breadcrumb-item>
            <el-breadcrumb-item>乡村</el-breadcrumb-item>
            <el-breadcrumb-item>蓝调</el-breadcrumb-item>
            <el-breadcrumb-item>全部</el-breadcrumb-item>
          </el-breadcrumb>
         </div>
      </div>

      <div class="live-content">
          <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div> <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>
            <div class="live-img">
             <img src="/static/images/1.jpg" alt="">
             <div class="live-name">薛之谦</div>
             <span>1</span>
          </div>

      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 .live-list{
   height: 30px;
   line-height: 30px;
   padding-left: 20px;
   margin: 10px 0;
 }
 .el-breadcrumb{
   line-height: 30px;
   font-size: 12px;
 }
 .live-content{
   height: 100%;
   padding: 10px;
 }
 .live-content .live-img{
   height: 120px;
   width: 100px;
   background: #f1f1f1;
   position: relative;
   float: left;
   margin: 10px 16px;
 }
 .live-content .live-img img{
   height: 70px;
   width: 70px;
   border-radius: 50%;
   position: absolute;
   left: 15px;
   top: 20px;
   
 }
 .live-content .live-img .live-name{
   position: absolute;
   bottom: 10px;
   font-size: 12px;
   text-align: center;
   width: 100px;
 }
 .live-content .live-img span{
   position: absolute;
   top: 0;
   left: 0;
   display: block;
   width: 40px;
   height: 20px;
   line-height: 20px;
   background: rgb(198, 47, 47);
   color: #fff;
   font-size: 12px;
   border-bottom-right-radius: 50px;
   text-align: center;
 }
</style>