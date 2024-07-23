
import { nanoid } from 'nanoid'
export const newsList = [
  {
    id: nanoid(), // 新闻id
    author: 'cname' + (Math.random() * 100).toFixed(0), // 坐着
    title: '新闻标题111', // 标题
    time: '5小时前', // 发布时间
    like: (Math.random() * 100).toFixed(0), // 点赞量

    share: (Math.random() * 30).toFixed(0), // 转发量
    view: (Math.random() * 1000).toFixed(0) // 浏览量
  },
  {
    id: nanoid(), // 新闻id
    author: 'cname' + (Math.random() * 100).toFixed(0), // 坐着
    title: '新闻标题222', // 标题
    time: '5小时前', // 发布时间
    like: (Math.random() * 100).toFixed(0), // 点赞量

    share: (Math.random() * 30).toFixed(0), // 转发量
    view: (Math.random() * 1000).toFixed(0) // 浏览量
  },
  {
    id: nanoid(), // 新闻id
    author: 'cname' + (Math.random() * 100).toFixed(0), // 坐着
    title: '新闻标题333', // 标题
    time: '5小时前', // 发布时间
    like: (Math.random() * 100).toFixed(0), // 点赞量

    share: (Math.random() * 30).toFixed(0), // 转发量
    view: (Math.random() * 1000).toFixed(0) // 浏览量
  },
  {
    id: nanoid(), // 新闻id
    author: 'cname' + (Math.random() * 100).toFixed(0), // 坐着
    title: '新闻标题444', // 标题
    time: '5小时前', // 发布时间
    like: (Math.random() * 100).toFixed(0), // 点赞量

    share: (Math.random() * 30).toFixed(0), // 转发量
    view: (Math.random() * 1000).toFixed(0) // 浏览量
  },
  {
    id: nanoid(), // 新闻id
    author: 'cname' + (Math.random() * 100).toFixed(0), // 坐着
    title: '新闻标题555', // 标题
    time: '5小时前', // 发布时间
    like: (Math.random() * 100).toFixed(0), // 点赞量

    share: (Math.random() * 30).toFixed(0), // 转发量
    view: (Math.random() * 1000).toFixed(0) // 浏览量
  },
]