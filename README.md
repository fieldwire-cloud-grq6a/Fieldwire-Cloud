# GRQ6A · Fieldwire dokumentáció

M-J Wood Group — GRQ6A projekt (Fő nyomvonal &amp; FIA). Élő oldal:
<https://fieldwire-cloud-grq6a.github.io/Fieldwire-Cloud/>

**Kiadás: 2026-11-21**

## Tartalom

| Fájl | Leírás |
|------|--------|
| `index.html` | Belépő oldal: logó, App Store / Google Play, Fieldwire projekt-link és QR, menü |
| `GRQ6A_Fieldwire_Hasznalati_Utmutato.html` | Fieldwire használati útmutató — 7 fejezet |
| `GRQ6A_QC_Kezikonyv_FoNyomvonal_FIA.html` | QC kézikönyv — 10 nézet |
| `GRQ6A_QR.png` | QR a belépő oldalra (nyomtatáshoz) |
| `GRQ6A_WhatsApp_QR.png` | WhatsApp QR (nyomtatáshoz) |
| `sw.js`, `manifest.webmanifest` | PWA: telefonra telepíthető, offline is működik |

## Mi változott ebben a kiadásban (2026-11-21)

- **Javított app-letöltés.** Az App Store (`id700366889`) és Google Play (`com.fieldwire.app`) link 404-et adott;
  most `apps.apple.com/app/id780165517` és `play.google.com/store/apps/details?id=net.fieldwire.app`.
  A belépő oldalon és az útmutató 1. fejezetében bolt-QR-kód is van. A plakátok „app letöltése” QR-ja erre az oldalra mutat, így az is újra működik.
- **Új logó:** M-J Wood Group Kft. – Electrical infrastructure (pajzs).
- **Busbar nyomaték:** S40 = 83 NM (2026-09-08), Brooklyn = 85 NM, két csavar.
- **Útmutató 3. fejezet újraírva** a Napi jelentés plakát v3.8 szerint: sablonválasztás, nevek, tételek, rezsi/állásidő, beküldés, gyakori hibák, mintaképekkel. A régi natív űrlap mezőleírása kikerült.
- **Újdonságok** mindkét kézikönyvben: torque-szín (piros MJW / sárga Dornan / rózsaszín PMC), létra-földelés egy oldalon.

## Előző kiadás (2026-09-05)

- **A Google Drive-hivatkozások megszűntek.** A logó, az ikonok és a QR-kódok
  mostantól a HTML-be ágyazva vannak — nincs külső függőség, offline is megjelenik minden.
  Az App Store / Google Play jelvények beágyazott SVG-k, és az áruházra mutatnak.
- **A 13 oktatóvideó hivatkozása is megszűnt.** A helyükön jelölt helykitöltő van;
  a lépések szövegesen minden fejezetben megvannak. Új felvételeknél elég a
  `demo_placeholder()` blokkokat lecserélni.
- **WhatsApp kapcsolat** a régi Drive-os névjegy helyén: QR + gomb, mindkettő
  ugyanarra a `wa.me` linkre visz.
- **Új menüpontok** a QC kézikönyvben: Hibatípus-katalógus (HT-01…HT-13),
  Busbar tesztelés (nyomaték + DLRO), Átadás, Újdonságok.
- **Új fejezetek** a használati útmutatóban: 6 · Minőség és hibakezelés, 7 · Újdonságok.
- **Mélylinkek**: `…Kezikonyv….html#hibak`, `#busbar`, `#atadas`, `#ujdonsagok`,
  `#main`, `#fia_mod`, `#fia_ship`, `#rovid`, `#guide` — és
  `…Hasznalati_Utmutato.html#v1` … `#v7`.
- A QC kézikönyv **574 KB-ról 341 KB-ra** csökkent (optimalizált beágyazott logó),
  miközben négy új nézettel bővült.

## Közzététel GitHub Pages-en

1. Töltsd fel ezeket a fájlokat a repó gyökerébe (a régieket felülírva).
2. **Settings → Pages → Source**: `main` branch, `/ (root)` → Save.
3. Pár perc múlva frissül a `https://fieldwire-cloud-grq6a.github.io/Fieldwire-Cloud/` cím.
4. A dolgozóknál a következő online indításnál frissül (a service worker network-first).

---
Powered by Csaba Suba© Minden jog fentartva - 2026 · Fieldwire · belső használatra
