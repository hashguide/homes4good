import { useEffect } from 'react'
import Hero from '../components/Hero'
import ImpactCards from '../components/ImpactCards'
import SignatureCard from '../components/SignatureCard'
import { recordPageView } from '../lib/supabase'

export default function Home() {
    useEffect(() => {
        try {
            recordPageView()
        } catch (_) { }
    }, [])

    return (
        <main className="flex-1">
            <Hero />

            <section id="why" className="max-w-5xl mx-auto px-6 py-10">
                <div>
                    <h2 className="text-2xl font-semibold">Why this matters</h2>
                    <p className="mt-3 text-gray-700">Homelessness affects more than one person at a time. When people lack stable housing, the whole community feels the impact through schools, emergency services, healthcare systems, families, and local neighborhoods.</p>
                    <div className="mt-6">
                        <ImpactCards />
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-8">
                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        <SignatureCard />
                    </div>
                </div>
            </section>
        </main>
    )
}
