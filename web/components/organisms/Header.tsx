import { Box, Button } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {
  const { data, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>

  return (
    <Box>
      {data ? (
        <Button onClick={() => signOut()}>SignOut</Button>
      ) : (
        <Button onClick={() => signIn('google')}>SignIn</Button>
      )}
    </Box>
  )
}
