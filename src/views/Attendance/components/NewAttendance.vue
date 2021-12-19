<template>
  <div>
    <!-- 新增點名 -->
    <el-select v-model="AttendanceData.class" placeholder="">
      <el-option
        v-for="item in classList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-table :data="AttendanceData.rollcall">
      <el-table-column label="學號" prop="studentNumber" />
      <el-table-column label="座號" prop="seatNumber" />
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="出席">
        <el-table-column label="出席">
          <template slot-scope="">
            <!-- <template slot-scope="scope"> -->
            <el-radio
              v-model="AttendanceData.rollcall.attend"
              label="1"
            >出席</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="未到">
          <template slot-scope="">
            <!-- <template slot-scope="scope"> -->
            <el-radio
              v-model="AttendanceData.rollcall.attend"
              label="2"
            >未到</el-radio>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="備註" prop="remarks" />
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classList: [
        {
          value: '',
          label: ''
        },
        {
          value: '',
          label: ''
        }
      ],
      AttendanceData: {
        class: '',
        rollcall: [
          {
            studentNumber: '123456789',
            seatNumber: '01',
            name: '沉沉',
            attend: '',
            remarks: '無'
          }
        ]
      }
    }
  }
}
</script>
