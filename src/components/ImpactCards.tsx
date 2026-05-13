
const items = [
    { title: 'Housing', text: 'Stable housing gives people a safer foundation to rebuild their lives.' },
    { title: 'Mental Health', text: 'Support services can help people recover, stabilize, and reconnect.' },
    { title: 'Jobs & Skills', text: 'Training and employment programs create a path toward independence.' },
    { title: 'Outreach', text: 'Community outreach helps connect people with help before problems get worse.' },
]

export default function ImpactCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((it) => (
                <div key={it.title} className="p-4 bg-white rounded-lg shadow-card border">
                    <h4 className="font-semibold">{it.title}</h4>
                    <p className="mt-2 text-gray-700 text-sm">{it.text}</p>
                </div>
            ))}
        </div>
    )
}
