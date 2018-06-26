// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
const Bus = new Vue();
import http_ from './config/http';
Vue.prototype.$axios=http_;
import 'qs';//导入处理跨域组件
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  'jquery';
import 'jquery.nicescroll';
import App from './App';
import router from './router';
import VueHighcharts from 'vue-highcharts';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueHighcharts)
Vue.config.productionTip = false;
import './assets/css/common.css';


const store =new Vuex.Store({
  state:{
    count:10,
    dialogAuditTaskParams:{
      taskCode:'',
      taskName:'',
      beginTime:'',
      endTime:'',
      cityName:''
    },
    elmenuDefaultActive:'1-3',
    auditTitleBread:'',
    contextParams:{
      provinceCode:'',
      beforeAcctMonth:'',
      endAcctMonth:'',
      auditId:'',
      taskCode:'1',
      auditName:'',
      modelConclusion:''
    }

  },
  mutations:{
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    },
    getDialogAuditTaskParams(){

    },
    setDialogAuditTaskParams(state,params){
      state.dialogAuditTaskParams.taskCode=params.taskCode;
      state.dialogAuditTaskParams.taskName=params.taskName;
      state.dialogAuditTaskParams.beginTime=params.beginTime;
      state.dialogAuditTaskParams.endTime=params.endTime;
      state.dialogAuditTaskParams.cityName=params.cityName;
    },
    setElmenuDefaultActive(state,params){
      state.elmenuDefaultActive=params.elmenuDefaultActive;

    },
    setAuditTitleBread(state){
      state.auditTitleBread='';
    },
    changeAuditTitleBread(state){
      state.auditTitleBread='详情';
    },
    setContextParams(state,params){
      state.contextParams.provinceCode=params.provinceCode;
      state.contextParams.beforeAcctMonth=params.beginTime;
      state.contextParams.endAcctMonth=params.endTime;
      state.contextParams.auditId=params.auditCode;
      state.contextParams.taskCode=params.taskCode;
      state.contextParams.auditName=params.auditName;
      state.contextParams.modelConclusion=params.modelConclusion;
    }

  },

});


const app=new Vue({
 // el: '#app',
  store,
  data:{
    Bus
  },
  router,
/*  components: { App },
  template: '<App/>'*/
   render:h=>h(App)
}).$mount('#app');

