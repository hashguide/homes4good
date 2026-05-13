import React, { useEffect, useState } from 'react'
import { getPetitionClicks } from '../lib/supabase'

export default function Analytics() {
    const [authorized, setAuthorized] = useState(false)
    const [password, setPassword] = useState('')
    const [count, setCount] = useState<number | null>(null)
    // Prefer non-VITE admin vars (ADMIN_PASSWORD) for server-side/secure use,
    // fall back to VITE_ADMIN_PASSWORD for local/dev where needed.
    const ADMIN_PASSWORD = (import.meta.env as any).ADMIN_PASSWORD || import.meta.env.VITE_ADMIN_PASSWORD || ''

    useEffect(() => {
        if (ADMIN_PASSWORD && sessionStorage.getItem('hfg_admin') === ADMIN_PASSWORD) {
            setAuthorized(true)
        }
    }, [])

    async function fetchCount() {
        const res = await getPetitionClicks()
        if (res.success) setCount(res.count)
    }

    function tryLogin(e?: React.FormEvent) {
        e?.preventDefault()
        if (password && ADMIN_PASSWORD && password === ADMIN_PASSWORD) {
            sessionStorage.setItem('hfg_admin', password)
            setAuthorized(true)
            fetchCount()
        } else {
            alert('Invalid admin credentials')
        }
    }

    if (!authorized) {
        return (
            <main className="p-8">
                <h2 className="text-2xl font-semibold">Admin Analytics</h2>
                <p className="mt-2 text-gray-600">Enter admin password to view analytics. This route is hidden from public navigation.</p>
                <form onSubmit={tryLogin} className="mt-4 flex gap-2">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 border rounded" placeholder="Admin password" />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">Enter</button>
                </form>
            </main>
        )
    }

    return (
        <main className="p-8">
            <h2 className="text-2xl font-semibold">Admin Analytics</h2>
            <p className="mt-2 text-gray-600">This page shows a simple count of petition CTA clicks recorded in Supabase.</p>
            <div className="mt-6">
                <button onClick={fetchCount} className="px-4 py-2 bg-gray-200 rounded">Refresh</button>
            </div>
            <div className="mt-6 text-lg">
                {count === null ? 'No data yet.' : `${count} recorded CTA clicks.`}
            </div>
        </main>
    )
}
