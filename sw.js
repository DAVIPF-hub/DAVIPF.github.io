// Service worker mínimo — só precisa existir e responder ao fetch para o
// navegador considerar o app "instalável". Não fazemos cache agressivo dos
// dados (eles vêm sempre ao vivo da planilha), só dos arquivos estáticos do
// app em si, para abrir mais rápido e funcionar offline na parte visual.
const CACHE_NAME = "financeiro-app-v1";
const ARQUIVOS_ESTATICOS = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARQUIVOS_ESTATICOS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((nomes) =>
      Promise.all(nomes.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // Nunca cachear chamadas à API (Apps Script) — sempre precisa ser dado ao vivo.
  if (url.hostname.includes("script.google.com")) return;

  event.respondWith(
    caches.match(event.request).then((resposta) => resposta || fetch(event.request))
  );
});
