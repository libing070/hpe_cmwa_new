<template>
  <div>
      <div class="grid-content bg-purple-light" style="padding: 5px;background-color: rgb(226, 230, 239);">
           <nav-bread>
             &lt;!&ndash;<span slot="navBreadA" @click="jumpIndexPage()">首页</span>&ndash;&gt;
             <span style="cursor:pointer" slot="navBreadB" @click="jumpNavBreadB()" v-bind:style="auditTitleBread!=''?'font-weight: 700;':'font-weight:;'">{{navBreadName}}</span>
             <span style="cursor:pointer" slot="navBreadC" @click="jumpNavBreadC()" v-if="auditTitleBread!=''">{{auditTitleBread}}</span>
           </nav-bread>
      </div>
    <div class="grid-content bg-purple-light clear-fix">
     <el-col :span="24" style="background: rgb(229, 233, 242)" class="main-show-wrap" >
            <router-view v-on:decre="showCh":key="activeDate"></router-view>
      </el-col>
    </div>
  </div>
</template>
<script>
  import {commonMethods} from './../utils/common'
  import NavBread from './NavBread'
  import {cacheHelper} from './../utils/cacheHelper'
  export default {
    props: ['listenScreenHeight'],
    provide () {
      return {
        fathernum:10
      }
    },
    data() {
      return {
        viewportdivHeights: document.body.clientHeight,
        tabPaneHeight:0,
        navBreadName:'工作台',
        navBreadPath:'',
        activeDate:''
      };
    },
    computed:{
      auditTitleBread(){
        return this.$store.state.auditTitleBread;
      }
    },
    components:{
      NavBread:NavBread
    },
    created(){
    },
    mounted(){
      if(cacheHelper.GetCacheByKey("elmenuDefaultActive")==null){
        cacheHelper.SetCacheByKey("elmenuDefaultActive",{"index":'1-2','path':'/hp/console','name':'工作台'});
      }else{
        this.navBreadName=cacheHelper.GetCacheByKey("elmenuDefaultActive").name;
        this.navBreadPath=cacheHelper.GetCacheByKey("elmenuDefaultActive").path;
      }

      console.log(cacheHelper.GetCacheByKey("elmenuDefaultActive").name);
      this.$root.Bus.$on('navBreadInfo', message => {  // 这里的message就是从NavMenu.vue中传来的数据
        this.navBreadPath=message.path;
        this.navBreadName=message.name;
      });

    },
  watch:{
    },
    methods: {
      jumpIndexPage(){
        this.navBreadName="工作台";
        let path="/hp/console"//默认首页
        this.loadConsoleData();
        let index='1-2';
        this.$store.commit("setElmenuDefaultActive",index);

        this.$router.push({path:path});
      },
      jumpNavBreadB(){
        let path=this.navBreadPath;
       if(this.navBreadPath.replace('/hp/','')=='auditFinding'){
       }else if(this.navBreadPath.replace('/hp/','')=='auditTrail'){
       }else if(this.navBreadPath.replace('/hp/','')=='auditPoint'){
       }else{
         /*path="/hp/console"//默认首页*/
         this.loadConsoleData();
       }
        this.activeDate = Date.parse(new Date());
        this.$router.push({path:path});
      },
      jumpNavBreadC(){
        this.$router.push({path:'/hp/contexts'});
      },
      showCh:function(data){

          console.log(data+new Date());
      },
      loadConsoleData(){//菜单切换console 请求后台加载对应的数据
        
        this.$axios.post('/hpe/getDomainInfos', Qs.stringify({
          "taskCode":cacheHelper.GetCacheByKey("taskCode")
        })).then(response => {
          let getDomainInfos=response.data;
          if(getDomainInfos.length>0){
            this.$root.Bus.$emit('getDomainInfos',getDomainInfos);
            commonMethods.initNiceScroll('#viewportdiv','#wrapperdiv');
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },
  }
</script>

