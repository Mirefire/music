<template>
    <div id="title">
        <div class="logo">
            <img src="/src/renderer/assets/images/logo.png" alt="">
        </div>
        <div class="backkey">
           <i class="el-icon-arrow-left"></i>
        </div>
        <Titlebtn type="min" class="el-icon-minus"/>
        <Titlebtn type="max" class="el-icon-rank"/>
        <Titlebtn type="close" class="el-icon-close"/>
    </div>
    
</template>

<script>
    import Titlebtn from '@/components/Title/meunt';
    export default {
        name: 'title',
        components: {
            Titlebtn
        }
    }
</script>
    
<style>
#title {
    top: 0;
    position: fixed;
    width: 100%;
    height: 52px;
    background-color: rgb(198, 47, 47);
    -webkit-app-region: drag;
    /* z-index: 1000; */
}
.logo{
   left: 10px;
   position: relative;
   line-height: 53px;
   height: 53px;
   padding-top: 5px;
}
.logo img{ 
    height:40px;
    width: 40px;
    line-height: 53px;
    /* border-radius:50%;  */
    border: none;
}
.backkey{
    height: 53px;
    line-height: 46px;
    position: absolute;
    right: 150px;
    top: 0;
}
.backkey i{
    color: #fff;
}
.el-icon-minus,.el-icon-rank,.el-icon-close{
    color: #fff;
}
.el-icon-rank{
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    }
</style>