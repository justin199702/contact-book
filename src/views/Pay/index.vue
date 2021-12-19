<template>
  <div>
    <el-button-group style="padding-left: 30px; padding-top: 20px">
      <el-button type="primary">匯入範例下載</el-button>
      <el-button
        type="primary"
        @click="alotAddDialog = true"
      >大量新增匯入</el-button>
      <el-button
        type="primary"
        @click="newPayDiglog = true"
      >新增繳費</el-button>
      <!-- <el-button type="primary">修改</el-button> -->
      <el-button type="info" icon="el-icon-question" circle />
    </el-button-group>
    <el-divider />
    <el-row type="flex">
      <el-col :span="1" />
      <el-col :span="16">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          @row-click="PayDialog = true"
        >
          <el-table-column prop="title" label="繳費項目" width="600" />
          <el-table-column prop="dateTime" label="公告時間" width="180" />
          <el-table-column prop="publisher" label="公告人" />
        </el-table>
      </el-col>
      <el-col :span="7" />
    </el-row>

    <!-- 大量新增小視窗 -->
    <el-dialog
      :visible.sync="alotAddDialog"
      title="大量新增"
      :before-close="handleClose"
      align="center"
      width="35%"
    >
      <el-divider />
      <el-row type="flex" justify="center" style="height: 70px;">
        <el-col :span="6" />
        <el-col :span="12">
          <el-select v-model="value" placeholder="請選擇班級">
            <el-option
              v-for="item in ClassList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            /> </el-select></el-col>
        <el-col :span="6" />
      </el-row>
      <el-row type="flex" justify="center" style="height: 70px;">
        <el-col :span="6" />
        <el-col
          :span="12"
        ><el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="3"
        >
          <el-button size="small" type="primary">選擇上傳檔案</el-button>
        </el-upload>
        </el-col>
        <el-col :span="6" />
      </el-row>

      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">確定</el-button>
    </el-dialog>
    <!-- 新增繳費視窗 -->
    <el-dialog
      title="新增繳費"
      :visible.sync="newPayDiglog"
      :before-close="handleClose"
      align="center"
      width="45%"
    >
      <pay-new />
    </el-dialog>
    <!-- 檢視視窗 -->
    <el-dialog
      :visible.sync="PayDialog"
      title=""
      :before-close="handleClose"
      align="center"
    >
      <pay-view />
    </el-dialog>
  </div>
</template>
<script>

import PayView from './SubView/PayView'
import PayNew from './SubView/PayNew.vue'
export default {
  components: { PayView, PayNew },
  data() {
    return {
      alotAddDialog: false,
      newPayDiglog: false,
      PayDialog: false,
      tableData: [
        {
          title: '六月份學費',
          dateTime: '2021-05-21',
          publisher: '劉帥帥'
        },
        {
          title: '七月份學費',
          dateTime: '2021-06-21',
          publisher: '劉帥帥'
        }
      ],
      value: '',
      ClassList: [
        {
          value: '一年甲班',
          label: '一年甲班'
        },
        {
          value: '一年乙班',
          label: '一年乙班'
        },
        {
          value: '一年丙班',
          label: '一年丙班'
        }
      ]
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確定關閉？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    addDomin() {
      this.newPayData.payList.push({
        title: '',
        amouunt: ''
      })
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '總價'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    },
    PayDialogView(row, event, column) {
      //   PayDialog = true
      console.log(row)
      console.log(event)
      console.log(column)
    }
  }
}
</script>
