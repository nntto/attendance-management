import { Box, Container } from '@mui/material'
import { ReactNode } from 'react'
import Header from './organisms/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <Container maxWidth='md' sx={{ minWidth: 400 }}>
        {children}
      </Container>
    </div>
  )
}
