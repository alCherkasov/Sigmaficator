import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IAuthState } from './types'

const initialState: IAuthState = {
	token: null,
	user: {
		name: null,
		email: null
	},
	isAuth: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<IAuthState>) => {
			state.token = action.payload.token
			state.user.name = action.payload.user.name
			state.user.email = action.payload.user.email
			state.isAuth = action.payload.isAuth
		},
		logout: (state) => {
			state.token = null
			state.user.name = null
			state.user.email = null
			state.isAuth = false
		}
	},
})

export const {setCredentials, logout} = authSlice.actions
export default authSlice.reducer