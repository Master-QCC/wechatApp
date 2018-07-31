import {
  API_SERVER,
  WECHAT_SERVER
} from './index'
const API_CONFIG = {
  /**
   * get wechat user info
   */
  getWechatInfo: {
    url: `${WECHAT_SERVER}?code={{code}}&state=STATE`,
    method: 'get',
    headers: false
  },
  getComments: {
    url: `${API_SERVER}/comments/{{channel}}/{{objectId}}`,
    method: 'get',
    headers: false
  },
  createComments: {
    url: `${API_SERVER}/comments`,
    method: 'post',
    headers: false
  }
}

export default API_CONFIG
