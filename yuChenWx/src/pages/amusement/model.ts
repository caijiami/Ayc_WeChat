// import Taro from '@tarojs/taro';
import * as amusementApi from './service';


export default {
  namespace: 'amusement',
  state: {
    beiJing:[],
    shangHai:[],
    xiangGang:[],
    hangZhou:[],
    suZhou:[],
    meiGuo:[],
    riBen:[],
    faGu:[],
  },

  effects: {
    * amusementData({ payload }, { call, put }) {
      const result= yield call(amusementApi.amusementDataList, {
        ...payload
      });
      console.log(result);
      if (result) {
        yield put({
          type: 'updateState',
          payload: {
            ...result
          }
        })
      }
    },
  },

  reducers: {
    updateState(state, { payload: data }) {
      return { ...state, ...data }
    }
  }
}
