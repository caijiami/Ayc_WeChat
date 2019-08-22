import Taro, { Component, Config } from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MoreProps, MoreState } from './more.interface'
import './more.scss'
// import {  } from '../../components'

@connect(({ more }) => ({
    ...more,
}))

class More extends Component<MoreProps,MoreState > {
  config:Config = {
    navigationBarTitleText: '爱的乐园'
  }
  state = {}

  async getAiData() {
    await this.props.dispatch({
      type: 'more/moreData',
      payload:{}
    })
  }

  componentDidMount() {
    this.getAiData()
  }

  render() {
    const { moreList }=this.props;
    return (
      <View className='fx-more-wrap'>
        <View className='more_view'>
          {
            moreList&&moreList.map((item)=>{
              return (
                <Image src={item.src} className='more_view_img' key={item.id}/>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default More
