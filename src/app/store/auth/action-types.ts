export enum ActionTypes {
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',

  SIGNIN = '[Auth] Signin',
  SIGNIN_SUCCESS = '[Auth] Signin Success',
  SIGNIN_FAILURE = '[Auth] Signin Failure',

  GET_CURRENT_USER = '[Auth] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get Current User Failure',

  UPLOAD_AVATAR_IMAGE = '[Auth] Upload Avatar Image',
  UPLOAD_AVATAR_IMAGE_SUCCESS = '[Auth] Upload Avatar Image Success',
  UPLOAD_AVATAR_IMAGE_FAILURE = '[Auth] Upload Avatar Image Failure',

  SIGNOUT = '[Auth] Signout'
}
