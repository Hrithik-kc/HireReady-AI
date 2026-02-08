"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const router = useRouter()

	async function handleSubmit(e) {
		e.preventDefault()
		const res = await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ email, password, name }), headers: { 'Content-Type': 'application/json' } })
		const data = await res.json()
		if (data.ok) router.push('/dashboard')
	}

	return (
		<main style={{ padding: 20 }}>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name</label>
					<input value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label>Email</label>
					<input value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label>Password</label>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div style={{ marginTop: 12 }}>
					<button type="submit">Sign up</button>
				</div>
			</form>
		</main>
	)
}
