import { authApi } from '@features/auth/api/auth.api'
import authSlice from '@features/auth/model/auth.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		[authApi.reducerPath]: authApi.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(authApi.middleware)
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch