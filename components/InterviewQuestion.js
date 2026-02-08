'use client'
import { useState } from 'react'

export default function InterviewQuestion({ question, onAnswer }) {
  const [answer, setAnswer] = useState('')
  return (
    <div style={{ border: '1px solid #eee', padding: 12, marginBottom: 8 }}>
      <div style={{ fontWeight: 600 }}>{question}</div>
      <textarea rows={4} value={answer} onChange={(e) => setAnswer(e.target.value)} style={{ width: '100%', marginTop: 8 }} />
      <div style={{ marginTop: 8 }}>
        <button onClick={() => onAnswer && onAnswer(answer)}>Save answer</button>
      </div>
    </div>
  )
}
