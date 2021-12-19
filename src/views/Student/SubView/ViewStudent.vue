<template>
  <el-container>
    <!-- Top照片和姓名和匯出檔案 -->
    <el-header style="height: 160px;">
      <el-row type="flex" justify="center">
        <el-col :span="3" />
        <el-col :span="18">
          <el-row align="middle" type="flex" justify="center" class="com-form">
            <el-col
              :span="6"
              align="middle"
            ><el-avatar
              :size="150"
              :src="StudentAvatar"
            /></el-col>
            <el-col :span="8" align="middle">
              <span style="font: 2em sans-serif;">學生姓名</span>
              <span style="font: 2em sans-serif;"> {{ StudentName }}</span>
            </el-col>
            <el-col :span="6" align="middle">
              <el-button type="primary">匯出檔案</el-button></el-col>
          </el-row>
        </el-col>
        <el-col :span="3" />
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="3" />
        <el-col :span="18">
          <el-divider />
          <!--聯絡人資訊-->
          <aside align="center" style="font: 1.3em sans-serif;">
            聯絡人資訊
          </aside>
          <el-table :data="StudentParentsData" border style="width: 100%">
            <el-table-column label="姓名" prop="name" width="120" />
            <el-table-column label="關係" prop="relationship" width="80" />
            <el-table-column label="手機號碼" prop="cellphone" width="150" />
            <el-table-column label="APP下載" prop="App" width="120" />
            <el-table-column label="">
              <template #default="scope">
                <el-button
                  type="primary"
                  @click="contactParent(cscope.$index, scope.row)"
                >連繫家長</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 學生個人資訊 -->
          <aside align="center" style="font: 1.3em sans-serif;">
            學生資訊
          </aside>
          <e-desc data="StudentData" :column="1">
            <e-desc-item label="學號">{{
              StudentData.studentNumber
            }}</e-desc-item>
            <e-desc-item label="生日">{{ StudentData.birthday }}</e-desc-item>
            <e-desc-item label="電話">{{ StudentData.phone }}</e-desc-item>
            <e-desc-item label="手機">{{ StudentData.cellphone }}</e-desc-item>
            <e-desc-item label="地址">{{ StudentData.address }}</e-desc-item>
            <e-desc-item label="備註">{{ StudentData.remarks }}</e-desc-item>
          </e-desc>
          <el-divider />
          <!-- 各種紀錄    -->
          <!-- 公告紀錄 -->
          <aside align="center" style="font: 1.3em sans-serif;">
            公告紀錄
          </aside>
          <el-table :data="Announcementrecord" border style="width: 100%">
            <el-table-column label="公告標題" prop="title" />
            <el-table-column label="公告時間" prop="time" />
            <el-table-column label="公告人" prop="publisher" />
          </el-table>
          <!-- 成績紀錄 -->
          <aside align="center" style="font: 1.3em sans-serif;">
            成績紀錄
          </aside>
          <el-table :data="Gradesrecord" border style="width: 100%">
            <el-table-column label="考試科目" prop="subject" />
            <el-table-column label="分數" prop="score" />
            <el-table-column label="公告時間" prop="time" />
            <el-table-column label="公告人" prop="publisher" />
          </el-table>
          <!-- 出勤紀錄 -->
          <aside align="center" style="font: 1.3em sans-serif;">
            出勤紀錄
          </aside>
          <el-table :data="Gradesrecord" border style="width: 100%">
            <el-table-column label="日期" prop="date" />
            <el-table-column label="節次" prop="classtime" />
          </el-table>
          <!-- 繳費紀錄 -->
          <aside align="center" style="font: 1.3em sans-serif;">
            繳費紀錄
          </aside>
          <el-table :data="Announcementrecord" border style="width: 100%">
            <el-table-column label="公告標題" prop="title" />
            <el-table-column label="費用" prop="cost" />
            <el-table-column label="公告時間" prop="time" />
            <el-table-column label="公告人" prop="publisher" />
          </el-table>
        </el-col>
        <el-col :span="3" />
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import eDesc from '@/components/Descriptions/e-desc.vue'
import EDescItem from '@/components/Descriptions/e-desc-item.vue'
export default {
  components: { eDesc, EDescItem },
  data() {
    return {
      StudentAvatar: ' ',
      StudentName: '張奇怪',
      StudentParentsData: [
        {
          name: '張怪',
          relationship: '父',
          cellphone: '0912345678',
          App: '已下載'
        }
      ],
      StudentData: {
        studentNumber: '0000123456789',
        birthday: '1997-02-10',
        phone: '02-2719-1919',
        cellphone: '0912345678',
        address: '台北市信義區武漢街肺炎街19號',
        remarks: ''
      },
      Announcementrecord: [
        {
          title: '',
          time: '',
          publisher: ''
        }
      ],
      Gradesrecord: [
        {
          subject: '',
          score: '',
          time: '',
          publisher: ''
        }
      ],
      Attendancerecord: [
        {
          date: '',
          classtime: ''
        }
      ],
      Payrecord: [
        {
          title: '',
          cost: '',
          time: '',
          publisher: ''
        }
      ]
    }
  },
  methods: {
    contactParent(index, row) {}
  }
}
</script>
