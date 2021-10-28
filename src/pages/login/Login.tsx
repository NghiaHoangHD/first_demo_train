import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import {
  Avatar,
  Paper,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core'
import PersonOutline from '@material-ui/icons/PersonOutline'
import { useQuery } from 'react-query'

import '../../assets/scss/pages/Login.scss'
import '../login/login.styles'
import { authActions, selectIsLogging } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { CircularProgress } from '@mui/material'
import { Form, Formik } from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup'
export type User = {
  id: number
  name: string | number
  email: string
  password: string
  image: string | null
  createdAt: Date
  createdUpdate: Date
}

export default function Login() {
  let userListApi = 'http://localhost:3000/user'
  const getUser = async (): Promise<User[]> =>
    await (await fetch(userListApi)).json()
  const { data, isLoading, error } = useQuery<User[]>('user', getUser)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    )
  }
  const handleOnSubmit = () => {
    console.log('onSubmit')
  }

  const validate = Yup.object({
    userName: Yup.string()
      .max(15, 'Must be 15 character or less')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Required'),
  })
  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div className="form_login">
          <Form className="form_login__content">
            <h1 className="my-4 font-weight-bold-display-4 text-center">
              LOGIN
            </h1>
            <TextField label="Email" name="email" type="email"></TextField>
            <TextField
              label="Password"
              name="password"
              type="password"
            ></TextField>

            <Button
              className="mt-2"
              variant="contained"
              disableElevation
              color="primary"
              fullWidth
              onClick={handleLoginClick}
            >
              {' '}
              Login{' '}
            </Button>
          </Form>
        </div>
      )}
    </Formik>

    // <div className="login ">
    //   <form className="login__form ">
    //     <Grid>
    //       <Paper elevation={10} className="login__page">
    //         <Grid className="login__content p-5">
    //           <Avatar className="mb-3">
    //             <PersonOutline />
    //           </Avatar>
    //           <h2 className="">LOGIN</h2>
    //           <TextField
    //             className="mt-5 p-2"
    //             label="User name"
    //             placeholder="Nguyen Van A"
    //             required
    //             fullWidth
    //             onChange={e => setName(e.target.value)}
    //           />
    //           <TextField
    //             className="mt-5 p-2"
    //             label="Password"
    //             type="password"
    //             placeholder="********"
    //             required
    //             fullWidth
    //             onChange={e => setPassword(e.target.value)}
    //           />
    //           <FormControlLabel
    //             className="mt-5"
    //             style={{ float: 'left' }}
    //             control={<Checkbox defaultChecked />}
    //             label="Remember me"
    //           />
    //           <br />
    //           <Button
    //             className="mt-2"
    //             variant="contained"
    //             disableElevation
    //             color="primary"
    //             fullWidth
    //             onClick={handleLoginClick}
    //           >
    //             {' '}
    //             Login{' '}
    //           </Button>
    //         </Grid>
    //       </Paper>
    //     </Grid>
    //   </form>
    // </div>
  )
}
