import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maypiano.me',
  // The score world is CSS and inline SVG; the only client JS is the playable
  // first system and the margin-annotation reveal, both hand-written.
  build: { inlineStylesheets: 'auto' },
  compressHTML: false, // keep the direction contract readable in built output
});
