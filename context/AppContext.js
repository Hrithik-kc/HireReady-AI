'use client'
import React, { createContext, useState } from 'react'

export const AppContext = createContext({})

export function AppProvider({ children }) {
  const [resumeText, setResumeText] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [analysis, setAnalysis] = useState(null)

  return (
    <AppContext.Provider value={{ resumeText, setResumeText, jobDescription, setJobDescription, analysis, setAnalysis }}>
      {children}
    </AppContext.Provider>
  )
}
