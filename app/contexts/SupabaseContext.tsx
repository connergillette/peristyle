import { createClient } from '@supabase/supabase-js'
import { createContext } from 'react'

export const supabase = createClient(
  'https://tbapjtyegqkzbhfwpjls.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiYXBqdHllZ3FremJoZndwamxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyMzUyMzYsImV4cCI6MTk4ODgxMTIzNn0.DoH-dac5JsY56NS5YrykWX83g0yOhkbZM9VfGl3vyyQ'
)
const SupabaseContext = createContext(supabase)

export const SupabaseProvider = SupabaseContext.Provider
export default SupabaseContext