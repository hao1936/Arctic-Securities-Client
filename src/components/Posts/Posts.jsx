/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { HeartOutline, LinkOutline, MessageOutline } from 'antd-mobile-icons'
import './style.css'
export default function Posts (props) {
  const newsList = props.newsList
  console.log('posts', newsList)
  return (
    <div>
      {
        newsList.map((item, index) => {
          return (
            <div key={index}>
              <div className="author">
                <div className="pic" style={{ width: 25, height: 25, borderRadius: '50%', background: 'gray' }}></div>
                <div className='author-right'>
                  <p>{item.author}</p>
                  <p>发布时间: {item.time}  阅读: {item.view}</p>
                </div>
              </div>
              <div className="news-title">
                <p>{item.title}</p>
              </div>
              <div className="review-praise">
                <span><LinkOutline /> {item.share}</span>
                <span><HeartOutline />{item.like}</span>
                <span><MessageOutline />{item.share}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
