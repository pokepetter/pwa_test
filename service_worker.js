const CACHE_NAME = 'index';
const OFFLINE_URL = 'index.html';
var urlsToCache = [
  './',
  './index.html'
];

self.addEventListener('install', function(event) {
    console.log('installing service_worker');
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
            })
    );
});
