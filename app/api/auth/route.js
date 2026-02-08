import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password, name } = body || {}

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 })
    }

    const user = { id: Date.now(), email, name: name || email.split('@')[0] }

    return NextResponse.json({ ok: true, user, token: 'fake-token' })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
