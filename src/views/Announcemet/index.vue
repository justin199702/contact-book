<template>
  <div>
    <el-button-group style="padding-left: 30px; padding-top: 20px">
      <el-button type="primary" @click="NewDialog = true">新增公告</el-button>
      <el-button type="info" icon="el-icon-question" circle />
    </el-button-group>
    <el-row type="flex">
      <el-col :span="1" />
      <el-col :span="16">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          @row-click="tableDialog = true"
        >
          <el-table-column prop="title" label="公告標題" width="180" />
          <el-table-column prop="dateTime" label="公告時間" width="180" />
          <el-table-column prop="name" label="公告人" />
        </el-table>
      </el-col>
    </el-row>
    <el-dialog title="新增公告" :visible.sync="NewDialog">
      <el-new-announcemet />
    </el-dialog>
    <el-dialog title="公告檢視" />
  </div>
</template>
<script>
import ElNewAnnouncemet from './SubView/NewAnnouncemet.vue'
export default {
  components: { ElNewAnnouncemet },
  data() {
    return {
      NewDialog: false,
      tableDialog: false,
      tableData: [
        {
          title: '備忘錄建議需求事項',
          dateTime: '2016-05-04 14:20',
          name: '系統公布'
        },
        {
          title: '備忘錄建議需求事項',
          dateTime: '2016-01-04 18:20',
          name: '系統公布'
        },
        {
          title: '備忘錄建議需求事項',
          dateTime: '2018-05-15 10:20',
          name: '系統公布'
        },
        {
          title: '備忘錄建議需求事項',
          dateTime: '2016-12-08 20:20',
          name: '系統公布'
        }
      ]
    }
  }
}
</script>
