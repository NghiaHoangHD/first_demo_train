import Topbar from './components/topbar/Topbar'
import Home, { ProductListType } from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import Products from './pages/products/Products'

import Grid from '@material-ui/core/Grid'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import NewProduct from './pages/newProduct/NewProduct'
import NotFound from './components/notFount/NotFound'
import DashboardProduct from './pages/dashboardProduct/DashboardProduct'
import DashboardUser from './pages/dashboardUser/DashboardUser'
import EditProduct from './pages/editProduct/EditProduct'
import Profile from './pages/profile/Profile'

const App = () => {
  let productListApi = 'http://localhost:3000/products'
  const getProducts = async (): Promise<ProductListType[]> =>
    await (await fetch(productListApi)).json()

  const { data, isLoading, error } = useQuery<ProductListType[]>(
    'products',
    getProducts
  )

  const handleAddToCart = (clickedItem: ProductListType) =>
    void console.log('fff', data)

  type Props = {
    item: ProductListType
  }

  return (
    <Router>
      <Topbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Grid container spacing={3}>
            {data?.map(item => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Products item={item} handleAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Route>

        <Route exact path="/products/:id">
          <EditProduct />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/add-new">
          <NewProduct />
        </Route>

        <Route path="/dashboard-product">
          <DashboardProduct />
        </Route>

        <Route path="/dashboard-user">
          <DashboardUser />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
