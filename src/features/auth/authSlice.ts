import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../models/users'

export interface LoginPayload {
  username: string
  password: string
}

export interface AuthState {
  isLoggedIn: boolean
  logging?: boolean
  currentUser?: User
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true
      state.logging = false
      state.currentUser = action.payload
    },
    loginFailure(state, action: PayloadAction<string>) {
      // state.isLoggedIn= false;
      state.logging = false
    },

    logout(state) {
      state.logging = false
      state.currentUser = undefined
    },
  },
})

//Action
export const authActions = authSlice.actions

// selector 
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn
export const selectIsLogging = (state: any) => state.auth.logging

const authReducer = authSlice.reducer
export default authReducer
