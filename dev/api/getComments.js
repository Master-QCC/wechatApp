import {
  fetchAPI,
  joinParams
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
export default async function getComments(params = {
  channel,
  objectId,
  page,
  size,
  sort
}){

  let {
    channel,
    objectId,
    page,
    size,
    sort
  } = params

  let _search = joinParams({page,size,sort})

  let url = API.getComments.url.replace('{{channel}}', channel).replace('{{objectId}}', objectId) + `?${_search}`

  let _params = Object.assign({}, API.getComments, {
    url
  })
  
  let res = await fetchAPI(_params)
  
  console.log('getComments response: ', res)

  return res
}
