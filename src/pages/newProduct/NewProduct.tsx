import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Icon from '@mui/material/Icon'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import '../../assets/scss/pages/newProduct.scss'
import productsApi from '../../api/productsApi'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { WindowRounded } from '@mui/icons-material'
import * as Yup from 'yup'
import * as ReactDOM from 'react-dom'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { toast } from 'react-toastify'

toast.configure()
export default function NewProduct() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    description: Yup.number().required('This field is required').nullable(),

    salePrice: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('This field is required'),
      otherwise: Yup.string().notRequired(),
    }),
  })

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [salePrice, setSalePrice] = useState('')
  const [image, setImage] = useState('')

  interface Values {
    name: string
    description: string
    salePrice: string | number
    image: string
  }
  useEffect(() => {
    productsApi.getAll().then(response => console.log('ddd', response.data))
  })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    let productListApi = 'http://localhost:3000/products'

    fetch('http://localhost:3000/products', {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        salePrice,
        image,
      }),
      headers: {
        'Content-Type': 'application/json; chartset=UTF-8',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        // window.location.replace('/products/' + data.id)
        toast.success('SUCCESS !!!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        })
      })
  }

  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  if (!isLoggedIn) {
    return <Redirect to="/login"></Redirect>
  }

  return (
    <div className="newProduct text-center">
      <Box
        component="form"
        method="post"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <img
            src="https://www.themodestman.com/wp-content/uploads/2021/07/Noragi-jacket-outfit-650x880.jpg"
            alt=""
            className="newPost__img"
          />
          <br />
          <label htmlFor="fileInput" className="newPost__button">
            <ControlPointIcon />
          </label>
          <br />
          <TextField
            id="fileInput"
            name="upload-photo"
            type="file"
            style={{ width: 400, display: 'none' }}
            onChange={e =>
              setImage(
                'https://www.themodestman.com/wp-content/uploads/2021/07/Noragi-jacket-outfit-650x880.jpg'
              )
            }
          />
          <br />
          <TextField
            required
            name="name"
            id="outlined-error"
            label="name product"
            defaultValue="jacket"
            style={{ width: 400 }}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <TextareaAutosize
            name="description"
            required
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 400, height: 150 }}
            onChange={e => setDescription(e.target.value)}
          />
          <br />
          <TextField
            name="salePrice"
            required
            id="outlined-required"
            label="price"
            defaultValue=""
            style={{ width: 400 }}
            onChange={e => setSalePrice(e.target.value)}
          />
          <br />

          <Button variant="outlined" type="submit">
            ADD
          </Button>
        </div>
      </Box>
    </div>
  )
}
