# HACCP – Leite UHT (Modelo Interativo)

Este repositório apresenta um **protótipo interativo** de plano HACCP (*Hazard Analysis and Critical Control Points*), ou APPCC (Análise de Perigos e Pontos Críticos de Controle), aplicado à produção de **leite UHT**.

O projeto foi desenvolvido em **HTML + CSS + JS puro**, com foco em **acessibilidade (A11y)**, **design responsivo** e **navegação didática** das etapas do processo:contentReference[oaicite:0]{index=0}.

---

## Funcionalidades `index.html` (raiz do projeto)

Este arquivo contém **apenas o HTML principal** da aplicação.  
Toda a estrutura semântica, navegação e conteúdo de etapas está centralizada aqui, enquanto estilos (`style.css`) e scripts (`app.js`) ficam na pasta `/assets`.

- Estrutura semântica completa: `header`, `nav`, `main`, `footer`.
- **Dark Mode automático** via `prefers-color-scheme`.
- **Foco visível** e navegação por teclado (`tab`, `shift+tab`, `ESC`).
- **Botões de ação** que abrem **modais acessíveis** com:
  - Tabelas de perigos (biológicos, químicos, físicos, fraude).
  - Checklists de PRPs/oPRPs.
  - Árvores de decisão Codex/NACMCF.
  - Limites críticos e planos de monitoramento.
  - Ações corretivas e registros associados.
    
- Conteúdo pronto para replicação em cada etapa da cadeia do leite UHT:
  - **Etapa 1**: Produção e coleta na fazenda.  
  - **Etapa 2**: Transporte refrigerado (granel).  
  - **Etapa 3**: Recepção e triagem na indústria (com PCCs de antibióticos e aflatoxina M1).  
  - **Etapa 4**: Armazenagem em silo, clarificação/filtração e padronização.  
  - **Etapa 5:** Tratamento UHT (esterilização/retenção/resfriamento asséptico).  
  - **Etapa 6:** Envase asséptico e fechamento.  
  - **Etapa 7:** Armazenagem, rotulagem e distribuição.  
  - **Etapa 8:** Varejo e recall.  
  - **Etapa 9:** Consumo (uso doméstico e boas práticas do consumidor).  

---

## Estrutura de Pastas

```bash
/
├─ index.html         # Página principal
├─ assets/
│  ├─ style.css       # Estilos globais (tokens, dark mode, componentes)
│  └─ script.js       # Script para controlar modais (abrir/fechar, foco, ESC)
├─ .nojekyll          # Necessário para publicação de Html puro no GitHub Pages
└─ README.md          # Este arquivo
```

---

## Ferramentas

  - Editor de código: VS Code + Notepad++
  - Versionamento e colaboração: Git + GitHub 
  - Hospedagem estática: GitHub Pages

**Validação de código:**
  - W3C HTML Validator
  - W3C CSS Validator
    
**Validação de código:**
  - DevTools (Chrome/Firefox)

> **Nota**
> Este `index.html` é um **protótipo interativo** do fluxo HACCP para leite UHT.
> Ele tem caráter **educacional e demonstrativo** — não é um sistema validado para uso industrial.
