import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { CookbookProps, CookbookState } from './cookbook.interface'
import './cookbook.scss'
// import {  } from '../../components'

// @connect(({ cookbook }) => ({
//     ...cookbook,
// }))

class Cookbook extends Component<CookbookProps,CookbookState > {
  config:Config = {
    navigationBarTitleText: '香密密大厨食谱'
  }
  state = {

  };

  componentDidMount() {
    console.log(this.$router.params.id)

  }

  render() {
    return (
      <View className='fx-cookbook-wrap'>

      </View>
    )
  }
}

export default Cookbook
