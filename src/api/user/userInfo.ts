/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { request } from "../../http";

export const getUserInfo = (): any => {
  return request({
    url: `/app/userInfo`,
    method: "get",
  });
};

