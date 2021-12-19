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
        @click="newGradesDialog = true"
      >新增成績</el-button>
      <!-- <el-button type="primary">修改</el-button> -->
      <el-button type="info" icon="el-icon-question" circle />
    </el-button-group>
    <el-row type="flex">
      <el-col :span="1" />
      <el-col :span="16">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          @row-click="viewGradesDialog = true"
        >
          <el-table-column prop="className" label="班級" width="180" />
          <el-table-column prop="subject" label="科目" width="180" />
          <el-table-column prop="time" label="公告時間" />
          <el-table-column prop="publisher" label="公告人" />
        </el-table>
      </el-col>
      <el-col :span="7" />
    </el-row>
    <!-- 大量新增匯入小視窗 -->
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
              v-for="item in classlist"
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

      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </el-dialog>
    <!-- 新增成績小視窗 -->
    <el-dialog
      title="新增成績"
      :visible.sync="newGradesDialog"
      :before-close="handleClose"
      align="center"
      width="50%"
    >
      <el-new-grades />
    </el-dialog>
    <!-- 成績檢視小視窗 -->
    <el-dialog
      title="成績檢視"
      :visible.sync="viewGradesDialog"
      :before-close="handleClose"
      align="center"
    >
      <el-view-grades />
    </el-dialog>
  </div>
</template>
<script>
import ElViewGrades from './SubView/ViewGrades.vue'
import ElNewGrades from './SubView/NewGrades.vue'
export default {
  components: { ElViewGrades, ElNewGrades },
  data() {
    return {
      alotAddDialog: false,
      newGradesDialog: false,
      viewGradesDialog: false,
      tableData: [
        {
          className: '一年甲板',
          subject: '英文',
          time: '2011-08-05',
          publisher: '王主任'
        }
      ],
      classlist: [
        {
          value: '',
          label: ''
        }
      ],
      value: '',
      NewGradesData: {
        class: '',
        subject: '',
        remarks: '',
        GradesData: [
          {
            studentNumber: '',
            seatNumber: '',
            name: '',
            score: '',
            remarks: ''
          }
        ]
      }
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
      this.NewGradesData.GradesData.push({
        studentNumber: '',
        seatNumber: '',
        name: '',
        score: '',
        remarks: ''
      })
    }
  }
}
</script>
