<template>
    <div class="main-show-wrap-div console"  style="padding:5px" id="viewportdiv">
      <div id="wrapperdiv">
      <el-row :gutter="0" class="console-el-row">
        <el-col :span="24">
            <el-card class="box-card console-el-row-card" style="">
              <div class="text item">
              <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
                <el-form-item label="审计任务：" class="console-form-inline-item">
                  <span> {{this.$store.state.dialogAuditTaskParams.taskName}}</span>
                </el-form-item>
                <el-form-item label="|" class="console-form-inline-item">
                  <span></span>
                </el-form-item>
                <el-form-item label="审计单位："  class="console-form-inline-item">
                  <span>{{this.$store.state.dialogAuditTaskParams.cityName}}移动&nbsp;&nbsp;，
                        {{this.$store.state.dialogAuditTaskParams.cityName}}TD分公司 </span>
                </el-form-item>
                <el-form-item label="|" class="console-form-inline-item">
                  <span></span>
                </el-form-item>
                <el-form-item label="被审计人："class="console-form-inline-item">
                  <span>杨阳</span>
                </el-form-item>
                <el-form-item label="|" class="console-form-inline-item">
                  <span></span>
                </el-form-item>
                <el-form-item label="职位：" class="console-form-inline-item">
                  <span>--</span>
                </el-form-item>
                <el-form-item label="|" class="console-form-inline-item">
                  <span></span>
                </el-form-item>
                <el-form-item label="时间：" class="console-form-inline-item">
                  <span>{{this.$store.state.dialogAuditTaskParams.beginTime}}</span><span>至</span><span>{{this.$store.state.dialogAuditTaskParams.endTime}}</span>
                </el-form-item>
              </el-form>
              </div>
              <div class="text item">
                <el-form style="margin: -15px 0px"  size="mini">
                  <el-form-item>
                    <el-button type="primary" @click="onFormSubmit('数据上传')">数据上传</el-button>
                    <el-button type="primary" @click="onFormSubmit('基础数据下载')">基础数据下载</el-button>
                    <el-button type="primary" @click="onFormSubmit('自主分析')">自主分析</el-button>
                    <el-button type="primary" @click="onFormSubmit('报表定制')">报表定制</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-card>
        </el-col>
      </el-row>
        <el-row :gutter="5" class="console-el-row">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div class="top" style="padding: 5px 10px">
                  <div class="left" style="float: left;width: 40%">
                    <h3>团队任务：</h3>
                    <div style="font-size: 14px;padding: 10px 0px">
                      <p>杨阳 &nbsp;&nbsp;组员您好</p>
                      <p>您本次团队的任务如下</p>
                    </div>
                  </div>
                  <div class="right" style="float: left;width: 60%">
                    <div class="top" style="height: 50px;width: 100%">
                      <div style="float: left">
                        <img src="./../assets/images/leftorright_blue.png"/>
                      </div>
                      <div  style="float: left;font-size: 14px;padding-left: 20px;width: 70%">
                        <span>审计发现 已完成：3 ‖ 10</span>
                         <el-progress :percentage="33"></el-progress>
                      </div>
                    </div>
                    <div class="bottom" style="height: 50px;width: 100%">
                      <div style="float: left">
                        <img src="./../assets/images/leftorright_orange.png"/>
                      </div>
                      <div  style="float: left;font-size: 14px;padding-left: 20px;width: 70%">
                        <span>审计线索 已完成：2 ‖ 8</span>
                        <el-progress :percentage="25" color="#F5D76E"></el-progress>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table">
                  <el-table
                    :data="tableData"
                    @cell-click="auditPointClick"
                    style="width: 100%">
                    <el-table-column
                      prop="tablelingyu"
                      label="领域">
                    </el-table-column>
                    <el-table-column
                      prop="tableshenjidian"
                      label="审计点">
                      <template slot-scope="scope">
                        <a href="javascript:void(0)">18个</a>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="tableok"
                      label="已完成">
                      <template slot-scope="scope">
                        <a href="#">5个</a>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="tableno"
                      label="未完成">
                      <template slot-scope="scope">
                        <a href="#">13个</a>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div class="top" style="padding: 5px 10px">
                  <div class="left" style="float: left;width: 40%">
                    <h3>个人任务：</h3>
                    <div style="font-size: 14px;padding: 10px 0px">
                      <p>杨阳 &nbsp;&nbsp;组员您好</p>
                      <p>您本次的审计任务如下</p>
                    </div>
                  </div>
                  <div class="right"  style="float: left;width: 60%">
                    <div class="top" style="height: 50px">
                      <div style="float: left">
                        <img src="./../assets/images/leftorright_blue.png"/>
                      </div>
                      <div  style="float: left;font-size: 14px;padding-left: 20px;width: 70%">
                        <span>审计发现 已完成：3 ‖ 10</span>
                        <el-progress :percentage="33"></el-progress>
                      </div>
                    </div>
                    <div class="bottom" style="height: 50px">
                      <div style="float: left">
                        <img src="./../assets/images/leftorright_orange.png"/>
                      </div>
                      <div  style="float: left;font-size: 14px;padding-left: 20px;width: 70%">
                        <span>审计线索 已完成：2 ‖ 8</span>
                        <el-progress :percentage="25" color="#F5D76E"></el-progress>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table">
                  <el-table
                    :data="tableData1"
                    @cell-click="auditPointClick1"
                    style="width: 100%">
                    <el-table-column
                      prop="tablelingyu1"
                      label="领域">
                    </el-table-column>
                    <el-table-column
                      prop="tableshenjidian1"
                      label="审计点">
                      <template slot-scope="scope">
                        <a href="#">18个</a>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="tableok1"
                      label="已完成">
                      <template slot-scope="scope">
                        <a href="#">5个</a>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="tableno1"
                      label="未完成">
                      <template slot-scope="scope">
                        <a href="#">13个</a>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      <el-row :gutter="0" class="console-el-row">
        <el-col :span="24">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>经责审计框架</span>
            </div>
            <div  class="text item ">
              <el-row :gutter="0" class="console-el-row">
                <span v-for="(item,index) in domainInfoData" :key="index">
                     <el-col :span="6" class="console-el-row-col-6">
                  <el-card class="box-card console-domain-info-style" shadow="hover"  v-bind:style="item.bgcolor">
                    <div  class="text item" style="text-align: left;padding-top:5px;padding-left:10px;font-weight: bold">
                      <a href="#" @click="onDialogModelAudits([{'titleName':item.firDomainName,'firDomain':item.firDomain,'firDomainName':item.firDomainName}])"  style="text-decoration:none;color: #303133">{{index+1 }}.{{item.firDomainName}}</a>
                    </div>
                    <div style="text-align: left;font-size:12px;padding-top: 5px;padding-left:15px;height: 40px">
                      <span v-for="(it,i) in item.secDomainList" :key="i">
                        <el-tooltip class="item" effect="dark" v-bind:content="it.secDomainName" placement="top-start" :popper-class="toolTipClass">
                           <a href="#"  style="text-decoration:none;color: #303133">
                             <span>{{index+1}}.{{i+1}}</span>
                             <span @click="onDialogModelAudits([{'titleName':it.secDomainName,'firDomain':item.firDomain,'secDomain':it.secDomain,'secDomainName':it.secDomainName}])">{{(it.secDomainName.length>5)?((it.secDomainName.substring(0,5))+'...'):(it.secDomainName)}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <span v-if="(i+1)%2==0"><br/></span>
                           </a>
                        </el-tooltip>
                      </span>
                    </div>
                    <div style="text-align: center;margin-top: 10px">
                       <a href="#"><img @click="onDialogModelAudits([{'titleName':item.firDomainName,'firDomain':item.firDomain,'firDomainName':item.firDomainName}])" v-bind:src="item.imageurl" width="60px" height="60px"/></a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-tooltip class="item" effect="dark" content="审计发现" placement="top-start" :popper-class="toolTipClass">
                        <a href="#" style="text-decoration:none; " @click="onDialogModelAudits([{'titleName':'审计发现','firDomain':item.firDomain,'auditType':1}])"><img src="./../assets/images/icon/faxian.png"/>&nbsp;&nbsp;<span>{{item.discoverNum}}</span></a>
                       </el-tooltip>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <el-tooltip class="item" effect="dark" content="审计线索" placement="top-start" :popper-class="toolTipClass">
                        <a href="#"  style="text-decoration:none; "  @click="onDialogModelAudits([{'titleName':'审计线索','firDomain':item.firDomain,'auditType':2}])"> <img src="./../assets/images/icon/xiansuo.png"/>&nbsp;&nbsp;<span>{{item.clueNum}}</span></a>
                      </el-tooltip>
                    </div>
                  </el-card>
                </el-col>
                </span>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </div>
      <!--** 弹出层**-->
      <dialog-model-audits :dialogModelAuditsFun="[titleName,getAuditData,dialogVisible]"></dialog-model-audits>
    </div>
</template>
<style>
  .main-show-wrap-div .console-el-row{
    margin-bottom: 5px;
  }
  .console .el-card__body{
    padding: 10px;
  }
  .main-show-wrap-div .console-el-row .console-form-inline-item{
  margin-right: 20px;
    color: black;
    font-weight: bold;
}
  .box-card-header-title{
    font-size: 20px;font-weight: bold
  }
  .slider1 img{
    width:50px;
  }
  .slider1 span{
    padding-left: 10px;
  }
  .console-el-row-col-6{
    padding: 5px;
  }

  .console-el-row .console-el-row-card{
    background-color: rgb(245, 245, 245);
  }
 .console-domain-info-style{
 border-radius:10px;min-height: 180px
 }
</style>
<script>

  import './../assets/js/jquery.bxslider'
  import './../assets/css/jquery.bxslider.css'
  import {cacheHelper} from './../utils/cacheHelper'
  import {commonMethods} from './../utils/common'
  import DialogModelAudits from './../components/forms/DialogModelAudits'
  export default {
    data() {
      return {
        activeName1: 'second',
        activeName2: 'first',
        chooseLoadCharts1:'1-2',
        chooseLoadCharts2:'2-2',
        tabPosition:'left',
        toolTipClass: 'page-login-toolTipClass',
        dialogAuditTaskParams:{
          taskCode:'',
          taskName:'',
          beginTime:'',
          endTime:'',
          cityName:''
        },
        formInline: {
          user: '',
          region: ''
        },

        tableData: [{
          tablelingyu: '1 个',
          tableshenjidian: '18 个',
          tableok: '5 个',
          tableno: '13 个'
        }],
        tableData1: [{
          tablelingyu1: '1 个',
          tableshenjidian1: '18 个',
          tableok1: '5 个',
          tableno1: '13 个'
        }],
        domainInfoData:[],
        dialogModelAuditData:[],
        getAuditData:[],
        dialogVisible:false,
        titleName:''
      }
    },
    name: "console",
    computed:{
      secDomainNameStr:function(){
        let str=[];
      }
    },
    components:{
      DialogModelAudits:DialogModelAudits
    },
    mounted() {
    },
    created(){
      this.getDomainInfos();

    },
    inject:  ['fathernum'],
    methods: {

      handleClick(id){
        if(id=='1-2'){
          this.chooseLoadCharts1=id;
        }else if(id=='2-2'){
          this.chooseLoadCharts2=id;
        }

      },
      getDomainInfos(){
          this.$root.Bus.$on('getDomainInfos', res => {  //res是从DialogModel.vue传过来的
          this.domainInfoData=res;
          var itemsColorList=[ '#F4C02F' , '#8EDA90' , '#45C4ED','#FF8755' ,'#F4C02F' , '#8EDA90' , '#45C4ED','#FF8755'   ];
          for(let i=0;i<this.domainInfoData.length;i++){
            this.domainInfoData[i].imageurl=require('../assets/images/icon/domain_'+this.domainInfoData[i].firDomain+'.png');
            this.domainInfoData[i].bgcolor='background-color:'+itemsColorList[i];
/*
            this.domainInfoData[i].bgcolor='background-color:'+itemsColorList[Math.floor(Math.random()*itemsColorList.length)];
*/
          }
        });
      },
      onDialogModelAudits([...data]){
        this.dialogModelAuditData=[];
        for(var i of data){
          this.dialogModelAuditData.push(i);
        }
        this.titleName=this.dialogModelAuditData[0].titleName;
        this.$axios.post('/hpe/getAuditDetailInfos', Qs.stringify({
          'taskCode':cacheHelper.GetCacheByKey("taskCode"),
          'firDomain':this.dialogModelAuditData[0].firDomain,
          'secDomain':this.dialogModelAuditData[0].secDomain,
          'auditType':this.dialogModelAuditData[0].auditType
        })).then(response => {
          this.getAuditData=response.data;
          this.dialogVisible=true;
        }).catch(err => {
          console.log(err);
        });

      },
      onFormSubmit(text) {
        this.$confirm(text+'是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      auditPointClick(row, column, cell, event){
        this.titleName='';
        let typeCode="";
        if("tableshenjidian"==column.property){
          typeCode="";
        }else if("tableok"==column.property){
          typeCode="Y";
        }else if ("tableno"==column.property){
          typeCode="N";
        }else{
          return ;
        }
        this.$axios.post('/hpe/getAuditDetailInfos', Qs.stringify({
          'taskCode':cacheHelper.GetCacheByKey("taskCode"),
          'typeCode':typeCode
        })).then(response => {
          if(response.data.length>0){
            this.getAuditData=response.data;
            this.dialogVisible=true;
          }else{
            this.$message({
              message: '暂无数据',
              type: 'warning'
            });
          }
        }).catch(err => {
          console.log(err);
        });
      },
      auditPointClick1(row, column, cell, event){
        this.titleName='';
        let typeCode="";
        if("tableshenjidian1"==column.property){
          typeCode="";
        }else if("tableok1"==column.property){
          typeCode="Y";
        }else if ("tableno1"==column.property){
          typeCode="N";
        }else{
          return ;
        }
        this.$axios.post('/hpe/getAuditDetailInfos', Qs.stringify({
          'taskCode':cacheHelper.GetCacheByKey("taskCode"),
          'typeCode':typeCode
        })).then(response => {
          if(response.data.length>0){
            this.getAuditData=response.data;
            this.dialogVisible=true;
          }else{
            this.$message({
              message: '暂无数据',
              type: 'warning'
            });
          }

        }).catch(err => {
          console.log(err);
        });
      },

    }
  }
</script>
