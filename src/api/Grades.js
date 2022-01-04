import request from '@/utils/request'
// 成績系統API

// 全成績紀錄列表
export function getGradesList() {
  return request({
    url: '',
    method: 'get'
  })
}

// 單成績紀錄詳細資料
export function getGradeDetail(GradeID) {
  return request({
    url: '',
    method: 'get',
    params: { GradeID }
  })
}

// 創建成績紀錄
export function createGrade(data) {
  return request({
    url: '',
    method: 'put',
    data
  })
}

// 刪除成績紀錄
export function deleteGrade() {
  return request({
    url: '',
    method: 'delete'

  })
}

// 更新成績紀錄
export function updateGrade(GradeID, data) {
  return request({
    url: '',
    method: 'put',
    params: { GradeID },
    data
  })
}

