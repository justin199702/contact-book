<template>
  <div>
    <aside align="center" style="font: 1.3em sans-serif;">
      {{ PayData.title }}
    </aside>
    <el-row>
      <el-col :span="12">
        <aside>公告人：{{ PayData.name }}</aside>
      </el-col>
      <el-col :span="12">
        <aside>公告人：{{ PayData.time }}</aside>
      </el-col>
    </el-row>
    <!-- todo(修改) -->
    <aside>
      公布對象:
      <span v-for="item in PayData.classList" :key="item">{{ item }}、</span>
    </aside>
    <el-table
      :data="PayData.payList"
      border
      show-summary
      style="width: 100%"
      sum-text="合計"
    >
      <el-table-column label="項次" prop="index" />
      <el-table-column label="項目" prop="title" />
      <el-table-column label="金額" prop="amouunt" />
    </el-table>
    <el-divider />
    <aside>備註: {{ PayData.remarks }}</aside>
  </div>
</template>
<script>
export default {
  data() {
    return {
      PayData: {
        title: '六月分學費',
        name: '教務主任',
        time: '2021-05-21',
        classList: ['一年甲班', '一年乙班', '一年丙班'],
        payList: [
          {
            index: '1',
            title: '學費',
            amouunt: '1000'
          },
          {
            index: '2',
            title: '學費',
            amouunt: '1000'
          }
        ],
        remarks: '無'
      }
    }
  }
}
</script>
