import type { APIRoute } from 'astro';
import { endSession } from '../lib/session';

// POST only: a link that logs you out can be triggered by anything that
// prefetches or embeds it.
export const POST: APIRoute = ({ cookies, redirect }) => {
  endSession(cookies);
  return redirect('/', 303);
};
