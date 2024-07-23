/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { Tabs } from 'antd-mobile'
import { useEffect, useState } from 'react'
import Posts from '../../components/Posts/Posts'
import TabBar from '../../components/TabBar/TabBar'
import { getNewsList } from './../../api/news'
export default function Homepage () {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    console.log('componentDidMount')
    const fn = async function () {
      const { newsList } = await getNewsList()
      setNewsList(newsList)
      console.log('newList', newsList)
    }
    fn()
  }, [])
  return (
    <div>
      <Tabs>
        <Tabs.Tab title='关注' key='fruits'>
          <Posts newsList={newsList}></Posts>
        </Tabs.Tab>
        <Tabs.Tab title='推荐' key='vegetables'>
          推荐
        </Tabs.Tab>
        <Tabs.Tab title='自选' key='animal1'>
          自选
        </Tabs.Tab>
        <Tabs.Tab title='快讯' key='animals2'>
          快讯
        </Tabs.Tab>
        <Tabs.Tab title='打新' key='animals3'>
          打新
        </Tabs.Tab>
        <Tabs.Tab title='必修课' key='animals4'>
          必修课
        </Tabs.Tab>
        <Tabs.Tab title='大师课' key='animals5'>
          大师课
        </Tabs.Tab>
        <Tabs.Tab title='盘中' key='animals6'>
          盘中
        </Tabs.Tab>
        <Tabs.Tab title='热点' key='animals7'>
          热点
        </Tabs.Tab>
      </Tabs>
      {/* <div style={{height:1000, background:'gray'}}>1010</div> */}

      <TabBar></TabBar>
    </div>
  )
}
