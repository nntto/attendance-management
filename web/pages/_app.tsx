import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { NextPage } from 'next'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react'
import LoadingOverlay from '../components/LoadingOverlay'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout<T>
}

function MyApp({ Component, pageProps }: AppPropsWithLayout<{ session: Session }>) {
  // Component.getLayoutが定義されているページでは共通レイアウトを呼び出す．
  // そうでない場合はそのまま出力
  const getLayout = Component.getLayout ?? ((page) => page)

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  // SSRページへ移動する際に発生するローディング画面を表示するために必要
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const startLoading = () => setIsLoading(true)
    const stopLoading = () => setIsLoading(false)

    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    Router.events.on('routeChangeError', stopLoading)

    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
      Router.events.off('routeChangeError', stopLoading)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <LoadingOverlay />}
      <CssBaseline />
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
