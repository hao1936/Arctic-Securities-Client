/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import moment from 'moment';
function randomVariation (): number { return (1 + (Math.random() - 0.5) * 0.3) }
function high (): number { return (1.15 + Math.random() * 0.05); }
function low (): number { return (0.8 + Math.random() * 0.05) }
export function marketPrice (): { price: number[][], date: string[] } {
  const price = [];
  const date = [];
  let startPrice = Math.random() * 101 // 起始价
  let currentDate = moment().subtract(75, 'days'); // 30天前
  for (var i = 0; i < 76; i++) {
    if (i > 0) {
      startPrice = price[i - 1][1] as number// 下一个交易日涨跌幅度是上一个交易日的收盘价的上下20%
      currentDate = currentDate.add(1, 'days'); // 增加一天
    }
    const openingPrice = (startPrice * randomVariation()).toFixed(2) // 开盘价
    const closingPrice = (startPrice * randomVariation()).toFixed(2) // 收盘价
    const lowPrice = (startPrice * low()).toFixed(2) // 最低价
    const highPrice = (startPrice * high()).toFixed(2) // 最高价
    price.push([openingPrice, closingPrice, lowPrice, highPrice])
    date.push(currentDate.format('YYYY-MM-DD'))
  }

  return { price, date }
}