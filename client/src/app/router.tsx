import { createBrowserRouter, redirect } from 'react-router-dom'
import App from './App'

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: 'login',
				lazy: () => import('@pages/LoginPage/ui/LoginPage'),
				hydrateFallbackElement: <div>Загрузка...</div>,
			},
			{
				path: 'register',
				lazy: () => import('@pages/RegisterPage/ui/RegisterPage'),
				hydrateFallbackElement: <div>Загрузка...</div>,
			},
			{
				path: 'home',
				children: [
					{
						path: 'dashboard',
						lazy: () => import('@pages/DashboardPage/ui/DashboardPage'),
						hydrateFallbackElement: <div>Загрузка...</div>,
					},
					{
						path: 'history',
						lazy: () => import('@pages/HistoryPage/ui/HistoryPage'),
						hydrateFallbackElement: <div>Загрузка...</div>,
					},
					{
						path: 'meals',
						lazy: () => import('@pages/MealsPage/ui/MealsPage'),
						hydrateFallbackElement: <div>Загрузка...</div>,
					},
				],
				lazy: async () => {
					const { Component } = await import('@pages/HomePage/ui/HomePage')
					const { RequireAuth } = await import('@features/auth/ui/index')
					return {
						element: (
							<RequireAuth>
								<Component />
							</RequireAuth>
						),
					}
				},
				hydrateFallbackElement: <div>Загрузка...</div>,
			},
			{
				path: '/',
				loader: () => redirect('/login'),
			},
		],
	},
])
