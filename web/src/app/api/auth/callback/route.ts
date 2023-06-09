import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const registerReponse = await api.post('/register', { code })

  const { token } = registerReponse.data

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(new URL('/', request.url), {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
