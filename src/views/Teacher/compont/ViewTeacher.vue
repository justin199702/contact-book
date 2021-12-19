<template>
  <div>
    <e-desc :data="teacherData" :column="1">
      <e-desc-item label="姓名">{{ teacherData.name }}</e-desc-item>
      <e-desc-item label="權限">{{ teacherData.perminnion }}</e-desc-item>
      <e-desc-item label="手機號碼">{{ teacherData.cellphone }}</e-desc-item>
      <e-desc-item label="負責班級">
        <template slot="content">
          <span v-for="item in teacherData.ownClass" :key="item">
            {{ item }}、
          </span>
        </template>
      </e-desc-item>
      <e-desc-item
        label="科任班級"
      ><template slot="content">
        <span
          v-for="item in teacherData.subjectClass"
          :key="item"
        >{{ item }}、
        </span>
      </template>
      </e-desc-item>
    </e-desc>
  </div>
</template>
<script>
import eDesc from '@/components/Descriptions/e-desc.vue'
import eDescItem from '@/components/Descriptions/e-desc-item.vue'
export default {
  components: { eDesc, eDescItem },
  data() {
    return {
      teacherData: {
        name: '肥貓老師',
        perminnion: '教師',
        cellphone: '0912345678',
        ownClass: ['一年甲班', '一年甲班', '一年甲班', '一年乙班'],
        subjectClass: ['二年乙班', '二年乙班', '二年乙班']
      }
    }
  }
}
</script>
