import Taro, { Component, Config } from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import {  AtMessage } from 'taro-ui'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { FoodProps, FoodState } from './food.interface'
import './food.scss'
// import {  } from '../../components'

// @connect(({ food }) => ({
//     ...food,
// }))

class Food extends Component<FoodProps,FoodState > {
  config:Config = {
    navigationBarTitleText: '菜谱'
  }
  state = {
    braise:false
  };

  componentDidMount() {

  }

  // 跳转路由函数
  handleSkip=(id)=>{
    Taro.atMessage({
      'message':'小密密前往爱的灶台烧菜',
      'type': 'success',
    });
    // Taro.navigateTo({
    //   url: '../cookbook/cookbook?id='+id,
    // })
  };


  render() {
    return (
      <View className='fx-food-wrap'>
        <AtMessage />
        <View  className='food_top_title_view'>
          <Image src={'https://caijiami.club:4550/food/yishu1.png'} className='food_top_title_img'/>
          <Image src={'https://caijiami.club:4550/food/yishu1.png'} className='food_top_title_img'/>
        </View>
        <View className='index-activity-view'>
          <View className='index-activity-line'/>
          <Text className='index-activity-text'>菜谱大全</Text>
        </View>
        <View className='food_running_view'>
          <View className='food_running_box'>
            <View  className='food_jb_bg_view food_braise_view'  onClick={()=>{this.handleSkip(1)}}>
              <Text  className='food_jb_bg_text food_braise_text'>
                红烧菜系
              </Text>
            </View>
            <View  className='food_jb_bg_view food_steamed_view'  onClick={()=>{this.handleSkip(2)}}>>
              <Text  className='food_jb_bg_text food_steamed_text'>
                清蒸菜系
              </Text>
            </View>
            <View  className='food_jb_bg_view food_stir_view'  onClick={()=>{this.handleSkip(3)}}>>
              <Text  className='food_jb_bg_text food_stir_text'>
                爆炒菜系
              </Text>
            </View>
            <View  className='food_jb_bg_view food_hang_view'  onClick={()=>{this.handleSkip(4)}}>>
              <Text  className='food_jb_bg_text food_hang_text'>
                杭帮菜系
              </Text>
            </View>
          </View>
          <View className='food_running_box'>
            <View  className='food_jb_bg_view food_baked_view'  onClick={()=>{this.handleSkip(5)}}>>
              <Text  className='food_jb_bg_text food_baked_text'>
                盐焗菜系
              </Text>
            </View>
            <View  className='food_jb_bg_view food_frying_view'  onClick={()=>{this.handleSkip(6)}}>>
              <Text  className='food_jb_bg_text food_frying_text'>
                煎炸菜系
              </Text>
            </View>
            <View  className='food_jb_bg_view food_sliminess_view'  onClick={()=>{this.handleSkip(7)}}>>
              <Text  className='food_jb_bg_text food_sliminess_text'>
                滑溜菜系
              </Text>
            </View>
            <View  className='food_jb_bg_view food_chan_view'  onClick={()=>{this.handleSkip(8)}}>>
              <Text  className='food_jb_bg_text food_chan_text'>
                四川菜系
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Food
