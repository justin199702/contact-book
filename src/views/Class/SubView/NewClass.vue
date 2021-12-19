<template>
  <el-form :model="formInline" class="demo-form-inline">
    <el-form-item label="年級/群組">
      <el-select v-model="NewClass.grade" placeholder="年級">
        <el-option label="一年級" value="shanghai" />
        <el-option label="二年級" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="班名">
      <el-input v-model="NewClass.classNumber" placeholder="甲班/一班/家長會" />
    </el-form-item>
    <el-form-item label="主任老師">
      <el-select v-model="NewClass.MainTeacher" placeholder="">
        <el-option label="張美麗" value="shanghai" />
        <el-option label="李大花" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="科目">
      <el-select v-model="NewClass.MainTeacher" placeholder="">
        <el-option label="數學" value="shanghai" />
        <el-option label="英文" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="科目">
      <el-drag-select
        v-model="NewClass.Subject"
        style="width:500px;"
        multiple
        placeholder="選擇科目"
      >
        <el-option
          v-for="item in TeacherListOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-drag-select>
    </el-form-item>
    <el-form-item label="科任老師">
      <el-drag-select
        v-model="NewClass.SubjectTeacher"
        style="width:500px;"
        multiple
        placeholder="選擇科任老師"
      >
        <el-option
          v-for="item in TeacherListOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-drag-select>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled class="tableButton" />
        <el-button type="info" disabled>星期一</el-button>
        <el-button type="info" disabled>星期二</el-button>
        <el-button type="info" disabled>星期三</el-button>
        <el-button type="info" disabled>星期四</el-button>
        <el-button type="info" disabled>星期五</el-button>
        <el-button type="info" disabled>星期六</el-button>
        <el-button type="info" disabled>星期日</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="" prop="">
      <el-button-group>
        <el-button type="info" disabled>第一節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第二節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第三節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第四節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第五節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第六節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第七節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第八節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第九節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-form-item label="">
      <el-button-group>
        <el-button type="info" disabled>第十節</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
        <el-button class="tableButton">{{}}</el-button>
      </el-button-group>
    </el-form-item>
    <el-button>取消</el-button>
    <el-button type="primary">確定</el-button>
  </el-form>
</template>
<script>
import ElDragSelect from '@/components/DragSelect'

export default {
  name: 'NewClass',
  components: { ElDragSelect },
  data() {
    return {
      NewClass: {
        grade: '',
        classNumber: '',
        MainTeacher: [],
        SubjectTeacher: [],
        Subject: [],
        curriculum: {
          mon: {
            '1': {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            2: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            3: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            4: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            5: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            6: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            7: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            8: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            9: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            },
            10: {
              goTime: '',
              leaveTime: '',
              subject: '',
              teacher: ''
            }
          },
          tue: {},
          wed: {},
          thu: {},
          fri: {},
          sat: {},
          sun: {}
        }
      },
      TeacherListOptions: [
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
      ]
    }
  }
}
</script>
<style>
.tableButton {
  width: 84px;
  height: 36px;
}
</style>
