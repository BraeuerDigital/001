# bräuer.digital

Statische Website in reinem HTML, CSS und JavaScript – ohne Build-Schritt, ohne Abhängigkeiten, ohne Cookies.

## Starten
```bash
git clone <dein-repo> && cd <dein-repo>
npm start        # oder: python3 -m http.server 8000
```

## Struktur
- `index.html`, `leistungen.html`, `ueber-mich.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`
- `assets/css/style.css` – Designsystem (Farben als CSS-Variablen)
- `assets/js/main.js` – Menü, Header, Reveal, Kontaktformular
- `assets/img/` – optimierte Bilder (WebP)

## Anpassen
- **Schnellkontakt-Leiste** (Anrufen / WhatsApp): Nummern stehen oben in `assets/js/main.js` unter `CONFIG`. Leer lassen = Leiste bleibt aus.
- **Platzhalter** sind gelb-kupfer markiert (`.ph`): Telefon, USt-IdNr., Datenschutztext, persönlicher Text.
- **Domain**: `https://braeuer.digital` ist in Canonical-Links, Open Graph, `sitemap.xml` und `robots.txt` eingetragen. Bei einer anderen Domain dort und in der Datei `CNAME` anpassen.

## Deployment (GitHub Pages mit eigener Domain)
1. Repository auf GitHub anlegen und den Inhalt dieses Ordners in den Branch `main` pushen (die Dateien liegen direkt im Repository-Root).
2. Settings → Pages → Source: *Deploy from a branch*, Branch `main`, Ordner `/ (root)`.
3. Unter *Custom domain* `braeuer.digital` eintragen (die Datei `CNAME` ist bereits vorhanden). Danach *Enforce HTTPS* aktivieren, sobald es verfügbar ist.
4. Bei Namecheap unter *Advanced DNS* diese Einträge setzen und alte Shopify-Einträge entfernen:
   - 4× `A Record`, Host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME Record`, Host `www`: `<dein-github-benutzername>.github.io`
5. Nach der DNS-Umstellung (kann einige Stunden dauern) `sitemap.xml` in der Google Search Console einreichen.

`.nojekyll` verhindert Jekyll-Fehler, `404.html` ist die Fehlerseite.

## Hinweis
Impressum und Datenschutz sind Entwürfe und vor Veröffentlichung rechtlich zu prüfen.
