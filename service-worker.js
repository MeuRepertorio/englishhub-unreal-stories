/* Offline-first: app shell + all 25 original SVG covers and data. */
const VERSION='englishhub-v1.0.0';
const files=['./','./index.html','./styles.css','./app.js','./stories.js','./manifest.webmanifest','./assets/favicon.svg','./assets/hero-portrait.webp'];
const worlds=['fruit','element','social','ai','mystery'];
for(let i=1;i<=25;i++)files.push(`./assets/covers/${worlds[(i-1)%5]}-${i}.svg`);
self.addEventListener('install',event=>{event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(files)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 if(new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(caches.match(event.request).then(cached=>{
  if(cached)return cached;
  return fetch(event.request).then(response=>{
   if(response.ok&&new URL(event.request.url).origin===self.location.origin){const copy=response.clone();caches.open(VERSION).then(c=>c.put(event.request,copy)).catch(()=>{});}return response;
  }).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):Response.error());
 }));
});
