import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Avatar, Paper, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import PersonOutline from '@material-ui/icons/PersonOutline'


import '../../assets/scss/pages/Login.scss'
import '../login/login.styles'

export default function Login() {

  return (
    <div className="login ">
      <form className="login__form ">
        <Grid >
          <Paper elevation = {10} className="login__page">
            <Grid className="login__content p-5">
              <Avatar className='mb-3'><PersonOutline/></Avatar>
              <h2 className="">LOGIN</h2>
              <TextField className='mt-5 p-2'
              label = 'User name' placeholder='Nguyen Van A'
                 required fullWidth
              />
              <TextField className='mt-5 p-2' label = 'Password' type='password' placeholder='********'
                 required fullWidth
              />
              <FormControlLabel className='mt-5' style={{float: 'left'}}
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <br/>
              <Button className='mt-2' variant="contained" disableElevation
                color='primary' fullWidth
              > Login </Button>

            </Grid>
          </Paper>

        </Grid>
      </form>
    </div>
  )
}
