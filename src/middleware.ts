import { defineMiddleware } from 'astro:middleware';

/*
  Same-origin check for state-changing requests.

  Astro ships its own `security.checkOrigin`, but under the Node standalone
  adapter it compares the browser's Origin header against `url.origin`, and
  that value is hard-wired to `http://localhost` — it ignores `site`, the Host
  header and X-Forwarded-Host alike (measured, not assumed). So it rejects
  every genuine same-origin form post unless the app happens to be served at
  localhost on port 80. Astro's check is therefore switched off in
  astro.config.mjs and replaced by this, which compares Origin against the host
  the request actually arrived on.

  Reverse proxies rewrite Host, so X-Forwarded-Host wins where present. Set
  TRUSTED_ORIGIN when the deployment terminates TLS somewhere that rewrites
  neither.
*/

const UNSAFE = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

function allowedHosts(request: Request): string[] {
  const hosts: string[] = [];
  const fwd = request.headers.get('x-forwarded-host');
  if (fwd) hosts.push(...fwd.split(',').map((h) => h.trim()));
  const host = request.headers.get('host');
  if (host) hosts.push(host);
  const trusted = process.env.TRUSTED_ORIGIN;
  if (trusted) {
    try {
      hosts.push(new URL(trusted).host);
    } catch {
      /* a malformed value simply grants nothing */
    }
  }
  return hosts.filter(Boolean);
}

export const onRequest = defineMiddleware((context, next) => {
  const { request } = context;
  if (!UNSAFE.has(request.method)) return next();

  const origin = request.headers.get('origin');
  if (!origin) {
    // A form post from a browser always carries Origin. Its absence means a
    // client we have no same-origin evidence for.
    return new Response('Thiếu Origin. Yêu cầu bị từ chối.', { status: 403 });
  }

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return new Response('Origin không hợp lệ.', { status: 403 });
  }

  if (!allowedHosts(request).includes(originHost)) {
    return new Response('Yêu cầu đến từ nguồn khác. Bị từ chối.', { status: 403 });
  }

  return next();
});
