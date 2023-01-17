import '../styles/globals.css'
import type { NextPage } from 'next'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

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

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  )
}

export default MyApp
