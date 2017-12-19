<template>
 <div class="music-left-animation" >
  <el-collapse accordion id="layout">
    <el-collapse-item>
    <template slot="title">
    <div class="title">下载中[1]
      {{numebr}}
    </div>
    </template>
    <div class="border-bottom"></div>
    <div class="music-list">
        <ul id="music-ul">
             <li v-for="(mitem,index) in items" v-on:mouseenter="showDetails(index)" v-on:mouseleave="hiddenDetail(index)"  >
                 <div class="active-show">
                <div class="lit">{{mitem.name}}-{{mitem.geming}}</div> 
                <!-- <div class="litd"></div>  -->
                <div class="litr">{{mitem.timelenght}}</div> 
                </div>
                <div class="active-hide">
                    <div class="jia"><i class="el-icon-circle-plus-outline"></i> </div>
                     <div class="lit">{{mitem.name}}-{{mitem.geming}}</div> 
                     <div class="like"><i class="el-icon-star-off"></i> </div>
                     <div class="trash" @click="trash(mitem.id)"> <i class="el-icon-delete"></i></div>
                     <div class="more"><i class="el-icon-more"></i> </div>
                </div>
            </li>
            
        </ul>
    </div>
  </el-collapse-item>
  <el-collapse-item>
    <template slot="title">
    <div class="title">下载完成[1]
      {{numebr}}
    </div>
    </template>
    <div class="border-bottom"></div>
    <div class="music-list">
        <ul id="music-ul2">
             <li v-for="(mitem,index) in items" v-on:mouseenter="showDetails2(index)" v-on:mouseleave="hiddenDetail2(index)"  >
                 <div class="active-show">
                <div class="lit">{{mitem.name}}-{{mitem.geming}}</div> 
                <!-- <div class="litd"></div>  -->
                <div class="litr">{{mitem.timelenght}}</div> 
                </div>
                <div class="active-hide">
                    <div class="jia"><i class="el-icon-circle-plus-outline"></i> </div>
                     <div class="lit">{{mitem.name}}-{{mitem.geming}}</div> 
                     <div class="like"><i class="el-icon-star-off"></i> </div>
                     <div class="trash" @click="trash(mitem.id)"> <i class="el-icon-delete"></i></div>
                     <div class="more"><i class="el-icon-more"></i> </div>
                </div>
            </li>
            
        </ul>
    </div>
  </el-collapse-item>

</el-collapse>
</div>
</template>
<script>
export default {
  data() {
    return {
      numebr:'',
      items: [
            {
              id: "1",
              name: "张学友",
              geming: "七友",
              timelenght: "3.58M",
              geurl: "/sss/sss/sss"
            },
            {
              id: "2",
              name: "张学友",
              geming: "狼的传说",
              timelenght: "3.58M",
              geurl: "/sss/sss/sss"
            },
            {
              id: "3",
              name: "张学友",
              geming: "吻别",
              timelenght: "3.58M",
              geurl: "/sss/sss/sss"
            },
            {
              id: "4",
              name: "张学友",
              geming: "她来听我的演唱会",
              timelenght: "3.58M",
              geurl: "/sss/sss/sss"
            },
            {
              id: "5",
              name: "张学友",
              geming: "心烦",
              timelenght: "05:10",
              geurl: "/sss/sss/sss"
            },
            {
              id: "6",
              name: "张学友",
              geming: "说不出再见",
              timelenght: "3.58M",
              geurl: "/sss/sss/sss"
            },
            {
              id: "7",
              name: "张学友",
              geming: "阿里阿里",
              timelenght: "3.58M",
              geurl: "/sss/sss/sss"
            }
      ]
    };
  },
  created() {
    
  },
  methods: {
    showDetails: function(b) {
     var layout = document.getElementById("music-ul");
     var ls = layout.getElementsByTagName("li");
     var listshow = ls[b].getElementsByTagName("div");
     listshow[0].style.display ='none';
     listshow[3].style.display ='block';
    
    },
    hiddenDetail:function(b){
       var layout = document.getElementById("music-ul");
       var ls = layout.getElementsByTagName("li");
       var listshow = ls[b].getElementsByTagName("div"); 
       listshow[0].style.display ='block';
        listshow[3].style.display ='none';
    },
    showDetails2: function(b) {
     var layout = document.getElementById("music-ul2");
     var ls = layout.getElementsByTagName("li");
     var listshow = ls[b].getElementsByTagName("div");
     listshow[0].style.display ='none';
     listshow[3].style.display ='block';
    
    },
    hiddenDetail2:function(b){
       var layout = document.getElementById("music-ul2");
       var ls = layout.getElementsByTagName("li");
       var listshow = ls[b].getElementsByTagName("div"); 
       listshow[0].style.display ='block';
        listshow[3].style.display ='none';
    }
   
  }
};
</script>
<style scoped>
.el-collapse{
  height: 484px;
  width: 100%;
 overflow-x:hidden;
}
.title {
  width: 100%;
  padding-left: 10px;
}
.border-layout{
    border-bottom: 1px solid #f1f1f1;
}
.music-list {
  width: 100%;
}
.border-bottom {
  height: 1px;
  background: #f1f1f1;
  width: 100%;
}
.music-list ul li {
  position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
  /* border-top:1px solid #ccc;  */
  color: #666666;
}
/* .music-list ul li:hover{
     background: #f1f1f1;
 }
 .music-list ul li:active{
     background: #f1f1f1;
 } */
.active-show {
  width: 100%;
  height: 100%;
  display: block;
}
.active-hide {
  display: none;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
}
.music-list ul li .lit {
  position: absolute;
  left: 25px;
}
.music-list ul li .litr {
  position: absolute;
  right: 10px;
}
.music-list ul li .jia {
  position: absolute;
  left: 5px;
  cursor: pointer;
}
.music-list ul li .like {
  position: absolute;
  right: 70px;
  cursor: pointer;
}
.music-list ul li .trash {
  position: absolute;
  right: 40px;
  cursor: pointer;
}
.music-list ul li .more {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
</style>
