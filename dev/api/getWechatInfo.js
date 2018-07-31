import {
  fetchAPI,
  createWechatUrl
} from 'utils'
import API from '@/config/api'

/**
 * the response likes below:
 * 
 * {
  "openid":" OPENID",
  " nickname": NICKNAME,
  "sex":"1",
  "province":"PROVINCE"
  "city":"CITY",
  "country":"COUNTRY",
  "headimgurl":    "http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
  "privilege":[ "PRIVILEGE1" "PRIVILEGE2"     ],
  "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
  }
  *
  *
  */
export default async function getWechatInfo(code){
  let url = API.getWechatInfo.url.replace('{{code}}', code)

  let _params = Object.assign({}, API.getWechatInfo, {
    url
  })
  
  let res = await fetchAPI(_params)
  
  console.log('getWechatInfo response: ', res)
  if(!res.openId){
    location.href = createWechatUrl()
  }else{
    return res
  }
}
  