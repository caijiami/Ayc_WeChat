
import Taro, { Component, Config } from '@tarojs/taro'
import { View , Swiper, SwiperItem, Image, Text} from '@tarojs/components'
import { AtCountdown  } from 'taro-ui'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { IndexProps, IndexState } from './index.interface'
import './index.scss'
// import {  } from '../../components'

@connect(({ index }) => ({
  ...index,
}))

class Index extends Component<IndexProps, IndexState> {
  config: Config = {
    navigationBarTitleText: '主页',
    navigationBarBackgroundColor: '#9cb9f5',
  };

  state = {
    month: 0,
    day: 0,
    open: false,
  };

  // 获取今日数据
  // async getData(month: number, day: number) {
  //   await this.props.dispatch({
  //     type: 'index/getLists',
  //     payload: {
  //       month: month,
  //       day: day
  //     }
  //   })
  // }
  async getSwiperData() {
    await this.props.dispatch({
      type: 'index/swiperData',
      payload:{}
    })
  }

  componentDidMount() {
    this.getSwiperData()
  }
  // 跳转路由函数
  handleSkip=(path)=>{
    Taro.navigateTo({
      url: path,
    })
  };


  render() {
    const { swiperList }=this.props;
    return (
      <View className='fx-index-wrap'>
        <View className='index-background-view'>
          <View className='index-swiper-view'>
            <Swiper
              className='test-h'
              indicatorColor='#fff'
              indicatorActiveColor='#F8967B'
              circular
              indicatorDots
              autoplay>
              {
                swiperList&&swiperList.map((item)=>{
                  return (
                    <SwiperItem key={item.id}>
                      <View className='index-swiper-img'><Image src={item.src} className='swiper-img'/></View>
                    </SwiperItem>
                  )
                })
              }
            </Swiper>
          </View>
        </View>
        <View className='at-row'>
          <View className='at-col index-grid-view' onClick={()=>{this.handleSkip("../pet/pet")}}>
            <Image src={'https://caijiami.club:4550/index/gridIcon1.png'} className='grid-img'/>
            <Text className='grid-text'>养宠物</Text>
          </View>
          <View className='at-col index-grid-view' onClick={()=>{this.handleSkip("../amusement/amusement")}}>
            <Image src={'https://caijiami.club:4550/index/gridIcon2.png'} className='grid-img'/>
            <Text className='grid-text'>游乐园</Text>
          </View>
          <View className='at-col index-grid-view' onClick={()=>{this.handleSkip("../shopping/shopping")}}>
            <Image src={'https://caijiami.club:4550/index/gridIcon3.png'} className='grid-img'/>
            <Text className='grid-text'>逛商场</Text>
          </View>
        </View>
        <View className='index-activity-view'>
          <View className='index-activity-line'/>
          <Text className='index-activity-text'>最新活动</Text>
        </View>
        <View className='index-activity-box'>
          <View  className='index-activity-bgimg'>
            <Image src={'https://caijiami.club:4550/index/520.png'} className='activity-img'/>
          </View>
        </View>
        <View className='cont_date_view'>
          <AtCountdown
            isCard
            isShowDay
            day={520}
            hours={13}
            minutes={14}
            seconds={59}
          />
        </View>
        <View className='index-activity-view'>
          <View className='index-activity-line'/>
          <Text className='index-activity-text'>爱的电流</Text>
        </View>
        {/*<AtProgress percent={100} status='progress' isHidePercent />*/}
        <View className='at-article'>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__p'>
                遇到你，是我一生的缘分；牵着你，是我一生的快乐；爱上你，是我一生的幸运。今生有你相伴，是我一生的幸福。
              </View>
              <View className='at-article__p'>
                你的名字，是我读过最短的情诗。我很喜欢你，像春去秋来，海棠花开。
              </View>
              <Image
                className='at-article__img'
                src='https://caijiami.club:4550/index/yc.jpg'
                mode='widthFix' />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
