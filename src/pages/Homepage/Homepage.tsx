/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { useEffect } from 'react'
import { getList } from '../../api/user'
import { getUserInfo } from '../../api/user/userInfo'

import Posts from '../../components/Posts/Posts'
import TabBar from '../../components/TabBar/TabBar'
export default function Homepage () {
  useEffect(() => {
    console.log('componentDidMount')
    const fn = async function () {
      const res = await getList()
      const userInfo =await getUserInfo()
      console.log(res.name,1, userInfo)
    }
    
    fn()

  }, [])
  return (
    <div>
      <Posts data={{ title: '三中全会对A股投资的指引', subTitle: 'sss', infoId: 'xxx', pic: '' }}></Posts>
      <TabBar></TabBar>
    </div>
  )
}
