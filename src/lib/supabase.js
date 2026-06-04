import { createClient } from "@supabase/supabase-js";

// Use Vite environment variables. Define these in a `.env` file or your host:
// VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fail fast in development to make missing config obvious.
  // In production you may want to handle this differently.
  throw new Error(
    "Missing Supabase configuration: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);