// Service worker de la guia del Marroc: perquè funcioni sense connexió.
// Per forçar que tothom reculli una versió nova, canvia el número de VERSIO.
const VERSIO = 'marroc-2026-v8';
const BASE = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSIO).then((c) => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith('marroc-2026') && k !== VERSIO).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // La pàgina: primer la xarxa (per rebre actualitzacions) i, sense connexió, la còpia desada.
    if (req.mode === 'navigate') {
      e.respondWith(
        fetch(req)
          .then((r) => { const c = r.clone(); caches.open(VERSIO).then((ca) => ca.put('./index.html', c)); return r; })
          .catch(() => caches.match('./index.html'))
      );
      return;
    }
    // La resta de fitxers propis: primer la còpia desada.
    e.respondWith(caches.match(req).then((h) => h || fetch(req).then((r) => { const c = r.clone(); caches.open(VERSIO).then((ca) => ca.put(req, c)); return r; })));
    return;
  }

  // Fitxers del mapa interactiu (Leaflet): es desen després del primer ús.
  if (url.hostname === 'cdnjs.cloudflare.com') {
    e.respondWith(caches.match(req).then((h) => h || fetch(req).then((r) => { const c = r.clone(); caches.open(VERSIO).then((ca) => ca.put(req, c)); return r; })));
  }
  // Tot lo altre (rajoles del mapa, previsió del temps) va directe a internet.
});
