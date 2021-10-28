import { createContext } from 'react'
import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import Reducer from './reducers/Reducer'
import rootSaga from './sagas/Sagas'
import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/auth/authSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { history } from '../ultis/history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
const INITiAL_STATE = {
  // user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
}
export type AppDispatch = typeof store.dispatch

export const Context = createContext(INITiAL_STATE)

export const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
