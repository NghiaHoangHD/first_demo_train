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

const INITiAL_STATE = {
  // user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
}
export type AppDispatch = typeof store.dispatch

export const Context = createContext(INITiAL_STATE)

export const sagaMiddleware = createSagaMiddleware()

// export const store = createStore(Reducer, applyMiddleware(sagaMiddleware))
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
