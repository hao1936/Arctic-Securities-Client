/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
const mock = new MockAdapter(axios);
mock.onAny().passThrough();
if (process.env.NODE_ENV === 'development') {
  // Mock.mock(/\.*/, 'use', function () {
  //   return {
  //     code: 0,
  //     message: 'Mock data'
  //   };
  // });
  if (process.env.NODE_ENV === 'development') {
    require('./mock');
  }
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
