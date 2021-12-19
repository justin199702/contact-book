<template>
  <div class="components-container">
    <el-dialog v-model="diglogVisible" title="新增課程" width="30%">
      <span>{{}}</span>
      <el-form :model="NewLesson">
        <el-form-item label="上課時間">
          <el-select v-model="NewLesson.FirstTime" placeholder="選擇時間">
            <el-option
              v-for="item in TimeList"
              :key="item.value"
              :label="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="下課時間">
          <el-select v-model="NewLesson.LastTime" placeholder="選擇時間">
            <el-option
              v-for="item in TimeList"
              :key="item.value"
              :label="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="科目">
          <el-select v-model="NewLesson.Subject" placeholder="選擇科目">
            <el-option
              v-for="item in SubjectList"
              :key="item.value"
              :label="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="任課老師">
          <el-select v-model="NewLesson.Subject" placeholder="選擇任課老師">
            <el-option
              v-for="item in TeacherList"
              :key="item.value"
              :label="item.label"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      diglogVisible: false,
      DayOfWeek: '',
      ClassTime: '',
      NewLesson: {
        FirstTime: '',
        LastTime: '',
        Subject: '',
        Teacher: ''
      },
      TimeList: [
        {
          value: '張美麗',
          label: '張美麗'
        },
        {
          value: '張晨',
          label: '張晨'
        },
        {
          value: '晨大壯',
          label: '晨大壯'
        },
        {
          value: '李殷維',
          label: '李殷維'
        },
        {
          value: '蔡英文',
          label: '蔡英文'
        }
      ],
      SubjectList: [{}],
      TeacherList: [{}]
    }
  }
}
</script>
