// import Taro from '@tarojs/taro';
import * as petApi from './service';

export default {
  namespace: 'pet',
  state: {
    gouScrollList:[],
    maoScrollList:[]
  },

  effects: {
    * gouScrollData({ payload }, { call, put }) {
      const result= yield call(petApi.gouScrollDataList, {
        ...payload
      });
      console.log(result);
      if (result) {
        yield put({
          type: 'updateState',
          payload: {
            gouScrollList: result
          }
        })
      }
    },
    * maoScrollData({ payload }, { call, put }) {
      const result= yield call(petApi.maoScrollDataList, {
        ...payload
      });
      console.log(result);
      if (result) {
        yield put({
          type: 'updateState',
          payload: {
            maoScrollList: result
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
