<template>
  <div>
    <el-button-group style="padding-left: 30px; padding-top: 20px">
      <el-button type="primary" @click="newClass = true">新增班級</el-button>
      <!-- <el-button type="primary">修改班級</el-button> -->
      <el-button type="info" icon="el-icon-question" circle />
    </el-button-group>
    <el-row
      class="el-card is-always-shadow"
      style="margin-top: 30px; padding: 20px"
    >
      <!-- 負責班級 -->
      <class-card @ViewClass="viewClass = true" />
      <class-card />
      <class-card />
      <class-card />
      <class-card />
    </el-row>

    <el-divider />

    <el-row>
      <!-- 科任班級 -->
      <class-card />
    </el-row>

    <el-divider />

    <el-row>
      <!-- 其餘團體 -->
      <class-card />
    </el-row>

    <!-- 新增班級視窗 -->
    <el-dialog :visible.sync="newClass">
      <el-new-class />
    </el-dialog>

    <!-- 檢視班級視窗 -->
    <el-dialog title="班級檢視" :visible.sync="viewClass">
      <el-view-class />
    </el-dialog>
  </div>
</template>
<script>
import { GetClassData } from '@/api/Class'

import ClassCard from '@/views/Class/Components/ClassCard.vue'
import ElNewClass from './SubView/NewClass.vue'
import ElViewClass from './SubView/ClassView.vue'
export default {
  name: 'Classes',
  components: { ClassCard, ElNewClass, ElViewClass },
  data() {
    return {
      newClass: false,
      viewClass: false,
      ClassCardList: []
    }
  },
  methods: {
    getData() {
      GetClassData().then(response => {})
    }
  }
}
</script>
