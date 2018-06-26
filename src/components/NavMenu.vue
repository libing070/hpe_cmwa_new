<template>
  <div class="sidebar">
    <el-menu :default-active="elmenuDefaultActive"
             class="el-menu-vertical-demo el-menu-main"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航</span>
        </template>
        <el-menu-item-group>
<!--
           <el-menu-item index="1-1" @click="jump('1-1')"> <i class="el-icon-star-off"></i>选项1</el-menu-item>
-->
         <!-- <router-link to="/hpe/welcome" href="javascript:void();">
            <el-menu-item index="1-1">选项1</el-menu-item>
          </router-link>-->
          <el-menu-item class="el-menu-item"  index="1-2" @click="jump('1-2','工作台')"> <i class="el-icon-document"></i>工作台</el-menu-item>
          <el-menu-item class="el-menu-item" index="1-3" @click="jump('1-3','审计发现')"> <i class="el-icon-search"></i>审计发现</el-menu-item>
          <el-menu-item class="el-menu-item" index="1-4" @click="jump('1-4','审计线索')"> <i class="el-icon-view"></i>审计线索</el-menu-item>

<!--
          <el-menu-item index="1-10" @click="jump('1-10','审计点配置')"> <i class="el-icon-setting"></i>审计点配置</el-menu-item>
-->

        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </div>
</template>
<script>

  import {commonMethods} from './../utils/common'
  import {cacheHelper} from './../utils/cacheHelper'
  export default {
    props: ['MenuStateData'],
    data() {
      return {
        elmenuDefaultActive:'1-2',
        isCollapse: false,
      };
    },
    mounted(){
     this.elmenuDefaultActive=cacheHelper.GetCacheByKey("elmenuDefaultActive")==null?'1-2':cacheHelper.GetCacheByKey("elmenuDefaultActive").index;
    },
    watch: {
      MenuStateData(newVal){
        this.isCollapse=newVal;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      jump(index,name){
        let path="";
        if(index=='1-1'){
          path="/hp/welcome";
        }else if(index=='1-2'){
          this.loadConsoleData();
          path="/hp/console";
        }else if(index=='1-3'){
          path="/hp/auditFinding";
        }else if(index=='1-4'){
          path="/hp/auditTrail";
        }else if(index=='1-10'){
          path="/hp/auditPoint";
        }
        let params={path:path,name:name};
        this.$root.Bus.$emit('navBreadInfo',params);
        this.$router.push({path:path});
        cacheHelper.SetCacheByKey("elmenuDefaultActive",{"index":index,'path':path,'name':name});
        this.$store.commit("setElmenuDefaultActive",index);
        this.$store.commit('setAuditTitleBread');//菜单切换将三级面包屑去掉


      },
      loadConsoleData(){//菜单切换console 请求后台加载对应的数据
        this.$axios.post('/hpe/getDomainInfos', Qs.stringify({
          "taskCode":cacheHelper.GetCacheByKey("taskCode")
        })).then(response => {
          let getDomainInfos=response.data;
          if(getDomainInfos.length>0){
            this.centerDialogVisible=false;
            this.$root.Bus.$emit('getDomainInfos',getDomainInfos);
            commonMethods.initNiceScroll('#viewportdiv','#wrapperdiv');
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style>
  body .el-menu-item:focus,
  body .el-menu-item:hover,
  body .el-submenu__title:hover,
  body .el-submenu__title:focus,
  body .el-menu-item .is-active{
    background-color: rgb(33, 100, 155);
  }
  .el-menu-vertical-demo{
    background-color:rgb(42, 75, 107)

  }
  .el-menu .el-menu--inline{
    background-color:rgb(42, 75, 107);
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
  }
  .el-submenu .el-menu-item{
    min-width:170px;
  }

</style>
