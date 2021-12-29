import request from '@/utils/request'
// 出勤系統API

// 全出勤記錄列表
export function getAttendanceList() {
  return request({
    url: '',
    method: 'get'
  })
}

// 創建出勤紀錄
export function createAttendance(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

// 刪除出勤紀錄
export function deleteAttendance() {
  return request({
    url: '',
    method: 'delete'
  })
}

// 更新出勤紀錄
export function updateAttendance(data) {
  return request({
    url: '',
    method: 'put',
    data
  })
}
