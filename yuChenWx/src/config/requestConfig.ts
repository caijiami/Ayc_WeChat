import index from '../pages/index/config' // 主页接口
import order from '../pages/order/config' // 计划页面接口
import pet from '../pages/pet/config' // 宠物接口
import more from '../pages/more/config' // 更多接口
import car from '../pages/car/config' // 车辆接口
import amusement from '../pages/amusement/config' // 游乐园接口
/**
 * 请求的公共参数
 */
export const commonParame = {}

/**
 * 请求映射文件
 */
export const requestConfig = {
  loginUrl: '/api/user/wechat-auth', // 微信登录接口
  ...index,
  ...order,
  ...pet,
  ...more,
  ...car,
  ...amusement
}
