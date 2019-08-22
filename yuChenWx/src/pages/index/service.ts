import Api from '../../utils/request'

export const getLists = data => {
  return Api.getLists(data)
}

export const swiperDataList = data => {
  return Api.swiperDataList(data)
}
