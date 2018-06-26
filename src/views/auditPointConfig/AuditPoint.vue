<template>
  <div>
    <div class="grid-content bg-purple-light" style="border-radius:0px">
      <el-col :span="24" style="background: #e5e9f2;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline audit-from">

     <el-form-item label="业务流程">
       <el-cascader :options="options2" size="mini" @active-item-change="handleItemChange" :props="props"></el-cascader>
      </el-form-item>
      <el-form-item label="审计点">
        <el-input v-model="formInline.user" placeholder="审计点" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="审计类型">
        <el-input v-model="formInline.user" placeholder="审计类型" size="mini"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="mini">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="mini">添加审计点</el-button>
      </el-form-item>
    </el-form>
      </el-col>
    </div>
    <div class="grid-content bg-purple-light"  style="height:300px" id="viewportdiv">
      <el-col :span="24" style="background: #fff;height: 400px" >
        <el-table id="wrapperdiv"
          :data="tableData"
          size="mini"
          border
          style="width: 100%;">
          <el-table-column
            prop="id"
            label="编号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            label="审计点"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="province"
            label="审计类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="业务流程"
            width="120">
          </el-table-column>

          <el-table-column
            prop="zip"
            label="适用范围"
            width="120">
          </el-table-column>
          <el-table-column label="操作"  width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </div>

  </div>
</template>
<style>

  .audit-from .el-form-item{
    margin: 5px;
  }
</style>
<script>
  export default {
    data() {
      return {
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        formInline: {
          user: '',
          region: ''
        },
        tableData: [
          {
            id:'1',
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            id:'2',
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            id:'3',
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            id:'4',
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            id:'1',
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            id:'2',
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            id:'3',
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            id:'4',
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            id:'1',
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      }
    },
    mounted(){
      this.init();

    },
    created(){

    }
    ,
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
       console.log(row);
      },
      init(){
        /*$("#viewportdiv").niceScroll("#wrapperdiv", {
          cursorcolor : "rgb(204, 204, 204)"
        });
        $("#viewportdiv").getNiceScroll().resize();*/
      },

      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_=> {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
  }
</script>
