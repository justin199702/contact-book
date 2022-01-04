import request from '@/utils/request'
// 公告系統API

// 全公告列表
export function getAnnouncmetList() {
  return request({
    url: '',
    method: 'get'
  })
}

// 單公告詳細資料
export function getAnnouncmet(AnnouncmetID) {
  return request({
    url: '',
    method: ''
  })
}

// 創建公告
export function createAnnouncmet(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

// 刪除公告
export function deleteAnnouncmet() {
  return request({
    url: '',
    method: 'delete'
  })
}

// 更新公告
export function updateAnnouncmet(data) {
  return request({
    url: '',
    method: 'put',
    data
  })
}
