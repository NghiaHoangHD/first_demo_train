import { TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { width } from '@mui/system'
import React from 'react'
import '../../assets/scss/pages/notFound.scss'
export interface NotFoundProps {}

export default function NotFound(props: NotFoundProps) {
  return (
    <div className="notFound">
      <h1>404 |</h1>
      <p>SORRY !</p>
      <p>The page you're looking for was Not Found</p>
      <div className="notFound_search">
        <TextField
          style={{ width: '300px' }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Search></Search>
      </div>
    </div>
  )
}
