<template>
  <div class="music-right-main">
      <div class="musci-right-header">
          <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      </div>
       <div class="nusic-right-center">
          <el-tabs :tab-position="tabPosition">
          <el-tab-pane label="劲爆DJ">
              <div class="content">
                 <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="情歌">
               <div class="content">
                 <div class="content-images">
                     <img src="/static/images/2.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/4.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/6.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
            </el-tab-pane>
          <el-tab-pane label="风趣歌曲">
              <div class="content">
                 <div class="content-images">
                     <img src="/static/images/5.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="经典">
               <div class="content">
                 <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="KTV热歌">
               <div class="content">
                 <div class="content-images">
                     <img src="/static/images/6.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="背景音乐">
               <div class="content">
                 <div class="content-images">
                     <img src="/static/images/4.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/2.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="伤感">
               <div class="content">
                 <div class="content-images">
                     <img src="/static/images/6.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="全部">
               <div class="content">
                 <div class="content-images">
                     <img src="/static/images/4.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                       <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/1.jpg" alt="">
                     <div class="name">
                    <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                  <div class="content-images">
                     <img src="/static/images/7.jpg" alt="">
                     <div class="name">
                     <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
                   <div class="content-images">
                     <img src="/static/images/6.jpg" alt="">
                     <div class="name">
                        <i class="el-icon-service"></i><span>1.6万</span>
                     </div>
                 </div>
              </div>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
     tabPosition:'left'
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
.musci-right-header{
  height: 240px;
  overflow: hidden;
  background: #f1f1f1;
  margin: 0 1px;
}
.el-carousel{
  margin: 20px 30px;

}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .nusic-right-center{
  
  }
  .el-tab-pane{
   
  }
  .content{
    width: 100%;
  }
  .content-images{
    float: left;
    margin: 5px 10px ;
    position: relative;
    height: 120px;
    width: 120px;
  }
  .content-images img{
    height: 120px;
    width: 120px;
  }

  .content-images .name{
    position: absolute;
    bottom: 5px;
    left: 5px;
    color:#fff;
    font-size: 12px;
  }
  .content-images .name span{
    margin-left: 10px;
  }
</style>
