import { createContext, useEffect, useReducer } from "react";
import Reducer from './reducers/Reducer'


const INITiAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false
}
