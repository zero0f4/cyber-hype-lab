const CACHE_NAME = 'cyber-hype-lab-v5';
const ASSETS = [
  'index.html', 'home.html', 'waarom.html',
  'bingo.html', 'patch-excuses.html',
  'vendor-slogan.html', 'product-naam.html', 'conference-talk.html',
  'apt-namen.html', 'ciso-excuses.html', 'linkedin-post.html',
  'scifi.html',
  'handleiding.html', 'changelog.html',
  'styles.css', 'menu.js', 'icons.js', 'theme.js', 'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isHtml = event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/';
  const isData = url.pathname.endsWith('.js') || url.pathname.endsWith('.css');
  if (isHtml || isData) {
    event.respondWith(
      fetch(event.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, copy)).catch(()=>{});
        return resp;
      }).catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
