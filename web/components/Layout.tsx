import { Container } from '@mui/material'
import { ReactNode } from 'react'
import Header from './organisms/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth='md' sx={{ minWidth: 400 }}>
      <div>
        <Header />
        {children}
      </div>
    </Container>
  )
}
