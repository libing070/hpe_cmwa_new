<template>
    <div>
      <a href="javacript:;" @click="add">点击++</a>---------
      <a href="javacript:;" @click="del">点击--</a><br/>
      结果：【{{count}}】
      <div id="divstr"></div>
    </div>
</template>
<script>
  export  default  {

    data() {
      return {
      };
    },
    created(){

    },
    mounted(){

    },
    methods: {
      add(){
        this.$store.commit('increment');
      },
      del(){
        this.$store.commit('decrement');
      }

    },
    computed:{
      count(){
        return this.$store.state.count;
      }
    }
  }
</script>
