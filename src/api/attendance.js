import request from '@/utils/request'

export function getAttendanceList() {
  return request({
    url: '',
    method: 'get'
  })
}

export function createAttendance(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

export function deleteAttendance() {
  return request({
    url: '',
    method: 'delete'
  })
}

export function updateAttendance(data) {
  return request({
    url: '',
    method: 'put',
    data
  })
}
