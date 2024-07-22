/*
 * @Author: zhanghao hao7741936@gmail.com
 * @Date: 2024-07-22 15:56:35
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * @FilePath: \Arctic-Securities-Client\src\api\user\index.ts
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { request } from "../../http";
import { GetUserInfoResponse, LoginResponse } from "./model/userTypes";

// 登录
export const reqLogin = (username: string, password: string) => {
  return request.post<any, LoginResponse>(`/app/login`, {
    username,
    password,
  });
};

// 获取用户信息
export const reqGetUserInfo = () => {
  return request.get<any, GetUserInfoResponse>(`/app/info`);
};

// 登出
export const reqLogout = () => {
  return request.post<any, null>(`/app/logout`);
};
export const getList = () => {
  return request.get<any, any>(`/api/user`)
}

