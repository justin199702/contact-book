<template>
  <div>
    <p>班級：{{ ClassData.classNumber }}</p>

    <span>班導師：</span>
    <span v-for="item in ClassData.MainTeacher" :key="item">{{ item }}、</span>
    <p />
    <span>科任老師：</span>
    <span
      v-for="item in ClassData.subjectTeacher"
      :key="item"
    >{{ item }}、
    </span>
    <p />
    <aside align="center" style="font: 1.3em sans-serif;">
      課表
    </aside>
    <el-table :data="ClassData.curriculum" border>
      <el-table-column label="" prop="classTime" />
      <el-table-column label="星期一" prop="Mon" />
      <el-table-column label="星期二" prop="Tue" />
      <el-table-column label="星期三" prop="Wed" />
      <el-table-column label="星期四" prop="Thu" />
      <el-table-column label="星期五" prop="Fri" />
      <el-table-column label="星期六" prop="Sat" />
      <el-table-column label="星期日" prop="Sun" />
    </el-table>
    <aside align="center" style="font: 1.3em sans-serif;">
      學生
    </aside>
    <el-table :data="ClassData.classStudent" border>
      <el-table-column label="學號" prop="studentNumber" />
      <el-table-column label="座號" prop="seatNumber" />
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="編輯移除學生" />
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ClassData: {
        classNumber: '',
        MainTeacher: ['費解', '沉沉', '多金'],
        subjectTeacher: ['愛因斯坦', '沉加一', 'jason'],
        curriculum: [
          {
            classTime: '第一節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第二節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第三節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第四節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第五節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第六節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第七節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第八節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第九節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          },
          {
            classTime: '第十節',
            Mon: '',
            Tue: '',
            Wed: '',
            Thu: '',
            Fri: '',
            Sat: '',
            Sun: ''
          }
        ],
        classStudent: [
          {
            studentNumber: '',
            seatNumber: '',
            name: ''
          }
        ]
      }
    }
  },
  methods() {}
}
</script>
