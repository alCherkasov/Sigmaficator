import { createBrowserRouter, redirect } from 'react-router'
import App from './app'

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
				path: 'dashboard',
				lazy: () => import('@pages/DashboardPage/ui/DashboardPage'),
				hydrateFallbackElement: <div>Загрузка...</div>,
			},
			{
				path: '/',
				loader: () => redirect('/login'),
			},
		],
	},
])
