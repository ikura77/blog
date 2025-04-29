const CACHE_NAME = 'diary-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './editor.html',
  './drafts.html',
  './article.html',
  './style.css',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// インストール時にキャッシュを追加
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// リクエストに対してキャッシュ優先で返す
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
