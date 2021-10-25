import React from 'react'
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

export default function NewProduct() {
  useEffect(() => {
    productsApi.getAll().then(response => console.log('ddd', response.data))
  })

  const handleSubmit = () => {
    console.log('hello')
  }

  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  if (!isLoggedIn) {
    return <Redirect to="/login"></Redirect>
  }

  return (
    <div className="newProduct text-center">
      <Box
        component="form"
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
          />
          <br />
          <TextField
            id="outlined-error"
            label="name product"
            defaultValue="jacket"
            style={{ width: 400 }}
          />
          <br />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 400, height: 150 }}
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="price"
            defaultValue="$"
            style={{ width: 400 }}
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
