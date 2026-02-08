'use client'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  async function login(email, password) {
    const res = await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ email, password }), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    if (data.ok) setUser(data.user)
    return data
  }

  async function signup(email, password, name) {
    const res = await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ email, password, name }), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    if (data.ok) setUser(data.user)
    return data
  }

  function logout() {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>
}
