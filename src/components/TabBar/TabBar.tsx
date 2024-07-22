/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */

import {
  AppOutline,
  HandPayCircleOutline,
  HistogramOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { useState } from 'react';
import {
  useLocation,
  useNavigate
} from 'react-router-dom';

import './style.css';
export default function TabBar () {
  const location = useLocation();
  const navigate = useNavigate()
  const path = location.pathname

  const setRouteActive = (value: string) => {
    return () => {
      navigate(value)
    }
  }

  const [tabs, setTabs] = useState([
    {
      key: '/homepage',
      title: '首页',
      icon: <AppOutline />,
      isActive: path === '/homepage'
    },
    {
      key: '/quotation',
      title: '行情',
      icon: <HistogramOutline />,
      isActive: path === '/quotation'
    },
    {
      key: '/transaction',
      title: '交易',
      icon: <HandPayCircleOutline />,
      isActive: path === '/transaction'
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
      isActive: path === '/me'
    },
  ])

  return (
    <ul className='flex'>
      {tabs.map(item => (
        <li className={item.isActive ? 'active-color' : ''} key={item.key} title={item.title} onClick={setRouteActive(item.key)}>
          <p className="item">{item.icon}</p>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>

  )
}