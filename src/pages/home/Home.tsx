import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'

import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router'
import '../../assets/scss/pages/home.scss'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

import { Wrapper } from '../../components/showProduct/productList.styles'
import { StyledButton } from '../../App.styles'
import ProductList from '../../components/showProduct/ProductList'
import Cart from '../../components/Cart/Cart'
import { useAppSelector } from '../../app/hook'
import JsonData from './db.json'
import ReactPaginate from 'react-paginate'

export type ProductListType = {
  id: number
  name: string
  image: string
  amount: number
  description: string
  salePrice: number
  createdAt: Date
  createdUpdate: Date
}
interface Values {
  name: string
  description: string
  salePrice: string | number
  image: string
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)
  const [posts, setPosts] = useState([])
  const { search } = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  let productListApi = 'http://localhost:3000/products'

  const getProducts = async (): Promise<ProductListType[]> =>
    await (await fetch(productListApi)).json()

  const { data, isLoading, error } = useQuery<ProductListType[]>(
    'products',
    getProducts
  )

  const [cartItems, setCartItems] = useState([] as ProductListType[])

  const getTotalItems = (items: ProductListType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0)

  const handleAddToCart = (clickedItem: ProductListType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack
          return [...ack, { ...item, amount: item.amount - 1 }]
        } else {
          return [...ack, item]
        }
      }, [] as ProductListType[])
    )
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = data
    ?.slice(indexOfFirstPost, indexOfLastPost)
    .map(item => {
      return (
        <Grid item key={item.id} xs={12} sm={4}>
          <ProductList
            item={item}
            handleAddToCart={handleAddToCart}
          ></ProductList>
        </Grid>
      )
    })
  //   const dataLength = data?.length
  //   const pageCount = Math.ceil(data?.length / postsPerPage)
  const pageCount = Math.ceil(3)

  const changePage = (selected: any) => {
    setCurrentPage(selected)
  }
  if (isLoading) return <LinearProgress />
  if (error) {
    return <div> Something went wrong ... </div>
  }

  return (
    <div className="home">
      <Header />
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        {/* <Button>hello</Button> */}

        <Grid container spacing={3}>
          {currentPost}
          {/* <div className="text-center">
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
            />
          </div> */}
          {/* {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <ProductList
                item={item}
                handleAddToCart={handleAddToCart}
              ></ProductList>
            </Grid>
          ))} */}
        </Grid>
      </Wrapper>
      {/* <ProductList /> */}
      <Footer />
    </div>
  )
}
