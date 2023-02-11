export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/', '/((?!non-protected|api/update_last_connected_at).*)'],
}
