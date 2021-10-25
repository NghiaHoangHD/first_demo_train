// import Chart from '../chat/Chart'
import FeaturedInfo from '../featuredInfo/FeatureInfo'
import { userData } from '../../dataDumny'
import WidgetSm from '../widge/widgeSm/WidgetSm'
import WidgetLg from '../widge/widgetLg/WidgetLg'
import '../../assets/scss/pages/dashboardProduct.scss'
import { Redirect } from 'react-router-dom'

export default function DashboardUser() {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  if (!isLoggedIn) {
    return <Redirect to="/login"></Redirect>
  }
  return (
    <div className="dashboardProduct">
      <div className="header_dashboard_user text-center">MANAGE USER</div>
      <FeaturedInfo />
      <div style={{ display: 'flex' }}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
