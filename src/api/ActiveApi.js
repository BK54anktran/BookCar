// src/api/cartApi.js
// import { use } from 'react'
import { supabase } from './supabaseClient'

export const createActive = async () => {
    const { data, error } = await supabase
        .from('Active')
        .insert([
            {
                user_id: localStorage.getItem('visitor_id') || null,
                created_at: new Date().toISOString(),
                domain: window.location.hostname,
                url: window.location.href,
                userAgent: navigator.userAgent,
                language: navigator.language,
                
            }
        ])
        .select()
    if (error) {
        console.error('Error fetching cart:', error)
        return null
    }
    return data
}

export const createActiveConnectApp = async (appName) => {
    const { error } = await supabase
        .from('Active_Connect_App')
        .insert([
            {
                user_id: localStorage.getItem('visitor_id') || null,
                domain: window.location.hostname,
                url: window.location.href,
                app_name: appName,
                userAgent: navigator.userAgent,
            }
        ])
        .select()
    if (error) {
        console.error('Error fetching cart:', error)
        return null
    }
    return true
}