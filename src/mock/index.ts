/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */

import Mock from 'mockjs';
import { marketPrice } from '../utils';
import { list } from './myStockList';
import { newsList } from './newsList';
Mock.setup({
  timeout: '200-600' // 可以设置延迟响应时间
});

// 示例数据
Mock.mock('/dev-api/api/user', 'get', {
  code: 200,
  data: {
    'name': '@name',
    'age|18-30': 25,
    'email': '@email'
  }
});
Mock.mock('/dev-api/app/userInfo', 'get', {
  code: 200,
  data: {
    'totalAssets': '89899.79',
    'account': '79319999'
  }
});
Mock.mock('/dev-api/api/qt/stock/kline/get', 'get', {
  code: 200,
  data: {
    "rc": 0,
    "rt": 17,
    "svr": 2887187465,
    "lt": 1,
    "full": 0,
    "dlmkts": "",
    "data": {
      "code": "600600",
      "market": 1,
      "name": "青岛啤酒",
      "decimal": 2,
      "dktotal": 7409,
      "preKPrice": 68.95,
      "klines": [
        "2024-07-22,70.16,69.70,70.66,68.98,50522,352822101.00,2.38,-1.08,-0.76,0.72",
        "2024-07-23,69.60,67.90,69.60,67.77,29599,202243111.00,2.63,-2.58,-1.80,0.42"
      ]
    }
  }
});
const { date, price } = marketPrice();
Mock.mock('/dev-api/api/getSelectedStocks', 'get', {
  code: 200,
  data: {
    code: "600600",
    decimal: 2,
    dktotal: 7409,
    market: 1,
    name: "青岛啤酒",
    price,
    date
  }
});
Mock.mock('/dev-api/api/concernedStocks', 'get', {
  code: 200,
  data: {
    total: 32,
    list: list
  }
});
Mock.mock('/dev-api/api/newsList', 'get', {
  code: 200,
  data: {
    total: 32,
    newsList
  }
});
// 
