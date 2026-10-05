const CACHE_NAME = 'mariapp-v6';

const ARQUIVOS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/programa.js',
    '/styles.css',
    '/fotos/20260801_170405.jpg',
    '/fotos/icone2.png',
    '/fotos/icone3.png',
    '/fotos/icone4.png',
    '/fotos/mari1.png',
    '/fotos/mari5.jpeg',
    '/fotos/mari3.jpg',
    '/fotos/mari4.jpg',
    '/fotos/mari2.jpg'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(ARQUIVOS);
            })
            .then(function() {
                return self.skipWaiting();
            })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        self.clients.claim().then(function() {
            return caches.keys().then(function(nomes) {
                return Promise.all(
                    nomes.map(function(nome) {
                        if (nome !== CACHE_NAME) {
                            return caches.delete(nome);
                        }
                    })
                );
            });
        })
    );
});


self.addEventListener('fetch', function(event) {
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(function(resposta) {
                const copia = resposta.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(event.request, copia);
                });
                return resposta;
            })
            .catch(function() {
                return caches.match(event.request);
            })
    );
});