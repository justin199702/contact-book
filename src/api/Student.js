import request from '@/utils/request'
//  學生管理系統API

// 全學生清單列表
export function getStudentList() {
  return request({
    url: '',
    method: 'get'
  })
}

// 單學生詳細資料
export function getStudent(studentID) {
  return request({
    url: '',
    method: 'get',
    params: { studentID }
  })
}

// 創建學生資料
export function createStudent(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

// 刪除學生資料
export function deleteStudent(studentID) {
  return request({
    url: '',
    method: 'delete',
    params: { studentID }
  })
}

// 更新學生資料
export function updateStudent(studentID, data) {
  return request({
    url: '',
    method: 'put',
    params: { studentID },
    data
  })
}
