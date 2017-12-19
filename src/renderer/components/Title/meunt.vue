<template>
  <div 
    class="titlebtn" 
    v-bind:style="style"
    v-on:click="click"/>
</template>

<script>
    const {ipcRenderer: ipc} = require('electron');
    const style = {
        min: {
           
            right: '100px'
        },
        max: {
          
            right: '60px'
        },
        close: {
            
            right: '20px'
        }
    };
    export default {
        name: 'Titlebtn',
        props: ['type'],
        computed: {
            style: function () {
                return style[this.type];
            }
        },
        methods: {
            click: function () {
                ipc.send(this.type);
            }
        }
    }
</script>
    
<style scoped>
.titlebtn {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-app-region: no-drag;
}
</style>