<template>
  <el-form size="mini">
    <el-form-item class="el-form-item-label" label="任务审计：" :label-width="formLabelWidth">
      <el-select id="elSelect" v-model="defaultTaskCode" placeholder="请选择" v-on:change="changeSelect(1)">
        <span  v-for="(item,index) in this.onDialogModelForm[1]" :key="index">
              <el-option  v-bind:label="item.taskName" v-bind:value="item.taskCode"></el-option>
        </span>
      </el-select>
    </el-form-item>
    <el-form-item class="el-form-item-label" label="任务周期：" :label-width="formLabelWidth">
      {{beginTime}}-{{endTime}}
    </el-form-item>
    <el-form-item class="el-form-item-label" label="任务单位：" :label-width="formLabelWidth">
      {{cityName}}移动&nbsp;&nbsp;，{{cityName}}TD分公司
    </el-form-item>
  </el-form>
</template>
<script>
  import {constParams} from '../../utils/constParams'
  export default {
    props: ['onDialogModelForm'],
    data(){
      return {
        defaultTaskCode:'',
        taskName:'',
        formLabelWidth: '100px',
        beginTime:'',
        endTime:'',
        cityName:''
      }
    },
    mounted() {
      this.defaultTaskCode=this.onDialogModelForm[2];
      this.changeSelect();
    },
    methods:{
      changeSelect(id){
        let currChooseTaskCode=this.defaultTaskCode;

        if(id==1){//当前选中的值传给父组件
          if(this.onDialogModelForm[0]=="first"){
            this.$emit('currChooseTaskCode',this.defaultTaskCode);
          }else if(this.onDialogModelForm[0]=="second"){
            this.$emit('currChooseTaskCode2',this.defaultTaskCode);
          }else if(this.onDialogModelForm[0]=="third"){
            this.$emit('currChooseTaskCode3',this.defaultTaskCode);
          }
        }
        for (let item of Array.from(this.onDialogModelForm[1])) {
          if(currChooseTaskCode==item.taskCode){
            this.taskName=item.taskName;
            this.beginTime= item.beginTime.substring(0,4)+'年'+item.beginTime.substring(4,item.beginTime.length)+"月";
            this.endTime=item.endTIme.substring(0,4)+'年'+item.endTIme.substring(4,item.endTIme.length)+"月";
            for(let list of Array.from(constParams.provList())){
              if(list.provId==item.provinceCode){
                this.cityName=list.provName;
              }
            }
          }
        }
        let params={'taskCode':this.defaultTaskCode,'taskName':this.taskName,'beginTime':this.beginTime,'endTime':this.endTime,'cityName':this.cityName};
        this.$store.commit('setDialogAuditTaskParams', params);

      }
    }
  }

</script>
