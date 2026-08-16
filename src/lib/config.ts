/*
  One place that answers: is this instance wired to real services yet?

  Nothing in this project pretends a service is connected when it is not. Every
  screen reads these flags and says plainly what it is showing — real data, or
  the sample course with a visible notice. Wiring Supabase and Bunny is a
  matter of setting env vars; no screen code changes.
*/

const env = (key: string): string | undefined => {
  const v = import.meta.env[key] ?? process.env[key];
  return v && String(v).trim() !== '' ? String(v) : undefined;
};

export const supabase = {
  url: env('SUPABASE_URL'),
  anonKey: env('SUPABASE_ANON_KEY'),
  get configured() {
    return Boolean(this.url && this.anonKey);
  },
};

export const bunny = {
  libraryId: env('BUNNY_LIBRARY_ID'),
  // Bunny's token-authentication key. Signed URLs expire, so a lesson link
  // cannot be forwarded and keep working.
  signingKey: env('BUNNY_SIGNING_KEY'),
  cdnHost: env('BUNNY_CDN_HOST'),
  get configured() {
    return Boolean(this.libraryId && this.signingKey && this.cdnHost);
  },
};

/** True when this instance is running on sample data rather than the real course. */
export const isSample = !supabase.configured;

export const SESSION_COOKIE = 'maypiano_session';
