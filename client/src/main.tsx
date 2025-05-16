import { router } from '@app/router'
import { store } from '@app/store'
import '@app/styles/scss/index.scss'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<Suspense fallback={<div>...Загрузка</div>}>
				<RouterProvider router={router}></RouterProvider>
			</Suspense>
		</Provider>
	</StrictMode>
)
