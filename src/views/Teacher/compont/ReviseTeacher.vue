<template>
  <el-row type="flex">
    <el-col :span="3" />
    <el-col :span="18">
      <el-form
        :model="TeacherData"
        label-width="80px"
        label-position="left"
        style="margin: 40px;"
      >
        <el-form-item label="姓名">
          <el-input v-model="TeacherData.name" placeholder="請輸入姓名" />
        </el-form-item>
        <el-form-item label="權限">
          <el-select v-model="TeacherData.perminnion" placeholder="老師">
            <el-option
              v-for="item in perminnionList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="手機號碼">
          <el-input
            v-model="TeacherData.cellphone"
            placeholder="請輸入手機號碼"
          />
        </el-form-item>
        <el-form-item label="負責班級">
          <el-select
            v-model="TeacherData.principalCalss"
            multiple
          >
            <el-option
              v-for="item in classList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="科任班級">
          <el-select v-model="TeacherData.subjectClass" placeholder="" multiple>
            <el-option
              v-for="item in classList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >確定</el-button>
      </el-form>
    </el-col>
    <el-col :span="3" />
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      TeacherData: {
        name: '陳大壯',
        perminnion: '園長',
        cellphone: '0912345678',
        principalCalss: ['一年甲班', '一年甲班', '一年甲班'],
        subjectClass: ['二年乙班', '二年乙班', '二年乙班']
      },
      perminnionList: [
        {
          value: '',
          label: '老師'
        },
        {
          value: '',
          label: '園長'
        },
        {
          value: '',
          label: '組長'
        },
        {
          value: '',
          label: '主任'
        },
        {
          value: '',
          label: '校長'
        },
        {
          value: '',
          label: '管理人'
        }
      ],
      classList: [
        {
          value: '一年甲班',
          label: '一年甲班'
        },
        {
          value: '一年乙班',
          label: '一年乙班'
        }
      ]
    }
  }
}
</script>
