import Taro, { Component, Config } from '@tarojs/taro'
import {Image, View, Text} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { ShoppingProps, ShoppingState } from './shopping.interface'
import './shopping.scss'
// import {  } from '../../components'

@connect(({ shopping }) => ({
    ...shopping,
}))

class Shopping extends Component<ShoppingProps,ShoppingState > {
  config:Config = {
    navigationBarTitleText: '给老婆买买买地点'
  }
  state = {
    current: 0,
  }

  componentDidMount() {

  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View className='fx-shopping-wrap'>
        <View  className='shopping_top_view'>
          <Image src={'https://caijiami.club:4550/shopping/shoppingIcon.png'} className='shopping_icon'/>
          <Text  className='shopping_text'>杭州女人的天堂人气最旺的5大商场盘点</Text>
        </View>
        <AtTabs
          current={this.state.current}
          height='500px'
          tabDirection='vertical'
          tabList={[
            { title: '杭州大厦'},
            { title: '湖滨银泰' },
            { title: '万象城' },
            { title: '西溪银泰城'},
            { title: '西溪印象城'},
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
            <View>
              <Text  className='shopping_view_text'>杭州大厦是杭州第一个大型商贸旅游综合体，集购物、美食、休闲娱乐、会议展览、住宿、办公写字楼为一体。汇聚LV、HERMES、LA MER等国际顶级大牌、精品美食、高档SPA等，而且位于杭城核心区块，每天来这里“血拼”的大有人在。</Text>
              <Image src={'https://caijiami.club:4550/shopping/1.jpg'} className='shopping_view_img'/>
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:200px;'>
              <Text  className='shopping_view_text'>杭州湖滨银泰in77位于西湖边上，集国际大牌、快时尚、创意餐饮、休闲娱乐于一体，是建筑风格也独树一帜，是杭城时尚新地标，也是吃喝玩乐的好去处。</Text>
              <Image src={'https://caijiami.club:4550/shopping/2.jpg'} className='shopping_view_img'/>
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:200px;'>
              <Text  className='shopping_view_text'>杭州万象城可以称得上是杭州第一个真正意义上的综合购物中心了，也是杭州最大的购物中心。占地150亩，从地下3层到地上6层，汇聚众多国际一线奢侈品牌，还有真冰滑冰场、多厅影城等休闲娱乐项目。</Text>
              <Image src={'https://caijiami.club:4550/shopping/3.jpg'} className='shopping_view_img'/>
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:200px;'>
              <Text  className='shopping_view_text'>西溪银泰城是银泰在西湖区的第一个综合体项目，是档次较高、服务一流的都市品质生活中心。位于地铁5号线上盖，30万平方米的总建筑面积，200多家品牌商户，近100家网红餐厅、70多个潮流新品，是杭州新地标综合体之一。</Text>
              <Image src={'https://caijiami.club:4550/shopping/4.jpg'} className='shopping_view_img'/>
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:200px;'>
              <Text  className='shopping_view_text'>杭州西溪印象城位于余杭区五常街道西溪湿地五常大道入口正对面，是一家时尚、潮流的中高端家庭型区域购物中心。已有外婆家、迪卡侬、中影影城等品牌商入驻，逛完西溪湿地，再到印象城吃饭、看电影、逛商场，可谓心满意足。</Text>
              <Image src={'https://caijiami.club:4550/shopping/5.jpg'} className='shopping_view_img'/>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Shopping
