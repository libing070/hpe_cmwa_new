<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {cacheHelper} from './utils/cacheHelper'

  export default {
  name: 'App',
    mounted:function(){
      this.$router.push('/');//刷新页面跳转到首页 即 hp/console
    },
  beforeCreate(){
    localStorage.clear(); //清空所有缓存
    cacheHelper.SetCacheByKey("elmenuDefaultActive",{"index":'1-2','path':'/hp/console','name':'工作台'});

  }
}
</script>
<style>

</style>

