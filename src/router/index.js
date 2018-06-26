import Vue from 'vue'
import Router from 'vue-router'
import config from './../config'
import Index from '@/components/Index'
import {cacheHelper} from './../utils/cacheHelper'

Vue.use(Router)
let routes =[
    {
      path: '/hp',
      name: 'Index',
      component: Index,
      redirect:'/hp/console'
    }
]

import {SystemRouter} from './system'

for (let i in SystemRouter){
  routes.push(SystemRouter[i])
}
const router = new Router({
  mode:config.routeMode||'hash',//hash 打包需要使用hash 无#： history //去掉路径地址的#字符以真实的连接访问  如果设置为hash  路径就是默认的加#
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log(`路由到：${to.path}`)
 next();
 /* if (to.path.startsWith('/hpe/console')) {
    cacheHelper.RemoveCahceByKey("taskCode");
    next()
  } else {
    let taskCode = cacheHelper.GetCacheByKey("taskCode");
    if (!taskCode) {
      next({path: '/hpe/console'})
    } else {
      next()
    }
  }*/
  console.log("taskCode"+cacheHelper.GetCacheByKey("taskCode"));

});

router.afterEach(route => {

})
export default router;

