/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-30
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { JumboTabs } from 'antd-mobile'

import { CheckShieldOutline, FileOutline, HandPayCircleOutline, PayCircleOutline ,RightOutline} from 'antd-mobile-icons'
import TabBar from '../../components/TabBar/TabBar'
import './style.css'
export default function Transaction () {
  return (
    <div>
      <div className="tabs">
        <div className="left trade-tabs">
          <JumboTabs>
            <JumboTabs.Tab title='普通' key='ordinary'>
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
                    <span className="red-bg">买</span>
                    <span>买入</span>
                  </li>
                  <li>
                    <span className="red-bg">卖</span>
                    <span>卖出</span>
                  </li>
                  <li>
                    <span className="red-bg">撤</span>
                    <span>撤单</span>
                  </li>
                  <li>
                    <span className="red-bg">持</span>
                    <span>资金持仓</span>
                  </li>
                  <li>
                    <span><PayCircleOutline /></span>
                    <span>转账</span>
                  </li>
                  <li>
                    <span><FileOutline /> </span>
                    <span>委托查询</span>
                  </li>
                  <li>
                    <span><CheckShieldOutline /> </span>
                    <span>成交查询</span>
                  </li>
                  <li>
                    <span><HandPayCircleOutline /> </span>
                    <span>资金流水</span>
                  </li>
                </ul>

              </div>
              <div className="menu-list">
                <ul>
                  <li >
                    <span className="left">ETF专区</span>
                    <span className="right"> ETF大赛 邀您E起同台竞技<RightOutline /></span>
                  </li>
                  <li >
                    <span className="left">保险专区</span>
                    <span className="right"> 保险业务全新上线<RightOutline /></span>
                  </li>
                  <li >
                    <span className="left">财管计划</span>
                    <span className="right">您的专属投研团队 <RightOutline /></span>
                  </li>
                  <li >
                    <span className="left">条件单</span>
                    <span className="right">定价、定时、日涨跌买卖策略<RightOutline /></span>
                  </li>
                  <li >
                    <span className="left">算法单</span>
                    <span className="right">网格交易、拆单算法<RightOutline /></span>
                  </li>

                </ul>
              </div>
            </JumboTabs.Tab>
            <JumboTabs.Tab title='信用' key='credit'>
              信用
            </JumboTabs.Tab>
            <JumboTabs.Tab title='期权' key='option'>
              期权
            </JumboTabs.Tab>
          </JumboTabs>
        </div>
        <div className="right">

        </div>
      </div>
      <TabBar></TabBar>
    </div>

  )
}
