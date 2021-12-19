<template>
  <div>
    <el-button-group style="padding-left: 30px; padding-top: 20px">
      <el-button type="primary">匯入範例下載</el-button>
      <el-button
        type="primary"
        @click="alotAddDialog = true"
      >大量新增匯入</el-button>
      <el-button type="primary" @click="CreatTeacher">新增教師</el-button>
      <el-button type="info" icon="el-icon-question" circle />
    </el-button-group>
    <el-divider />
    <el-row type="flex">
      <el-col :span="1" />
      <el-col :span="16">
        <el-table :data="tableData" style="width: 100%" border fit>
          <el-table-column prop="perminnion" label="權限" width="90" />
          <el-table-column prop="name" label="姓名" width="120" />
          <el-table-column prop="cellphone" label="手機號碼" width="150" />
          <el-table-column
            prop="ownClass"
            label="負責班級"
            :formatter="OwnSpace"
          />
          <el-table-column
            prop="subjectClass"
            label="科任班級"
            :formatter="SubSpace"
          />
          <el-table-column label="操作">
            <template slot-scope="">
              <!-- <template slot-scope="scope"> -->
              <el-button type="" @click="TeacherView">檢視</el-button>
              <el-button
                type="primary"
                @click="reviseTeacherDialog = true"
              >編輯</el-button>
              <el-button type="danger">
                刪除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7" />
    </el-row>
    <pagination
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <!-- 修改教師視窗 -->
    <el-dialog title="修改教師" width="40%" :visible.sync="reviseTeacherDialog">
      <el-revise-teacher />
    </el-dialog>
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
        <el-col :span="12" />
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
    <!-- 新增教師視窗 -->
    <el-dialog
      title="新增教師"
      width="40%"
      :visible.sync="newTheacherDiglog"
      :before-close="handleClose"
    >
      <el-new-teacher ref="new_Teacher" @close="handleClose" />
    </el-dialog>
    <!-- 檢視教師視窗 -->
    <el-dialog title="檢視教師" width="40%" :visible.sync="teacherViewDialog">
      <el-view-teacher />
    </el-dialog>
  </div>
</template>
<script>
import ElNewTeacher from './compont/NewTeacher.vue'
import ElViewTeacher from './compont/ViewTeacher.vue'
import ElReviseTeacher from './compont/ReviseTeacher.vue'
import Pagination from '@/components/Pagination'
import { fetchList } from '@/api/article'
export default {
  components: { ElNewTeacher, ElViewTeacher, ElReviseTeacher, Pagination },
  data() {
    return {
      alotAddDialog: false,
      newTheacherDiglog: false,
      teacherViewDialog: false,
      reviseTeacherDialog: false,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      tableData: [
        {
          perminnion: '老師',
          name: '陳大壯',
          cellphone: '0912345678',
          ownClass: ['一年甲班', '二年甲班', '三年甲班'],
          subjectClass: ['二年乙班', '二年乙班', '二年乙班']
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClose(done) {
      this.$confirm('確定關閉？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    TeacherView() {
      this.teacherViewDialog = true
    },
    OwnSpace(row) {
      var full = ''
      for (var i = 0; i < row.ownClass.length; i++) {
        full = full + row.ownClass[i] + '、'
      }
      return full
    },
    SubSpace(row) {
      var full = ''
      for (var i = 0; i < row.subjectClass.length; i++) {
        full = full + row.subjectClass[i] + '、'
      }
      return full
    },
    // 創建新教師
    CreatTeacher() {
      this.newTheacherDiglog = true
      this.$refs.new_Teacher.resetData()
    },
    // 取得教師列表
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.item
        this.total = response.data.total

        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    }
  }
}
</script>
