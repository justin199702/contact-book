<template>
  <el-col :span="6" style="padding: 20px">
    <div class="el-card box-card is-always-shadow" @click="OpenDialog('other')">
      <div class="el-card__header">
        <div class="clearfix">
          <span style="margin: 10px">{{ ClassData.ClassName }}</span>
        </div>
      </div>
      <div class="el-card__body">
        <p>班導師：{{ ClassData.TeacherName }}</p>
        <p>學生人數：{{ ClassData.Student }}</p>
        <P>實到人數：{{ ClassData.ActualNumber }}</P>
        <p>請假人數：{{ ClassData.LeaveNumber }}</p>
      </div>
    </div>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      ClassData: {
        ClassName: '一年甲班',
        TeacherName: '張美麗',
        Student: 10,
        ActualNumber: 10,
        LeaveNumber: 40
      }
    }
  },
  methods: {
    OpenDialog() {
      console.log('班級按鈕測試')
      this.$emit('ViewClass', true)
    }
  }
}
</script>
