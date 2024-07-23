import { Space, Tag } from 'antd-mobile'
export default function AShareIndex () {
  return (
    <div className="marketIndex">
      <Space>
        <Tag color='#87d068' fill='outline'>
          <p className="exchange-name">上证指数</p>
          <p className="number">2915.37</p>
          <p>-23.32 -1.92%</p>
        </Tag>
        <Tag color='#87d068' fill='outline'>
          <p className="exchange-name">深证成指</p>
          <p className="number">8915.37</p>
          <p>-23.32 -7.92%</p>
        </Tag>
        <Tag color='#87d068' fill='outline'>
          <p className="exchange-name">北证50</p>
          <p className="number">756.37</p>
          <p>-23.32 -5.92%</p>
        </Tag>
        <Tag color='#87d068' fill='outline'>
          <p className="exchange-name">创业板指</p>
          <p className="number">16785.37</p>
          <p>-22.32 -3.92%</p>
        </Tag>
      </Space>
    </div>
  )
}
