/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
// const path = require('path')
const lessPlugin = require("craco-less");

module.exports = {
  // 插件
  plugins: [
    {
      plugin: lessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // antdv 主题之类的配置
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  },
  // 开发服务器配置
  devServer: {
    // 激活代理服务器
    proxy: {
      "/dev-api": {
        // 需要转发的请求前缀
        target: "www.baidu.com", // 目标服务器地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 路径重写
          "^/dev-api": "",
        },
      },
    },
  },
}
