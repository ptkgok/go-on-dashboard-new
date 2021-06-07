import React, { useContext } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { AuthProvider } from '../contexts/Authentication/AuthContext'
import NotificationProvider from '../contexts/Notification'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {


  return (
    <AuthProvider>
      <NotificationProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default MyApp
