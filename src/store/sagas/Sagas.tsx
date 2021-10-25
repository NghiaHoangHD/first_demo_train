import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import { LOGIN_START, loginStart } from '../actions/Action'

let userApi = 'http://localhost:3000/user'

function* login(action: any) {
  // try {
  //   const user = yield call(userApi.fetchUser, action.payload.userId);
  //   yield put ({type: 'LOGIN_SUCCESS', user: user})
  // } catch (error) {
  //   yield put({type:'LOGIN_FAILURE', message: error.message})
  // }
  try {
    yield put(loginStart())
  } catch (error) {}
}

export default function* rootSaga() {
  yield takeLatest('LOGIN_START', login)
}
