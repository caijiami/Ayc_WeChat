import Taro, { Component, Config } from '@tarojs/taro'
import {Image, ScrollView, Text, View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { PetProps, PetState } from './pet.interface'
import './pet.scss'
// import {  } from '../../components'

@connect(({ pet }) => ({
    ...pet,
}))

class Pet extends Component<PetProps,PetState > {
  config:Config = {
    navigationBarTitleText: '宠物中心'
  }
  state = {}

  async getPetScrollData() {
    await this.props.dispatch({
      type: 'pet/gouScrollData',
      payload:{}
    });
  }
  async maoPetScrollData() {
    await this.props.dispatch({
      type: 'pet/maoScrollData',
      payload:{}
    })
  }

  componentDidMount() {
    this.getPetScrollData()
    this.maoPetScrollData()
  }

  onScroll(){
    // console.log(e.detail)
  }

  render() {
    const {gouScrollList, maoScrollList}=this.props
    return (
      <View className='fx-pet-wrap'>
        <View className='index-activity-view'>
          <View className='index-activity-line'/>
          <Text className='index-activity-text'>小狗狗</Text>
        </View>
        <ScrollView
          scrollX={true}
          scrollWithAnimation
          scrollLeft={0}
          onScroll={this.onScroll}
          className='order_middle_scroll'
        >
          {
            gouScrollList&&gouScrollList.map((item)=>{
              return (
                <View className='order_middle_scroll_view' key={item.id}>
                  <View className='order_middle_scroll_box'>
                    <Image src={item.src} className='order_middle_scroll_img'/>
                    <Text className='order_middle_scroll_text  text_color'>{item.title}</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
        <View className='index-activity-view'>
          <View className='index-activity-line'/>
          <Text className='index-activity-text'>小猫咪</Text>
        </View>
        <ScrollView
          scrollX={true}
          scrollWithAnimation
          scrollLeft={0}
          onScroll={this.onScroll}
          className='order_middle_scroll'
        >
          {
            maoScrollList&&maoScrollList.map((item)=>{
              return (
                <View className='order_middle_scroll_view' key={item.id}>
                  <View className='order_middle_scroll_box'>
                    <Image src={item.src} className='order_middle_scroll_img'/>
                    <Text className='order_middle_scroll_text  text_color'>{item.title}</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default Pet
