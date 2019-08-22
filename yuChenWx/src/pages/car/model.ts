// import Taro from '@tarojs/taro';
import * as carApi from './service';

export default {
  namespace: 'car',
  state: {
    carList:[]
  },

  effects: {
    * carData({ payload }, { call, put }) {
      const result= yield call(carApi.carDataList, {
        ...payload
      });
      console.log(result);
      if (result) {
        yield put({
          type: 'updateState',
          payload: {
            carList: result
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
