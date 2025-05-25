import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ILoginData, IRegisterData, IResponseData } from '../model/types'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8765/auth'}),
	endpoints: (builder) => ({
		loginUser: builder.mutation<IResponseData, ILoginData>({
			query: credentials => ({
				url: '/login',
				method: 'POST',
				body: credentials
			})
		}),
		registerUser: builder.mutation<IResponseData, IRegisterData>({
			query: credentials => ({
				url: '/register',
				method: 'POST',
				body: credentials
			})
		})
	})
})

export const {
	useLoginUserMutation,
	useRegisterUserMutation
} = authApi