import request from '@/utils/request'

export function GetClassesData(TeacherNumber) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: TeacherNumber
  })
}
