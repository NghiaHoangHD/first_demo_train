export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginStart = () => ({type: 'LOGIN_START'});
export const loginSuccess = (user: any) => ({type: 'LOGIN_SUCCESS', payload: user});
export const loginFailure = () => ({type: 'LOGIN_FAILURE'});
export const logOut = () => ({type: 'LOGOUT',})
// export const LoginStart = (useCredentials: any) => ({
//   type: 'LOGIN_START'
// })

// export const LoginSuccess = (user: any) => ({
//   type: 'LOGIN_SUCCESS',
//   payload: user,
// })

// export const LoginFailure = (user: any) => ({
//   type: 'LOGIN_FAILURE',
// })

// export const Logout = (user: any) => ({
//   type: 'LOGOUT',
// })
