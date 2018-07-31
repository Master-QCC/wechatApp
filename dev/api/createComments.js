import {
  fetchAPI,
} from 'utils'
import API from '@/config/api'

/**
 * the response likes below:
 * [{
    "avatar": "string",
    "channel": "COOK",
    "commentPics": [
      {
        "commentId": 0,
        "createTime": "string",
        "id": 0,
        "ossPath": "string"
      }
    ],
    "content": "string",
    "createTime": "string",
    "id": 0,
    "modifyTime": "string",
    "nickName": "string",
    "objectId": 0,
    "parentId": 0,
    "rating1": 0,
    "rating2": 0,
    "rating3": 0,
    "wechatUserId": "string"
}]
 *
 *
 */
export default async function createComments(params = {}){
  let url = API.createComments.url
  
  let _params = Object.assign({}, API.createComments, {
    url,
    body: params
  })
  
  let res = await fetchAPI(_params)
  
  console.log('createComments response: ', res)

  return res
}
