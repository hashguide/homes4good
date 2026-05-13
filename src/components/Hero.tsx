import { texts } from '../content'
import { recordLearnMoreClick } from '../lib/supabase'
import CTAButton from './CTAButton'

export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[68vh]">
                <div className="md:col-span-2 flex items-center justify-center">
                    <div className="max-w-3xl text-center">
                        <div className="text-sm text-green-700 font-medium">{texts.eyebrow}</div>
                        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900">{texts.headline}</h1>
                        <p className="mt-4 text-gray-700">{texts.description}</p>
                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <CTAButton />
                            <button
                                onClick={async () => {
                                    try {
                                        recordLearnMoreClick()
                                    } catch (_) { }
                                    const el = document.getElementById('why')
                                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="inline-flex items-center px-4 py-2 border border-green-600 text-green-700 rounded-md"
                            >
                                Why It Matters
                            </button>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">Created by Jake Arsenault for a Consentino Middle School civics project.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
