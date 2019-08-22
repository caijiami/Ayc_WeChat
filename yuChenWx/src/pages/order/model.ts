// import Taro from '@tarojs/taro';
import * as orderApi from './service';

// import * as indexApi from "../index/service";

export default {
  namespace: 'order',
  state: {
    scrollList:[]
  },

  effects: {
    * scrollData({ payload }, { call, put }) {
      const result= yield call(orderApi.scrollDataList, {
        ...payload
      });
      console.log(result);
      if (result) {
        yield put({
          type: 'updateState',
          payload: {
            scrollList: result
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
