import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const missingSupabaseMessage =
  'Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables. ' +
  'Copy .env.example to .env and fill in your Supabase credentials.';

export function getSupabaseClient() {
  if (!isSupabaseConfigured) {
    throw new Error(missingSupabaseMessage);
  }

  return createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string);
}

export function assertSupabaseConfigured() {
  if (!isSupabaseConfigured) {
    throw new Error(missingSupabaseMessage);
  }
}
