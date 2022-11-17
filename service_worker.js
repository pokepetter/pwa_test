const CACHE_NAME  = 'cmyk_swap-v1';
const CONTENT_TO_CACHE = [
  '/',
  '/index.html',
  '/taptapir.js',
  '/taptapir.css',
]

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME );
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(CONTENT_TO_CACHE);
  })());
});
