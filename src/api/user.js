import request from '@/utils/request'

export function login(data) {
  // 负责登录
  return new Promise((resolve, reject) => {
    // 问问其他方式的token怎么拿
    const query = window.location.search.substring(1)
    const vars = query.split('&')

    let token = ''

    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
      if (pair[0] === 'token') token = pair[1]
    }
    if (token) {
      resolve(token)
    } else {
      reject('token获取失败')
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/Apps.jsp',
    method: 'get',
    params: { act: 'userInfo', token: token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
