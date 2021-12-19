<template>
  <el-row type="flex">
    <el-col :span="3" />
    <el-col :span="18">
      <el-form
        ref="dataForm"
        :model="NewTeacherData"
        label-width="80px"
        label-position="left"
        style="margin: 40px;"
      >
        <el-form-item label="姓名">
          <el-input v-model="NewTeacherData.name" placeholder="請輸入姓名" />
        </el-form-item>
        <el-form-item label="權限">
          <el-select v-model="NewTeacherData.perminnion" placeholder="老師">
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
            v-model="NewTeacherData.cellphone"
            placeholder="請輸入手機號碼"
          />
        </el-form-item>
        <el-form-item label="負責班級">
          <el-select
            v-model="NewTeacherData.principalCalss"
            placeholder=""
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
          <el-select
            v-model="NewTeacherData.subjectClass"
            placeholder=""
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
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="createData">確定</el-button>
      </el-form>
    </el-col>
    <el-col :span="3" />
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      NewTeacherData: {
        name: '',
        perminnion: '',
        cellphone: '',
        principalCalss: [],
        subjectClass: []
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
        },
        {
          value: '一年丙班',
          label: '一年丙班'
        },
        {
          value: '一年丁班',
          label: '一年丁班'
        },
        {
          value: '一年戊班',
          label: '一年戊班'
        },
        {
          value: '101班',
          label: '101班'
        },
        {
          value: '102班',
          label: '102班'
        },
        {
          value: '103班',
          label: '103班'
        }
      ]
    }
  },
  methods: {
    resetData() {
      this.NewTeacherData = {
        name: '',
        perminnion: '',
        cellphone: '',
        principalCalss: [],
        subjectClass: []
      }
    },
    createData() {
      this.$emit('newTheacherDiglog', false)
      this.$fefs['dataForm'].validate((valid) => {
        if (valid) {
          // this.NewTeacherData =
          // 連結API
        }
      })
    }
  }
}
</script>
