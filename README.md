# El Marroc 2026 · app per a l'iPhone

Això és la guia del viatge convertida en una app web (PWA). Es publica gratis a GitHub Pages i s'instal·la a la pantalla d'inici de l'iPhone amb la seva icona.

## Què hi ha en aquesta carpeta
| Fitxer | Per a què serveix |
|---|---|
| `index.html` | La guia sencera (tipografies incrustades) |
| `manifest.webmanifest` | Nom, colors i icones de l'app |
| `sw.js` | Perquè funcioni sense connexió |
| `icon-180.png` | La icona de l'iPhone |
| `icon-192.png`, `icon-512.png` | Icones per a altres dispositius |
| `icon-1024.png` | La icona gran (només per si la vols reutilitzar) |

## 1 · Pujar-ho a GitHub (sense instal·lar res)
1. Entra a **github.com** i inicia sessió (o crea un compte gratuït).
2. A dalt a la dreta, **+ → New repository**.
   - **Repository name:** posa-hi alguna cosa que no es pugui endevinar, per exemple `m26-k7q2`. El nom formarà part de l'adreça.
   - **Public** (Pages gratuït només funciona amb repositoris públics).
   - No marquis "Add a README". Prem **Create repository**.
3. A la pàgina buida, prem **uploading an existing file**.
4. **Descomprimeix el .zip** i arrossega a dins **tots els fitxers** (no el .zip ni cap carpeta). Els fitxers han d'anar a l'arrel.
5. Espera que acabin de pujar i prem **Commit changes**.
6. **Settings → Pages**. A *Build and deployment*, **Source: Deploy from a branch**; **Branch: main** i carpeta **/ (root)**; **Save**.
7. Espera 1–2 minuts i refresca la pàgina. Dalt apareixerà: *Your site is live at `https://EL-TEU-USUARI.github.io/NOM-DEL-REPO/`*. Obre l'adreça per comprovar que es veu.

## 2 · Instal·lar-la a l'iPhone
1. Obre l'adreça amb **Safari** (no des de Chrome ni des de l'app de Claude).
2. Toca **Compartir** (el quadrat amb la fletxa) → **Afegeix a la pantalla d'inici**.
3. Posa-hi el nom **Marroc** → **Afegeix**. Si surt l'opció "Obre com a app web", deixa-la activada.
4. **Obre l'app una vegada amb connexió** i deixa-la carregar uns segons: així es desa per usar-la sense connexió.
5. Comprova-ho: posa el mode avió i obre-la.

## 3 · Què funciona sense connexió
- **Sí:** tota la guia, el full de ruta, l'esquema de la ruta, el conversor €/MAD, la checklist, el lèxic i les targetes, i el rellotge.
- **Calen dades:** el mapa interactiu (rajoles d'OpenStreetMap), els botons de Google/Apple Maps i la previsió del temps en directe. La previsió, un cop carregada, es desa i es pot veure sense connexió amb la data en què es va baixar.
- **Truc:** abans de sortir, baixa a Google Maps els mapes sense connexió de cada ciutat.

## 4 · Actualitzar-la
1. Al repositori, prem el fitxer que vulguis canviar (p. ex. `index.html`) i el llapis **Edit**; o **Add file → Upload files** per substituir-lo. Després **Commit changes**.
2. L'app agafa la versió nova la propera vegada que s'obre amb connexió (potser cal tancar-la i tornar-la a obrir una segona vegada).
3. Si no s'actualitza, obre `sw.js`, canvia `marroc-2026-v1` per `marroc-2026-v2` i fes commit.

## 5 · Privacitat (important)
- Un repositori públic el pot veure **qualsevol persona que tingui l'adreça**. Aquesta versió porta l'itinerari, els vols i els hotels. **He tret les dues referències de reserva** dels vols.
- Té una marca "noindex" perquè Google no l'indexi, però **no és secret**.
- Per això convé un nom de repositori que no es pugui endevinar i no compartir l'adreça.
- Quan hagis tornat, pots esborrar el repositori: **Settings → Danger Zone → Delete this repository**.
- Si vols que sigui privat, Pages només funciona amb repositoris privats en plans de pagament de GitHub.

## 6 · Si alguna cosa falla
- **Pàgina 404:** comprova que `index.html` és a l'arrel del repositori (no dins d'una carpeta) i que a Settings → Pages hi ha *main / root*.
- **No surt la icona nova:** esborra l'app de la pantalla d'inici i torna-la a afegir (l'iPhone desa la icona en afegir-la).
- **Les marques de la checklist i el canvi del conversor** es desen dins l'app. Si l'esborres, es perden.
- **Les xifres del conversor** són el canvi de referència del MAEC (10,80). Es poden canviar dins l'app.
