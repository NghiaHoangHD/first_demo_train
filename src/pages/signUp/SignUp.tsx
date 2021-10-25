import React from 'react'
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

import '../../assets/scss/pages/signUp.scss'
import '../signUp/signUp.styles'
import { useQuery } from 'react-query'

export type User = {
  id: number
  username: string
  email: string
  password: string
  createdAt: Date
  createdUpdate: Date
}

export default function SignUp() {
  let userApi = 'http://localhost:3000/user'
  const getUser = async (): Promise<User[]> =>
    await (await fetch(userApi)).json()

  const { data, isLoading, error } = useQuery<User[]>('user', getUser)

  console.log('user', data)

  return (
    <div className="signUp ">
      <form className="signUp__form ">
        <Grid>
          <Paper elevation={10} className="signUp__page">
            <Grid className="signUp__content p-5">
              <Avatar className="mb-3">
                <PersonOutline />
              </Avatar>
              <h2 className="">SIGN UP</h2>
              <TextField
                className="mt-4 p-2"
                label="User name"
                placeholder="Nguyen Van A"
                required
                fullWidth
              />
              <TextField
                className="mt-4 p-2"
                label="email"
                type="email"
                placeholder="nguyenvana@gmail.com"
                required
                fullWidth
              />
              <TextField
                className="mt-4 p-2"
                label="Password"
                type="password"
                placeholder="********"
                required
                fullWidth
              />
              <FormControlLabel
                className="mt-4"
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
                Sign Up
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </div>
  )
}
