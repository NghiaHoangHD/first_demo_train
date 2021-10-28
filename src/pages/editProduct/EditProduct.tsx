import React, { useState, useEffect } from 'react'

import '../../assets/scss/pages/editProduct.scss'
import { productData } from '../../dataDumny'
import { Upload } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { ProductListType } from '../home/Home'
import { useLocation } from 'react-router'
import axios from 'axios'
import { Product } from '../../models/products'
import { Button } from '@material-ui/core'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ConfirmDialog, { confirmDialog } from '../../models/ConfirmDialog'

type Props = {
  item: ProductListType
  addToCart: (clickedItem: ProductListType) => void
  removeFromCart: (id: number) => void
}

toast.configure()

// const customToast = ({closeToast: any}) => {
//     return(
//         <div>
//             Success
//             <button onClick={closeToast}>Close</button>
//         </div>

//     )
// }

export default function EditProduct({}) {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const [data, setData] = useState(productData)
  const [id, setId] = useState<string | number>()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [salePrice, setSalePrice] = useState('')
  const [image, setImage] = useState('')
  const [isActive, setIsActive] = useState<string | boolean>(true)
  const [stock, setStock] = useState<string | number>(0)
  const [updateMode, setUpdateMode] = useState(false)
  useEffect(() => {
    const getPost = async () => {
      const res: any = await axios.get<Product>(
        'http://localhost:3000/products/' + path
      )
      setName(res.name)
      setDescription(res.description)
      setSalePrice(res.salePrice)
      setImage(res.image)
      // console.log([path])
    }
    getPost()
  }, [path])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res: any = await axios.put<Product>(
        'http://localhost:3000/products/' + path,
        {
          name,
          description,
          salePrice,
          image,
          isActive,
          stock,
        }
      )
      //   setUpdateMode(false)
      toast.success('Success !!!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
    } catch (error) {}
  }

  const handleDelete = async () => {
    try {
      await axios.delete<Product>('http://localhost:3000/products/' + path, {
        data: { name: name },
      })
      window.location.replace('/')
    } catch (error) {}
  }

  const handleSubmitDelete = () => {
    console.log('ok')
  }
  return (
    <div className="product mt-5">
      <div className="productNameAndCreate">
        <div>
          <h2 className="productTitle">Product</h2>
        </div>
        <div className="d-flex">
          <Link to="/add-new" className="productBtnCreate">
            CREATE
          </Link>
          <Button
            style={{ height: '40px' }}
            variant="outlined"
            color="secondary"
            // onClick={handleDelete}
            onClick={() =>
              confirmDialog(
                'Are you sure that you like to DELETE this post?',
                handleDelete
              )
            }
          >
            Delete
          </Button>
          <ConfirmDialog />
        </div>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <div className="productTopItem">
            <img src={image} alt="" className="productTopItemRight" />
            <img src={image} alt="" className="productTopItemRight" />
            <img src={image} alt="" className="productTopItemRight" />
          </div>
          <div className="">
            <img src={image} alt="" className="productTopNameLeft" />
          </div>
        </div>
        <div className="productTopRight">
          <div className="productTopName">
            <img src={image} alt="" className="productTopAvatar" />
            {name}
          </div>
          <div className="productTopRightInfo">
            <div className="productTopRightInfoRow">
              <span className="productNameValue">Discription |</span>
              <span className="productNumberSystem">{description}</span>
            </div>

            <div className="productTopRightInfoRow">
              <span className="productNameValue">sale Price</span>
              <span className="productNumberSystem">{salePrice}</span>
            </div>

            <div className="productTopRightInfoRow">
              <span className="productNameValue">Active:</span>
              <span className="productNumberSystem">{isActive}</span>
            </div>

            <div className="productTopRightInfoRow">
              <span className="productNameValue">In stock:</span>
              <span className="productNumberSystem">{stock}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="product_form" onSubmit={handleSubmit}>
          <div className="productBottomLeft">
            <div className="productNameProduct">
              <div>
                <span className="productNameTitle">Product name</span>
              </div>
              <input
                className="product_form__field"
                type="name"
                name="name"
                placeholder={name}
                onChange={e => setName(e.target.value)}
              ></input>
              <input
                className="product_form__field"
                type="name"
                name="Description"
                placeholder="Desciption product:..."
                onChange={e => setDescription(e.target.value)}
              ></input>
              <input
                className="product_form__field"
                type="name"
                name="salePrice"
                placeholder="$00"
                onChange={e => setSalePrice(e.target.value)}
              ></input>
              <input
                className="product_form__field"
                type="name"
                name=""
                placeholder="stock: 1"
                onChange={e => setStock(e.target.value)}
              ></input>
            </div>
            <div className="productActive">
              <label>Active</label>
              <div>
                <select
                  className="productSelect"
                  onChange={e => setIsActive(e.target.value)}
                >
                  <option value="yes" selected>
                    Yes
                  </option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          <div className="productBottomRight">
            <img src={image} alt="" className="productImage" />

            <label htmlFor="uploadImageProduct">
              <Upload className="productBottomRightIcon" />
            </label>
            <input
              type="file"
              id="uploadImageProduct"
              style={{ display: 'none' }}
              onChange={e => setImage(e.target.value)}
            />
            <div>
              <button className="productBtnUpdate" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
