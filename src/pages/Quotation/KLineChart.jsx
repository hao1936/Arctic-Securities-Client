/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-23
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import * as echarts from 'echarts';
import { useEffect } from 'react';
import { getSelectedStocks } from '../../api/selectedStocks';
const KLineChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('k-line-chart')
    if (!chartDom) return; // 确保chartDom存在
    const myChart = echarts.init(chartDom);
    const fn = async function () {
      const { date, price } = await getSelectedStocks()
      const option = {
        xAxis: {
          type: 'category',
          data: date,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        series: [
          {
            type: 'candlestick',
            data: price,
            itemStyle: {
              color: '#ec0000',
              color0: '#00da3c',
              borderColor: '#8A0000',
              borderColor0: '#008F28'
            }
          }
        ]
      };

      myChart.setOption(option);
    }
    fn()
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
      <div id="k-line-chart" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default KLineChart;