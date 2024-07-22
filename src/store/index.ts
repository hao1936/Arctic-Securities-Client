/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */

import { configureStore } from "@reduxjs/toolkit";

// 引入redux模块定义的reducer函数
import appSlice from "./appSlice";
import userSlice from "./userSlice";

// 集中式存储数据的仓库
// 所有redux状态数据都存在store中
// TODO：汇总所有redux模块reducer函数，将来就能读取/更新对应redux模块的数据
export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

/*
    {
      user: {
        name: string;
        avatar: string;
        token: string;
        routes: string[];
        buttons: string[];
      },
      app: {
        lang: string
      }
    }
*/

export type AppDispatch = typeof store.dispatch;


export type RootState = ReturnType<typeof store.getState>;
