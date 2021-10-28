import { call, delay, fork, take, put } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import console from 'console'
import { LoginPayload, authActions } from './authSlice'
import {push} from 'connected-react-router'

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem('access_token', 'fake_token')
    yield put(
      authActions.loginSuccess({
        id: 1,
        username: 'nghiahoang',
        email: 'nghiahoang@gmail.com',
        password: '123456',
      })
    )

    // yield put(push('/'))
    window.location.replace('/')

  } catch (error) {
    yield put(authActions.loginFailure('error message'))
  }
}

function* handleLogout() {
  localStorage.removeItem('access_token')
//   yield put(push('/login'))
    window.location.replace('/login')
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'))
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      )
      yield fork(handleLogin, action.payload)
    }
    yield take(authActions.logout.type)
    yield call(handleLogout)
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow)
}
