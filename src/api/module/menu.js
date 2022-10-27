import request from '../request'

function getRouters() {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}

export default {
  getRouters
}