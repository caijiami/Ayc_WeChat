import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import { AtTabs, AtTabsPane ,AtCard} from 'taro-ui'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { AmusementProps, AmusementState } from './amusement.interface'
import './amusement.scss'
// import {  } from '../../components'

@connect(({ amusement }) => ({
    ...amusement,
}))

class Amusement extends Component<AmusementProps,AmusementState > {
  config:Config = {
    navigationBarTitleText: '陪你一起玩的时光'
  };
  state = {
    current: 0,
  };

  async getAmusementData() {
    await this.props.dispatch({
      type: 'amusement/amusementData',
      payload:{}
    })
  }

  componentDidMount() {
    this.getAmusementData()
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render() {
    const { beiJing, shangHai, xiangGang, hangZhou, suZhou, meiGuo, riBen, faGu }=this.props;
    return (
      <View className='fx-amusement-wrap'>
        <AtTabs
          current={this.state.current}
          scroll
          tabList={[
            { title: '北京' },
            { title: '上海' },
            { title: '香港' },
            { title: '杭州' },
            { title: '苏州' },
            { title: '美国' },
            { title: '东京' },
            { title: '法国' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View>
              {
                beiJing&&beiJing.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View>
              {
                shangHai&&shangHai.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View>
              {
                xiangGang&&xiangGang.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View>
              {
                hangZhou&&hangZhou.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View>
              {
                suZhou&&suZhou.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View>
              {
                meiGuo&&meiGuo.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={6}>
            <View>
              {
                riBen&&riBen.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={7}>
            <View>
              {
                faGu&&faGu.map((item)=>{
                  return (
                    <AtCard
                      extra={item.extra}
                      title={item.title}
                      isFull
                      key={item.id}
                    >
                      <View>
                        <Text className='amusement_Text'>{item.content}</Text>
                        <Image
                          className='amusement_img'
                          src={item.src}
                          mode='widthFix' />
                      </View>
                    </AtCard>
                  )
                })
              }
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Amusement
