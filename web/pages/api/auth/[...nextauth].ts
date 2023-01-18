import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SECRET } = process.env
if (!SECRET) throw new Error('You must provide SECRET env var.')
if (!GOOGLE_CLIENT_ID) throw new Error('You must provide GOOGLE_ID env var.')
if (!GOOGLE_CLIENT_SECRET) throw new Error('You must provide GOOGLE_SECRET env var.')

console.log(SECRET)
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: SECRET,
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user, account }) {
      let success = user?.id
      if (account && success) {
        return {
          ...token,
          user: user,
          accessToken: user?.id,
        }
      }
      return token
    },

    async session({ session, token }) {
      session.user = token
      return session
    },
  },
}

export default NextAuth(authOptions)
