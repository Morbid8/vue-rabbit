// 封装所有和用户相关的接口函数
//用户登录接口封装
import request from '@/utils/http'

export const loginAPI = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}


// export const getLikeListAPI = ({ limit = 4 }) => {
//   return request({
//     url: '/goods/relevant',
//     params: {
//       limit
//     }
//   })
// }
