import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import '@smastrom/react-rating/style.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer position='bottom-center' />
    </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
