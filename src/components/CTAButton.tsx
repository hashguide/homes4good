import { recordPetitionClick } from '../lib/supabase'

const PETITION_URL = 'https://c.org/ym4q6sfGGS'

export default function CTAButton({ className = '' }: { className?: string }) {
    async function handleClick() {
        // open petition in new tab
        window.open(PETITION_URL, '_blank', 'noopener')
        // record click (fire-and-forget)
        try {
            await recordPetitionClick()
        } catch (e) {
            // ignore
        }
    }

    return (
        <button
            onClick={handleClick}
            className={"inline-flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-700 " + className}
        >
            Sign the Petition
        </button>
    )
}
