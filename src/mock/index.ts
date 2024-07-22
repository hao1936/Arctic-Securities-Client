/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */

import Mock from 'mockjs';

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
// 你可以根据需要继续添加其他的mock接口