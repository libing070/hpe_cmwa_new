<template>
  <el-row class="header" style="background-color: #21649b">
    <el-col :span="3">
      <div class="grid-content header-log-style">
         <img src="../assets/images/image_log.png" />
       <!-- <el-radio-group v-model="isCollapse"  style="margin-bottom: 60px;">
          <el-button  type="primary" round :label="changeMenuState" @click="handleMenuChange"><i id="headerElIconArrow" class="el-icon-menu"></i></el-button>
        </el-radio-group>-->
       </div>
    </el-col>
    <el-col :span="21"><div class="grid-content">
      <el-menu :default-active="activeIndex" class="el-menu-demo" style="height: 50px"
               mode="horizontal"
               @select="handleSelect"
               background-color="#21649b"
               text-color="#fff"
               active-text-color="#fff">
        <el-menu-item index="4" style="float:right;height: 50px;"><a style="display: block;text-decoration: none;line-height: 50px;" href="http://127.0.0.1:7001/cmca/home/index"><img src="./../assets/images/home.png" style="padding: 0px 5px">主菜单</a></el-menu-item>
      </el-menu>
    </div>
    </el-col>
  </el-row>
</template>
<script>

   export default {
     data() {
       return {
         activeIndex: '1',
         //isCollapse:false,
         //changeMenuState:false,
       };
     },
     methods:{
       handleSelect(key, keyPath) {
         console.log(key, keyPath);
       },
       add(){
         this.$store.commit('increment');
       }
      /* handleMenuChange(){
         if(this.changeMenuState){
           this.changeMenuState=false;
           this.isCollapse=this.changeMenuState;
         }else{
           this.changeMenuState=true;
           this.isCollapse=this.changeMenuState;
         }
         let data = {
           isCollapse: this.isCollapse,
           changeMenuState:this.changeMenuState

         }

         this.$emit('listen', data)
       }*/
     },
     computed:{
       count(){
         return this.$store.state.count;
       }
     }
   }
</script>

<style>
.header-log-style{
  text-align: center;
/*
  background: #21649b;
*/
  border-radius:0px;
  height: 50px;
}
  .header-log-style img{
    padding:5px;
  }
  .el-button.is-round{
    border-radius:0px;
  }
</style>

