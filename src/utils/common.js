/*
export default {
    getRandomString(prefix){
        prefix=prefix||''
        return prefix+Date.now()+Math.floor(Math.random () * 1000);
    },
    ajaxGet(url){
        return new Promise(function(resolve, reject){
            var xml = new XMLHttpRequest();
            xml.open('get',url,true);
            xml.onload = resolve;
            xml.onerror = reject;
            xml.send();
        } )
    },

}
*/

let commonMethods={
  initNiceScroll(ids,id){
    $(ids).niceScroll(id, {
      'cursorcolor' : "rgb(204, 204, 204)",
    });
    $(ids).getNiceScroll().resize();

  },
  //取不重复的随机数
  randomArrayList(arrayList){
    var ary = [];                   //创建一个空数组用来保存随机数组
    for(var i=0; i<arrayList.length; i++){            //按照正常排序填充数组
      ary[i] = arrayList[i];
    }
    ary.sort(function(){
      return arrayList[Math.floor(Math.random()*arrayList.length)];
    });
    return ary;                 //返回数组
  }
}
export {
  commonMethods
}
