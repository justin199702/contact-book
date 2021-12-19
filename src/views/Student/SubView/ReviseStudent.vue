<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="2" />
      <el-col :span="20">
        <el-form
          ref="NewStudentData"
          :model="NewStudentData"
          :label-position="top"
          label-width="50px"
          size="medium"
        >
          <el-form-item label="學生姓名">
            <el-input v-model="NewStudentData.name" placeholder="" />
          </el-form-item>
          <el-form-item label="學生照片">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
            <el-divider />
          </el-form-item>
          <!-- 聯絡人資訊 -->
          <aside align="center" style="font: 1.3em sans-serif;">
            聯絡人資訊
          </aside>
          <el-button @click="addDomin">新增聯絡人</el-button>
          <el-table :data="NewStudentData.ParentsData" align="left">
            <el-table-column type="index" />
            <el-table-column
              v-for="(item, index) in sku_table"
              :key="index"
              align="center"
              :label="item.sku_name"
              :prop="item.value"
            />
            <el-table-column label="姓名" align="center">
              <template slot-scope="scope">
                <el-form-item>
                  <el-input
                    v-model="scope.row.name"
                    style="margin-top:15px; "
                    placeholder="請輸入"
                    clearable
                    @change="getSale(scope.row)"
                  />
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="關係" align="center">
              <template slot-scope="scope">
                <el-form-item>
                  <el-input
                    v-model="scope.row.relationship"
                    style="margin-top:15px"
                    placeholder="請輸入"
                    clearable
                    @change="getSale(scope.row)"
                  />
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="手機號碼" align="center">
              <template slot-scope="scope">
                <el-form-item>
                  <el-input
                    v-model="scope.row.cellphone"
                    style="margin-top:15px"
                    placeholder="請輸入"
                    clearable
                    @change="getSale(scope.row)"
                  />
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  @click.native.prevent="
                    deleteRow(NewStudentData.ParentsData, scope.$index)
                  "
                >刪除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <aside align="center" style="font: 1.3em sans-serif;">
            學生資訊
          </aside>
          <el-form-item label="學號">
            <el-input v-model="NewStudentData.studentNumber" placeholder="" />
          </el-form-item>
          <el-form-item label="生日">
            <el-input v-model="NewStudentData.birthday" />
          </el-form-item>
          <el-form-item label="電話">
            <el-input v-model="NewStudentData.phone" placeholder="" />
          </el-form-item>
          <el-form-item label="手機">
            <el-input v-model="NewStudentData.cellphone" placeholder="" />
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="NewStudentData.address" placeholder="" />
          </el-form-item>
          <el-form-item label="備註">
            <el-input v-model="NewStudentData.remarks" placeholder="" />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="2" />
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NewStudentData: {
        name: '',
        ParentsData: [
          {
            name: '',
            relationship: '',
            cellphone: ''
          }
        ],
        studentNumber: '',
        birthday: '',
        phone: '',
        cellphone: '',
        address: '',
        remarks: ''
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確定關閉？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    addDomin() {
      this.NewStudentData.ParentsData.push({
        name: '',
        relationship: '',
        cellphone: ''
      })
    },
    deleteRow(rows, index) {
      rows.splice(index, 1)
    }
  }
}
</script>
