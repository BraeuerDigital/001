import { defineConfig } from 'astro/config';

// Statische Ausgabe. Die Redirects ersetzen die alten Shopify-Pfade.
// Hinweis: Astro erzeugt dafür Meta-Refresh-Seiten. Echte 301-Weiterleitungen
// sollten später im Hosting eingetragen werden (SEO).
export default defineConfig({
  output: 'static',
  redirects: {
    '/pages/leistungen': '/leistungen',
    '/pages/uber-mich': '/ueber-mich',
    '/pages/ablauf': '/ablauf',
    '/pages/contact': '/kontakt',
    '/policies/contact-information': '/impressum',
    '/policies/privacy-policy': '/datenschutz',
    '/policies/terms-of-service': '/agb',
  },
});
