<template>
  <div class="dialog-model-audit-div">
    <el-dialog style=""
      id="viewportdiv"
      :title="dialogModelAuditsFun[0]"
      :visible.sync="dialogVisible"
      :close-on-click-modal="true"
      :modal-append-to-body="true"
       width="50%">
      <div class="dialog-model-audit" id="wrapperdiv">
        <span  v-for="(item,index) in dialogModelAuditsFun[1]" :key="index">
        <el-row :gutter="0" style=";border-radius:4px;padding-bottom: 5px">
        <el-col :span="2" style="padding:0px;border-radius:0px">
          <div class="grid-content bg-purple" style="padding:0px;background-color: rgb(64, 158, 255);line-height: 70px; text-align: center;font-size: 20px; font-family: inherit;">{{index+1}}</div>
        </el-col>
        <el-col :span="18" style="padding:0px;border-radius:0px">
          <div class="grid-content bg-purple" style="border-radius:0px;padding:0px;background-color: rgb(245, 245, 245);line-height: 70px;height:70px">
            <div style="height: 100%;line-height: 100%;padding: 10px">
              <div style="padding-bottom: 20px;font-weight: bold;font-size: 15px;"><span>{{item.auditName}}</span></div>
              <span v-if="item.modelConclusion!=null">
              <div style="padding-bottom: 20px;">
                <el-tooltip class="item" effect="dark" placement="top" :popper-class="toolTipClass">
                  <div slot="content" style="width: 450px;color: black">
                    {{item.modelConclusion}}
                  </div>
                <span>模型结论：<span>{{item.modelConclusion!=null?(screenWidth>=1920?(item.modelConclusion.length>=45?item.modelConclusion.substring(0,45)+'...':item.modelConclusion): (item.modelConclusion.length>=30?item.modelConclusion.substring(0,30)+'...':item.modelConclusion)):''}}</span></span>
              </el-tooltip>
              </div>
<!--
              <div style="padding-bottom: 20px;"><span>审计结论：</span></div>
-->         </span>
            </div>
          </div>
        </el-col>
        <el-col :span="4" style="padding:0px;border-radius:0px">
          <div class="grid-content bg-purple" style="text-align: center;padding:0px;background-color: rgb(245, 245, 245);line-height: 70px">
            <el-button type="danger" size="mini" @click="onAuditDetilHtml({'provinceCode':item.provinceCode,'beginTime':item.beginTime,'endTime':item.endTime,'auditCode':item.auditCode,'taskCode':'1','auditName':item.auditName,'modelConclusion':item.modelConclusion})">查看详情</el-button>
          </div>
        </el-col>
      </el-row>
        </span>
      </div>
    </el-dialog>
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
  .dialog-model-audit .bg-purple-dark {
    background: #ffffff;
  }
  .dialog-model-audit .bg-purple {
    background: #ffffff;
  }
  .dialog-model-audit .bg-purple-light {
    background: #ffffff;
  }
  .dialog-model-audit .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .dialog-model-audit .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .dialog-model-audit-div .el-dialog{
        max-height: -moz-calc(65% - 50px);
        max-height: -webkit-calc(65% - 50px);
        max-width: calc(100% - 50px);
        display: flex;
        flex-direction: column;
      }
  .dialog-model-audit-div .el-dialog>.el-dialog__body{
    overflow :auto
     }

 .dialog-model-audit{
   height: 350px\9;
   overflow :auto\9;
 }

</style>


<script>
  import {cacheHelper} from '../../utils/cacheHelper'
  import {commonMethods} from '../../utils/common'

  export default {
    props: ['dialogModelAuditsFun'],
    data() {
      return {
        dialogModelAuditData:[{
          'titleName':'',
        }],
        getAuditData:[],
        dialogVisible:false,
        screenWidth:'',
        toolTipClass: 'page-login-toolTipClass'
      };
    },
    mounted() {
     let mb= this.myBrowser()
      /*if(mb!="IE"){
        $(".dialog-model-audit-div").find('.el-dialog').css(" max-height",'calc(65% - 50px)');
        $(".dialog-model-audit-div").find('.el-dialog').css(' max-width','calc(100% - 50px)');
        $(".dialog-model-audit-div").find('.el-dialog').css(' display','flex');
        $(".dialog-model-audit-div").find('.el-dialog').css('flex-direction','column');
        $(".el-dialog__body").css('overflow','auto');
      }*/
      this.screenWidth=window.screen.width;
     // this.dialogVisible=this.dialogModelAuditsFun[2];
    },
    created(){

    },
    watch:{
      dialogModelAuditsFun([...data]){
        this.dialogVisible=data[2];
       commonMethods.initNiceScroll('#viewportdiv','#wrapperdiv');


      }

    },
    methods: {
      onAuditDetilHtml(params_){
        this.dialogVisible=false;
        this.$store.commit('changeAuditTitleBread');
        this.$store.commit('setContextParams', params_);
        let  path="/hp/contexts";
        this.$router.push({path:path});
      },
      //获取浏览器类型
      myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
      return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
      return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 &&
      !isOpera) {
      return "IE";
    }; //判断是否IE浏览器
  }

    }
  };
</script>

