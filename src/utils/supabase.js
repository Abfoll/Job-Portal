import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseClient = async (supabaseAccessToken) => {
  // Build headers with token if available
  const headers = {};
  if (supabaseAccessToken && typeof supabaseAccessToken === "string" && supabaseAccessToken.trim()) {
    headers.Authorization = `Bearer ${supabaseAccessToken}`;
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: headers,
    },
  });

  return supabase;
};

export default supabaseClient;
