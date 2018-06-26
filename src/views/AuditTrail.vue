<template>
  <div class="main-show-wrap-div" style="padding:5px;">
    <audit-find-and-trail-temp :onGetAuditDetailInfoFun="[taskCode,auditType]"></audit-find-and-trail-temp>
  </div>
</template>
<style>
</style>
<script>
  import {commonMethods} from './../utils/common'
  import {cacheHelper} from './../utils/cacheHelper'
  import AuditFindAndTrailTemp from './../components/AuditFindAndTrailTemp'
  export default {
    data(){
      return {
        taskCode:cacheHelper.GetCacheByKey("taskCode"),
        auditType:2
      }
    },
    components:{
      AuditFindAndTrailTemp:AuditFindAndTrailTemp,
    },
    mounted() {
      this.loadAuditFindingData();
      this.reloadNiceScroll();
    },
    methods:{
      reloadNiceScroll(){
        commonMethods.initNiceScroll();
      },
      loadAuditFindingData(){
        this.$axios.post('/hpe/getDomainInfos', Qs.stringify({
          "taskCode":cacheHelper.GetCacheByKey("taskCode"),
          "auditType":"2"
        })).then(response => {
          let getDomainInfos=response.data;
          if(getDomainInfos.length>0){
            this.$root.Bus.$emit('getAuditFindTrailDomainInfos',getDomainInfos);

            //  commonMethods.initNiceScroll('#viewportdiv','#wrapperdiv');
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>
