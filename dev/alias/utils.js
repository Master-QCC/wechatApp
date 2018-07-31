import axios from 'axios'
import {
  Message
} from 'iview'
import '@/theme/message.less'
let Base64 = require('js-base64').Base64;

/**
 * create promise using axios
 * @param  {Object} params The params need include url, eg:
 * {
 *    url: url,
 *    method: method || 'get',
 *    body: {}
 * }
 * @return {[Object]}        [description]
 */
async function fetchAPI(params) {
  let method = params.method || 'get'
  let url = params.url

  if (!url) {
    console.error('fetchAPI expected request url but get undefined')
    return
  }

  let _opt = {
    method,
    url,
    validateStatus: function (status) {
      return status < 1001
    }
  }

  if (params.body) {
    _opt.data = Object.assign({}, params.body, {
      avatar: wechatUser.avatar,
      nickName: encodeBase64(wechatUser.nickName)
    })
  }

  if (params.headers !== false) {
  }

  let res = await axios(_opt)
  console.log('data response', res)
  let _res = res.data

  return _res
}

function joinParams(params) {
  let arr = []

  for (let i in params) {
    arr.push(`${i}=${encodeURIComponent(params[i])}`)
  }

  return arr.join('&')
}

function showMessage(type, content, fn) {
  Message[type]({
    content,
    duration: 3
  })

  if(fn && typeof fn == 'function'){
    setTimeout(fn, 1000)
  }
}

function formatDate(date) {
  let tarnsfer;
  if (typeof date === "object"){
    tarnsfer = date;
  } else {
    tarnsfer = date.replace(/-/g, "/");
  }
  let y = new Date(tarnsfer).getFullYear();
  let m = new Date(tarnsfer).getMonth() + 1;
  m = lessThanTen(m)
  let d = new Date(tarnsfer).getDate();
  d = lessThanTen(d)
  return y + '-' + m + '-' + d;
}

function onlyFormatDate(date) {
  let tarnsfer;
  if (typeof date === "object"){
    tarnsfer = date;
  } else {
    tarnsfer = date.replace(/-/g, "/");
  }
  let m = new Date(tarnsfer).getMonth() + 1;
  m = lessThanTen(m)
  let d = new Date(tarnsfer).getDate();
  d = lessThanTen(d)
  return m + '-' + d;
}

function formatTime(date) {
  let tranfer;
  if (typeof date === "object") {
    tranfer = date
  } else {
    tranfer = date.replace(/-/g, "/");
  }
  let y = new Date(tranfer).getFullYear();
  let m = new Date(tranfer).getMonth() + 1;
  m = lessThanTen(m)
  let d = new Date(tranfer).getDate();
  d = lessThanTen(d)
  let h = new Date(tranfer).getHours();
  h = lessThanTen(h)
  let M = new Date(tranfer).getMinutes();
  M = lessThanTen(M)
  let s = new Date(tranfer).getSeconds();
  s = lessThanTen(s)
  return y + '-' + m + '-' + d + ' ' + h + ':' + M + ':' + s;
}

function addLastTime(time, lastDay) {
  let _date = new Date(time);
  let timestamp = _date.setDate(_date.getDate() + parseInt(lastDay - 1));
  let date = new Date(timestamp);
  let y = date.getFullYear();
  let m = date.getMonth()+1;
  let d = date.getDate();
  return y+"-"+m+"-"+d+' '+'23:59:59';
}

function delYear(date) {
  let tranfer;
  if (typeof date === "object") {
    tranfer = date
  } else {
    tranfer = date.replace(/-/g, "/");
  }
  let m = new Date(tranfer).getMonth() + 1;
  m = lessThanTen(m);
  let d = new Date(tranfer).getDate();
  d = lessThanTen(d);
  let h = new Date(tranfer).getHours();
  h = lessThanTen(h);
  let M = new Date(tranfer).getMinutes();
  M = lessThanTen(M);
  let s = new Date(tranfer).getSeconds();
  s = lessThanTen(s);
  return m + '-' + d + ' ' + h + ':' + M + ':' + s;
}

function formatDateString(val) {
  if (!val) return ''

  let _date = val.split('.')[0]
  let _time = _date.split('T')
  let _hours = _time[1].split(':')

  return `${_time[0]} ${_hours[0]}:${_hours[1]}:00`
}

function lessThanTen(num) {
  let newNum;
  newNum =  num < 10 ? ('0' + num) : num;
  return newNum
}

/**
 * 取得url参数
 */
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象 
  let t = window.location.href.split('?')
  if(!t[1]) return null
  var r = t[1].match(reg);  // 匹配目标参数  
  if (r != null) return unescape(r[2]); return null; // 返回参数值
}

function createWechatUrl(){
  let url = encodeURIComponent(location.href.split('?')[0])
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5d47695464688826&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=home_page#wechat_redirect`
}

// compare input date with today, if input date earlier than today, return true
function isEarlierThanToday(date, gap = 0) {
  let today = new Date()
  if(gap > 0){
    today.setDate(today.getDate() + gap)
    today.setHours('0')
    today.setMinutes('0')
    today.setSeconds('0')
    today.setMilliseconds('0')
    date = date + ' 0:0:0'
  }
  
  return (new Date(date).valueOf() <= today.valueOf()) ? true : false
}

function encodeBase64(str) {
  return Base64.encode(str);
}

function decodeBase64(str) {
  return Base64.decode(str);
}

export {
  fetchAPI,
  joinParams,
  showMessage,
  formatDate,
  formatTime,
  formatDateString,
  delYear,
  getUrlParam,
  addLastTime,
  createWechatUrl,
  isEarlierThanToday,
  onlyFormatDate,
  encodeBase64,
  decodeBase64
}
