# HACCP – Leite UHT (Brasil) — Protótipo Interativo

Protótipo em **HTML/CSS/JS** para análise HACCP da cadeia do **Leite UHT** (escopo Brasil).  
O projeto apresenta, por etapas, **fluxo do processo**, **análise de perigos**, **árvore de decisão Codex/NACMCF**, **planos de monitoramento/corretivas/verificação** e **referências**.

> **Objetivo**: portfólio/estudo didático. Não substitui requisitos legais nem auditorias oficiais.

---

## 🔗 Demo (GitHub Pages)

1. Faça o push para o GitHub.
2. Em **Settings → Pages**:
   - *Build and deployment* → **Source**: *Deploy from a branch*.
   - **Branch**: `main` → **/ (root)`** (ou use `/docs` se preferir).
3. Confirme que existe um `index.html` na raiz ou em `/docs`.
4. Mantenha um arquivo vazio **`.nojekyll`** no mesmo diretório do `index.html`.

---

## 📁 Estrutura de Pastas (sugerida)

haccp-uht/
├─ README.md
├─ .editorconfig
├─ .gitignore
├─ .nojekyll # arquivo vazio
├─ index.html # seu esboco.html renomeado
├─ /assets/
│ ├─ /css/ app.css # opcional: extrair <style> do HTML
│ ├─ /js/ app.js # opcional: extrair <script> do HTML
│ ├─ /img/ favicon.svg …
│ └─ /fonts/ # se usar fontes locais
├─ /refs/ # PDFs citados na página
│ ├─ CXC_057e.pdf # Codex: Milk and Milk Products
│ └─ ISO_TS_22002-1_2009.pdf
└─ /data/
└─ steps.json # opcional: metadados de etapas/tooltip/PCC
