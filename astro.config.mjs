import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages (project site) at
// https://danknowsaguy-web.github.io/balance-protocol-gps/
export default defineConfig({
  site: 'https://danknowsaguy-web.github.io',
  base: '/balance-protocol-gps',
  // Dedicated dev port for THIS project so it never collides with other
  // Astro projects fighting over the default 4321. strictPort makes a
  // collision fail loudly instead of silently grabbing the wrong port.
  server: { port: 4317, strictPort: true },
});
