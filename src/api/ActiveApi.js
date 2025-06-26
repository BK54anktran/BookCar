// src/api/cartApi.js
import { supabase } from './supabaseClient'

export const createActive = async () => {
    const { data, error } = await supabase
        .from('Active')
        .insert([
            {
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