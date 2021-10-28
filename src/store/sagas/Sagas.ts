// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import createSagaMiddleware from 'redux-saga'
// import { LOGIN_START, loginStart } from '../actions/Action'
import authSaga from '../../features/auth/authSaga'
import counterSaga from '../../features/counter/counterSaga'
import { all } from 'redux-saga/effects'
let userApi = 'http://localhost:3000/user'

// function* login(action: any) {
//   try {
//     yield put(loginStart())
//   } catch (error) {}
// }

export default function* rootSaga() {
  //   yield takeLatest('LOGIN_START', login)
  yield all([counterSaga(), authSaga()])
}
