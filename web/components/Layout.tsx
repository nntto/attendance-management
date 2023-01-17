import { ReactNode } from 'react'
import Header from './organisms/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
