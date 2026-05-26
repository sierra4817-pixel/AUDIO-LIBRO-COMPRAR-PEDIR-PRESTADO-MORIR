const CACHE_NAME = 'cpm-reader-v1';
const ASSETS = [
  'index.html',
  'book_data.js',
  'manifest.json',
  'icon.png',
  'logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
