import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './Provider/ThemeContext.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
       <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      <ToastContainer />
      </ThemeProvider>
     </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
