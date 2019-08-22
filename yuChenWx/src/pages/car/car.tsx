import Taro, { Component, Config } from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { CarProps, CarState } from './car.interface'
import './car.scss'
// import {  } from '../../components'

@connect(({ car }) => ({
    ...car,
}))

class Car extends Component<CarProps,CarState > {
  config:Config = {
    navigationBarTitleText: '给男友看车'
  }
  state = {}

  async getCarData() {
    await this.props.dispatch({
      type: 'car/carData',
      payload:{}
    })
  }

  componentDidMount() {
    this.getCarData()
  }

  render() {
    const { carList }= this.props;
    return (
      <View className='fx-car-wrap'>
        <View className='more_view'>
          {
            carList&&carList.map((item)=>{
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

export default Car
