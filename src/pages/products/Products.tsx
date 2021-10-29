import React, { useState, useEffect } from 'react'
import '../../assets/scss/pages/products.scss'
import { ProductListType } from '../home/Home'
import { Wrapper } from '../products/Products.styles'

import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import productsApi from '../../api/productsApi'
import axios from 'axios'
import { Product } from '../../models/products'
import JSONDATA from './db.json'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import Footer from '../../components/footer/Footer'

export default function Products() {
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  const [searchTerm, setSearchTerm] = useState('')
  let limit = 3

  useEffect(() => {
    const getComments = async () => {
      const res: any = await fetch(
        `http://localhost:3000/products?_page=1&_limit=${limit}`
      )
      console.log('res :', res.data)
      const data = await res.json()
      const total = res.headers.get('x-total-count')
      setpageCount(Math.ceil(total / limit))
      // console.log(Math.ceil(total/12));
      setItems(data)
    }

    getComments()
  }, [limit])

  const fetchComments = async (currentPage: number) => {
    const res = await fetch(
      `http://localhost:3000/products?_page=${currentPage}&_limit=${limit}`
    )
    const data = await res.json()
    return data
  }

  const handlePageClick = async (data: any) => {
    console.log(data.selected)

    let currentPage = data.selected + 1

    const commentsFormServer = await fetchComments(currentPage)

    setItems(commentsFormServer)
  }
  return (
    <div className=" productListMenu">
      <div className="productListMenu__left">
        <form action="/action_page.php" className=" d-flex">
          <input
            type="text"
            className="form-control"
            style={{ width: '200px' }}
            placeholder="search...."
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </div>
      <div className=" productListMenu__content">
        <div className="row m-2">
          {items
            .filter((item: any) => {
              if (searchTerm == '') {
                return item
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item
              }
            })
            .map((item: any) => {
              return (
                <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                  <div
                    className="card shadow-sm"
                    style={{ minHeight: 225, width: '330px' }}
                  >
                    <div className="card" style={{}}>
                      <img
                        src={item.image}
                        className="card-img-top"
                        style={{ height: '286px' }}
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="card-body_header">
                          <h5 className="card-title">{item.name}</h5>
                          <h5 className="card-title">$ {item.salePrice}</h5>
                        </div>

                        <p className="card-text">{item.description}</p>
                        <a href="#" className="btn btn-primary">
                          BUY
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>

      <Footer />
    </div>
  )
}
//   const [posts, setPosts] = useState(JSONDATA.slice(0, 50))
//   const [loading, setLoading] = useState(false)

//   const [postsPerPage, setPostsPerPage] = useState(3)
//   const [pageNumber, setPageNumber] = useState(0)
//   const usersPerPage = 5
//   const pagesVisited = pageNumber * usersPerPage

//   const indexOfLastPost = currentPage * postsPerPage
//   const indexOfFirstPost = indexOfLastPost - postsPerPage

//   const pageCount = Math.ceil(posts.length / usersPerPage)

//   const changePage = (selected: any) => {
//     setPageNumber(selected)
//   }
//   const currentPost = posts
//     ?.slice(pagesVisited, pagesVisited + usersPerPage)
//     .map(item => {
//       return (
//         <Wrapper className="productList">
//           <img src={item.image}></img>
//           <div>
//             <Link to={`/products/${item.id}`}>
//               <h3>{item.name}</h3>
//             </Link>
//             <p>{item.description}</p>
//             <h3>${item.salePrice}</h3>
//           </div>
//           <Button>Add to card</Button>
//         </Wrapper>
//       )
//     })
//   console.log(posts)
//   return (
//     <div>
//       {currentPost}
//       <div className="text-center">
//         <ReactPaginate
//           previousLabel={'Previous'}
//           nextLabel={'Next'}
//           pageCount={pageCount}
//           onPageChange={changePage}
//           containerClassName={'paginationBttns'}
//           previousLinkClassName={'previousBttn'}
//           nextLinkClassName={'nextBttn'}
//           disabledClassName={'paginationDisabled'}
//           activeClassName={'paginationActive'}
//           pageRangeDisplayed={3}
//           marginPagesDisplayed={1}
//         />
//       </div>
//     </div>
//   )
// }

// type Props = {
//   item: ProductListType
//   handleAddToCart: (clickedItem: ProductListType) => void
// }

// const Products: React.FC<Props> = ({ item, handleAddToCart }) => (
//   <Wrapper>
//     <img src={item.image}></img>
//     <div>
//       <h3>{item.name}</h3>
//       <p>{item.description}</p>
//       <h5>${item.salePrice}</h5>
//     </div>
//     <Button onClick={() => handleAddToCart(item)}> Add to cart</Button>
//   </Wrapper>
// )

// export default Products
