import { NavBar, Space } from 'antd-mobile';
import { MoreOutline, SearchOutline } from 'antd-mobile-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import KLineChart from '../Quotation/KLineChart';

export default function StockDetails () {
  let {state} = useLocation();
  console.log('state', state)
  const navigate = useNavigate()
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )

  const back = () => navigate(-1)

  return (
    <div>
      <NavBar right={right} onBack={back}>
        {state.f14 ? state.f14 : 'Stock Details'}
      </NavBar>
      <KLineChart />
    </div>
  )
}
