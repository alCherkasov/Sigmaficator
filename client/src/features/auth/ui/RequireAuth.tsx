import { useAppSelector } from '@shared/lib/hooks/reduxHooks'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router'

export default function RequireAuth({ children }: { children: ReactNode }) {
	const jwt = useAppSelector(state => state.auth.token)

	console.log(jwt)
	if (!jwt) {
		return <Navigate to={'/login'} replace />
	}
	return children
}
