import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global.js'
import theme from "./styles/theme.js"
import { NavProvider } from './hook/navHook.jsx'
import { AuthProvider } from './hook/AuthHook.jsx'
import { Routes } from './routes/index.jsx'
import { SearchProvider } from './hook/searchHook.jsx'
import { CartProvider } from './hook/cartHook.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <NavProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Routes />
            </ThemeProvider>
          </NavProvider>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
