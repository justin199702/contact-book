<template>
  <div>
    <div>
      <el-button-group style="padding-left: 30px; padding-top: 20px">
        <el-button type="primary">匯入範例下載</el-button>
        <el-button
          type="primary"
          @click="attendanceRecordDialog = true"
        >點名紀錄</el-button>
        <el-button
          type="primary"
          @click="newAttendanceDiglog = true"
        >新增點名</el-button>
        <el-button type="info" icon="el-icon-question" circle />
      </el-button-group>
      <!--  -->
      <el-dialog title="新增點名" :visible.sync="newAttendanceDiglog">
        <el-new-attendance />
      </el-dialog>
      <el-dialog title="點名紀錄" :visible.sync="attendanceRecordDialog">
        <el-attendance-record />
      </el-dialog>
    </div>
    <el-row
      class="el-card is-always-shadow"
      style="margin: top 30px; padding: 20px;"
    >
      <!-- 負責班級 -->
      <class-card />
    </el-row>

    <el-divider />

    <el-row>
      <!-- 科任班級 -->
    </el-row>

    <el-divider />

    <el-row>
      <!-- 其餘團體 -->
    </el-row>
  </div>
</template>
<script>
import ClassCard from '../Class/Components/ClassCard.vue'
import ElNewAttendance from './components/NewAttendance.vue'
import ElAttendanceRecord from './components/AttendanceRecord.vue'
export default {
  components: { ClassCard, ElNewAttendance, ElAttendanceRecord },
  data() {
    return {
      attendanceRecordDialog: false,
      newAttendanceDiglog: false
    }
  }
}
</script>
