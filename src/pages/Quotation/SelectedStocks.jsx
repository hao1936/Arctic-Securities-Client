import { useEffect, useState } from 'react'
// import KLineChart from './KLineChart'
import { Grid } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { getConcernedStocks } from '../../api/price'
export default function SelectedStocks () {
  const navigate = useNavigate()
  let [stockList, setStockList] = useState([
    {
      f12: '股票代码',
      f14: '股票名称',
      f2: '现价',
      f3: '涨跌额',
      f4: '涨幅'
    }
  ])
  useEffect(() => {
    const getData = async function () {
      const data = await getConcernedStocks()
      setStockList(data.list)
      console.log('自选股票', data, stockList)
    }
    getData()
  }, [])
  function goDetail (item) {
    console.log('跳转详情页')
    navigate('/stockDetails', { state: item })
  }
  return (
    <div className="stock-list">
      <div className="title">
        <Grid columns={5} >
          <Grid.Item span={2} className='stock-name'>
            <p>股票名称</p>
          </Grid.Item>

          <Grid.Item span={1}>
            <div>现价</div>
          </Grid.Item>
          <Grid.Item span={1}>
            <div>涨跌幅</div>
          </Grid.Item>
          <Grid.Item span={1}>
            <div>涨跌额</div>
          </Grid.Item>

        </Grid>
      </div>
      <div className="focus-list">
        {stockList.map(item => {
          return (
            <div key={item.f12} onClick={() => goDetail(item)}>
              <Grid columns={5}>
                <Grid.Item span={2} className='stock-name'>
                  <div >
                    <p>{item.f14}</p>
                    <p className='plate'>
                      <span className='market'>{item.f13 === 0 ? '深' : '沪'}</span>
                      <span>{item.f12}</span>
                    </p>
                  </div>
                </Grid.Item>

                <Grid.Item span={1}>
                  <div className={item.f3 > 0 ? 'red-font' : 'green-font'}>{item.f2}</div>
                </Grid.Item>
                <Grid.Item span={1}>
                  <div className={item.f3 > 0 ? 'red-font' : 'green-font'}>{Number(item.f3).toFixed(2)}%</div>
                </Grid.Item>
                <Grid.Item span={1}>
                  <div className={item.f3 > 0 ? 'red-font' : 'green-font'}>{item.f4}</div>
                </Grid.Item>
              </Grid>
            </div>
          )
        })}
      </div>

      {/* <KLineChart></KLineChart> */}
    </div>
  )
}
