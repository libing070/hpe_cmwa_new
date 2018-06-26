<template>
<div>
  <el-dialog title=""
             width="25%"
             :visible.sync="centerDialogVisible"
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             :show-close="false">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <span v-if="responseData[0].resData.length!=0">
       <span v-for="(item,index) in responseData" :key="index">
         <el-tab-pane v-bind:label="item.tabPaneLabel" v-bind:name="item.activeName">
          <dialog-model-form v-bind:onDialogModelForm="[activeName,item.resData,item.defaultTaskCode]"
                             v-on:currChooseTaskCode="currChooseTaskCodeFun"
                             v-on:currChooseTaskCode2="currChooseTaskCodeFun2"
                             v-on:currChooseTaskCode3="currChooseTaskCodeFun3">
          </dialog-model-form>
         </el-tab-pane>
       </span>
      </span>
    </el-tabs>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible()">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
import DialogModelForm from './forms/DialogModelForm'
import {cacheHelper} from './../utils/cacheHelper'
import {mockData} from './../utils/mock'
import {commonMethods} from './../utils/common'
  export default {
    data() {
      return {
        activeName: 'first',
        centerDialogVisible: false,//弹出层 默认隐藏
     /*  responseData:[
          {
            type:'sox',
            tabPaneLabel:'SOX审计',
            activeName:'third',
            defaultTaskCode:'',
            resData:[]
          },
          {
            type:'jz',
            tabPaneLabel:'经济责任审计',
            activeName:'first',
            defaultTaskCode:'',
            resData:[]
          },
          {
            type:'jy',
            tabPaneLabel:'经营业绩审计',
            activeName:'second',
            defaultTaskCode:'',
            resData:[]
          }
        ],*/
        responseData:[
          {
            type:'jz',
            tabPaneLabel:'经济责任审计',
            activeName:'first',
            defaultTaskCode:'',
            resData:[]
          },
        ],
        code1:'',
        code2:'',
        code3:'',
      }
    },
    components:{
      DialogModelForm:DialogModelForm,
    },
    mounted() {
      this.loginMsgbox();
      this.initData('first');

    },
    methods:{
      loginMsgbox(){
        this.centerDialogVisible = true;//显示弹出层
      },
      handleClick(tab, event) {
        let currTabPane=event.target.getAttribute('id').replace("tab-","");//获取当前tab点击的id
      },
      initData(currTabPane){
        this.$axios.get('/hpe/getAuditTaskInitData').then(response => {
            cacheHelper.SetCacheByKey("auditTaskInitData",response.data);
            let auditTaskInitData=cacheHelper.GetCacheByKey("auditTaskInitData");
         /*   for(var i=0;i<this.responseData.length;i++){
              if('jz'==this.responseData[i].type){
                this.responseData[i].resData=auditTaskInitData.jz;
                this.responseData[i].defaultTaskCode=auditTaskInitData.jz[0].taskCode;
                this.code1=auditTaskInitData.jz[0].taskCode;
              }else if('jy' == this.responseData[i].type) {
                this.responseData[i].resData=auditTaskInitData.jy;
                this.responseData[i].defaultTaskCode=auditTaskInitData.jy[0].taskCode;
                this.code2=auditTaskInitData.jy[0].taskCode;
              }else if('sox' == this.responseData[i].type) {
                this.responseData[i].resData=auditTaskInitData.sox;
                this.responseData[i].defaultTaskCode=auditTaskInitData.sox[0].taskCode;
                this.code3=auditTaskInitData.sox[0].taskCode;
              }
            }*/
            this.responseData[0].resData=auditTaskInitData.jz;
            this.responseData[0].tabPaneLabel="经济责任审计";
            this.responseData[0].activeName="first";
            this.responseData[0].defaultTaskCode=auditTaskInitData.jz[0].taskCode;
            this.code1=auditTaskInitData.jz[0].taskCode;
          })
          .catch(err => {
            console.log(err);
          });

        /*************模拟数据**************/
        /*cacheHelper.SetCacheByKey("auditTaskInitData",mockData.getAuditTaskInitData());
        let auditTaskInitData=cacheHelper.GetCacheByKey("auditTaskInitData");
        for(var i=0;i<this.responseData.length;i++){
          if('jz'==this.responseData[i].type){
            this.responseData[i].resData=auditTaskInitData.jz;
            this.responseData[i].defaultTaskCode=auditTaskInitData.jz[0].taskCode;
            this.code1=auditTaskInitData.jz[0].taskCode;
          }else if('jy' == this.responseData[i].type) {
            this.responseData[i].resData=auditTaskInitData.jy;
            this.responseData[i].defaultTaskCode=auditTaskInitData.jy[0].taskCode;
            this.code2=auditTaskInitData.jy[0].taskCode;
          }else if('sox' == this.responseData[i].type) {
            this.responseData[i].resData=auditTaskInitData.sox;
            this.responseData[i].defaultTaskCode=auditTaskInitData.sox[0].taskCode;
            this.code3=auditTaskInitData.sox[0].taskCode;
          }
        }*/

        /*************模拟数据**************/

      },
      currChooseTaskCodeFun(currChooseTaskCode){
        this.code1= currChooseTaskCode;
      },
      currChooseTaskCodeFun2(currChooseTaskCode){
        this.code2= currChooseTaskCode;
      },
      currChooseTaskCodeFun3(currChooseTaskCode){
        this.code3= currChooseTaskCode;
      },
      dialogFormVisible(){
        let currTabPane=this.activeName;
        let code="";
        if("first"==currTabPane){
          code=this.code1
         // console.log(this.code1);
        }else if("second"==currTabPane){
          //console.log(this.code2);
          code=this.code2;
        }else if("third"==currTabPane){
         // console.log(this.code3);
          code=this.code3;
        };
        cacheHelper.SetCacheByKey("taskCode",code);
        this.$axios.post('/hpe/getDomainInfos', Qs.stringify({
          "taskCode":cacheHelper.GetCacheByKey("taskCode")
        })).then(response => {
          let getDomainInfos=response.data;
          if(getDomainInfos.length>0){
            this.centerDialogVisible=false;
            this.$root.Bus.$emit('getDomainInfos',getDomainInfos);
            commonMethods.initNiceScroll('#viewportdiv','#wrapperdiv');
          }else{
            this.$message({
              message: '暂无数据',
              type: 'warning'
            });
          }
        }).catch(err => {
            console.log(err);
          });
        /*************模拟数据**************/
        /*let getDomainInfos=mockData.getDomainInfos();
        if(getDomainInfos.length>0){
          this.centerDialogVisible=false;
          this.$root.Bus.$emit('getDomainInfos',getDomainInfos);
          commonMethods.initNiceScroll();
        }*/
        /*************模拟数据**************/
      }
    }
  }
</script>

