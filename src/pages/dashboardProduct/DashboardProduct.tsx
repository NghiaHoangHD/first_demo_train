// import Chart from '../chat/Chart'
import { Redirect, Link } from 'react-router-dom'
import { useState } from 'react'
import { productRows } from '../../dataDumny'
import { DeleteOutline } from '@material-ui/icons'
import { DataGrid } from '@mui/x-data-grid'

import FeaturedInfo from '../featuredInfo/FeatureInfo'
import WidgetSm from '../widge/widgeSm/WidgetSm'
import WidgetLg from '../widge/widgetLg/WidgetLg'
import '../../assets/scss/pages/dashboardProduct.scss'
import ConfirmDialog from '../../models/ConfirmDialog'

export default function DashboardProduct() {
  const [data, setData] = useState(productRows)
  const handleDelete = (id: any) => {
    setData(data.filter(item => item.id !== id))
  }
  const columns = [
    { field: 'id', type: 'number', headerName: 'ID', width: 80 },
    {
      field: 'productName',
      headerName: 'Product name',
      width: 250,
      renderCell: (params: any) => {
        return (
          <div className="productListProduct">
            <img src={params.row.avatar} alt="" className="productAvatar"></img>
            {params.row.productName}
          </div>
        )
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={'/products/' + params.row.id}>
              <button className="productListBtnEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListBtnDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            <ConfirmDialog />
          </>
        )
      },
    },
  ]

  //   const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  //   if (!isLoggedIn) {
  //     return <Redirect to="/login"></Redirect>
  //   }
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  if (!isLoggedIn) {
    return <Redirect to="/login"></Redirect>
  }
  return (
    <div className="dashboardProduct">
      <div className="header_dashboard text-center">MANAGE PRODUCTS</div>
      <FeaturedInfo />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <WidgetSm />
          {/* <WidgetLg /> */}
          <div style={{ display: 'flex' }} className="productList">
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  )
}
