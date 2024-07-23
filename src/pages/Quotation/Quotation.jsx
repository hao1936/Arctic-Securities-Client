/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { JumboTabs } from 'antd-mobile'
import { EditSOutline, SearchOutline } from 'antd-mobile-icons'
import { useEffect } from 'react'
import { getSelectedStocks } from '../../api/selectedStocks'
import TabBar from '../../components/TabBar/TabBar'
import AShareIndex from './AShareIndex'
import SelectedStocks from './SelectedStocks'
import './style.css'
export default function Quotation () {
  useEffect(() => {
    const fn = async function () {
      const data = await getSelectedStocks()
      console.log('k线数据', data)
    }
    fn()
  }, [])
  return (
    <>
      <div className="tabs">
        <div className="left">
          <JumboTabs>
            <JumboTabs.Tab title='自选' key='selectedStocks'>
              <AShareIndex></AShareIndex>
              <div className="line"></div>
              <SelectedStocks></SelectedStocks>
            </JumboTabs.Tab>
            <JumboTabs.Tab title='股市' key='stockMarket'>
              stockMarket
            </JumboTabs.Tab>
            <JumboTabs.Tab title='资讯' key='news'>
              news
            </JumboTabs.Tab>
          </JumboTabs>
        </div>
        <div className="right">
          <EditSOutline />
          <SearchOutline />
        </div>
      </div>
      <TabBar></TabBar>
    </>

  )
}
