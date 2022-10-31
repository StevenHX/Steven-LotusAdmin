import request from './request'

export function getRouters() {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}