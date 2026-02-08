'use client'
import { useState } from 'react'

export default function JobDescriptionInput({ value, onChange }) {
  const [text, setText] = useState(value || '')
  function commit() {
    onChange && onChange(text)
  }
  return (
    <div>
      <label>Job description</label>
      <textarea rows={6} value={text} onChange={(e) => setText(e.target.value)} style={{ width: '100%' }} />
      <div style={{ marginTop: 8 }}>
        <button onClick={commit}>Set Job Description</button>
      </div>
    </div>
  )
}
