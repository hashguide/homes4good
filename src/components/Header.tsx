
import { projectContent } from '../content'
import CTAButton from './CTAButton'

function LogoIcon() {
    return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="1" y="6" width="22" height="14" rx="2" fill="white" opacity="0.0" />
            <path d="M3 10.5L12 4l9 6.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 11.5v6a1 1 0 0 0 1 1h2v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h2a1 1 0 0 0 1-1v-6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 13.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#ffffff" />
        </svg>
    )
}

export default function Header() {
    return (
        <header className="w-full py-6 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-md bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center">
                    <LogoIcon />
                </div>
                <div className="leading-tight">
                    <div className="text-sm text-gray-700 font-semibold">{projectContent.projectName}</div>
                    <div className="text-xs text-gray-600">{projectContent.schoolName}</div>
                    <div className="text-xs text-gray-500">{projectContent.city}, {projectContent.state}</div>
                </div>
            </div>
            <div>
                <CTAButton />
            </div>
        </header>
    )
}
