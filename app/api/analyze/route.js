import { NextResponse } from 'next/server'
import { analyzeText } from '../../../../lib/gemini'

export async function POST(request) {
  try {
    const body = await request.json()
    const { resumeText, jobDescription } = body || {}
    if (!resumeText) return NextResponse.json({ error: 'Missing resumeText' }, { status: 400 })

    const analysis = await analyzeText(resumeText, jobDescription || '')
    return NextResponse.json({ ok: true, analysis })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
