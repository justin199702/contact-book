<template>
  <el-form :model="newPayData">
    <el-form-item label="公告標題">
      <el-input
        v-model="newPayData.title"
        placeholder="請輸入標題"
        style="width: 50%;"
      />
    </el-form-item>
    <el-form-item label="公告對象">
      <el-drag-select
        v-model="newPayData.classList"
        style="width: 50%;"
        multiple
        placeholder=""
      >
        <el-option
          v-for="item in ClassList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-drag-select>
    </el-form-item>
    <aside align="center" style="font: 1.3em sans-serif;">
      繳費項目
    </aside>
    <el-button @click="addDomin">新增項目</el-button>

    <!-- 項目清單 -->
    <el-table
      :data="newPayData.payList"
      align="left"
      border
      stripe
      sum-text="總價"
      show-summary
    >
      <el-table-column type="index" />
      <el-table-column
        v-for="(item, index) in sku_table"
        :key="index"
        align="center"
        :label="item.sku_name"
        :prop="item.value"
      />
      <el-table-column label="項目" align="center">
        <template slot-scope="scope">
          <el-form-item :prop="'payList.' + scope.$index + '.title'">
            <el-input
              v-model="scope.row.title"
              style="margin-top:15px; "
              placeholder="請輸入"
              clearable
              @change="getSale(scope.row)"
            />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="金額" align="center" prop="'payList.' + scope.$index + '.' + 'amouunt'">
        <template slot-scope="scope">
          <el-form-item :prop="'payList.' + scope.$index + '.amouunt'">
            <el-input
              v-model="scope.row.amouunt"
              style="margin-top:15px"
              placeholder="請輸入"
              clearable
              @change="getSale(scope.row)"
            />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            @click.native.prevent="deleteRow(newPayData.payList, scope.$index)"
          >刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-form-item label="備註">
      <el-input v-model="newPayData.remarks" type="textarea" placeholder="" />
    </el-form-item>
  </el-form>
</template>
<script>
import ElDragSelect from '@/components/DragSelect'
export default {
  components: { ElDragSelect },
  data() {
    return {
      sku_table: [],
      ClassList: [
        {
          value: '一年甲班',
          label: '一年甲班'
        },
        {
          value: '一年乙班',
          label: '一年乙班'
        }
      ],
      newPayData: {
        title: '',
        classList: [],
        payList: [],
        remarks: ''
      }
    }
  },
  methods: {
    addDomin() {
      this.newPayData.payList.push({
        title: '',
        amouunt: ''
      })
    },
    getSale(row) {
      console.log(this.newPayData.payList)
      console.log(row)
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '總價'
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
          sums[index] += ' 元'
        } else {
          sums[index] = ''
        }
      })

      return sums
    },
    deleteRow(rows, index) {
      rows.splice(index, 1)
    }
  }
}
</script>
