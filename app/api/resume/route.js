import { NextResponse } from 'next/server'
import { parseResume } from '../../../../utils/resumeParser'

export async function POST(request) {
  try {
    const body = await request.json()
    const { text } = body || {}
    if (!text) return NextResponse.json({ error: 'No resume text provided' }, { status: 400 })

    const parsed = parseResume(text)
    return NextResponse.json({ ok: true, parsed })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
