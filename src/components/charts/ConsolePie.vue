<template>
  <div style="height: 100%">
    <el-row :gutter="0" v-if="chooseLoadCharts1=='1-2'">
      <el-col :span="12">
        <div id="container1" class="containerStyle"></div>
      </el-col>
      <el-col :span="12">
        <div id="container2" class="containerStyle"></div>
      </el-col>
    </el-row>
    <el-row :gutter="0" v-if="chooseLoadCharts2=='2-2'">
      <el-col :span="12">
        <div id="container3"class="containerStyle"></div>
      </el-col>
      <el-col :span="12">
        <div id="container4" class="containerStyle"></div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .containerStyle{
    height:150px
  }

</style>

<script>

  export default {
    props:['chooseLoadCharts1','chooseLoadCharts2']
    ,
    data(){
      return{
      }
    },
    mounted() {
      this.loadCharts('container1','审计发现');
      this.loadCharts('container2','审计线索')
      this.loadCharts('container3','审计发现');
      this.loadCharts('container4','审计线索')

    },

    created(){

    },
    methods:{
      loadCharts(id,titleText){

        var Highcharts = require('highcharts');
        var chart = Highcharts.chart(id, {
          title: {
            floating:true,
            text: titleText,
            style: {
              fontSize: '13px'
            },
            marginTop: 0
          },
          tooltip: {
            headerFormat: '',
            pointFormat: ' <b>{point.name}:{point.y}</b>'
          },
          colors:['#409EFF','#d3dce6'],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true // 设置饼图是否在图例中显示
            }
          },
          credits: {
            enabled: false
          },
          series: [{
            type: 'pie',
            innerSize: '70%',
            data: [
              ['已完成',       8],
              ['未完成',      6]
            ]
          }]
        }, function(c) { // 图表初始化完毕后的会掉函数
          // 环形图圆心
          var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
          // 动态设置标题位置
          c.setTitle({
            y:centerY + titleHeight/2
          });
        });
      }
    }
  }
</script>
