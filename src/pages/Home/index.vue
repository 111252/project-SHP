<!--  -->
<template>
  <div class="">
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor,index) in FloorList" :key="floor.id" :list="floor"/>
  
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index";
import Floor from "./Floor/index";
import Rank from "./Rank/index";
import Recommend from "./Recommend/index";
import Like from "./Like/index";
import Brand from "./Brand/index";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapState } from "vuex";
export default {
  name: "home",
  //import引入的组件需要注入到对象中才能使用
  components: { ListContainer, Recommend, Floor, Rank, Like, Brand },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
     ...mapState({
      FloorList: (state) => state.home.FloorList,
    }),
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("getFloorList");
  },
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
</style>
