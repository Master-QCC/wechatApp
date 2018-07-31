const API_SERVER = {
  development: 'http://newapi.aitpgroup.tech:8080/api',
  qa: 'http://newapi.aitpgroup.tech:8080/api',
  production: 'http://newapi.siyu.im:8080/api'
}[process.env.NODE_ENV]

const WECHAT_SERVER = {
  development: 'http://newapi.aitpgroup.tech/wechat_user.html',
  qa: 'http://newapi.aitpgroup.tech/wechat_user.html',
  production: 'http://newapi.siyu.im/wechat_user.html'
}[process.env.NODE_ENV]


export {
  API_SERVER,
  WECHAT_SERVER
}

