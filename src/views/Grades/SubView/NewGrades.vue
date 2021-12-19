<template>
  <el-row type="flex" justify="center">
    <el-col :span="2" />
    <el-col :span="20">
      <el-form :model="NewGradesData">
        <el-form-item label="選擇班級">
          <el-select v-model="value" placeholder="請選擇班級">
            <el-option
              v-for="item in classlist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="科目">
          <el-input v-model="NewGradesData.subject" placeholder="" />
        </el-form-item>
        <el-form-item label="備註">
          <el-input v-model="NewGradesData.remarks" placeholder="" />
        </el-form-item>
        <el-button @click="addDomin">新增成績</el-button>
        <el-table :data="NewGradesData.GradesData">
          <el-table-column type="index" />
          <el-table-column
            v-for="(item, index) in sku_table"
            :key="index"
            align="center"
            :label="item.sku_name"
            :prop="item.value"
          />
          <el-table-column label="學號" align="center">
            <template slot-scope="scope">
              <el-form-item>
                <el-input
                  v-model="scope.row.studentNumber"
                  style="margin-top:15px"
                  placeholder=""
                  clearable
                  @change="getSale(scope.row)"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="座號" align="left" width="60">
            <template slot-scope="scope">
              <el-form-item>
                <el-input
                  v-model="scope.row.seatNumber"
                  style="width: 35px;margin-top:15px"
                  placeholder=""
                  clearable
                  @change="getSale(scope.row)"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="姓名" align="center" width="140">
            <template slot-scope="scope">
              <el-form-item>
                <el-input
                  v-model="scope.row.name"
                  style="margin-top:15px"
                  placeholder=""
                  clearable
                  @change="getSale(scope.row)"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="分數" align="center" width="80">
            <template slot-scope="scope">
              <el-form-item>
                <el-input
                  v-model="scope.row.score"
                  style="margin-top:15px"
                  placeholder=""
                  clearable
                  @change="getSale(scope.row)"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="備註" align="center">
            <template slot-scope="scope">
              <el-form-item>
                <el-input
                  v-model="scope.row.remarks"
                  style="margin-top:15px"
                  placeholder=""
                  clearable
                  @change="getSale(scope.row)"
                />
              </el-form-item>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">確定</el-button>
    </el-col>
    <el-col :span="2" />
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      sku_table: [],
      classlist: [
        {
          value: '',
          label: '一年甲班'
        }
      ],
      value: '',
      NewGradesData: {
        class: '',
        subject: '',
        remarks: '',
        GradesData: [
          {
            studentNumber: '',
            seatNumber: '',
            name: '',
            score: '',
            remarks: ''
          }
        ]
      }
    }
  },
  methods: {
    addDomin() {
      this.NewGradesData.GradesData.push({
        studentNumber: '',
        seatNumber: '',
        name: '',
        score: '',
        remarks: ''
      })
    }
  }
}
</script>
