<template>
  <div class="container">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm "
    >
      <el-form-item label="標題" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="公告對像" prop="region">
        <el-select v-model="ruleForm.region" placeholder="請選擇公告對像">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="公告內文" prop="desc" />
      <tinymce v-model="desc" :height="300" />
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >新增公告</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
import tinymce from '@/views/components-demo/tinymce.vue'
export default {
  name: 'NewAnnouncemet',
  comments: { Tinymce },
  components: { tinymce },
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.container {
  text-align: center;
  width: 1000px;
}
</style>
