import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, Image, ScrollView} from '@tarojs/components'
import { AtIcon , AtGrid , AtMessage } from 'taro-ui'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { OrderProps, OrderState } from './order.interface'
import './order.scss'
// import {  } from '../../components'

@connect(({ order }) => ({
    ...order,
}))

class Order extends Component<OrderProps,OrderState > {
  config:Config = {
    navigationBarTitleText: '计划',
    navigationBarBackgroundColor: '#9cb9f5',
  };
  state = {
  };

  async getScrollData() {
    await this.props.dispatch({
      type: 'order/scrollData',
      payload:{}
    })
  }

  componentDidMount() {
    this.getScrollData()
  }

  onScroll(){
    // console.log(e.detail)
  }

  handleSkip=(path)=>{
    Taro.navigateTo({
      url: path,
    })
  };


  gridClick(item,index){
    console.log(item,index)
    if(index===0){
      Taro.navigateTo({
        url: "../car/car",
      })
    }
    if(index===1||index===2||index===3||index===4){
      Taro.atMessage({
        'message':'成功命令小密密去干活',
        'type': 'success',
      });
    }
    if(index===5){
      Taro.navigateTo({
        url: "../more/more",
      })
    }
  }


  render() {
    const { scrollList }=this.props;
    return (
      <View className='order_bg_view'>
        <AtMessage />
        <View className='order_top_view'>
          <Image src={'https://caijiami.club:4550/order/order1.png'} className='order_top_img'/>
          <View  className='order_top_text_box'>
            <Text className='order_top_text'>春天会下雨,夏天有大雨 秋天会起风,冬天有艳阳</Text>
            <Text className='order_top_text'> 一年四季会有很多意外 最迷人的还是遇见了你</Text>
            <Text className='order_top_text order_top_text_red'>Miss You</Text>
            <AtIcon value='heart' size='30' color='#F00'/>
          </View>
        </View>
        <View className='index-activity-view'>
          <View className='index-activity-line'/>
          <Text className='index-activity-text'>梦想之旅</Text>
        </View>
        <ScrollView
          scrollX={true}
          scrollWithAnimation
          scrollLeft={0}
          onScroll={this.onScroll}
          className='order_middle_scroll'
        >
          {
            scrollList&&scrollList.map((item)=>{
              return (
                <View className='order_middle_scroll_view' key={item.id}>
                 <View className='order_middle_scroll_box'>
                   <Image src={item.src} className='order_middle_scroll_img'/>
                   <Text className='order_middle_scroll_text'>{item.title}</Text>
                 </View>
                </View>
              )
            })
          }
        </ScrollView>
        <View className='index-activity-view'>
          <View className='index-activity-line'/>
          <Text className='index-activity-text'>爱的命令</Text>
        </View>
        <AtGrid
          mode='rect'
          hasBorder={false}
          onClick={this.gridClick}
          data={
          [
            {
              image: 'https://caijiami.club:4550/order/grid1.png',
              value: '看车车'
            },
            {
              image: 'https://caijiami.club:4550/order/grid2.png',
              value: '铲屎官'
            },
            {
              image: 'https://caijiami.club:4550/order/grid3.png',
              value: '洗衣服'
            },
            {
              image: 'https://caijiami.club:4550/order/grid4.png',
              value: '做饭饭'
            },
            {
              image: 'https://caijiami.club:4550/order/grid5.png',
              value: '拿饮料'
            },
            {
              image: 'https://caijiami.club:4550/order/grid6.png',
              value: '更多'
            }
          ]
        } />


      </View>
    )
  }
}

export default Order
