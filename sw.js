const cacheName = 'countdown-timer-v1';

addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((response) => response || fetch(e.request).then((response) => {
                return caches.open(cacheName)
                    .then((cache) => cache.put(e.request, response.clone()))
                    .then(() => response); }))
    )
});
