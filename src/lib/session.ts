/*
  Who is signed in.

  Supabase owns identity once its keys are set. Until then a local development
  session stands in so the gated screens can be built and reviewed — it is
  clearly marked everywhere it appears, refuses to run outside development,
  and is never presented as authentication.
*/

import type { AstroCookies } from 'astro';
import { SESSION_COOKIE, supabase, isSample } from './config';

export interface Learner {
  id: string;
  email: string;
  name: string;
  /** True when this identity came from the dev stand-in, not from Supabase. */
  sample: boolean;
}

const COOKIE_OPTS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  path: '/',
  secure: !import.meta.env.DEV,
  maxAge: 60 * 60 * 24 * 30,
};

export async function currentLearner(cookies: AstroCookies): Promise<Learner | null> {
  const token = cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  if (isSample) {
    // Development stand-in. The cookie holds the email typed at sign-in and
    // nothing else — it proves nothing and is not a credential.
    return { id: 'sample', email: token, name: token.split('@')[0] || 'Học viên', sample: true };
  }

  const res = await fetch(`${supabase.url}/auth/v1/user`, {
    headers: { apikey: supabase.anonKey!, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const user = await res.json();
  return {
    id: user.id,
    email: user.email,
    name: user.user_metadata?.name || user.email?.split('@')[0] || 'Học viên',
    sample: false,
  };
}

export function startSampleSession(cookies: AstroCookies, email: string) {
  if (!isSample) throw new Error('Phiên thử chỉ dùng được khi chưa nối Supabase.');
  cookies.set(SESSION_COOKIE, email, COOKIE_OPTS);
}

export function endSession(cookies: AstroCookies) {
  cookies.delete(SESSION_COOKIE, { path: '/' });
}
