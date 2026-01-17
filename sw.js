const CACHE_NAME = 'hydra1k-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://unpkg.com/leaflet@1.9.5/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.5/dist/leaflet.js',
  'https://i.ibb.co/Y4bX3XDr/lv-0-20260117034219.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
