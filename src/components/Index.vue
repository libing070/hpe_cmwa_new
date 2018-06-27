<template>
  <div class="clear-fix main-wrap">
    <dialog-model></dialog-model>
    <nav-header  v-on:listen="listenMsg"></nav-header>
    <el-row class="tac">
      <el-col :span="changeSidebarNavSpan"id="changeSidebarNavSpan" class="sidebar-nav">
        <nav-menu :MenuStateData="changeMenuState"></nav-menu>
      </el-col>
    <el-col :span="changeRightNavSpan" id="changeRightNavSpan" class="right-body">
        <nav-main class="main-right" :listenScreenHeight="screenHeight"></nav-main>
      </el-col>
    </el-row>
<!--
      <nav-footer></nav-footer>
-->
  </div>

</template>
<style>

  .el-row {
  margin-bottom: 0px;
  &:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>

<script>

  import DialogModel from './DialogModel'
  import NavHeader from './NavHeader'
  import NavMenu from './NavMenu'
  import NavMain from './NavMain'
  import NavFooter from './NavFooter'

    export default {

      data() {
        return {
          changeMenuState:false,
          screenWidth: 0,
          screenHeight:0,
          changeSidebarNavSpan:4,
          changeRightNavSpan:20,
        };
      },
      name: "index",
      components:{
        NavHeader:NavHeader,
        NavMenu:NavMenu,
        NavMain:NavMain,
        NavFooter:NavFooter,
        DialogModel:DialogModel
      },
      mounted() {
        this.loginMsgbox();
        this.loadLay();

      },
      created(){
        this.screenWidth=document.body.clientWidth;//初始化获取窗口高度 并且赋值
        this.screenHeight=document.body.clientHeight;
        const that=this;
        window.onresize=function () {
          return function () {
            window.screenWidth = document.body.clientWidth;
            that.screenWidth = window.screenWidth;

            window.innerHeight= document.body.clientHeight;
            that.screenHeight = window.innerHeight
          }()
        }

      },


      watch: {//监听窗口变化
        screenWidth (val) {
          if (!this.timer) {

            this.screenWidth = val
            this.timer = true
            let that = this

            setTimeout(function () {
              if(val>=1366){
                that.changeMenuState=false;
                that.changeSidebarNavSpan=3;
                that.changeRightNavSpan=21;

              }else{
                that.changeMenuState=true;
                that.changeSidebarNavSpan=1;
                that.changeRightNavSpan=23;

              }

              that.timer = false

            }, 100)

          }

        }

      },
      methods: {
        loadLay () {
         // alert( $("#viewportdiv").css("height"));
        },
        listenMsg(data){
           this.changeMenuState=data.changeMenuState;
        },
        loginMsgbox(){
          //this.centerDialogVisible = true;
        }
      },

    }



</script>



