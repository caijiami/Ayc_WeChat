import Taro, { Component, Config } from "@tarojs/taro"
import "taro-ui/dist/style/index.scss" // 引入组件样式
import "@tarojs/async-await"
import { Provider } from "@tarojs/redux"
import "./config/taroConfig"
import "./utils/request"
import Index from "./pages/index"
import dva from './utils/dva'
import models from './models'
import './app.scss'
import { globalData } from "./utils/common"


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

class App extends Component {
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/food/food',
      'pages/order/order',
      'pages/pet/pet',
      'pages/more/more',
      'pages/car/car',
      'pages/amusement/amusement',
      'pages/shopping/shopping',
      'pages/cookbook/cookbook',
    ],
    window: {
      navigationBarBackgroundColor: '#9cb9f5',
      navigationBarTextStyle: 'white',
      backgroundColor: '#eeeeee',
      backgroundTextStyle: 'light',
      navigationBarTitleText: 'WeChat',
    },
    tabBar: {
      color: "#F8967B",
      selectedColor: "#9cb9f5",
      list: [
        {
          pagePath: "pages/index/index",
          text: "主页",
          iconPath: "./images/home.png",
          selectedIconPath: "./images/home_act.png"
        },
        {
          pagePath: "pages/order/order",
          text: "计划",
          iconPath: "./images/order.png",
          selectedIconPath: "./images/order_act.png"
        },
        {
          pagePath: "pages/food/food",
          text: "菜谱",
          iconPath: "./images/food.png",
          selectedIconPath: "./images/food_act.png"
        }
      ]
    }
  }

  /**
   *
   *  1.小程序打开的参数 globalData.extraData.xx
   *  2.从二维码进入的参数 globalData.extraData.xx
   *  3.获取小程序的设备信息 globalData.systemInfo
   * @memberof App
   */
  async componentDidMount() {
    // 获取参数
    const referrerInfo = this.$router.params.referrerInfo
    const query = this.$router.params.query
    !globalData.extraData && (globalData.extraData = {})
    if (referrerInfo && referrerInfo.extraData) {
      globalData.extraData = referrerInfo.extraData
    }
    if (query) {
      globalData.extraData = {
        ...globalData.extraData,
        ...query
      }
    }

    // 获取设备信息
    const sys = await Taro.getSystemInfo()
    sys && (globalData.systemInfo = sys)
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
