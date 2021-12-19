<template>
  <!--  -->
  <div>
    <el-row>
      <el-select v-model="Class" placeholder="">
        <el-option
          v-for="item in classList"
          :key="item.value"
          :label="item.label"
        />
      </el-select>
    </el-row>
    <el-row>
      <el-select v-model="time" placeholder="">
        <el-option
          v-for="item in timeList"
          :key="item.value"
          :label="item.label"
        />
      </el-select>
    </el-row>
    <el-divider />
    <el-table :data="attendanceRecordData">
      <el-table-column label="學號" />
      <el-table-column label="座號" />
      <el-table-column label="姓名" />
      <el-table-column label="第一節" />
      <el-table-column label="第二節" />
      <el-table-column label="第三節" />
      <el-table-column label="第四節" />
      <el-table-column label="第五節" />
      <el-table-column label="第六節" />
      <el-table-column label="第七節" />
      <el-table-column label="第八節" />
      <el-table-column label="第九節" />
      <el-table-column label="第十節" />
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
      timeList: [
        {
          value: '',
          label: ''
        },
        {
          value: '',
          label: ''
        }
      ],
      Class: '',
      time: '',
      attendanceRecordData: {}
    }
  }
}
</script>
