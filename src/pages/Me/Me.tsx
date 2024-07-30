/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-30
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { AntOutline, PieOutline, TextOutline, UnlockOutline, UserCircleOutline } from 'antd-mobile-icons'
import TabBar from '../../components/TabBar/TabBar'
import './style.css'
export default function Me () {
  return (
    <div className="me">
      <div className="me-top">
        <div className="top-left">
          <span><AntOutline /></span>
          <span>查看个人主页</span>
        </div>
        <div>
          <h4>0</h4>
          <h5>积分</h5>
        </div>
      </div>
      <div className="title-card">
        <p >
          <span>人民币总资产(元)</span>
          <span>今日盈亏</span>
        </p>
        <p>
          <span>解锁查看</span>
          <span> - - </span>
        </p>
        <p>
          <span>持仓市值</span>
          <span>持仓盈亏</span>
          <span>可用资金</span>
        </p>
        <p>
          <span> -- </span>
          <span> -- </span>
          <span> -- </span>
        </p>
      </div>
      <div className="trade">
        <ul>
          <li>
            <span> <PieOutline /></span>
            <span>盈亏分析</span>
          </li>
          <li>
            <span><TextOutline /></span>
            <span>投资账单</span>
          </li>
          <li>
            <span ><UserCircleOutline /></span>
            <span>投资画像</span>
          </li>
          <li>
            <span ><UnlockOutline /></span>
            <span>权限中心</span>
          </li>
        </ul>
      </div>
      <div className="my-list">
        <ul>
          <li>
            <p className="list-title">条件单</p>
            <p className="description">定价、定时、日涨跌买卖策略</p>
          </li>
          <li>
            <p className="list-title">智能盯盘</p>
            <p className="description">设置行情提示，把握盯盘时机</p>
          </li>
          <li>
            <p className="list-title">我的订单</p>
            <p className="description">增值付费服务，订单一览</p>
          </li>
          <li>
            <p className="list-title">我的权益</p>
            <p className="description">我享受的权益，一站查询</p>
          </li>
          <li>
            <p className="list-title">我的卡券</p>
            <p className="description">热门优惠活动，惊喜送不停</p>
          </li>
        </ul>
      </div>
      <TabBar></TabBar>
    </div>

  )
}
