import request from '@/utils/request'
// 班級管理系統API

// 全班級列表
export function getClassList() {
  return request({
    url: '',
    method: 'get'
  })
}

// 單班級詳細資料
export function getClasses(ClassID) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: ClassID
  })
}

// 創建班級資料
export function createClass(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

// 更新班級資料
export function updateClass(data, ClassID) {
  return request({
    url: '',
    method: 'put',
    params: { ClassID },
    data
  })
}

// 刪除班級資料
export function deleteClass(ClassID) {
  return request({
    url: '',
    method: 'post'
  })
}
