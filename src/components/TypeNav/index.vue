<template>
  <div class="type-nav">
    <div class="container" @mouseleave="leaveShow" @mouseenter="enterShow">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
      <div class="sort" v-show="show">
        <div class="all-sort-list2" @click="goSearch">
          <!-- 一级 -->
          <div
        
            class="item"
            v-for="(c1, index) in categoryList"
            :key="c1.categoryId"
            :class="{ cur: currentIndex == index }"
          >
            <h3 @mouseenter="changeIndex(index)">
              <a
                :data-categoryName="c1.categoryName"
                :data-category1Id="c1.categoryId"
                >{{ c1.categoryName }}</a
              >
              <!-- <router-link to="/search"> {{ c1.categoryName }}</router-link> -->
            </h3>

            <!-- 二级、三级分类 -->
            <div
              class="item-list clearfix"
              :style="{ display: currentIndex == index ? 'block' : 'none' }"
            >
              <div
                class="subitem"
                v-for="(c2, index) in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-categoryName="c2.categoryName"
                      :data-category2Id="c2.categoryId"
                      >{{ c2.categoryName }}</a
                    >
                    <!-- <router-link to="/search"> {{ c2.categoryName }}</router-link> -->
                  </dt>
                  <dd>
                    <em
                      v-for="(c3, index) in c2.categoryChild"
                      :key="c3.categoryId"
                    >
                      <a
                        :data-categoryName="c3.categoryName"
                        :data-category3Id="c3.categoryId"
                        >{{ c3.categoryName }}</a
                      >
                      <!-- <router-link to="/search"> {{ c3.categoryName }}</router-link> -->
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { mapState } from "vuex";
// import _ from 'lodash'
import throttle from "lodash/throttle";
// console.log(_)
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "TypeNav",
  components: {},
  data() {
    //这里存放数据
    return {
      // n: 1,
      currentIndex: -1,
      show: true,
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      categoryList: (state) => {
        // console.log(state)
        return state.home.categoryList;
      },
    }),
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // kewu(){
    //   this.$store.dispatch('categoryList')
    // console.log('可恶啊')
    // }

    // changeIndex(index) {
    changeIndex: throttle(function (index) {
      // console.log(index)
      this.currentIndex = index;
    }, 50),
    leaveShow() {
      // console.log(this.$route.path,'##')
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
          this.show = false;
      }    
    //   else {
    //   this.show = true;
    // }
    },
    enterShow() {
      this.show = true;
    },
    goSearch(event) {
      // this.$router.push('/search')
      let element = event.target;
      // console.log(element.dataset, "@@");
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      if (categoryname) {
        // alert(123)
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
// 参数合并
        if (this.$route.params) {
           location.params = this.$route.params;
           location.query = query;
        }
      
        // console.log(location, query)
        // location.query = query;
        this.$router.push(location);
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.$store,'wrtyu')
    
    //  console.log('我是TYPENAV挂载完毕')
    // this.show = true;
    if (this.$route.path != '/home') {
      this.show = false;
    }
    // else {
    //   this.show = true;
    // }
  },
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        //           .item:hover{
        // background: pink;
        //           }
        .cur {
          background: pink;
        }
      }
    }
    .sort-enter{
      height:0px;
      transform: rotate(0deg);
    }
    .sort-enter-to{
      height:461px;
            // transform: rotate(360deg);
    }
    .sort-enter-active{
      transition:all .5s linear;
    }
  }
}
</style>
