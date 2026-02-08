'use client'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
      <Link href="/">Home</Link> | <Link href="/dashboard">Dashboard</Link> | <Link href="/resume">Resume</Link> | <Link href="/interview">Interview</Link>
      <span style={{ float: 'right' }}>
        {user ? (
          <>
            <strong style={{ marginRight: 8 }}>{user.email}</strong>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/ (auth)/login">Login</Link> | <Link href="/(auth)/signup">Signup</Link>
          </>
        )}
      </span>
    </nav>
  )
}
