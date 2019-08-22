// import Taro from '@tarojs/taro';
import * as moreApi from './service';

// import * as orderApi from "../order/service";

export default {
  namespace: 'more',
  state: {
    moreList:[]
  },

  effects: {
    * moreData({ payload }, { call, put }) {
      const result= yield call(moreApi.moreDataList, {
        ...payload
      });
      console.log(result);
      if (result) {
        yield put({
          type: 'updateState',
          payload: {
            moreList: result
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
