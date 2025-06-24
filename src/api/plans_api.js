// src/api/cartApi.js
import { supabase } from './supabaseClient'

export const getPlansList = async () => {
  const { data, error } = await supabase
    .from('plans')
    .select('*')

  if (error) {
    console.error('Error fetching cart:', error)
    return null
  }
  return data
}