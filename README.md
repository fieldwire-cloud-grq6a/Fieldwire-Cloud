# GRQ6A · Fieldwire dokumentáció

M-J Wood Group — GRQ6A projekt (Fő nyomvonal &amp; FIA). Élő oldal:
<https://fieldwire-cloud-grq6a.github.io/Fieldwire-Cloud/>

**Kiadás: 2026-09-05**

## Tartalom

| Fájl | Leírás |
|------|--------|
| `index.html` | Belépő oldal: logó, App Store / Google Play, Fieldwire projekt-link és QR, menü |
| `GRQ6A_Fieldwire_Hasznalati_Utmutato.html` | Fieldwire használati útmutató — 7 fejezet |
| `GRQ6A_QC_Kezikonyv_FoNyomvonal_FIA.html` | QC kézikönyv — 10 nézet |
| `GRQ6A_QR.png` | QR a belépő oldalra (nyomtatáshoz) |
| `GRQ6A_WhatsApp_QR.png` | WhatsApp QR (nyomtatáshoz) |
| `sw.js`, `manifest.webmanifest` | PWA: telefonra telepíthető, offline is működik |

## Mi változott ebben a kiadásban

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
