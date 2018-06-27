<template>
    <div>
      <el-col :span="24" style="margin-bottom: 2px; background: #fff;">
        <div class="grid-content" style="" >
          <el-breadcrumb separator="/" class="el-icon-arrow-right" style="padding: 20px">
<!--
            <el-breadcrumb-item :to="{path:'/'}"><slot name="navBreadA"></slot></el-breadcrumb-item>
-->
            <el-breadcrumb-item><slot name="navBreadB"></slot></el-breadcrumb-item>
            <el-breadcrumb-item  v-if="auditTitleBread!=''"><slot name="navBreadC"></slot></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>

    </div>
</template>

<script>
    export default {
        name: "nav-bread",
      methods:{
      },
      computed:{
        auditTitleBread(){
          return this.$store.state.auditTitleBread;
        }
      },
    }
</script>

<style>

</style>
