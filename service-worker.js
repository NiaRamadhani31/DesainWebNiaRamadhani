javascript
   self.addEventListener('install', function(event) {
     event.waitUntil(
       caches.open('nia-ramadhani-cache').then(function(cache) {
         return cache.addAll([
           '/',
           '/index.html',
           '/about.html',
           '/contact.html',
           '/style.css',
           '/nia.jpg',
           '/offline.html'
         ]);
       })
     );
   });

   self.addEventListener('fetch', function(event) {
     event.respondWith(
       caches.match(event.request).then(function(response) {
         return response || fetch(event.request);
       })
     );
   });
