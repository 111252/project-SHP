import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";


const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    // console.log(result)
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  //   categoryList() {
  //     let result = reqCategoryList();
  //     console.log(result);
  // }
  async getBannerList({ commit }) {
      // console.log("在向服务器发起Ajax请求，获取轮播图的数据");
    let result = await reqGetBannerList();
    // console.log(result)
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
      // console.log(result,'11111111111');
      // console.log(this,'2222222222222');
    }
  },
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    // console.log(result, "11111111111");
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
  },
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
    // console.log(state,'213456')
  },
  GETBANNERLIST(state, BannerList) {
    state.BannerList = BannerList;
    // console.log(state,'213456')
        //  console.log("在修改仓库中bannerlist数据");
  },
  GETFLOORLIST(state, FloorList) {
    state.FloorList = FloorList;
  },
};
const state = {
  categoryList: [],
  BannerList: [],
  FloorList:[],
};
const getters = {};
export default {
    // namespaced:true,
    state,
    mutations,
    actions,
    getters
}
