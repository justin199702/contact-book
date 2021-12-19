<template>
  <el-dialog :visible.sync="alotAddDialog" title="大量新增">
    <el-select v-model="value" placeholder="請選擇班級">
      <el-option
        v-for="item in classlist"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <template #tip>
        <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
      </template>
    </el-upload>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      alotAddDialog: false,
      classlist: [
        {
          value: '',
          label: ''
        }
      ],
      value: ''
    }
  }
}
</script>
