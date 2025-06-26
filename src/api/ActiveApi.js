// src/api/cartApi.js
// import { use } from 'react'
import { supabase } from './supabaseClient'

export const createActive = async () => {
    if (window.location.hostname !== 'nhatrangcar.com') {
        console.log('Skipping createActive on localhost');
        return null;
    }

    // Đã tạo active trong phiên này?
    if (sessionStorage.getItem('active_created') === 'true') {
        console.log('Active already created this session');
        return null;
    }

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
            },
        ])
        .select();

    if (error) {
        console.error('Error creating Active record:', error);
        return null;
    }

    // Đánh dấu đã tạo để không tạo lại
    sessionStorage.setItem('active_created', 'true');

    return data;
};


export const createActiveConnectApp = async (appName) => {
    if (window.location.hostname !== 'nhatrangcar.com') {
        console.log('Skipping createActiveConnectApp on localhost')
        return null
    }
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