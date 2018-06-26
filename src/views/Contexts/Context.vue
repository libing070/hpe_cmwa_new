<template>
  <div   style="padding:5px" >
    <el-collapse v-model="activeName" accordion style="padding-bottom: 10px;">
      <el-collapse-item name="1">
        <template slot="title">
          <div  style="padding: 0px 10px">
          审计点：{{this.getAuditData.auditName}}  <el-button style="margin-top: 10px;float: right;margin-right: 50px" type="primary" size="mini" @click="onContextShowDetil($event)" >审计指南</el-button>
          </div>
        </template>
        <div  style="padding: 0px 10px">模型结果： {{this.getAuditData.modelConclusion}}
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="main-show-wrap-div" id="viewportdiv">
    <iframe class="contextIframe" id="wrapperdiv" style="height: 90%;width: 100%" src="">
    </iframe>
    </div>
    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="50%">
      <el-tabs v-model="activeName1" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <el-form ref="form" :model="sizeForm1" label-width="150px" size="mini">

            <el-form-item label="业务流程：">
              {{auditDetailCode.domain}}

            </el-form-item>
            <el-form-item label="会计科目：">
              {{auditDetailCode.accountSubject}}
            </el-form-item>
            <el-form-item label="信息系统：">
              {{auditDetailCode.informationSyetem}}
            </el-form-item>
            <el-form-item label="适用范围：">
              {{auditDetailCode.application}}
            </el-form-item>
            <el-form-item label="相关文档：">
              {{auditDetailCode.relatedDocuments}}
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="分析思路" name="second">
          <el-form ref="form" :mode="sizeForm2" label-width="150px" size="mini">
            <el-form-item label="分析思路：">
              {{auditDetailCode.analysisMethod}}
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="数据支撑情况" name="third">
          <el-form ref="form" :mode="sizeForm3" label-width="150px" size="mini">
            <el-form-item label="数据支撑程度：">
              {{auditDetailCode.dataSupport}}
            </el-form-item>
            <el-form-item label="总部来源表：">
              {{auditDetailCode.headSourceTable}}
            </el-form-item>
            <el-form-item label="省份数据来源表：">
              {{auditDetailCode.ProvSourceTable}}
            </el-form-item>
            <el-form-item label="结果表：">
              {{auditDetailCode.resultTable}}
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="审计点结论" name="fourth">
          <el-form ref="form" :mode="sizeForm4" label-width="150px" size="mini">
            <el-form-item label="预期结论：">
              {{auditDetailCode.expectedConclusion}}
            </el-form-item>
            <el-form-item label="审计点介绍：">
              {{auditDetailCode.detailInfo}}
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
  import {commonMethods} from './../../utils/common'
  export default {
    data(){
      return {
        getAuditData:{
          provinceCode:'',
          beforeAcctMonth:'',
          endAcctMonth:'',
          auditId:'',
          taskCode:'',
          auditName:'',
          modelConclusion:''
        },
        auditDetailCode:{

        },
        activeName: '1',
        dialogVisible:false,
        activeName1: 'first',
        sizeForm1: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        sizeForm2: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        sizeForm3: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        sizeForm4: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },


      }
    },
    mounted(){
      this.getAuditData.provinceCode=this.$store.state.contextParams.provinceCode;
      this.getAuditData.beforeAcctMonth=this.$store.state.contextParams.beforeAcctMonth;
      this.getAuditData.endAcctMonth=this.$store.state.contextParams.endAcctMonth;
      this.getAuditData.auditId=this.$store.state.contextParams.auditId;
      this.getAuditData.taskCode=this.$store.state.contextParams.taskCode;
      this.getAuditData.auditName=this.$store.state.contextParams.auditName;
      this.getAuditData.modelConclusion=this.$store.state.contextParams.modelConclusion;
   $(".contextIframe").attr("src",'http://47.104.248.4:90/cmwa/auditTask/detail?provinceCode='+this.getAuditData.provinceCode+
     '&beforeAcctMonth='+this.getAuditData.beforeAcctMonth+
     '&endAcctMonth='+this.getAuditData.endAcctMonth+
     '&auditId='+ this.getAuditData.auditId+
     '&taskCode='+this.getAuditData.taskCode);
    },
    created (){
    },
    methods:{
      onContextShowDetil(event){
        this.dialogVisible=true;
        event.cancelBubble = true;//阻止时间冒泡

        this.loadDetailForm(this.getAuditData.auditId);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      loadDetailForm(auditCode){
        this.$axios.post('/hpe/getAuditCodeDetail', Qs.stringify({
          'auditCode':auditCode,

        })).then(response => {
          if(response.data!=null){
            this.auditDetailCode=response.data;
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped>

</style>
