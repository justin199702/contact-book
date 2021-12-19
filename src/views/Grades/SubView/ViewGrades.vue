<template>
  <el-container>
    <el-header style="height:60px;">
      <el-row type="flex" justify="center">
        <el-col :span="6" />
        <el-col :span="12">
          <el-row align="middle" type="flex" justify="center" class="com-form">
            <el-col :span="6" />
            <el-col :span="6" align="middle">
              <span style="font: 2em sans-serif;">
                {{ className }}成績紀錄</span></el-col>
            <el-col :span="6" />
          </el-row>
        </el-col>
        <el-col :span="6" />
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="6" />
        <el-col :span="12">
          <el-divider />
          <e-desc :data="gradesData" :column="1">
            <e-desc-item label="科目">{{ gradesData.subject }}</e-desc-item>
            <e-desc-item label="公布時間">{{ gradesData.time }}</e-desc-item>
            <e-desc-item label="公布人">{{ gradesData.publisher }}</e-desc-item>
            <e-desc-item label="備註">{{ gradesData.remarks }}</e-desc-item>
          </e-desc>
          <el-divider />
          <el-table
            :data="gradesData.grades"
            border
            :summary-method="getAverage"
            show-summary
          >
            <el-table-column
              label="座號"
              prop="seatNumber"
              align="center"
              width="60"
            />
            <el-table-column
              label="姓名"
              prop="name"
              align="center"
              width="150"
            />
            <el-table-column
              label="分數"
              prop="score"
              align="center"
              width="80"
            />
            <el-table-column label="備註" prop="remarks" align="center" />
          </el-table>
        </el-col>
        <el-col :span="6" />
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
      className: '一年甲班',
      gradesData: {
        subject: '數學',
        remarks: '無',
        time: '2021-02-09',
        publisher: '陳怪',
        grades: [
          {
            seatNumber: 1,
            name: 'aassd',
            score: 10,
            remarks: '無'
          },
          {
            seatNumber: 2,
            name: 'aassd',
            score: 20,
            remarks: '無'
          },
          {
            seatNumber: 3,
            name: 'aassd',
            score: 30,
            remarks: '無'
          },
          {
            seatNumber: 4,
            name: 'aassd',
            score: 40,
            remarks: '無'
          },
          {
            seatNumber: 5,
            name: 'aassd',
            score: 50,
            remarks: '無'
          },
          {
            seatNumber: 6,
            name: 'aassd',
            score: 60,
            remarks: '無'
          },
          {
            seatNumber: 7,
            name: 'aassd',
            score: 70,
            remarks: '無'
          },
          {
            seatNumber: 8,
            name: 'aassd',
            score: 80,
            remarks: '無'
          },
          {
            seatNumber: 9,
            name: 'aassd',
            score: 90,
            remarks: '無'
          }
        ]
      }
    }
  },
  methods: {
    getAverage(param) {
      const { columns, data } = param
      const sums = []
      const average = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '總結'
          average[index] = '平均'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          average[index] = sums[index] / values.length
        } else {
          sums[index] = ''
        }
      })

      return average
    }
  }
}
</script>
