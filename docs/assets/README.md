# Pasta `/assets`

Esta pasta contém os **recursos auxiliares** (estilos e scripts) usados pelo arquivo principal `index.html`.  
Enquanto a raiz do projeto é **HTML puro**, aqui ficam os arquivos que garantem **estilo visual (CSS**)** e **interatividade(JavaScript**)**.

---

## Arquivos

###`style.css`

Arquivo de **estilos globais** que define o **Design Pack** do projeto:

- **Tokens de design** (cores, tipografia, raios, sombras):contentReference[oaicite:0]{index=0}.
- **Suporte a Dark Mode** via `prefers-color-scheme`.
- **Estilos base**: tipografia, containers, foco visível para acessibilidade.

- **Componentes principais**:
  - Cabeçalho (`header` e `nav`).
  - Cartões de etapas (`.stage-card`), incluindo variação com **PCC** destacado:contentReference[oaicite:1]{index=1}.
  - Botões (`.btn` em versões primária, secundária, ghost, danger).
  - Tabelas com cabeçalho fixo e destaque ao passar o mouse.
  - Modais acessíveis (`.modal` + `.modal-dialog`) com transições suaves.
  - Badges, tooltips e selos de **Pontos Críticos de Controle (PCC)**:contentReference[oaicite:2]{index=2}.
  
- **Utilitários**: `.sr-only`, `.container`, estilos de impressão.

O `style.css` garante a **identidade visual** consistente e acessível do HACCP UHT.

---

### `script.js`

Arquivo de **JavaScript** responsável pela **interatividade**:
- Controle de **modais**:
  - Abrir via botões com `data-open`.
  - Fechar via `data-close`, tecla **ESC** ou clique fora do diálogo.
  - Manter o **foco acessível** (volta para o último botão acionado).
  
- Suporte a **acessibilidade**:
  - Previne perda de foco ao navegar só com teclado.
  - Garante que os modais sejam navegáveis por leitores de tela.
  - Estrutura limpa, sem dependências externas (JS puro).

O `script.js` faz a ponte entre os **botões do HTML** e os **modais do CSS**, permitindo a navegação dinâmica do conteúdo.

---

## Integração com `index.html`

No arquivo raiz:

```html
<!-- Estilos -->
<link rel="stylesheet" href="./assets/style.css">

<!-- Scripts -->
<script defer src="./assets/script.js"></script>
