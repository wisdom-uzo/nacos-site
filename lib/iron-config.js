import { withIronSession } from 'next-iron-session'

export default function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'MY_APP_COOKIE',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      maxAge: 60 * 60 * 24 * 30, // 30 days
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  })
}

export const ironOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: 'MY_APP_COOKIE',
  cookieOptions: {
    // the next line allows to use the session in non-https environments like
    // Next.js dev mode (http://localhost:3000)
    maxAge: 60 * 60 * 24 * 30, // 30 days
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
}