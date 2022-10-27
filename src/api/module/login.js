import request from '../request'

// 登录方法
function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 注册方法
function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}

export default {
  login,
  register,
  getInfo,
  logout,
  getCodeImg
}