import request from '@/utils/request'
// 教師管理系統API

// 全教師名單列表
export function getTeacherList() {
  return request({
    url: '',
    method: 'get'
  })
}

// 創建教師資料
export function createTeacher(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

// 刪除教師資料
export function deleteTeacher() {
  return request({
    url: '',
    method: 'delete'
  })
}

// 更新教師資料
export function updateTeacher(data) {
  return request({
    url: '',
    method: 'put',
    data
  })
}
