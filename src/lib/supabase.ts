import { createClient, SupabaseClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

let supabase: SupabaseClient | null = null

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    // Type assertion: import.meta.env values may be typed as string | null in some toolchains.
    // We already guard for truthiness above, so assert to `string` to satisfy TS.
    supabase = createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string)
}

export function getSupabase() {
    return supabase
}

function getSessionId() {
    try {
        let id = localStorage.getItem('hfg_session_id')
        if (!id) {
            id = (crypto && (crypto as any).randomUUID ? (crypto as any).randomUUID() : 's_' + Math.random().toString(36).slice(2))
            localStorage.setItem('hfg_session_id', id)
        }
        return id
    } catch (e) {
        return 'local'
    }
}

function getDeviceType() {
    try {
        const ua = navigator.userAgent || ''
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) return 'mobile'
        return 'desktop'
    } catch (e) {
        return null
    }
}

async function insertEventToSupabase(eventName: string, metadata: Record<string, any> = {}) {
    if (!supabase) return { success: false, error: 'no supabase' }
    try {
        await supabase.from('analytics_events').insert({
            event_name: eventName,
            page_path: window.location.pathname,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent || null,
            session_id: getSessionId(),
            device_type: getDeviceType(),
            metadata,
        })
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}

export async function recordPetitionClick(metadata: Record<string, any> = {}) {
    if (!supabase) {
        try {
            const key = 'hfg_petition_clicks'
            const val = parseInt(localStorage.getItem(key) || '0', 10) + 1
            localStorage.setItem(key, String(val))
            return { success: true, fallback: true, count: val }
        } catch (e) {
            return { success: false, error: e }
        }
    }

    try {
        await insertEventToSupabase('petition_cta_click', metadata)
        // call RPC to increment public_stats counter if available
        await supabase.rpc('increment_petition_clicks')
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}

export async function recordPageView(metadata: Record<string, any> = {}) {
    if (!supabase) {
        try {
            const key = 'hfg_page_views'
            const val = parseInt(localStorage.getItem(key) || '0', 10) + 1
            localStorage.setItem(key, String(val))
            return { success: true, fallback: true, count: val }
        } catch (e) {
            return { success: false, error: e }
        }
    }

    try {
        await insertEventToSupabase('page_view', metadata)
        try { await supabase.rpc('increment_page_views') } catch (_) { }
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}

export async function recordLearnMoreClick(metadata: Record<string, any> = {}) {
    if (!supabase) {
        try {
            const key = 'hfg_learn_more_clicks'
            const val = parseInt(localStorage.getItem(key) || '0', 10) + 1
            localStorage.setItem(key, String(val))
            return { success: true, fallback: true, count: val }
        } catch (e) {
            return { success: false, error: e }
        }
    }

    try {
        await insertEventToSupabase('learn_more_click', metadata)
        try { await supabase.rpc('increment_learn_more_clicks') } catch (_) { }
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}

export async function getPetitionClicks() {
    if (!supabase) {
        const key = 'hfg_petition_clicks'
        const val = parseInt(localStorage.getItem(key) || '0', 10)
        return { success: true, count: val }
    }

    try {
        const { data, error } = await supabase
            .from('public_stats')
            .select('petition_clicks')
            .eq('id', 'main')
            .single()

        if (error) return { success: false, error }
        return { success: true, count: data?.petition_clicks ?? 0 }
    } catch (error) {
        return { success: false, error }
    }
}
