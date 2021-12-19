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
        @click="newStudentDiglog = true"
      >新增學生</el-button>
      <!-- <el-button type="primary">修改</el-button> -->
      <el-button type="info" icon="el-icon-question" circle />
    </el-button-group>
    <el-divider />
    <el-row type="flex">
      <el-col :span="1" />
      <el-col :span="16">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="studentNumber" label="學號" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="classname" label="所屬班級" />
          <el-table-column label="聯繫方式" width="120">
            <el-button type="primary">連繫家長</el-button>
          </el-table-column>
          <el-table-column label="操作">
            <el-button @click="StudentDialog = true">檢視</el-button>
            <el-button
              type="primary"
              @click="reviseDialog = true"
            >修改</el-button>
            <el-button type="danger">刪除</el-button>
          </el-table-column>
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
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">選擇上傳檔案</el-button>
        </el-upload>
        </el-col>
        <el-col :span="6" />
      </el-row>

      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">確定</el-button>
    </el-dialog>
    <!-- 新增學生視窗 -->
    <el-dialog
      title="新增學生"
      :visible.sync="newStudentDiglog"
      :before-close="handleClose"
      align="center"
      width="35%"
    >
      <el-new-student />
    </el-dialog>
    <!-- 檢視學生視窗 -->
    <el-dialog
      title="學生檢視"
      :visible.sync="StudentDialog"
      align="center"
      width="50%"
    >
      <el-view-student />
    </el-dialog>
    <!-- 修改學生視窗 -->
    <el-dialog
      title="學生修改"
      :visible.sync="reviseDialog"
      align="center"
      width="50%"
    >
      <el-revise-student />
    </el-dialog>
  </div>
</template>
<script>
import ElViewStudent from './SubView/ViewStudent.vue'
import ElReviseStudent from './SubView/ReviseStudent.vue'
import ElNewStudent from './SubView/NewStudent.vue'
export default {
  components: { ElViewStudent, ElReviseStudent, ElNewStudent },
  data() {
    return {
      alotAddDialog: false,
      newStudentDiglog: false,
      StudentDialog: false,
      reviseDialog: false,
      tableData: [
        {
          studentNumber: '123',
          name: '澄澄波',
          classname: '一年甲班'
        },
        {
          studentNumber: '456',
          name: '林志霖',
          classname: '二年乙班'
        }
      ],
      classlist: [
        {
          value: '',
          label: '一年甲班'
        },
        {
          value: '',
          label: '一年乙班'
        }
      ],
      value: '',
      NewStudentData: {
        name: '',
        ParentsData: [
          {
            name: '',
            relationship: '',
            cellphone: ''
          }
        ],
        studentNumber: '',
        birthday: '',
        phone: '',
        cellphone: '',
        address: '',
        remarks: ''
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
      this.NewStudentData.ParentsData.push({
        name: '',
        relationship: '',
        cellphone: ''
      })
    }
  }
}
</script>
