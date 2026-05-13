import { useEffect, useState } from 'react'
import { projectContent } from '../content'
import { getPetitionClicks, recordPetitionClick } from '../lib/supabase'

export default function SignatureCard() {
    const [count, setCount] = useState<number | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let mounted = true
        getPetitionClicks().then((res) => {
            if (!mounted) return
            if (res.success) setCount(res.count)
        })
        return () => {
            mounted = false
        }
    }, [])

    async function handleAddSupport() {
        setLoading(true)
        await recordPetitionClick()
        const res = await getPetitionClicks()
        if (res.success) setCount(res.count)
        setLoading(false)
        window.open(projectContent.petitionUrl, '_blank', 'noopener')
    }

    const progress = count && projectContent.clickGoal ? Math.min(100, Math.round((count / projectContent.clickGoal) * 100)) : 0

    return (
        <div className="p-6 bg-white rounded-xl shadow-card border">
            <h3 className="text-xl font-semibold">Community Support</h3>
            <div className="mt-2 text-gray-700">
                {count === null ? 'Loading support count...' : `${count} people clicked to sign`}
            </div>
            <div className="mt-3">
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div className="h-3 bg-green-600" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-2 text-sm text-gray-500">Goal: {projectContent.clickGoal} petition visits</div>
            </div>
            <div className="mt-4">
                <button onClick={handleAddSupport} className="px-4 py-2 bg-green-600 text-white rounded-md" disabled={loading}>
                    {loading ? 'Recording…' : 'Add Your Support'}
                </button>
            </div>
            <div className="mt-2 text-xs text-gray-500">You’ll be taken to the official Change.org petition page.</div>
        </div>
    )
}
