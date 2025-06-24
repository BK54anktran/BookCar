import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hqtcochgusbnweoqbrdr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxdGNvY2hndXNibndlb3FicmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MjU4MDksImV4cCI6MjA2NjMwMTgwOX0.RsW0tl2cJbZX3tvIJu5EC70nLs_xi8f9w-dkR37UT9E'

export const supabase = createClient(supabaseUrl, supabaseKey)
