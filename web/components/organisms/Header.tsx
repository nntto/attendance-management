import { UrlObject } from 'url'
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'

const handler = (path: string | UrlObject) => {
  Router.push(path)
}

export default function Header() {
  const { data, status } = useSession()

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            onClick={() => handler('/rooms')}
            sx={{
              cursor: 'pointer',
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            在室情報
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {data ? (
              <>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={'setting'} onClick={() => handler('/setting')}>
                    <Typography textAlign='center'>設定</Typography>
                  </MenuItem>
                  <MenuItem key={'signOut'} onClick={() => signOut()}>
                    <Typography textAlign='center'>ログアウト</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
