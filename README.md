# GRQ6A · Fieldwire dokumentáció

M-J Wood Group — GRQ6A projekt (Fő nyomvonal &amp; FIA) Fieldwire dokumentációja.

## Tartalom

| Fájl | Leírás |
|------|--------|
| `index.html` | Belépő oldal: M-J logó, iOS/Android badge, Fieldwire csatlakozó link, kártyák |
| `GRQ6A_Fieldwire_Hasznalati_Utmutato.html` | Fieldwire használati útmutató |
| `GRQ6A_QC_Kezikonyv_FoNyomvonal_FIA.html` | QC kézikönyv (telepítés → specifikáció → átadás, döntési fák, fotó-referencia) |
| `GRQ6A_QR.png` | QR kód a belépő oldalra (nyomtatáshoz / posztoláshoz) |
| `sw.js` | Service worker (network-first) — **ezzel felülírandó a repóban lévő hibás sw.js** |

## ⚠️ Fontos: sw.js javítás

A repóban a `sw.js` jelenleg egy hibás fájl (Navisworks `.config` XML), ezért a service worker
nem települ, és a PWA/offline mód nem működik. A csomagban lévő **helyes `sw.js`-t töltsd fel a
repó gyökerébe, felülírva a régit.** Ez a verzió **network-first**: online mindig a friss
tartalmat tölti (nem kell `?v=...` cache-trükk), offline pedig a legutóbbi mentettet mutatja.

## Közzététel GitHub Pages-en

1. Töltsd fel ezeket a fájlokat a repó gyökerébe (vagy a `/docs` mappába).
2. **Settings → Pages → Source**: `main` branch `/ (root)` (vagy `/docs`) → Save.
3. Pár perc múlva a `https://<felhasznalo>.github.io/<repo>/` címen elérhető a belépő oldal.

---
Powered by Csaba Suba© Minden jog fentartva - 2026 · Fieldwire · belső használatra
