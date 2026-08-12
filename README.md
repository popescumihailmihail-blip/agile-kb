# Agile Codex

Site interactiv, educațional și practic — bibliotecă de cunoștințe Agile & Scrum distilată din 23 de cărți de referință. Trilingv **RU · RO · EN**.

**Site static, fără dependențe de build** (HTML/CSS/JS pur). Merge direct pe GitHub Pages.

## Conținut
- **Bibliotecă** — 23 de cărți, fiecare cu teză, idei-cheie, practici și „cum aplicăm" (card → modal).
- **Playbook-uri** — 8 ghiduri acționabile (pornire proiect, ceremonii, roluri, estimare, backlog, Kanban, calitate, scalare).
- **Glosar** — 368 de termeni aliniați RU ↔ RO ↔ EN, cu căutare.
- **Dezbateri** — 9 controverse între autori + recomandarea noastră.
- **Surse** — atribuire bibliografică + link către fișierele din Google Drive (acces restricționat).

## Rulare locală
Orice server static, ex.:
```bash
python3 -m http.server 4321 --directory .
# apoi deschide http://localhost:4321
```

## Publicare pe GitHub Pages
1. Creează un repo gol pe GitHub (ex. `agile-codex`).
2. Din acest folder:
   ```bash
   git add -A && git commit -m "Agile Codex site"
   git branch -M main
   git remote add origin https://github.com/<USER>/agile-codex.git
   git push -u origin main
   ```
3. GitHub → repo → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save.
4. Site live la `https://<USER>.github.io/agile-codex/` în ~1 minut.

## Structură
```
index.html
assets/css/styles.css
assets/js/app.js               # motor: limbi, randare, modal, filtre, căutare
assets/js/content-ui.js        # texte UI + categorii (trilingv)
assets/js/content-books-*.js   # 23 de cărți (trilingv)
assets/js/content-playbooks.js # 8 playbook-uri
assets/js/content-glossary.js  # 368 termeni
assets/js/content-debates.js   # 9 dezbateri
assets/img/favicon.svg
```

## Atribuire & drepturi
Rezumatele sunt lucrări derivate în scop educațional intern, cu atribuire completă (autor, titlu, an). Cărțile-sursă rămân în Google Drive cu **acces restricționat** — nu sunt redistribuite public.

---
_Bază de cunoștințe internă · derivată din 23 de surse · RU · RO · EN_
