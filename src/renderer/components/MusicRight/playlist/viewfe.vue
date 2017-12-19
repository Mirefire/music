<!-- lin-vue -->
<template>
 <div class="playlist-vue">
     <div class="playlist-header menu-tabs">
         <div class="playlist-name menu-tabs-items">歌曲名</div>
         <div class="playlist-caozuo menu-tabs-items">操作</div>
     </div>
     <div class="playlist-main">
         <div class=" playlist-main-li" v-for="(item ,index) in items">
            <a class="menu-tabs">
                 <i class="el-icon-loading"></i>
                <i class="el-icon-service"></i>
             <div class="menu-tabs-items li-name">{{item.name}}-{{item.title}}</div>
            <div class="menu-tabs-items lin-btn">
                <i class="el-icon-caret-right"></i>
                 <i class="el-icon-circle-plus-outline"></i>
                 <i class="el-icon-download"></i>
                 <i class="el-icon-more-outline"></i>
            </div>
            </a>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
     items:[
         {id:1,name:'张学友',title:'狼的传说',iurl:'/sss/sss/'},
          {id:1,name:'张学友',title:'狼的传说',iurl:'/sss/sss/'},
           {id:1,name:'张学友',title:'狼的传说',iurl:'/sss/sss/'},
            {id:1,name:'张学友',title:'狼的传说',iurl:'/sss/sss/'},
             {id:1,name:'张学友',title:'狼的传说',iurl:'/sss/sss/'}
     ]
    }
  },

  //组件
  components: {},

  //方法
  methods: {},
  //准备创建组件
  beforeCreate() {},
  //组件创建完毕
  created() {},
  //组件的模板准备挂载到DOM
  beforeMount() {},
  //挂载完毕
  mounted() {},
  //准备更新了
  beforeUpdate() {},
  //更新完成
  updated() {},
  //准备销毁
  beforeDestroy() {},
  //销毁完成
  destroyed() {}
};
</script>

<style scoped>
  .playlist-header{
      width: 100%;
      height: 35px;
      line-height: 35px;
      border-top:1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1; 
      color: rgb(198,47,47);
      text-align: center;
  }
  .playlist-name{
     
  }
  .playlist-caozuo{
     
  }
  .playlist-main-li{
      width: 100%;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #f1f1f1;
  }
  .playlist-main-li a{
      width: 100%;
      height: 100%;
  }
  .playlist-main-li a:hover{
      width: 100%;
      height: 100%;
      background: #f1f1f1;
      color:  rgb(198,47,47);
  }
  .li-name{
      font-size: 12px;
      padding-left: 10px;
  }
  .el-icon-loading{
     color: rgb(198,47,47);
  }
  .el-icon-service{
      padding-left: 10px;
      color: #ccc;
  }
  .lin-btn{
      text-align: right;
      padding-right: 50px;
  }
  .lin-btn i{
      color: #666666;
      cursor: pointer;
  }
</style>