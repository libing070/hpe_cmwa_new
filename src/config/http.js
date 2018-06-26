 /**
   * http配置
   */
// 引入axios以及element ui中的loading和message组件

 import axios from 'axios'
 import { Loading, Message } from 'element-ui'

 axios.defaults.timeout=30000;
  // http请求拦截器
 var loadinginstace;
 axios.interceptors.request.use(config=>{
   //element ui Loading方法
/*
   console.log('-------------------request init----------------');
*/
   loadinginstace=Loading.service({
     lock: true,
     text: '拼命加载中...',
     spinner: 'el-icon-loading',
     background: 'rgba(0, 0, 0, 0.7)'
   });
   return config
 },error => {
   loadinginstace.close();
   Message.error({
     message:'加载超时'
   });
   return Promise.reject(error)
 });
 axios.interceptors.response.use(data=>{//响应成功关闭loading
/*
   console.log('-------------------response init----------------');
*/
   loadinginstace.close();
   return data
 },error => {
   loadinginstace.close();
   Message.error({
     message:'加载失败'
   });
   return Promise.reject(error)
 });
export default axios
