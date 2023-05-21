import { reqGetSearchInfo } from "@/api";

const state = { SearchInfo:{}};
const mutations = {
  SEARCHINFO(state, SearchInfo) {
    state.SearchInfo = SearchInfo;
  },
};
const actions = {
  async SearchInfo({ commit },params={}) {
    let result = await reqGetSearchInfo(params);
    // console.log(result, "11111111111");
    if (result.code == 200) {
      commit('SEARCHINFO',result.data)
    }
  },
};
const getters = {
  goodsList(state) {
    return state.SearchInfo.goodsList || [];
  },
  attrsList(state) {
    return state.SearchInfo.attrsList || [];
  },
  trademarkList(state) {
    return state.SearchInfo.trademarkList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};



