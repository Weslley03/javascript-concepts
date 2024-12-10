const CACHE_NAME = 'v1';
const urlToCache = [ './index.html' ];

self.addEventListener('install', event => {
  console.log(`service worker instalado`);
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`arquivos em cache adicionados`);
      return cache.addAll(urlToCache);
    })
  )
})

self.addEventListener('active', event => {
  console.log(`service worker ativado`);
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  )
})