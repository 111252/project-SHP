// const { defineConfig } = require('@vue/cli-service')
// // module.exports = defineConfig({
//   // transpileDependencies: true

// // });
module.exports = {
//   productionSourceMap: false,
//   // productionTip: false,
  //关闭eslint
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // target: "00000000000000",
        // pathRewrite: { "^/api": "" },
       
      },
    },
  },
};
// // console.log(target, '11111111111');


// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // 关闭eslint
//   lintOnSave: false,
// productionTip: false,
//   //配置代理解决跨域请求问题
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "http://gmall-h5-api.atguigu.cn",
//         //因为此项目前面带了baseUrl都设置了带api，这里就不用设置了
//         // pathRewrite:{'^/api':''},
//       },
//     },
//   },
// });












