import React from 'react'
import Navbar from '../../components/Navbar'
import ResumeUpload from '../../components/ResumeUpload'
import JobDescriptionInput from '../../components/JobDescriptionInput'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function ResumePage() {
  const { resumeText, setResumeText, jobDescription, setJobDescription, setAnalysis } = useContext(AppContext)

  async function handleAnalyze() {
    const res = await fetch('/api/analyze', { method: 'POST', body: JSON.stringify({ resumeText, jobDescription }), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    if (data.ok) setAnalysis(data.analysis)
  }

  return (
    <div>
      <Navbar />
      <main style={{ padding: 16 }}>
        <h1>Resume</h1>
        <ResumeUpload onUpload={setResumeText} />
        <div style={{ marginTop: 12 }}>
          <JobDescriptionInput value={jobDescription} onChange={setJobDescription} />
        </div>
        <div style={{ marginTop: 12 }}>
          <button onClick={handleAnalyze}>Analyze</button>
        </div>
      </main>
    </div>
  )
}
