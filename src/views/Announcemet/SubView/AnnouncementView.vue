<template>
  <el-dialog v-model="diglogVisible" title="公告檢視">
    <aside>{{ Title }}</aside>
    <aside>{{ PostName }}</aside>
    <aside>{{ Time }}</aside>
    <aside>{{ Member }}</aside>
    <div>{{ desc }}</div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      diglogVisible: false
    }
  }
}
</script>
<style></style>
