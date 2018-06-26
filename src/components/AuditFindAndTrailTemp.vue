<template>
  <div class="main-show-wrap-div audit-find-trail-temp" id="">
    <el-row :gutter="0" class="console-el-row">
      <el-col :span="24">
        <el-card class="box-card" shadow="hover" id="elCard">
          <div slot="header" class="clearfix">
            <div>经责审计框架</div>
          </div>
          <div  class="text item ">
            <span v-if="domainInfoData.length>4">
            <div class="flash4">
              <ul>
                <li :class="{'first':index==0}" :style="flash4UlLiWidth" v-for="(item,index) in domainInfoData" :key="index" @mouseover="mouseoverShow()">
                  <div class="imgTop">
                    <div style="width:100%;height: 180px;min-width:350px;cursor:pointer" class="imgTopDiv tm" @click="onGetAuditDetailInfo(item.firDomain)">
                      <el-card  class="box-card" shadow="hover"  v-bind:style="item.bgcolor" style="height: 100%;width: 100%">
                        <div  class="text item" style="text-align: left;padding-top:5px;padding-left:10px;font-weight: bold">
                          <a href="#"  style="text-decoration:none;color: #303133">{{index+1 }}.{{item.firDomainName}}</a>
                        </div>
                        <div style="text-align: left;font-size:14px;padding-top: 5px;padding-left:15px;height: 100%">
                            <span v-for="(it,i) in item.secDomainList" :key="i">
                              <el-tooltip class="item" effect="dark" placement="top">
                                   <div slot="content">
                                     {{it.secDomainName}}
                                   </div>
                                 <a href="#"  style="text-decoration:none;color: #303133;font-size: 12px">
                                   <span>{{index+1}}.{{i+1}}</span>
                                   <span>{{it.secDomainName.length>5?it.secDomainName.substring(0,5)+'...':it.secDomainName}}</span>&nbsp;&nbsp;
                                   <span v-if="(i+1)%2==0"><br/></span>
                                 </a>
                              </el-tooltip>
                            </span>
                        </div>
                        <div style="margin-top: 20px;padding-left: 15px;">
                          <a href="#"><img  v-bind:src="item.imageurl" width="60px" height="60px"/></a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a href="#" style="text-decoration:none;"><img src="./../assets/images/icon/faxian.png"/>&nbsp;&nbsp;<span>{{item.discoverNum}}</span></a>
                        </div>
                      </el-card>

                  </div>
                  </div>
                </li>
              </ul>
            </div>
            </span>
            <span v-else>
               <el-row :gutter="0" class="console-el-row">
                <span v-for="(item,index) in domainInfoData" :key="index">
                  <el-col :span="6" class="audit-find-trail-el-row-col-6" @click.native="onGetAuditDetailInfo(item.firDomain)">
                    <el-card class="box-card audit-find-trail-style" shadow="hover"  v-bind:style="item.bgcolor">
                      <div  class="text item" style="text-align: left;padding-top:5px;padding-left:10px;font-weight: bold">
                        <a href="#"  style="text-decoration:none;color: #303133">{{index+1 }}.{{item.firDomainName}}</a>
                      </div>
                      <div style="text-align: left;font-size:12px;padding-top: 5px;padding-left:15px;height: 40px">
                        <span v-for="(it,i) in item.secDomainList" :key="i">
                          <el-tooltip class="item" effect="dark" v-bind:content="it.secDomainName" placement="top-start">
                             <a href="#"  style="text-decoration:none;color: #303133">
                               <span>{{index+1}}.{{i+1}}</span>
                               <span>{{(it.secDomainName.length>5)?((it.secDomainName.substring(0,5))+'...'):(it.secDomainName)}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               <span v-if="(i+1)%2==0"><br/></span>
                             </a>
                          </el-tooltip>
                        </span>
                      </div>
                      <div style="text-align: center;margin-top: 10px">
                         <a href="#"><img v-bind:src="item.imageurl" width="60px" height="60px"/></a>
                        &nbsp;<a href="#" style="text-decoration:none; "><span v-if="onGetAuditDetailInfoFun[1]==1"><img src="./../assets/images/icon/faxian.png"/></span><span v-else><img src="./../assets/images/icon/xiansuo.png"/></span>&nbsp;&nbsp;<span>{{onGetAuditDetailInfoFun[1]==1?item.discoverNum:item.clueNum}}</span></a>
                      </div>
                    </el-card>
                </el-col>
                </span>
              </el-row>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
      <el-row :gutter="0" class="console-el-row">
        <el-col :span="24">
          <el-card  class="box-card audit-find-trail-card-list" shadow="hover" id="boxCardViewportdiv">
            <div id="boxCardWrapperdiv" class="audit-find-trail-card-list_">
                <span  v-for="(item,index) in getAuditData" :key="index">
                  <div style="margin-bottom: 5px">
                  <el-row :gutter="0" style=";border-radius:4px;">
                    <el-col :span="2">
                      <div class="grid-content bg-purple" style="background-color: rgb(64, 158, 255);line-height: 70px; text-align: center;font-size: 20px; font-family: inherit;">{{index+1}}</div>
                    </el-col>
                    <el-col :span="18">
                      <div class="grid-content bg-purple" style="padding:0px;background-color: rgb(245, 245, 245);line-height: 70px;height:70px">
                        <div style="height: 100%;line-height: 100%;padding: 10px">
                          <div style="padding-bottom: 15px;font-weight: bold;font-size: 14px;"><span>{{item.auditName}}</span></div>
                          <div style="padding-bottom: 15px;">
                             <el-tooltip class="item" effect="dark" placement="top" :popper-class="toolTipClass">
                               <div slot="content" style="width: 400px">
                                 {{item.modelConclusion}}
                               </div>
                              <span style="font-size: 14px">模型结论：<span>{{item.modelConclusion!=null?(screenWidth>=1920?(item.modelConclusion.length>=85?item.modelConclusion.substring(0,85)+'...':item.modelConclusion): (item.modelConclusion.length>=60?item.modelConclusion.substring(0,60)+'...':item.modelConclusion)):''}}</span></span>
                            </el-tooltip>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="4" style="">
                      <div class="grid-content bg-purple" style="text-align:center;background-color: rgb(245, 245, 245);line-height: 70px">
                        <el-button type="danger" size="mini" @click="onAuditDetilHtml({'provinceCode':item.provinceCode,'beginTime':item.beginTime,'endTime':item.endTime,'auditCode':item.auditCode,'taskCode':'1','auditName':item.auditName,'modelConclusion':item.modelConclusion})">查看详情</el-button>
                      </div>
                    </el-col>
                  </el-row>
                  </div>
                </span>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
  import {commonMethods} from './../utils/common'


  export default {
      props: ['onGetAuditDetailInfoFun'],
      name: "audit-find-and-trail-temp",
      data(){
          return {
          domainInfoData:[],
            getAuditData:[],
            firDomain:'',
            contentParams:{},
            screenWidth:'',
            toolTipClass: 'page-login-toolTipClass',
            flash4UlLiWidth:{
            width:''
            },
            oneLiScrollOpenWidth:'',
            flash4UlLiWidth_:'',
            oneLiScrollOpenWidth_:''
        }
      },
      mounted() {
        this.screenWidth=window.screen.width;

      },
      created(){
        this.getDomainInfos();
      },
      beforeDestroy () {
        //console.group('%c%s', 'color:red', 'beforeDestroy 破前状态===============组件1》')
       },
      methods:{
        getDomainInfos(){
          this.$root.Bus.$off('getAuditFindTrailDomainInfos',this.handle);//防止累加调用 先销毁再触发
          this.$root.Bus.$on('getAuditFindTrailDomainInfos', res => {  //res是从AuditFind.vue or AuditTrail.vue传过来的
            this.domainInfoData=res;
            this.watchCurrScreenWidth(this.domainInfoData.length);

            let itemsColorList=[ '#F4C02F' , '#8EDA90' , '#45C4ED','#FF8755' ,'#F4C02F' , '#8EDA90' , '#45C4ED','#FF8755'    ];
            for(let i=0;i<this.domainInfoData.length;i++){
              this.domainInfoData[i].imageurl=require('../assets/images/icon/domain_'+this.domainInfoData[i].firDomain+'.png');
              this.domainInfoData[i].bgcolor='background-color:'+itemsColorList[i];
            }
            this.firDomain=this.domainInfoData[0].firDomain;
            this.onGetAuditDetailInfo(this.firDomain);


          });


        },
        onGetAuditDetailInfo(firDomain){
          this.$axios.post('/hpe/getAuditDetailInfos', Qs.stringify({
            'taskCode':this.onGetAuditDetailInfoFun[0],
            'firDomain':firDomain,
            'auditType':this.onGetAuditDetailInfoFun[1]
          })).then(response => {
            if(response.data.length>0){
              this.getAuditData=response.data;
              $("#boxCardWrapperdiv").css("height",this.getAuditData.length*100+"px");
              commonMethods.initNiceScroll('#boxCardViewportdiv','#boxCardWrapperdiv');
            }
          }).catch(err => {
            console.log(err);
          });

        },
        onAuditDetilHtml(params){
          this.$store.commit('changeAuditTitleBread');
          this.$store.commit('setContextParams', params);
          let path="/hp/contexts";
          this.$router.push({path:path});
        },
        mouseoverShow(){
        let flash4Width= $('.flash4').css("width");
        let width=flash4Width.replace("px","");
        let currScreenWidth=window.screen.width;
        let wi="";
        let animatewi="";
          wi=this.oneLiScrollOpenWidth_;
          animatewi=this.flash4UlLiWidth_;
          var _index7=0;
          $(".flash4 ul li").mouseover(function(){
            _index7=$(this).index();
            $(this).stop().stop().animate({width:wi},500).siblings("li").stop().animate({width:animatewi},500);
            $(".imgTop .imgTopDiv").eq(_index7).addClass("tm").siblings(".imgTop .imgTopDiv").removeClass("tm");
          });
        },
        watchCurrScreenWidth(sum){
          let flash4Width= $('#elCard').css("width");
          let width_=flash4Width.replace("px","");
          let width=width_-40-10;//这里是 .flash4的最大宽度
          let www=(width/(sum+1));//
          this.flash4UlLiWidth.width=(width/sum)+"px";
          this.flash4UlLiWidth_=this.flash4UlLiWidth.width.replace("px","");
          this.oneLiScrollOpenWidth=www*1.5;//单个li最大放大宽度
          this.flash4UlLiWidth_=this.flash4UlLiWidth_*0.95;
          this.oneLiScrollOpenWidth_=this.oneLiScrollOpenWidth;

        }
      }
    }
</script>

<style scoped>
@import "./../assets/jqHover/css/style.css";

  .box-card-header-title{
    font-size: 14px;font-weight: bold
  }

  .audit-find-trail-el-row-col-6{
    padding: 0px 5px;

  }
  .audit-find-trail-style{
    border-radius:10px;min-height: 150px

  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .flash4UlLi.first{

  }
  /*.audit-find-trail-temp .el-card__body {
    padding: 5px 10px;
  }*/
@media screen and (max-width: 1366px) and (min-width: 1024px) {
/* .audit-find-trail-card-list_{
   height: 500px;
 }*/
}
@media screen and (max-width: 1600px) and (min-width: 1367px) {

}
@media screen and (max-width: 1920px) and (min-width: 1601px) {

}
</style>
