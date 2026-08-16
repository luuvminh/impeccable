import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://maypiano.me',
  // The sales page is static; the course area is gated, so it renders per
  // request. Marketing routes opt back into prerendering individually.
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  // Astro's own origin check is unusable under the Node standalone adapter:
  // it compares the browser's Origin against url.origin, which that adapter
  // pins to `http://localhost` regardless of `site`, Host or X-Forwarded-Host,
  // so it rejects every real same-origin form post. src/middleware.ts does the
  // comparison correctly, against the host the request arrived on. This is a
  // replacement, not a removal.
  security: { checkOrigin: false },
  build: { inlineStylesheets: 'auto' },
  compressHTML: false, // keep the direction contract readable in built output
});
