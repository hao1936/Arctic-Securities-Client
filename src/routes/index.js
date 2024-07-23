/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { Navigate } from 'react-router-dom';
import Homepage from "../pages/Homepage/Homepage";
import Me from "../pages/Me/Me";
import Quotation from "../pages/Quotation/Quotation";
import StockDetails from "../pages/StockDetails/StockDetails";
import Transaction from "../pages/Transaction/Transaction";
const routes = [
  {
    path: '/homepage',
    element: <Homepage />,
  },
  {
    path: '/quotation',
    element: <Quotation />,
  },
  {
    path: '/transaction',
    element: <Transaction />,
  },
  {
    path: '/me',
    element: <Me></Me>
  },
  {
    path: '/stockDetails',
    element: <StockDetails></StockDetails>
  },
  {
    path: '/',
    element: <Navigate to="homepage"></Navigate>
  },
  {
    path: '*',
    element: <Navigate to="homepage"></Navigate>
  }
];
export default routes