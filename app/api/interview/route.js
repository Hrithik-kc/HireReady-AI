import { NextResponse } from 'next/server'
import { generateQuestions } from '../../../../lib/gemini'

export async function POST(request) {
  try {
    const { jobDescription } = await request.json()
    if (!jobDescription) return NextResponse.json({ error: 'Missing jobDescription' }, { status: 400 })

    const questions = await generateQuestions(jobDescription)
    return NextResponse.json({ ok: true, questions })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
