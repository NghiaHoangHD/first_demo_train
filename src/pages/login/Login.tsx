import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import {
  Avatar,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core'
import PersonOutline from '@material-ui/icons/PersonOutline'
import { useQuery } from 'react-query'

import '../../assets/scss/pages/Login.scss'
import '../login/login.styles'

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

  return (
    <div className="login ">
      <form className="login__form ">
        <Grid>
          <Paper elevation={10} className="login__page">
            <Grid className="login__content p-5">
              <Avatar className="mb-3">
                <PersonOutline />
              </Avatar>
              <h2 className="">LOGIN</h2>
              <TextField
                className="mt-5 p-2"
                label="User name"
                placeholder="Nguyen Van A"
                required
                fullWidth
                onChange={e => setName(e.target.value)}
              />
              <TextField
                className="mt-5 p-2"
                label="Password"
                type="password"
                placeholder="********"
                required
                fullWidth
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                className="mt-5"
                style={{ float: 'left' }}
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <br />
              <Button
                className="mt-2"
                variant="contained"
                disableElevation
                color="primary"
                fullWidth
              >
                {' '}
                Login{' '}
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </div>
  )
}
