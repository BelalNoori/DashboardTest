import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qcjcvbaaruxzfigbwtws.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjamN2YmFhcnV4emZpZ2J3dHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2Njc4MzQsImV4cCI6MjEwMDI0MzgzNH0.MTHmm4J7BvpJYhhu7Uh6xyiVSTsuhIjGFPtlFHb_hLM'

export const supabase = createClient(supabaseUrl, supabaseKey)