# CLAUDE.md

## Projeto

Landing page para a **Pruxor**, sistema de gestão e acompanhamento de obras
e projetos (engenharia, arquitetura, construção). O site nasceu como um
clone estrutural/visual de outro site de referência — objetivo é converter
visitantes em demonstrações/testes gratuitos.

**Fase atual (a partir de 2026-08-22): reconstrução com copy oficial,
sessão a sessão.** O usuário recebeu a copy oficial da Pruxor e
reconstruiu o site com ela aos poucos, uma seção por vez. **O site é uma
landing page única — só `index.html`.** As páginas extras `sobre.html`,
`solucoes.html` e `planos.html` (conteúdo inferido/aproximado de uma fase
anterior, sem copy oficial) foram **apagadas do repositório em
2026-08-22**, junto com todo CSS/JS que só elas usavam (ver "Limpeza pós-
remoção das páginas extras" em `memoria.md` para a lista completa). Não
recriar essas páginas nem os componentes removidos sem pedido explícito
novo do usuário.

## Tecnologias

- HTML/CSS/JS puro (vanilla). Sem framework, sem bundler, sem build step,
  sem dependências de npm no site em si.
- Fontes via CDN: **General Sans** (Fontshare, headings/corpo) e **Inter**
  (Google Fonts, UI/navegação/botões).
- Sem bibliotecas de JS (sem jQuery, GSAP, AOS etc.) — todos os efeitos são
  vanilla (`IntersectionObserver`, `requestAnimationFrame`, `position:
  sticky`, CSS custom properties).

## Estrutura

```
index.html      → a página inteira (única rota do site)
css/style.css   → design tokens (:root) + estilo de todos os componentes
js/main.js      → funções de init, todas chamadas em DOMContentLoaded
README.md       → detalhes técnicos mais extensos (licenças, decisões)
```

Não criar novas páginas/rotas sem pedido explícito do usuário — o site é
página única de propósito.

Todo ícone de dentro das seções continua sendo SVG inline no HTML (não
mudou). **Existe uma pasta `assets/` desde 2026-08-25** —
`assets/Imagens-solucoes/` guarda as 5 telas reais do produto usadas na
sessão "Soluções" (ver bullet "Telas reais do produto" em "Design e
experiência"); `assets/Imagens-logo/` guarda os arquivos de logo do
usuário (2 PDFs — `Logo completa.pdf`, ainda sem uso, e
`logo-fav-icon.pdf`, convertido pra PNG e usado como favicon do site,
ver bullet "Favicon" em "Design e experiência" — mais 2 PNGs prontos com
fundo transparente, também ainda sem uso). Fora isso, o site continua
sem outros assets de imagem. A hero não tem card visual/mockup do lado
direito — foi removido de propósito (ver bullet da hero em "Design e
experiência"); não
reintroduzir uma imagem ou placeholder ali sem pedido explícito.

## Regras do projeto

- **Página única de verdade.** Navegação principal (`.nav__list` e
  `.nav__list--mobile`) é 100% âncora dentro do próprio `index.html`:
  Sobre (`#sobre`) → Soluções (`#solucoes`) → Planos (`#planos`) → FAQ
  (`#faq`). A ordem dos itens-âncora segue a ordem das seções no
  `index.html` — reordene a navbar (e o footer, que usa a mesma ordem)
  sempre que reordenar seções. Não criar novas rotas/páginas sem pedido
  explícito do usuário — o site nunca deve voltar a ter mais de um
  arquivo HTML sem um motivo novo e explícito.
- **Ordem das seções no index (copy oficial, 2026-08-22): Hero → Sobre
  (prova social) → Problema → Soluções (5 módulos) → Como funciona →
  Planilha vs Pruxor → Diferenciais (comerciais) → Depoimentos → Planos →
  FAQ → CTA final (`.full-width-feature`).** "Sobre" (agora com stats de
  prova social) foi movida pra logo abaixo da hero por pedido explícito
  do usuário — antes ficava entre Soluções e Integrações (seção removida,
  ver abaixo). "Problema" continua seguido direto por "Soluções"
  (`id="solucoes"`) de propósito, pro visitante entender o problema e já
  ver a solução em seguida — não mexer nessa adjacência sem pedido
  explícito. "Como funciona", "Planilha vs Pruxor", "Diferenciais"
  (comerciais, `.value-props`) e "Depoimentos" são sessões novas (não
  existiam antes da copy oficial), cada uma logo abaixo da anterior por
  pedido explícito do usuário — nenhuma tem `id`/âncora própria (nem toda
  sessão precisa de item no nav). "Planos" ganhou `id="planos"` e o nav
  passou a apontar pra âncora (`#planos`) quando a sessão de verdade
  passou a existir em `index.html`. **Integrações ("Stack"), Segurança e
  a "Diferenciais" antiga (5 cards sobre foco no setor/centralização/etc.)
  foram REMOVIDAS do `index.html` por pedido explícito do usuário
  (2026-08-22)** — eram as 3 seções com conteúdo placeholder/aproximado
  que restavam do site antigo, sem copy oficial equivalente. Só existe
  UMA sessão "Diferenciais" de fato desde então (a comercial,
  `.value-props`). CSS específico (`.integrations__*`, `.security__*`,
  `.security-card`) foi removido junto por não ter mais uso em nenhuma
  página.
- **Sem framework/bundler.** Manter vanilla HTML/CSS/JS — não introduzir
  build step ou dependências no site em si sem alinhar antes.
- **Tokens centralizados** em `:root` no `css/style.css` (cor de marca,
  tipografia, espaçamento, raio de borda). Não hardcodear valores soltos;
  usar as variáveis existentes (`--color-brand`, `--space-*`, `--text-*`,
  `--radius-*`).
- **Breakpoints padrão:** 991px (tablet), 767px e 479px (mobile). Seguir
  os mesmos ao criar componentes responsivos novos.
- **Padrão de tamanho de H1 no mobile (≤767px): `var(--text-2xl)`**
  (2026-08-22, rodada de ajustes focada em mobile, pedido explícito do
  usuário com print do hero) — hoje o único `<h1>` do site é
  `.hero__heading`, que já tinha uma redução em ≤991px (`--text-3xl`,
  usada também por tablet); a nova regra em ≤767px reduz mais um passo,
  só na faixa mobile de verdade, sem mexer no tablet. Qualquer `<h1>`
  novo que apareça no site deve seguir esse mesmo tamanho no mobile,
  salvo pedido explícito em contrário.
- Efeitos de scroll travado (`feature-showcase`, `how-it-works`) medem
  dimensões dinamicamente via JS/CSS (`getBoundingClientRect`,
  `position: sticky`) em vez de valores fixos — seguir esse padrão em
  novos efeitos do tipo.
- **Nunca combinar `data-reveal` (scroll-reveal genérico) com um elemento
  que já tem opacidade controlada por classe própria** (ex: `.is-active`
  de crossfade/stepping) — os dois sistemas competem pela mesma
  propriedade `opacity` e já causaram um bug real (ver `memoria.md`).
- **Cuidado ao definir `transform` em `:hover` de um elemento com
  `data-reveal`**: `[data-reveal].is-visible` já define `transform`
  (specificity 0,2,0) e, como vem depois no `style.css`, vence qualquer
  regra `:hover` de especificidade igual (ex: `.card:hover`), fazendo o
  efeito de hover parecer não funcionar mesmo com CSS correto — reforce a
  especificidade (ex: `.card.card:hover`) sempre que animar `transform`
  num elemento que também tem `data-reveal` (bug real, ver `memoria.md`).
- Padrões de "scroll-hijack" (imagem/texto presos, cards deslizando)
  ficam **desativados abaixo de 991px** — mobile sempre cai para layout
  empilhado normal, sem travar o scroll.

## Design e experiência

- Marca: roxo `#514fee` (`--color-brand`), fundo quase branco
  (`--bg-page`), texto quase preto (`--color-ink`).
- Tipografia: General Sans para heading/corpo, Inter para UI/nav/botões.
- **Favicon (desde 2026-08-25)**: `assets/Imagens-logo/favicon.png` +
  `apple-touch-icon.png`, convertidos do PDF do usuário
  (`logo-fav-icon.pdf`, via Ghostscript + recorte em Python/Pillow —
  ver `memoria.md` pro processo completo). É só o símbolo triangular do
  PDF (o PDF também tem um texto/tagline em branco embaixo, cortado por
  ficar ilegível em tamanho de favicon). **A cor do símbolo (gradiente
  azul/verde/teal) não bate com o roxo `--color-brand` usado no resto do
  site** — não foi alinhado nem foi pedido alinhar; o roxo do site já é
  sabidamente herdado do clone de referência, não a cor real da marca
  (decisão registrada em `memoria.md`, seção "Decisões" — "Cor de
  marca"). Não mudar a paleta do site por causa disso sem pedido
  explícito.
- **Logo real na navbar, "Planilha vs Pruxor" e rodapé (desde
  2026-08-25)**: substituiu o antigo placeholder (`.nav__logo-mark`, um
  quadradinho de cor de marca + texto "Pruxor" ao lado — classe removida
  do CSS, não tem mais uso). Fonte: `assets/Imagens-logo/logo-sem-fundo-
  fonte-branca.png`/`-preto.png` (PNGs prontos do usuário, lockup
  completo ícone+"PRUXOR"+tagline) recortados pra `logo-lockup-white.png`/
  `-black.png` (só ícone+"PRUXOR", sem a tagline — não cabe/duplicaria a
  tagline própria do rodapé, `.footer__tagline`). **Navbar troca de
  versão conforme o scroll** (branca no topo transparente sobre a hero,
  preta na pílula rolada ou com o menu mobile aberto — via `display` nas
  duas versões, mesmo escopo do texto claro/escuro documentado no bullet
  "Navbar" acima). "Planilha vs Pruxor" (`.compare__header-label--brand`,
  cabeçalho desktop + divisória mobile) sempre branca — fundo sempre
  escuro, sem estado equivalente ao "rolado". **Rodapé usa uma imagem
  DIFERENTE das outras 3** (2ª rodada, mesmo dia): não é o
  `logo-lockup-black.png` compacto, e sim `logo-completa.png` — o lockup
  INTEIRO (ícone + "PRUXOR" + tagline "Sistema de Gestão e
  Acompanhamento de Obras" embutida na própria imagem), convertido de
  `Logo completa.pdf`. Substitui JUNTO a antiga logo compacta E o
  parágrafo separado `.footer__tagline` (removido do HTML/CSS, virou
  redundante) — pedido explícito do usuário. Dimensiona por LARGURA
  (`.footer__logo-img--completa { width: 200px; height: auto; }`), não
  por altura como a navbar, já que é um lockup vertical (ícone em cima,
  texto embaixo), não horizontal. **Atenção**: o arquivo
  `logo-sem-fundo-fonte-preto.png` (usado só pra gerar o
  `logo-lockup-black.png` compacto da navbar) tem um erro de digitação
  na tagline ("ACOMPANHEMTNO" em vez de "ACOMPANHAMENTO") — não afeta
  nenhum uso atual (a tagline foi recortada fora nesse arquivo
  específico), mas `Logo completa.pdf` (a fonte do rodapé) já tem o
  texto CERTO, então não confundir os dois se for mexer nisso de novo.
- **Hero** (`index.html`) foge do padrão claro do resto do site de
  propósito: fundo em gradiente de 6 paradas, clareando o tempo todo sem
  nenhum trecho parado na mesma cor (`--color-ink` no topo → `--color-brand`
  → tons cada vez mais claros via `color-mix(in srgb, var(--color-brand) N%,
  white)` → `--bg-page` no fim). Evite voltar a um "platô" de cor sólida
  parada por um trecho longo — foi exatamente isso que criava uma transição
  final brusca (feedback direto do usuário, comparando com o site de
  referência). Tem também uma textura de grade sutil (`.hero__texture`) e
  um holofote de pontinhos que segue o mouse (`.hero__spotlight` +
  `initHeroSpotlight` em `js/main.js`). O holofote usa um filtro SVG
  (`#hero-wave`, definido inline logo no `<body>` do `index.html`, com
  `feTurbulence`+`feDisplacementMap` e uma `<animate>` SMIL) pra distorcer a
  máscara com ruído animado — não é um círculo estático, ondula sozinho o
  tempo todo. Efeito baseado no hero do site de referência original. Todo
  texto dentro do hero usa cor clara (`--text-inverse` ou
  `rgba(255,255,255,…)`), não os tokens de texto padrão do site (que são
  escuros, pensados pra fundo claro) — **exceto `.hero__microcopy`**
  ("15 dias de acesso completo..."), que usa `color: var(--color-brand)`
  desde 2026-08-22 (pedido explícito do usuário: deixar esse texto "na
  cor primária", lido como a cor de marca — mesma cor de `.btn--primary`/
  badge "Mais popular" — não o token `--text-primary`, que é escuro e
  pensado pra fundo claro, ilegível aqui). Mantém o `text-shadow` escuro
  já existente (ajuda o brand-color roxo a não se perder contra o trecho
  do degradê que também é roxo, na posição vertical onde a microcopy
  cai). Ao ajustar as paradas do gradiente,
  ajuste junto os `mask-image` de `.hero__texture`/`.hero__spotlight`
  (mesmos pontos percentuais), senão eles ficam visíveis por cima da faixa
  branca em vez de sumir nela. `.hero` tem `margin-top: calc(-1 *
  var(--nav-height))` (compensado no `padding-top`) de propósito — ela
  "sobe" por baixo do header pra a navbar transparente do topo ter o
  degradê escuro pra revelar (ver bullet da navbar abaixo); se remover essa
  sobreposição, o texto claro do menu perde o contraste. **No mobile
  (≤767px), `padding-top`/`padding-bottom` da `.hero` reduzem de
  `--space-2xl` (96px) pra `--space-l` (48px)** — mantendo o `+
  var(--nav-height)` no topo (ainda precisa compensar a sobreposição da
  navbar, não pode sumir) — pedido explícito do usuário (com prints, hero
  atual vs. referência) pra "balancear" o hero no mobile: com o padding
  de desktop (96px/96px), sobrava um respiro desproporcional antes do
  eyebrow e depois da microcopy, deixando o conteúdo "flutuando" numa
  faixa curta no meio de uma faixa alta de gradiente vazio. A referência
  usada (hero da Clarasight) tem o heading bem mais colado no header;
  aqui não dá pra copiar isso 1:1 porque a hero não tem o gráfico
  (globo pontilhado) que na referência preenche o espaço abaixo do CTA —
  reduzir o padding em vez de adicionar um elemento novo foi a forma de
  "balancear" sem contradizer a decisão já tomada de manter a hero só com
  a coluna de texto (ver bullet do card visual removido). Conteúdo da hero
  é só a coluna de texto (`.hero__content`), centralizada, sem card
  visual/mockup ao lado — foi removido de propósito (pedido do usuário) e
  não deve voltar sem pedido explícito. **`.hero__content` tem
  `max-width: 60rem`** (2026-08-22, antes 46rem) — aumentado
  especificamente pra dar espaço ao H1 quebrar em 2 linhas em vez de 3
  em telas de desktop comuns (pedido explícito do usuário, "versão
  completa"/desktop, não mobile). Como `.hero__paragraph` antes herdava
  a largura do pai sem `max-width` próprio, alargar `.hero__content`
  também alargaria o parágrafo (linhas mais compridas, não pedido) — por
  isso `.hero__paragraph` ganhou um `max-width: 46rem` PRÓPRIO (o valor
  antigo do container), preservando exatamente a largura/quebra de linha
  que já tinha antes; só o H1 usa a largura nova do container.
  `text-wrap: balance` faz o resto: com 60rem disponíveis, "Saiba quanto
  cada obra te dá de lucro antes de ela acabar." quebra em 2 linhas
  balanceadas ao invés de 3 em larguras de desktop comuns (1280px+); abaixo
  de ~1100px de viewport (ainda "desktop" pela convenção de breakpoint do
  projeto, mas telas de laptop menores) o `balance` do navegador volta a
  usar 3 linhas sozinho, já que 60rem não cabe mais — comportamento
  esperado do algoritmo de balanceamento, não é bug, e não foi pedido
  cobrir esse meio-termo especificamente. **Não usar esse mesmo max-width
  aumentado como referência pra mobile** — lá o H1 já tem tratamento
  próprio (ver bullet de tamanho de fonte mobile) e a largura real do
  container mobile nunca chega perto de 60rem de qualquer forma, então
  não há conflito, mas são ajustes de fases diferentes (desktop vs.
  mobile) e não devem ser confundidos.
  `.hero__heading`/`.hero__paragraph`/`.hero__microcopy` têm `text-shadow`
  escuro e sutil de propósito — o degradê da hero clareia continuamente
  (sem platô), então dependendo de onde o texto cai na altura da hero
  (varia com a proporção da viewport), o contraste do texto claro podia
  ficar fraco contra um trecho já claro do degradê (feedback direto do
  usuário, com print). A sombra garante leitura em qualquer altura, sem
  precisar reabrir o ajuste do degradê em si — **qualquer texto novo
  adicionado dentro do `.hero`, por menor/secundário que seja (ex: a
  microcopy abaixo do CTA), precisa da mesma sombra**, já esquecida uma
  vez (a microcopy nasceu sem sombra e ficou ilegível na faixa mais clara
  do degradê, corrigido na hora). `.text-accent-inverse` dentro do
  heading tem um override só ali pra ficar quase branco puro — mais claro
  que a versão padrão dessa classe (usada também no CTA, sobre fundo
  sólido, onde já tinha contraste OK); não mudar a classe global sem
  reconferir os dois contextos.
  - **Copy oficial (a partir de 2026-08-22)**: eyebrow (`.hero__eyebrow`,
    reaproveita `badge badge--inverse` — mesmo padrão de rótulo em fundo
    escuro já usado em "Sobre a Pruxor" na `.about-outcomes`), heading,
    parágrafo e CTA vieram do briefing oficial do usuário — não são mais
    texto inferido/aproximado. O antigo formulário de captura de e-mail
    (`.demo-form`, nunca teve JS de verdade por trás, só CSS decorativo)
    foi removido e substituído por um botão CTA simples
    (`.hero__cta`, `<a>` linkando direto pra
    `https://www.pruxor.com/login`) + `.hero__microcopy` (linha pequena
    abaixo do botão). Não reintroduzir o formulário sem pedido explícito.
- **Títulos longos usam `text-wrap: balance`** (`.hero__heading`,
  `.section-header__heading`/`__paragraph`, `.card__heading`,
  `.feature-set__heading`, `.full-width-feature__heading`/`__paragraph`)
  pra evitar a última linha ficando com uma palavra órfã sozinha —
  problema real já reportado pelo
  usuário comparando com o site de referência. Qualquer heading/parágrafo
  novo que possa quebrar em 2+ linhas (títulos de seção, headings de
  card, CTAs) deve seguir o mesmo padrão.
- **Navbar** (`.site-header`/`.site-header__bar`) muda de estado conforme
  a página/scroll, via `initHeaderScrollState` em `js/main.js`: marca
  `.has-hero` no `.site-header` se a página tem `.hero` (só o index) e
  alterna `.is-scrolled` a partir de 24px de scroll. No topo do index
  (`.has-hero:not(.is-scrolled)`), a barra fica bem transparente
  (`rgba(255,255,255,0.14)` + blur) pra revelar o degradê da hero por trás,
  com texto do menu em cor clara. Ao rolar (`.is-scrolled`, em qualquer
  página), ela vira uma pílula flutuante: inset, `border-radius:
  var(--radius-round)`, fundo opaco o bastante (`rgba(247,247,255,
  0.88)`) pra continuar legível sobre qualquer conteúdo por trás — por
  isso o texto volta a ser escuro nesse estado, sem depender do que está
  atrás. Descolada do topo da viewport via `padding-top: var(--space-sm)`
  em `.site-header.is-scrolled` (não `margin-top` em `.site-header__bar`)
  — `.site-header__bar` é o primeiro filho de `.site-header`, que não tem
  padding/borda própria, então uma margin-top no filho colapsa com a do
  pai (margin collapsing) e, combinada com `position: sticky`, o respiro
  simplesmente não aparece visualmente (já tentamos margin-top primeiro e
  a pílula continuou grudada no topo). Padding no `.site-header` não
  colapsa, então é a forma correta de dar esse respiro num elemento
  sticky. Sombra também reduzida bem sutil (`0 4px 12px rgba(7,6,40,
  0.05)`) — pedido explícito do usuário pra descolar do topo e
  suavizar/remover a sombra. As regras de texto claro são **restritas a `.site-header__bar`**
  (a barra desktop) e **excluem `body.nav-mobile-open`** de propósito: o
  menu mobile (`.nav__list--mobile`) é um irmão fora da barra com fundo
  sempre claro, e o overlay dele fica entre a barra e a hero quando aberto
  — se o texto claro vazasse pra lá, ficaria ilegível (claro sobre claro).
  Qualquer ajuste nessas regras deve manter esse escopo. **A logo
  (`.nav__logo`, desde 2026-08-25 uma imagem real, não mais texto+mark)
  segue o MESMO escopo/estado**, só que via `display` em vez de `color`
  — duas versões (`.nav__logo-img--white`/`--black`) ficam as duas no
  DOM, uma escondida por vez (ver bullet "Logo real" em "Design e
  experiência"), já que CSS não recolore uma imagem raster como recolore
  texto.
- Efeitos já implementados: menu mobile em overlay full-screen, accordion
  do FAQ, scroll-reveal (fade + blur) nas seções, feature showcase com
  imagem+texto presos trocando por crossfade em etapas, "Como funciona"
  com sidebar sticky ao lado de cards em fluxo normal, carrosséis em loop
  contínuo CSS puro (Depoimentos), holofote de pontinhos no hero e nos
  cards, globo 3D pontilhado girando e stats com contagem em
  `.about-outcomes` (ver bullet próprio abaixo). **Não há mais marquee de
  logos** — a seção existia entre a hero e "O problema" no `index.html` e
  foi removida por pedido explícito do usuário (não recriar sem pedido
  novo). **Não há mais announcement banner** — a faixa fixa no topo da
  página ("Novidade: recurso X...") foi removida por completo (HTML, CSS
  `.announcement-banner*`/`--banner-height`/`@keyframes pulse`, e o JS
  `initAnnouncementBanner`) por pedido explícito do usuário (2026-08-22);
  não recriar sem pedido novo.
- Todo efeito de "prender a tela" tem fallback simples e empilhado no
  mobile — nunca scroll-hijacking em telas pequenas.
- **Smooth scroll customizado (wheel + inércia) foi tentado e
  DESCARTADO** (2026-08-22, mesmo dia) — pedido, implementado, ajustado 2x
  em resposta a feedback de "travamento" (ease maior, atribuição direta de
  `scrollTop`, pausa do globo em canvas durante scroll ativo via um sinal
  `isFastScrolling`/`markScrollActivity()`), mas o usuário seguiu achando
  a experiência ruim mesmo depois dos ajustes e pediu explicitamente pra
  reverter tudo: "Não gostei, continua muito travado... deixe como estava
  antes de eu pedir a alteração". `initSmoothScroll` (função inteira),
  `isFastScrolling`/`markScrollActivity`/`fastScrollTimer` (sinal
  compartilhado) e a chamada em `DOMContentLoaded` foram REMOVIDOS por
  completo — `initAboutGlobe.loop()` voltou a chamar `draw()`
  incondicionalmente, sem checagem de scroll. **Rolagem normal (roda do
  mouse/trackpad) está de volta a 100% nativa do navegador, sem nenhuma
  interceptação de `wheel`.** `scroll-behavior: smooth` (CSS, `html`,
  linha ~92 do `style.css`) continua intacto — isso só afeta saltos
  programáticos (clique em âncora do menu), nunca foi tocado por essa
  tentativa e não tem relação com o problema reportado. **Não reintroduzir
  smooth scroll customizado sem pedido explícito novo do usuário** — a
  hipótese mais provável (não confirmada) é que o dispositivo de teste já
  tem inércia nativa boa (trackpad), e qualquer interceptação de `wheel`
  SUBSTITUI essa curva nativa por uma pior em vez de complementá-la, então
  simplesmente ajustar parâmetros (ease, throttling, pausar outras
  animações) não resolve o problema de raiz — mudar de vez a técnica
  (ex: só suavizar mouses de roda tradicionais, nunca trackpads) seria o
  próximo passo válido, mas só vale a pena investigar se o usuário pedir
  de novo.
- Variantes "inverse" (`.badge--inverse`, `.btn--outline-inverse`,
  `.text-accent-inverse`) existem porque as versões normais (com cor de
  marca) somem contra fundo escuro/de marca — use-as sempre que reusar um
  componente sobre `.full-width-feature`, `.compare` ou `.about-outcomes`
  (fundo escuro).
- Todo `.card` tem zoom + lift (`translateY(-6px) scale(1.045)`) + borda
  acendendo (cor de marca) no `:hover`, sitewide — valores reforçados
  numa 2ª rodada por pedido do usuário (a 1ª versão, só `scale(1.02)` sem
  lift, foi considerada sutil demais). **`.card--vivid`** (modificador
  usado em todas as fileiras de cards de destaque do `index.html` —
  Problema, Diferenciais comerciais, Como funciona, Depoimentos; não
  existe mais versão clara desses cards, foi padronizado) troca o cartão
  claro por um
  fundo escuro (`--color-ink`) com brilho radial na cor da marca, textura
  de grade igual à da hero (mesma identidade visual), ícone
  (`.card__icon`) e 2 sparkles decorativos (`.card__sparkle`, com leve
  animação de piscar contínua). De propósito **não** copia as cores
  arco-íris (azul/laranja/roxo/verde) do site de referência que inspirou
  o pedido original; usa só a cor de marca única do produto, pra
  "sintonizar" com o resto do site em vez de introduzir uma paleta nova.
  - **Posição do brilho e atraso do ícone via `nth-child` cíclico**
    (`:nth-child(4n+1)` etc. pro brilho, `:nth-child(5n+1)` etc. pro
    atraso do ícone) — regra genérica em `.card--vivid` direto, sem
    escopo por seção, pra qualquer fileira nova (2, 3, 4, 5, 6+ cards)
    ganhar variedade automaticamente sem precisar de regras novas.
  - **`.card__icon` anima o tempo todo** (não só no hover, pedido
    explícito do usuário): flutua (`card-icon-float`) e pulsa um brilho
    de marca ao redor (`card-icon-glow`).
  - **`.card__spotlight`**: mesmo holofote de pontinhos que segue o
    mouse da hero (mesma máscara radial + o filtro SVG `#hero-wave`
    reaproveitado, já definido uma vez no `<body>` de cada página que
    usa `.card--vivid`), só que por card em vez de por seção —
    `initCardSpotlight` em `js/main.js`, mesmo padrão de
    `initHeroSpotlight`. Pedido explícito do usuário: "no local que o
    mouse passar, deve ter o mesmo efeito da hero".
  - `.card--vivid.card--vivid:hover` (seletor duplicado, specificity
    0,3,0) — sem esse reforço, o `.card.card:hover` genérico (também
    0,3,0, reforçado antes por causa do conflito com `data-reveal`)
    vencia e os cards escuros perdiam o brilho de marca no hover,
    mostrando só a sombra cinza neutra do `.card` base (bug real, já
    aconteceu).
- **`.feature-showcase`** (seção "Soluções", `#solucoes`, "etapas presas"
  — imagem+texto crossfadando por scroll, ver `initFeatureShowcase` em
  `js/main.js`) tem, desde a copy oficial de 2026-08-22, um
  `.feature-showcase__header` (eyebrow "Soluções" + heading + parágrafo)
  **dentro** da área sticky (`.feature-showcase__stage`), preso junto com
  o resto do conteúdo — sempre visível, independente de qual módulo está
  ativo no crossfade. (1ª versão tinha um `.section-header` normal FORA
  da área sticky, igual ao header de "Problema"; o usuário pediu, com
  print, pra mover pra dentro e virar layout horizontal — ver bullet
  "Header horizontal" mais abaixo.) Virou 5 etapas
  (uma por módulo: financeiro, diário de obra, orçamento SINAPI, gestão
  de obras, estoque), cada uma só com heading (`<h3>`, não mais `<h2>` —
  agora tem um `<h2>` de verdade no `.section-header` acima) + parágrafo
  (`.feature-set__paragraph`) + 1 CTA — não mais um heading + checklist
  de 3 sub-itens por etapa (`.feature-set__list`/`__item-*`, removidos
  por ficarem sem uso). **`initFeatureShowcase` conta `.feature-showcase__block`
  no DOM automaticamente** (`steps = querySelectorAll(...).length`), então
  ir de 2 pra 5 etapas não pediu nenhuma mudança de JS — só adicionar mais
  blocos/painéis com `data-step` sequencial.
  - **Telas reais do produto (desde 2026-08-25)**: `.feature-showcase__visual-panel`
    (desktop, crossfade) e `.feature-showcase__block-visual` (mobile,
    thumbnail por módulo) mostram um `<img class="feature-showcase__visual-img">`
    de verdade agora — primeiras imagens reais do projeto (`assets/Imagens-solucoes/`,
    fora do padrão "site 100% vanilla/SVG sem imagem nenhuma" registrado em
    "Estrutura", ver bullet ali). **`object-fit: contain`** (2026-08-25,
    era `cover` — trocado por pedido explícito do usuário, `cover` estava
    cortando conteúdo real das telas) mostra a imagem inteira, com o
    `background: var(--bg-subtle)` do painel/miniatura preenchendo a
    sobra quando a proporção não bate exatamente. **Exceção: Diário de
    obra (`data-step="2"`)** — única das 5 telas com proporção bem mais
    larga (1807x870 vs. ~1672x941/1280x720 das outras) — mantém
    `object-fit: cover` via `[data-step="2"] .feature-showcase__visual-img`
    (pedido explícito do usuário: "adote o tamanho das outras" em vez de
    esticar o painel por causa de 1 imagem, aceitando corte só nela).
    Painel desktop e miniatura mobile também ganharam `border: 10px solid
    rgba(0, 0, 0, 0.1)` (preto a 10% de opacidade, bem sutil) nessa mesma
    rodada — `box-sizing: border-box` (global do projeto) garante que a
    borda entra pra dentro do `inset: 0`/`aspect-ratio` já existente em
    vez de aumentar o tamanho do painel. `overflow: hidden` no container
    garante que a imagem respeite o `border-radius`. **Correção seguinte,
    mesmo dia**: `contain` sozinho ainda sobrava "letterbox" (faixas
    vazias `--bg-subtle` em cima/embaixo, mais visível no mobile —
    usuário reportou com print do módulo "Gestão de obras") porque os
    CONTAINERS tinham tamanho inventado de antes de existir imagem real
    (`min-height: 400px` fixo no `.feature-showcase__visual-col` desktop,
    `aspect-ratio: 4/3.2` no `.feature-showcase__block-visual` mobile).
    Os dois agora usam **`aspect-ratio: 16 / 9`**, que bate quase exato
    com 4 das 5 telas reais (Financeiro 1280x720 = 16:9 exato; Orçamentos/
    Obras/Estoque 1672x941 ≈ 16:9, 0.06% de diferença) — o container
    segue a proporção real da imagem em vez de um número solto, e a
    sobra some. Diário de obra continua em `cover` dentro desse mesmo
    container 16:9 (preenche de ponta a ponta, só recorta um pouco mais
    das laterais — comportamento já aceito). **`.feature-showcase__visual-col`
    é só `aspect-ratio: 16/9`, sem nenhum `min-height`/floor** — um
    floor de altura pra essa faixa "tweener" (992-1220px, onde o texto
    de alguns módulos como Financeiro/Orçamentos quebra em mais linhas
    do que a caixa da imagem comporta) foi tentado e DESFEITO no mesmo
    dia (2026-08-25): o usuário reportou com print que isso trazia de
    volta sobra/letterbox na imagem (visível até em módulos que não
    precisavam, ex: Estoque) e deixou explícito que a caixa da imagem
    deve continuar 100% responsiva à proporção real da imagem, sem
    floor — o pedido original era só sobre o ESPAÇO ENTRE O HEADER E O
    GRID (ver bullet do header abaixo), não sobre o tamanho da imagem.
    **Não reintroduzir um floor de altura aqui sem pedido explícito
    novo.** Ver `memoria.md` (bullet "Texto do módulo sobrepondo...") pro
    histórico completo, incluindo o resíduo de overlap conhecido e aceito
    nas 2 larguras mais estreitas (992/1050px) só nos módulos Financeiro/
    Orçamentos — e o gotcha "`aspect-ratio` + `min-height` no mesmo item
    de grid" em "Cuidados importantes" (lição que continua válida mesmo
    com o revert, caso um floor seja pedido de novo no futuro). O antigo
    placeholder de texto
    (`.feature-showcase__visual-label`, "Tela do financeiro" etc.) e os
    gradientes de marca variados por `data-step` (só existiam pra
    diferenciar 5 caixas cinzas idênticas) foram removidos — não existem
    mais no CSS. **Bug real, já corrigido**: ao trocar o placeholder pela
    imagem, o `display: flex` de `.feature-showcase__block-visual` (que
    centralizava o texto) foi removido sem perceber que ele TAMBÉM era o
    único override do `display: none` da regra base — a miniatura mobile
    ficou invisível (imagem nunca carregava, já que `loading="lazy"` não
    dispara sem caixa de layout) até um `display: block` explícito ser
    adicionado de volta. Ao mexer nesse componente de novo, lembrar que a
    regra base é `display: none` por padrão (só existe visualmente no
    mobile) — qualquer edição no override do breakpoint precisa manter
    ALGUM valor de `display` que não seja `none`.
  - **Bug real evitado no fallback mobile**: a versão anterior (2 etapas)
    já tinha uma imprecisão tolerável — mobile mostrava só a imagem da
    etapa `is-active` (sempre a 1ª) acima de TODOS os blocos de texto
    empilhados. Com 5 módulos bem distintos (telas diferentes de verdade,
    não variações do mesmo tema), isso ficaria claramente errado — a
    imagem do "financeiro" continuaria fixa no topo enquanto o texto
    descia até "estoque". Corrigido escondendo
    `.feature-showcase__visual-col` inteira no mobile e dando a cada
    bloco sua PRÓPRIA miniatura (`.feature-showcase__block-visual`,
    `display:none` no desktop) — imagem e texto sempre pareados certo,
    qualquer que seja o número de módulos no futuro.
  - **CTA único**: o botão secundário "Ver todas as soluções" (linkava
    pra uma página `solucoes.html` que já não existe mais) foi removido —
    a copy oficial só deu 1 CTA ("Testar tudo isso grátis por 15 dias" →
    login).
  - **Header horizontal + sessão inteira cabendo numa viewport só**
    (pedido explícito do usuário, com print): `.feature-showcase__header`
    é `display:flex; justify-content:space-between; align-items:
    flex-end;` — heading à esquerda (`.feature-showcase__header-heading`),
    parágrafo à direita (`.feature-showcase__header-paragraph`), nos dois
    extremos, em vez de empilhados. **`align-items: flex-end`** (não
    `flex-start`) por pedido explícito seguinte, com anotação visual: o
    parágrafo alinha pela BASE com o heading, não pelo topo — os dois
    terminam na mesma linha de base em vez de começarem juntos no topo.
    `.feature-showcase__stage` virou `flex-direction: column`
    (antes era row, só tinha o grid como filho; agora tem o header +
    o grid empilhados) e perdeu o `min-height: 620px` fixo — travar uma
    altura mínima alta empurraria o conteúdo pra fora da viewport em
    telas mais baixas, o oposto do pedido. `.feature-showcase__visual-col`
    também caiu de 460px pra 400px de `min-height` pra abrir espaço pro
    header novo. Confirmado via `getBoundingClientRect` que a altura total
    do stage (~659px) cabe dentro da viewport em alturas comuns de laptop
    (768px) até desktop (1000px+), sem cortar nada. No mobile (≤991px), o
    header volta a empilhar verticalmente (`flex-direction: column`) —
    layout horizontal só faz sentido com largura de desktop.
  - **`.feature-showcase__header-paragraph` tem `max-width: 32rem`**
    (2026-08-22; antes 26rem, igual ao `__header-heading`) — pedido
    explícito do usuário, com print anotado, dizendo que o parágrafo
    "está colado na divisão do centro" e precisava "ir para o final".
    Medido via `getBoundingClientRect` em várias larguras (995px a
    1920px) ANTES do ajuste: o parágrafo já encostava exatamente na borda
    direita real do container em 100% dos casos (`justify-content:
    space-between` sempre empurra o último item flex até a borda,
    independente da largura dele) — não era um bug de posicionamento.
    O problema real era o VÃO vazio entre heading e parágrafo: com os
    dois `max-width` fixos (32rem + 26rem) e o container crescendo até
    1280px, sobrava um vão que ia de ~64px (perto do breakpoint de
    tablet, 991px) até ~350px+ (telas grandes, 1920px+) — visualmente
    dava a impressão de parágrafo "flutuando" longe da borda, mesmo
    estando tecnicamente nela. Igualar o `max-width` do parágrafo ao do
    heading (32rem) reduz esse vão em todas as larguras (ex: ~64px fixo
    até ~1280px, ~224-256px em telas maiores) sem mudar a lógica de
    `space-between` nem a borda direita real (que continua idêntica).
    **Usuário chegou a pedir uma versão com `flex: 1` no parágrafo (vão
    fixo em 64px em qualquer largura), mas pediu pra desfazer e voltar
    pra este estado (`max-width: 32rem` nos dois, `space-between`) logo
    em seguida — ver `memoria.md` pra esse histórico.** Se quiser
    reabrir essa opção depois, a mudança seria: `.feature-showcase__header-paragraph`
    sem `max-width` + `flex: 1`, `.feature-showcase__header-heading` com
    `flex: none`, `.feature-showcase__header` com
    `justify-content: flex-start`.
  - **Mais respiro entre header e grid + heading mais compacto quando
    quebra em várias linhas (2026-08-25)**: `.feature-showcase__header`
    `margin-bottom` de `--space-m` pra `--space-l`, e
    `.feature-showcase__header-heading h2` ganhou `line-height: 1.05`
    próprio (era 1.15, herdado de `.section-header__heading` — classe
    compartilhada, não mexida ali). Pedido explícito do usuário, com
    print: em larguras "tweener" (992-1220px) o heading (max-width fixo
    36rem) não cabe mais ao lado do parágrafo (max-width 32rem) no espaço
    disponível, os dois encolhem via flex-shrink, e o heading quebra em
    3-4 linhas em vez de 2 — essas 2 mudanças deixam esse estado mais
    compacto/espaçado. **Não elimina 100% um overlap residual** entre o
    parágrafo do header e o texto de módulo nas 2 larguras mais estreitas
    da faixa (992/1050px), só nos 2 módulos com texto mais longo
    (Financeiro, Orçamentos) — resíduo pequeno e conhecido, aceito de
    propósito porque a correção mais completa (dar mais altura à caixa da
    imagem nessa faixa) foi tentada e DESFEITA no mesmo dia a pedido do
    usuário (ver bullet "Telas reais do produto" acima e `memoria.md`
    pro histórico completo) — o pedido era só sobre esse espaçamento, não
    sobre o tamanho da imagem.
  - **Texto do módulo top-aligned com a imagem, não mais centralizado
    (2026-08-26)**: `.feature-showcase__block` (heading do módulo,
    "Controle financeiro por obra" etc. + parágrafo + CTA) usa
    `justify-content: flex-start` (era `center`). Pedido explícito do
    usuário, com print: o texto do módulo ficava vertical-centralizado
    na altura da imagem — bem mais baixo que `.feature-showcase__header-paragraph`
    ("Nada de sistema complicado...") ao lado, na linha de cima. Com
    `flex-start`, o heading do módulo começa no topo da própria caixa
    (mesma altura do topo da imagem), ficando visualmente no mesmo
    "nível" do parágrafo do header acima, em vez de flutuar no meio do
    card. Escopado só ao desktop — no mobile (≤991px),
    `.feature-showcase__block` vira `position: static` (fluxo normal,
    empilhado com os outros blocos via `.feature-showcase__content-col`),
    onde `justify-content` não tem efeito nenhum, então não precisou de
    ajuste separado nesse breakpoint.
  - **Correção seguinte, mesmo pedido de alinhamento (2026-08-26)**: o
    fix acima resolveu o eixo VERTICAL, mas o usuário voltou com um novo
    print (2 caixas vermelhas + linha ligando as bordas esquerdas)
    mostrando que o eixo HORIZONTAL continuava desalinhado — a borda
    esquerda de `.feature-showcase__header-paragraph` não batia com a de
    `.feature-showcase__content-col`/o heading do módulo, logo abaixo.
    Causa: `.feature-showcase__header` era `display: flex;
    justify-content: space-between`, então a borda esquerda do parágrafo
    era "largura do container − largura própria do parágrafo" (ele fica
    encostado na borda DIREITA) — um valor sem nenhuma relação com onde a
    coluna 2 do `.feature-showcase__grid` (`1fr 1fr`) começa de verdade.
    **`.feature-showcase__header` virou `display: grid;
    grid-template-columns: 1fr 1fr; align-items: end`** (era
    `flex`/`space-between`/`flex-end`) — usando o MESMO
    `grid-template-columns` do grid de baixo, as duas linhas passam a
    compartilhar a mesma matemática de coluna, e a borda esquerda do
    parágrafo (já `text-align: left`) cai exatamente em cima da borda
    esquerda do `.feature-showcase__content-col`, em qualquer largura —
    confirmado via Playwright, `leftEdgeDiff` (diferença entre as duas
    bordas) ficou em `0px` exato em 992/1050/1150/1280/1440/1920px.
    **Efeito colateral bom**: essa troca também FECHOU por completo o
    resíduo de overlap conhecido (Financeiro/Orçamentos em 992-1050px,
    documentado no bullet de espaçamento acima) — o overlap virou um
    `-48px` (gap seguro) constante em TODAS as larguras testadas, em vez
    do pequeno overlap residual que sobrava antes. **Trade-off aceito**:
    o parágrafo do header deixou de ficar encostado na borda DIREITA do
    container (comportamento de uma decisão anterior, 2026-08-22, "está
    colado na divisão do centro... precisa ir pro final") — o pedido novo
    (alinhar com a coluna do módulo abaixo) prevalece sobre o antigo
    (encostar na borda direita); os dois pedidos eram incompatíveis, e o
    usuário confirmou o novo com 2 rodadas de feedback explícito.
    `.feature-showcase__header-heading` (coluna 1) não muda de posição —
    seu `max-width: 36rem` já cabia dentro da coluna 1 tanto no `flex`
    quanto no `grid`. Mobile (≤991px): a regra `flex-direction: column`
    virou `grid-template-columns: 1fr` (só isso muda — `flex-direction`
    não faz nada num `display: grid`, ficaria sem efeito se não fosse
    atualizada junto).
- **"Como funciona"** (sessão nova, logo depois de "Soluções") passou por
  **3 layouts diferentes** antes de chegar no atual. 1ª versão: linha do
  tempo horizontal estática (`.how-it-works__timeline`, círculos com
  ícone+número ligados por traço tracejado, sem scroll travado). 2ª
  versão: heading fixo à esquerda + card `.card--vivid` CROSSFADANDO
  entre as 3 etapas à direita, mesma mecânica de "etapas presas" (scroll
  travado) de "Soluções" — **essa versão nunca bateu com o efeito que o
  usuário queria**: ele voltou com um print (zoom no GIF de referência)
  mostrando os 3 cards em fluxo normal, um visivelmente abaixo do outro
  com gap, e disse "os próximos devem vir aparecendo... como uma linha
  do tempo, não substituindo pelo próximo, deve vir de baixo para cima."
  Isso é literalmente scroll normal, não crossfade. **3ª versão (atual,
  2026-08-22)**: removido TODO mecanismo de scroll customizado —
  `.how-it-works__track`/`__stage`/`__grid`/`.is-active`/`.is-past` e a
  função `initHowItWorks()` saíram por completo (CSS/JS confirmados sem
  uso antes de apagar). Layout final é só CSS puro: `.how-it-works__intro`
  (eyebrow + heading + CTA) usa `position: sticky; top: var(--nav-height);`
  — mesmo `top` de qualquer outro elemento sticky do site
  (`.feature-showcase__stage`) — enquanto
  `.how-it-works__card-col` é um `flex-direction: column` normal com os 3
  `.card--vivid` em fluxo de documento comum (sem `position:absolute`,
  sem JS). Como a coluna dos cards é mais alta que a do heading, o
  heading fica "parado" enquanto os cards passam por trás dele — o
  padrão clássico de "sidebar sticky ao lado de lista mais alta", sem
  nenhuma linha de JS.
  - **Cada card ganhou um `.how-it-works__card-top`** (flex row: ícone à
    esquerda, tag "Etapa N" à direita, nos dois extremos) — layout do
    topo do card pedido com base no print de referência. A tag reaproveita
    `.badge.badge--inverse` (mesmo componente de rótulos sobre fundo
    escuro, ex: eyebrow do hero) com o ícone sparkle de 4 pontas já usado
    em `.card__sparkle`, como conteúdo real do rótulo em vez de decoração
    solta.
  - **Parágrafo limitado a 2 linhas** (pedido explícito): `.how-it-works__card
    .card__paragraph` usa `-webkit-line-clamp: 2` (+ `display:-webkit-box;
    -webkit-box-orient:vertical; overflow:hidden`) — escopado só a essa
    sessão, já que `.card__paragraph` é reaproveitado em várias outras
    (Problema, Diferenciais, Depoimentos) sem esse limite. Os 3 parágrafos
    da copy oficial já cabem em ~1.5-2 linhas na maioria dos casos; o mais
    longo (etapa 3) trunca com reticências no desktop — não reescrevi a
    copy pra evitar isso, já que não foi pedido encurtar texto, só limitar
    a altura visual.
  - **`initFeatureShowcase` chegou a virar uma função genérica
    (`initStickyStepShowcase`) durante a 2ª versão**, pra servir "Soluções"
    e "Como funciona" ao mesmo tempo — revertido de volta pra uma função
    específica só de "Soluções" quando "Como funciona" trocou de mecânica
    de vez (a abstração não fazia mais sentido servindo 1 usuário só).
  - **Mobile (≤991px)**: `.how-it-works__layout` vira 1 coluna,
    `.how-it-works__intro` perde o `position: sticky` (`static`) — não
    faz sentido "grudar" um heading acima de uma lista que já está
    empilhada logo abaixo dele.
  - **Cada card ganhou uma tag "Etapa N"** (pedido explícito, com base no
    GIF de referência) — reaproveita `.badge.badge--inverse` (mesmo
    componente já usado em rótulos sobre fundo escuro, ex: eyebrow do
    hero) com o mesmo ícone sparkle de 4 pontas já usado em
    `.card__sparkle`, só que como conteúdo real do rótulo em vez de
    decoração solta. Ícones dos 3 cards são os MESMOS da 1ª versão
    (pessoa, checklist, foguete/chama) — só a moldura ao redor mudou (de
    círculo claro pra `.card__icon` escuro).
  - **Mobile (≤991px)**: mesmo tratamento de "Soluções" — trilho vira
    `height: auto`, stage vira `static`, os 3 cards saem do
    `position:absolute` (viram `static`, `opacity:1` forçado) e empilham
    normalmente em coluna, sem scroll travado (`.how-it-works__grid` vira
    `grid-template-columns: 1fr`). `.how-it-works__intro` perde o
    `max-width` fixo nesse breakpoint.
- **`.compare`** (sessão "Planilha vs Pruxor", logo abaixo de "Como
  funciona") — card escuro reaproveitando a MESMA identidade visual do
  `.about-outcomes`/`.card--vivid` (`--color-ink`, textura de grade),
  nunca a cor verde do print de referência que inspirou o layout. Header
  (`.compare__header`: "Na planilha" / círculo "VS" / `.nav__logo-mark` +
  "Pruxor") e cada `.compare__row` usam o MESMO
  `grid-template-columns: 1fr 48px 1.15fr`, pra a coluna do meio (badge
  VS / traço divisor) ficar alinhada entre header e linhas.
  - **Textura diagonal só na metade "antes"** (`.compare__cell--before`):
    `repeating-linear-gradient(-45deg, ...)` bem sutil, imitando o
    hachurado do print de referência — só nessa célula, não na
    `.compare__cell--after` (que fica "limpa", com o ícone de raio na cor
    de marca — não a cor do print).
  - **Traço divisor vertical** (`.compare__divider`, 2px, cor de marca,
    `align-self: stretch`) entre as duas metades de cada linha — some no
    mobile (`display: none`), onde as duas metades empilham e ganham uma
    borda horizontal no lugar.
  - Reusa `.nav__logo-mark` (o quadradinho roxo da navbar) como "logo" da
    Pruxor no header, em vez de desenhar um ícone novo — mesmo elemento,
    mesmo estilo, menos uma coisa pra manter consistente.
  - **Labels do header centralizados** (2026-08-22, pedido explícito com
    print): `.compare__header-label` ganhou `text-align: center` e
    `.compare__header-label--brand` ganhou `justify-content: center` —
    antes "Na planilha" e "Pruxor" ficavam grudados nas bordas internas
    (perto do "VS"), já que nenhum dos dois tinha alinhamento próprio
    dentro da coluna `1fr`/`1.15fr` do grid.
  - **Brilho radial na cor de marca** (2026-08-22, "adicionar o mesmo
    gradiente dos cards"): `.compare::before` replica exatamente a
    receita do `.card--vivid::before` (`radial-gradient(circle at 20% 0%,
    color-mix(in srgb, var(--color-brand) 65%, transparent) 0%,
    transparent 62%)`, opacidade 0.85) — posição FIXA (não
    `var(--glow-x)`/`--glow-y` com ciclo por `nth-child` como em
    `.card--vivid`), já que aqui é uma instância única, não uma fileira
    de cards precisando de variedade.
  - **Holofote de pontinhos no mouse** (2026-08-22, mesmo pedido do
    brilho): reaproveita o `.card__spotlight` já existente (mesma máscara
    radial + filtro SVG `#hero-wave`) em vez de criar um elemento/efeito
    novo — `initCardSpotlight` (js/main.js) teve a busca ampliada de
    `.card--vivid` pra `.card--vivid, .compare`, e as regras de CSS que
    dependiam do ancestral ser `.card--vivid` (`z-index` do spotlight,
    ativação de opacidade via `.is-spotlight-active`) ganharam `.compare`
    como alternativa no seletor. **Não é preciso** adicionar a classe
    `.card--vivid` em si no `.compare` — só o elemento `.card__spotlight`
    + as 2 regras de CSS estendidas bastam; misturar a classe inteira
    traria de brinde o lift/scale de hover e as regras de tipografia de
    `.card__heading`/`.card__paragraph`, que não fazem sentido aqui.
  - **CTA final (`.compare__closing`) alinhado com o "VS", não com o
    centro geométrico do card** (2026-08-22, pedido explícito com print,
    "observando a linha do meio que divide a planilha com o botão") — o
    grid `1fr 48px 1.15fr` do header/linhas é assimétrico DE PROPÓSITO
    (coluna da direita um pouco maior, ver bullet acima), então o centro
    real do "VS" fica deslocado do centro geométrico do `.compare`; um
    `text-align: center` simples no botão (jeito antigo) centralizava no
    card inteiro, não no "VS" — ficava visualmente "puxado" pra direita
    em relação à linha divisória. **Fix sem calcular o deslocamento na
    mão**: `.compare__closing-grid` reusa o MESMO
    `grid-template-columns: 1fr 48px 1.15fr` + o MESMO `padding`
    horizontal do `.compare` (`var(--space-xl)`) — só assim o grid dos
    dois lugares compartilha a mesma matemática de largura. O botão
    (`.compare__closing-btn`) fica no `grid-column: 2` (a coluna de 48px
    do "VS") com `justify-self: center`: mesmo sendo bem mais largo que
    48px, o navegador centraliza o item em torno do CENTRO daquela
    coluna, deixando-o "vazar" simetricamente pros dois lados — resultado
    pixel-perfeito (`getBoundingClientRect` confirmou diferença de
    0.01px entre o centro do "VS" e o centro do botão em 1280/1440/1920px)
    sem depender de nenhum valor mágico, e continua correto se a
    proporção do grid ou o texto do botão mudar no futuro. No mobile
    (≤767px), onde o "VS"/divisão em 2 colunas somem (tudo empilha), o
    grid do closing também colapsa pra 1 coluna simples — não sobra
    nenhuma assimetria pra compensar nesse breakpoint.
- **`.value-props`** (sessão "Diferenciais" comercial, logo abaixo de
  "Planilha vs Pruxor") segue o mesmo padrão de "Problema": `.section-header`
  (com `margin-bottom` desde a implementação inicial, aplicando a lição
  registrada acima) + grid de 4 `.card--vivid` (mesmo spotlight/sparkles/
  hover/ícone animado, zero CSS de card novo). Classes do grid próprias
  (`.value-props__cards`, não `.problem__cards`) só pra não misturar
  semanticamente com a sessão "Problema", mesmo a receita de CSS sendo
  idêntica (`repeat(4, 1fr)` → 2 colunas em 991px → 1 coluna em 479px,
  igual). Ícones novos (cadeado aberto, relógio, camadas, capacete) —
  nenhum specificado no briefing, escolhidos pra combinar com cada
  headline (fidelidade, teste, planos, feito-pra-obra).
- **`.testimonials`** (sessão "Depoimentos", logo abaixo de "Diferenciais"
  comercial) é um **carrossel em loop contínuo, CSS puro, sem JS** — a
  lista de 5 depoimentos (`.testimonial-card`, variante de `.card--vivid`)
  é duplicada uma vez no HTML (2ª cópia com `aria-hidden="true"`, não deve
  ser lida 2x por leitor de tela) dentro de `.testimonials__track`, que
  anima `transform: translateX(0 → -50%)` infinitamente — 50% é
  exatamente a largura de UMA cópia (as duas são idênticas), dando loop
  sem salto perceptível sem precisar calcular nada em JS, da direita pra
  esquerda (pedido explícito). Pausa no hover (`animation-play-state:
  paused`) — texto de depoimento é mais longo que um rótulo de badge, dar
  tempo de terminar de ler é esperado, não só um extra. Respeita
  `prefers-reduced-motion` (mesma disciplina de globo/count-up/sparkles/
  ícones). Fade nas bordas via `mask-image`, dentro do `.layout-container`
  normal — **não é full-bleed** (não estica além da largura de conteúdo
  do site). `overflow-x: hidden; overflow-y: visible;` (não o shorthand
  `overflow: hidden`) + `padding: 50px 0 75px` (ver regra geral em
  "Cuidados importantes" sobre containers com `overflow: hidden` que
  contêm `.card--vivid`): sem isso, o lift/scale/brilho do hover do
  `.card--vivid` fica cortado em cima e embaixo pelo `overflow: hidden`
  do container do loop (bug real, reportado com print).
  - **Sem foto real de pessoa** — `.testimonial-card__avatar` é um
    círculo com iniciais, cor variando por `nth-child` (mistura da cor de
    marca única do produto, nunca uma paleta nova — mesma disciplina do
    `.card--vivid`), não uma foto realista. Isso não mudou mesmo depois
    das telas reais da sessão "Soluções" (ver "Estrutura" no topo deste
    arquivo) terem introduzido os primeiros assets de imagem do projeto —
    decisões independentes, uma não implica a outra. Se o usuário pedir
    fotos de verdade aqui também, é um pedido novo e explícito, não
    decidir sozinho.
  - **Nome, profissão-com-cidade dos 5 depoimentos são fictícios** — o
    briefing oficial deu o texto do depoimento e a profissão, mas marcou
    `[Nome]`/`[Cidade]` como parâmetro pra preencher; nomes/cidades
    brasileiros variados foram inventados pra esse fim, não são clientes
    reais.
  - **Bug real corrigido: no Safari, a sessão demorava muito pra aparecer
    e o loop parava no fim de um ciclo em vez de recomeçar (2026-08-26)**.
    Usuário reportou com prints: só o heading "Quem usa, aprova."
    renderizava por um bom tempo (cards invisíveis), e quando finalmente
    apareciam, o carrossel tocava até o fim e travava, sem voltar pro
    início. Causa: `.testimonials__loop` tinha `data-reveal` (fade
    genérico de scroll — ver `[data-reveal]` no fim do arquivo), que
    inclui `filter: blur(6px)` no estado escondido — só que esse MESMO
    elemento também tem `overflow-x: hidden` + `mask-image` (pro fade nas
    bordas) e é o ancestral direto de `.testimonials__track`, cujo
    `animation: infinite` nunca para. `filter` + `mask-image`/
    `overflow:hidden` + `animation: infinite` num descendente é uma
    combinação com bug documentado no WebKit/Safari (confirmado via busca
    — não é só suspeita): Safari renderiza `filter: blur()` via CPU (não
    GPU, diferente de Chrome/Firefox), e o mix com mask+overflow+infinite
    é um padrão conhecido de "o loop simplesmente não recomeça depois da
    1ª volta". **`data-reveal` foi removido de `.testimonials__loop`**
    (só do loop — `.testimonials__header`, o título "Quem usa, aprova.",
    continua com o fade normal) — o carrossel em si não usa mais efeito
    de entrada, pra nunca aplicar `filter: blur()` no elemento que tem o
    mask + a animação infinita. `.testimonials__track` também ganhou
    `transform: translateZ(0)` — promove a faixa pra sua própria camada
    de composição desde o início, mitigação recomendada pra esse padrão
    de bug (Safari costuma promover/rebaixar camadas dinamicamente em
    torno de filter/mask, e é nessa troca que o loop trava). **Não
    reproduzido 1:1** (sem Mac disponível) — validado via Playwright
    WebKit (mesmo engine do Safari, empacotado sem as camadas
    proprietárias da Apple): antes do fix, `.testimonials__loop` ficava
    com `opacity:0` até a 1ª sweep de scroll disparar o reveal (mesmo
    delay de qualquer `[data-reveal]`); depois do fix, `opacity` é `1`
    desde o primeiro frame, sem transição nenhuma pra esperar. O loop em
    si (`getAnimations()`, `currentTime`, wrap de -50% pra 0%) já rodava
    corretamente nesse engine WebKit específico antes E depois do fix —
    não deu pra reproduzir o "trava no fim" diretamente aqui, então a
    correção se apoia no bug documentado (filter+mask+overflow+infinite)
    em vez de numa reprodução local exata.
- **`.about-outcomes`** (seção "Sobre", `#sobre` em `index.html` — **logo
  abaixo da hero, primeira seção da página** desde a copy oficial de
  2026-08-22; antes ficava entre Soluções e Integrações) é um card escuro
  (`--color-ink`, mesma textura de grade da hero/`.card--vivid` — reusa a
  identidade visual existente em vez de inventar paleta nova) com badge +
  heading + parágrafo + CTA + stats à esquerda e um globo 3D pontilhado
  grande sangrando pela direita, layout baseado num print de referência
  (estilo Clarasight). Substituiu o antigo `.why-different`/`.stat-panel`
  (fundo claro, grid 2x2) por completo. **Funciona como prova social**
  (pedido explícito do usuário): 3 stats reais da copy oficial (não mais
  4) — "2.000+ Obras acompanhadas", "500+ Construtores e empresas
  atendidos", "95% Satisfação dos clientes". CTA (`.about-outcomes__cta`)
  é `<a href="https://www.pruxor.com/login">Começar meu teste grátis</a>`
  — mesmo padrão/link do CTA da hero.
  - **Globo pontilhado**: `initAboutGlobe` em `js/main.js`, Canvas 2D puro
    (projeto é vanilla, sem three.js/globe.gl) — continentes como polígonos
    simplificados de lat/lon, pontos via amostragem "Fibonacci sphere"
    (distribuição quase-uniforme numa esfera), cada um testado contra os
    polígonos (ray-casting) pra diferenciar terra/oceano. Projeção
    ortográfica (só desenha o hemisfério voltado pra "câmera"), gira
    sozinho via `requestAnimationFrame` incrementando a longitude a cada
    frame. `IntersectionObserver` pausa a animação quando o canvas sai da
    tela; `prefers-reduced-motion` trava a rotação e desenha só um frame
    estático. Tem um anel/rim sutil (`stroke`) em volta — sem ele os
    pontos pareciam um blob solto, sem contorno de esfera.
  - **Quantidade de pontos é adaptativa ao tamanho renderizado, não uma
    constante fixa** — `generatePoints(count)` é chamada dentro de
    `resize()`, com `count` calculado a partir da área do círculo
    (`radius²`) contra uma densidade-base (`MAX_POINT_COUNT = 18000` perto
    do raio do globo grande de desktop, `BASE_RADIUS ≈ 480px`; regenera só
    quando o alvo muda mais de 10% do atual). **Não trocar por uma
    constante fixa de novo**: já aconteceu (pedido do usuário de aumentar
    "muito" a quantidade de pontos, testado primeiro com uma constante
    única de 18000) — no globo grande de desktop ficava ótimo, mas no
    fallback empilhado (`≤991px`, ~320px de diâmetro) e no mobile os
    MESMOS 18000 pontos ficavam tão apertados que se fundiam numa mancha
    branca sólida, destruindo o estilo pontilhado nesses tamanhos (bug
    real, achado ao revisar o screenshot do fallback antes de dar por
    concluído). A versão adaptativa resolve isso mantendo a MESMA
    densidade (pontos por px²) em qualquer tamanho de globo.
  - **Opacidade dos pontos**: terra em `0.6 * (0.55+0.45*depth)` no ponto
    mais próximo da "câmera", oceano em `0.28 * ...` — subiu numa rodada
    ("aumente a opacidade") e desceu de volta na rodada seguinte
    ("diminua a opacidade") pra um meio-termo. Aro/`stroke` do contorno em
    `rgba(247,247,255,0.16)`. O globo existe só na sessão `.about-outcomes`
    do `index.html` — não há mais nenhuma outra página no site.
  - **`.about-outcomes__globe` mostra só 1/4 do globo em desktop**, ancorado
    no canto inferior-direito do card: `right: 0; bottom: 0; transform:
    translate(50%, 50%)` (não `top:50%`/`translateY` como numa 1ª versão
    que mostrava o círculo quase inteiro). Como `%` em `transform` é
    relativo ao próprio tamanho do elemento (não do container), esse combo
    centra o globo exatamente no canto **independente da proporção
    largura/altura do card** — usar `right`/`bottom` em % puros pra isso
    não funcionaria (são relativos a dimensões diferentes do container:
    largura vs. altura). Com o centro no canto e `overflow: hidden` no
    `.about-outcomes` recortando, sobra matematicamente 1/4 do círculo.
    Pedido explícito do usuário, comparando com print de referência (globo
    bem maior que a 1ª versão, só um quadrante visível). **Só em
    desktop/tablet largo** — no fallback empilhado (≤991px) o globo volta
    a ser um círculo inteiro centralizado abaixo do texto (`transform:
    none`), decisão própria de não estender o corte de 1/4 pro estado
    empilhado, onde não há canto de card pra "sangrar".
  - **Stats com contagem**: `initCountUp` em `js/main.js`,
    `IntersectionObserver` (dispara uma vez, threshold 0.4) +
    `requestAnimationFrame` com easing ease-out cúbico (1.6s). Usa
    `toLocaleString('pt-BR')` pra formatar milhar com ponto ("1.000+")
    automaticamente. `prefers-reduced-motion` pula direto pro valor final.
  - **Breakpoint "tweener" em 1240px** (`.about-outcomes__content` reduz
    `max-width`, `.about-outcomes__globe` reduz `width`) — sem ele o
    heading (que só quebra linha via `text-wrap: balance` quando precisa)
    cabe numa linha só bem perto da largura do globo e passa por cima
    dele em larguras entre o desktop cheio e o empilhamento de 991px.
  - **`.about-outcomes__stats` empilha em coluna única abaixo de 767px**
    (`flex-direction: column`) — a regra base é `nowrap` em linha (stats
    lado a lado, como no print), mas nowrap sozinho estoura a largura da
    tela inteira em qualquer viewport mobile (confirmado: overflow
    horizontal na página toda entre 320px e ~560px, bug real já achado e
    corrigido). Era um grid 2x2 (`flex: 0 0 calc(50%...)`) quando a seção
    tinha 4 stats; virou coluna única quando a copy oficial reduziu pra 3
    (2x2 deixaria o 3º item sozinho, desalinhado) — a coluna funciona pra
    qualquer quantidade de stats, então é a opção mais robusta a mudanças
    futuras de copy. **Não voltar pra nowrap sem testar a faixa mobile
    inteira de novo** (não só o breakpoint onde a mudança foi pensada).
- **`.pricing-card`/`.pricing-grid`/`.billing-toggle`** compõem a sessão
  "Planos" do `index.html` (copy oficial, 2026-08-22 — 1 grupo, 4 planos
  reais: Starter/Duo/Pro/Elite, Pro com `.pricing-card--featured` + badge
  "Mais popular"). O toggle mensal/anual é FUNCIONAL —
  `initBillingToggle` (js/main.js) troca o texto de qualquer elemento com
  `data-monthly`/`data-annual` e alterna `.is-annual` nos `.pricing-card`
  (mostra `.pricing-card__installment`/`.pricing-card__savings`,
  escondidos por padrão).
  - `.pricing-card` é `display: flex; flex-direction: column;` — **margens
    entre seus filhos diretos NÃO colapsam** (regra do Flexbox, diferente
    de siblings de bloco normal) — ao adicionar espaçamento novo entre
    filhos desse componente, ter isso em mente.
  - **`.pricing-card--featured .pricing-card__name` e
    `.pricing-card--featured .pricing-card__amount` usam
    `color: var(--color-brand)`** (pedido explícito do usuário, com print
    anotado: "a cor do título" e "o preço" deveriam usar a mesma cor do
    badge "Mais popular") — **escopado só ao card `--featured` (Pro)**,
    não à regra base. 1ª tentativa aplicou na regra base de
    `.pricing-card__name`/`__amount` (afetando os 4 cards); usuário
    corrigiu explicitamente: "é apenas para... o Pruxor Pro", então virou
    seletor composto (`.pricing-card--featured .pricing-card__name`), do
    jeito que `.pricing-card--featured`/`.pricing-card__badge` já fazem
    pro border/box-shadow/badge — mesma lógica de "só o destacado ganha
    tratamento especial", agora estendida à cor de nome+preço também.
    `.pricing-card__period` ("/mês") não muda.
- **FAQ (`#faq`) e CTA final reescritos com copy oficial, e o CTA final
  TROCOU DE COMPONENTE** (2026-08-22). FAQ: as 6 perguntas antigas
  (genéricas, "A Pruxor é só um CRM?" etc.) foram substituídas por 9
  perguntas reais do briefing (cartão de crédito no teste, o que acontece
  no fim dos 15 dias, fidelidade/cancelamento, limite de obras por plano,
  precisa ser engenheiro, funciona no celular, planos baratos têm menos
  função, sair da planilha aos poucos, dificuldade de uso) — mesma
  estrutura `.faq-item`/accordion, só o conteúdo mudou, sem CSS/JS novo.
  - **CTA final não é mais `.call-to-action` (fundo cor de marca) — virou
    a antiga sessão `.full-width-feature` (fundo `--color-ink`, "Feita
    para quem precisa tocar operação de verdade.") REPOSICIONADA pra
    depois do FAQ e com a copy trocada** pra "Sua próxima obra pode ser a
    primeira com controle total." + parágrafo + CTA. Pedido explícito do
    usuário, indicando a sessão pelo print (fundo escuro, card
    arredondado). A antiga seção `.call-to-action` do `index.html`
    (heading "Sua empresa não precisa continuar operando no escuro.", 2
    botões: "Experimente gratuitamente" + "Ver planos") foi REMOVIDA por
    completo — substituída pela `.full-width-feature` reposicionada. **A
    classe `.call-to-action` foi removida do CSS em 2026-08-22** (junto
    com a exclusão de `sobre.html`/`solucoes.html`/`planos.html`, as
    últimas páginas que ainda a usavam) — não existe mais no projeto.
  - **Estrutura dentro de `.full-width-feature`**: heading + parágrafo
    seguidos de `.full-width-feature__cta-group` (wrapper com `gap`
    menor que o `gap` do container pai — CTA primário
    `.btn.btn--on-dark` + `.full-width-feature__microcopy` logo abaixo,
    mesmo padrão do par botão+microcopy do hero) e, fora desse grupo,
    `.full-width-feature__secondary-cta` (link sublinhado, "Ainda com
    dúvida? Fala com a gente no WhatsApp"). Número/mensagem chegaram no
    "MAPA DE LINKS" (2026-08-22):
    `href="https://wa.me/5521966616597?text=..."` com a mensagem
    pré-preenchida "Olá, vim do site e quero saber mais sobre o Sistema
    Pruxor." (texto codificado via `encodeURIComponent`, não digitado à
    mão) + `target="_blank" rel="noopener"` (mesmo padrão do link do
    Instagram no rodapé, por abrir em outra aba/app).
  - **Fundo com brilho radial + textura de grade, igual ao `.card--vivid`**
    (2026-08-22, "adicionar o mesmo plano de fundo do card") — antes o
    CTA final tinha só a cor sólida `--bg-inverse` (= `--color-ink`), sem
    nenhuma textura/brilho. Adicionado `::before` (brilho radial na cor
    de marca) + `::after` (textura de grade), MESMA receita e mesma
    posição fixa (`20% 0%`) já usada em `.compare` — consistência entre
    as sessões escuras do site. Heading/parágrafo/cta-group/secondary-cta
    ganharam `position: relative; z-index: 1;` pra ficarem acima dos
    novos pseudo-elementos. (Existiu uma variante `.full-width-feature--audience`,
    layout 2 colunas com lista de badges em loop, usada só em
    `solucoes.html` — removida junto com a página em 2026-08-22, ver
    `memoria.md`. A versão base descrita aqui é a única que resta.)
- **Rodapé (`.site-footer`) ganhou copy oficial: contato e links legais,
  ícones sociais antigos removidos** (2026-08-22). Logo+tagline e
  nav-links (`Sobre`/`Soluções`/`Planos`/`FAQ`) não mudaram — já batiam
  com o briefing. Duas coisas novas:
  - **`.footer__contact-links`** (nova coluna em `.footer__top`, ao lado
    de brand e nav-links): e-mail (`mailto:contato@pruxor.com.br`) e
    Instagram (`https://www.instagram.com/sistemapruxor`, `target="_blank"`)
    separados por `.footer__divider` (traço vertical de 1px, mesma receita
    de divisor visual do `.compare__divider` — nunca um caractere "|"
    literal, para seguir o padrão do resto do site). No mobile
    (≤767px), a lista empilha em coluna e o divisor some
    (`display:none`) — sem isso, o divisor ficava órfão sozinho no fim da
    1ª linha quando os dois links quebravam (bug real, achado no
    screenshot antes de finalizar; mesma lição do `.compare__divider`
    que já some no mobile por motivo parecido).
  - **`.footer__legal-links`** (substituiu `.footer__social` — os ícones
    de LinkedIn/X eram placeholder/inferidos, sem equivalente na copy
    oficial): "Política de Privacidade" e "Termos de Uso", mesmo
    `.footer__divider` entre eles, dentro de `.footer__bottom` ao lado do
    copyright (drop-in no lugar de `.footer__social`, mesmo
    `justify-content: space-between`, sem precisar reestruturar o
    container). **Ambos os links usam `href="#"` — não existem páginas de
    política de privacidade/termos no site** e criar essas páginas não
    foi pedido explicitamente (regra do projeto: não criar rotas novas
    sem pedido explícito). Ficam como placeholder até o usuário fornecer
    o conteúdo ou pedir a criação das páginas.
  - **`.footer__social` foi removida do CSS e do HTML nas 4 páginas** —
    confirmado sem uso via grep antes de apagar.
  - **Sem WhatsApp no rodapé, de propósito** (pedido explícito do
    usuário). O WhatsApp aparecia em 3 pontos do site: o CTA final
    (`.full-width-feature__secondary-cta`, ver bullet acima) e os 2
    botões "Solicitar demonstração" do nav (desktop + mobile,
    `.nav__actions`/`.nav__actions--mobile`) — adicionado depois, 2026-08-22,
    pedido explícito ("deve ter o mesmo link do botão falar no
    whatsapp"); antes eram `href="#"`. **Os 2 botões "Solicitar
    demonstração" do nav foram REMOVIDOS por completo em 2026-08-26**
    (pedido explícito do usuário) — não existem mais no `index.html`;
    `.nav__actions`/`.nav__actions--mobile` agora têm só o botão
    "Entrar". O WhatsApp continua existindo só no CTA final
    (`.full-width-feature__secondary-cta`), único ponto restante.
- **"MAPA DE LINKS" do usuário (2026-08-22)** — resolveu o WhatsApp do CTA
  final (ver bullet acima). Também aproveitei pra apontar os 2 botões
  "Entrar" (nav desktop + mobile) pra `https://www.pruxor.com/login` —
  não estava no mapa explicitamente, mas é literalmente a mesma URL de
  login/teste já usada em todo CTA do site, então tratado como o mesmo
  tipo de correção. Na época, os links de checkout Greenn cobriam só
  Starter/Pro/Elite mensais, e o usuário pediu explicitamente pra NÃO
  aplicar ainda aos cards (esperando o conjunto ficar completo). **Esse
  conjunto completo chegou e foi aplicado em 2026-08-26** — ver bullet
  "Conjunto completo de links Greenn aplicado aos cards" logo abaixo.
- **Conjunto completo de links Greenn aplicado aos 4 cards de plano,
  mensal E anual (2026-08-26)**. Usuário trouxe a lista completa (8
  links: Starter/Light/Pro/Elite × mensal/anual) e pediu pra aplicar cada
  um ao botão correspondente — diferente do "MAPA DE LINKS" anterior
  (só 3 links mensais, guardados sem aplicar por decisão explícita), essa
  rodada já veio como pedido direto de aplicação, sem precisar perguntar
  de novo.
  - **Botão do CTA agora troca de link junto com o toggle mensal/anual**
    — antes só o preço (`.pricing-card__amount`/`__period`) trocava via
    `data-monthly`/`data-annual` (texto); o `href` do botão era sempre o
    mesmo. Com 2 links por plano agora existindo de verdade, o botão
    precisava trocar junto. `initBillingToggle` (`js/main.js`) ganhou um
    2º loop, paralelo ao de texto, procurando `[data-monthly-href]` e
    setando `.href` (não `.textContent`) com `dataset.monthlyHref`/
    `dataset.annualHref` — atributos NOVOS, escolhidos de propósito pra
    não colidir com `data-monthly`/`data-annual` já usados nos preços
    (reusar o mesmo atributo faria o loop de texto tentar escrever a URL
    como `textContent` do link, quebrando o rótulo "Começar teste
    grátis"). Cada `<a class="pricing-card__cta">` ganhou
    `data-monthly-href`/`data-annual-href` com os 2 links do plano, e o
    `href` inicial (antes do 1º toggle) é o link mensal — mesmo padrão do
    preço, que também mostra o valor mensal por padrão.
  - **Pruxor Duo renomeado pra Pruxor Light** (só o nome — descrição,
    features e posição no grid continuam os mesmos).
  - **Preços atualizados** (valores exatos do usuário, não recalculados
    por mim): Light mensal 149→147; Pro mensal 297→247. Starter
    (mensal 97, anual 947) e o anual de Light (1.447) já batiam com o
    que já estava no site — o usuário só confirmou, não mudou. Elite não
    mudou (mensal 697, anual 7.247) — não foi mencionado.
  - **`ou 3x de R$X no cartão` do Light atualizado** (era um texto
    genérico "ou 3x no cartão (valor conforme checkout)", placeholder de
    quando não havia valor real) pra `ou 3x de R$515,40 no cartão`, valor
    real passado pelo usuário.
  - **Pendência real, não resolvida por mim de propósito**: com Light
    mensal caindo pra R$147 e Pro mensal pra R$247, os textos estáticos
    `.pricing-card__savings` ("Economize R$341 no ano" no Light,
    "Economize R$617 no ano" no Pro) e o `.pricing-card__installment` do
    Pro ("ou 3x de R$1.049,68 no cartão") ficaram calculados em cima dos
    preços mensais ANTIGOS (149 e 297) — não recalculei esses valores
    porque não tenho a fórmula real usada pelo checkout Greenn pra juros
    de parcelamento (confirmado comparando Starter: anual R$947 ÷ 3 =
    R$315,67, mas o valor real de parcela é R$337,31 — tem uma taxa
    embutida que não é só dividir por 3). Flaguei isso pro usuário no
    fim da resposta em vez de inventar um valor — se ele quiser esses
    textos exatos, precisa vir do checkout/gateway, não de mim.
  - **Elite usa o MESMO link pra mensal e anual** (`fj9rqsj`) — foi
    exatamente o que o usuário mandou (as 2 linhas da lista tinham a
    mesma URL), diferente dos outros 3 planos (cada um com 2 links
    distintos). Aplicado como veio, mas sinalizado como algo a
    reconfirmar — pode ser proposital (checkout do Elite decide o ciclo
    dentro da própria página da Greenn) ou copy-paste. Não presumir que é
    erro e "consertar" sozinho sem o usuário confirmar.
  - Validado via Playwright: leitura de nome/preço/parcelamento/economia/
    `href` dos 4 cards em mensal e depois em anual (clicando no toggle de
    verdade, não simulando classe via JS) — todos os 8 links batem
    exatamente com a lista do usuário, preços/textos batem com o
    pedido, e voltar pra mensal restaura tudo certinho. Zero erro de
    console.
- **Rodada de ajustes de copy/link, mesmo dia (2026-08-26)**:
  - **Link anual do Elite corrigido**: era o mesmo link do mensal
    (`fj9rqsj`, sinalizado como pendência no bullet acima) — usuário
    confirmou (via pergunta direta, já que "pruxor anual" sozinho era
    ambíguo entre os 4 planos) que o `data-annual-href` do Elite devia
    virar `https://payfast.greenn.com.br/864jakw`. Resolve a
    inconsistência antiga.
  - **Botão dos 4 cards de plano**: "Começar teste grátis" →
    **"Assinar agora"** (pedido explícito, reflete que o clique já leva
    direto ao checkout Greenn, não a um teste).
  - **Botão "Solicitar demonstração" REMOVIDO do nav** (desktop
    `.nav__actions` + mobile `.nav__actions--mobile`) — pedido explícito
    do usuário. Sobrou só "Entrar" nos dois; sem gap/espaço vazio onde o
    botão estava (confirmado via screenshot, `.nav__actions` é flex e se
    ajusta sozinho a 1 filho).
  - **Copy de CTA padronizada pra "Criar minha conta grátis"** em 4
    pontos, pedido explícito por sessão: hero (`.hero__cta`, era
    "Começar meu teste grátis"), "Sobre a Pruxor"
    (`.about-outcomes__cta`, mesmo texto antigo), as 5 CTAs de módulo em
    "Soluções" (`.feature-showcase__block .btn--primary`, era "Testar
    tudo isso grátis por 15 dias") e o CTA final em `.full-width-feature`
    (era "Começar meu teste grátis agora"). **`.how-it-works__cta`
    ("Como funciona") ficou de fora dessa rodada** (tinha o mesmo texto
    antigo, "Testar tudo isso grátis por 15 dias", e por isso um
    `replace_all` inicial pegou ele também por engano; revertido de
    volta na hora, já que essa sessão não estava na lista pedida na
    época) — **mas o usuário pediu em seguida, mesmo dia, e o texto foi
    trocado também**. Com isso, TODOS os CTAs "teste grátis"/"demonstração"
    do site (hero, Sobre, os 5 de Soluções, Como funciona, CTA final)
    usam o mesmo texto "Criar minha conta grátis" — nenhum ficou de
    fora.

## Comandos

Não há build nem instalação. Servir como estático:

```
npx serve .
# ou
python -m http.server 8000
```

Abrir `index.html` direto (`file://`) também funciona, exceto pelo
carregamento das fontes via CDN, que precisa de rede.

Não há suíte de testes automatizados no repositório.

## Cuidados importantes

- Não reintroduzir conteúdo, imagens ou ícones do site de referência
  original — direitos autorais de terceiros.
- Não trocar a fonte de volta para uma paga sem confirmar licença.
- Ao usar `position: sticky` ou `position: fixed`, checar se algum
  ancestral tem `backdrop-filter`, `filter` ou `transform` — isso quebra
  sticky/fixed silenciosamente (já aconteceu com o header e o menu
  mobile).
- Elementos com `z-index` só competem entre si se também tiverem
  `position` diferente de `static` — um irmão com `position:static` (sem
  z-index efetivo) pode ficar coberto por outro com z-index explícito
  mesmo estando "por cima" na hierarquia visual esperada (já aconteceu:
  o botão de hambúrguer ficava atrás do overlay do menu mobile).
- O `scroll-behavior: smooth` global pode atrapalhar leituras de posição
  logo após um `scrollIntoView`/clique em âncora — aguardar o
  assentamento antes de medir.
- **Todo `.section-header` (ou variante) novo precisa de uma regra própria
  de `margin-bottom` explícita** (ex: `.problem__header`,
  `.feature-showcase__header`, `.how-it-works__header`,
  `.compare__intro`) — `h2`/`p` têm `margin: 0` por reset global (linha
  ~107 do `style.css`) e `.section-header` em si não define
  `margin-bottom` nenhum, então sem essa regra o header encosta direto no
  conteúdo seguinte (0px de gap real, não só "parece pouco"). Já aconteceu
  DUAS vezes na copy oficial (sessões "Como funciona" e "Planilha vs
  Pruxor") — ao criar qualquer sessão nova com `.section-header`, adicionar
  o `margin-bottom: var(--space-l)` (ou similar) desde já, não só depois
  que o usuário reportar.
- Medir espaçamento entre elementos com `getBoundingClientRect()` sem
  rolar até eles primeiro pode dar leitura errada por outro motivo
  também: um elemento `[data-reveal]` ainda não revelado carrega um
  `transform` do estado "escondido" (que `getBoundingClientRect` inclui
  no cálculo), enquanto o CONTAINER pai (se não tiver `data-reveal`
  próprio) não tem esse transform — comparar os dois dá números que não
  batem entre si, sugerindo um espaçamento/overlap que não existe de
  verdade (já aconteceu ajustando o espaçamento de "Como funciona").
  Sempre `scrollIntoViewIfNeeded()` + esperar a transição assentar antes
  de medir qualquer coisa relacionada a `data-reveal`.
- Espaçamento vertical em cima do primeiro filho de um elemento
  `position: sticky`/`fixed` deve usar `padding` no ancestral posicionado,
  nunca `margin-top` no filho — o filho não tem irmão/borda/padding antes
  dele, então a margin-top colapsa com a do pai (margin collapsing) e,
  combinada com sticky/fixed, o respiro simplesmente não aparece
  visualmente (já aconteceu com a pílula da navbar ao rolar).
- `overflow-x`/`overflow-y` diferentes um do outro (ex: `overflow-x:
  hidden; overflow-y: visible;`) **não deixam o eixo `visible` de fato
  visible** — pela spec do CSS Overflow Module, o navegador força esse
  eixo pro valor usado `auto`, que ainda recorta (só evita a barra de
  scroll quando não precisa). Pra confirmar o valor real, checar
  `getComputedStyle(el).overflowY` (não o que foi escrito no CSS). Já
  aconteceu: zoom/lift e sombra do hover de `.card--vivid` dentro de um
  container com scroll horizontal ficavam cortados mesmo com
  `overflow-y: visible` escrito — a correção de verdade foi aumentar o
  `padding` do elemento, não o valor de overflow em si. **Qualquer
  container novo com `overflow: hidden` que contenha um `.card--vivid`
  (ou qualquer elemento com hover de lift/scale/glow) precisa desse mesmo
  tratamento desde a implementação inicial** — já aconteceu mais de uma
  vez (ver `.testimonials__loop` em "Design e experiência"): usar
  `overflow-x: hidden; overflow-y: visible;` (nunca o shorthand
  `overflow: hidden` quando só o eixo horizontal precisa recortar de
  verdade) + padding vertical generoso
  (~50px/75px) pra dar espaço ao hover, não só depois que o usuário
  reportar o corte.
- **Padding no container NÃO cria folga pra filhos `position: absolute`
  com `inset: 0`** — pela spec, o "containing block" de um elemento
  absoluto é a PADDING BOX do ancestro posicionado, e essa padding box já
  INCLUI o padding em si; `inset: 0` alinha com a borda externa dessa
  caixa (que inclui o padding), não com a borda do conteúdo. Ou seja,
  aumentar o `padding` do container não sobra espaço nenhum pro filho
  `inset: 0` — ele continua preenchendo exatamente a mesma área de antes.
  Confirmado via `getBoundingClientRect` na sessão "Como funciona"
  (`.how-it-works__card-col`/`.how-it-works__card`): padding de 32px/28px
  no container não mudou nem 1px o retângulo do card, hover incluso. A
  correção certa é dar `inset` com valores >0 DIRETO no próprio filho
  absoluto (ex: `inset: 32px 28px` em vez de `inset: 0`) — isso desloca
  as bordas do elemento posicionado de verdade. Vale pra qualquer combo
  futuro de `overflow: hidden` no container + filho `position: absolute;
  inset: 0` que precise de folga pro hover (lift/scale/glow) não ficar
  cortado.
- `flex-wrap: nowrap` (ou qualquer largura fixa) num componente pensado
  pra uma faixa específica de tela pode estourar a largura da página
  **inteira** em telas menores, não só cortar visualmente dentro do
  próprio componente — checar `document.body.scrollWidth >
  window.innerWidth` (não só olhar o componente isolado) em toda a faixa
  mobile antes de considerar um layout novo concluído, não só no
  breakpoint onde a mudança foi pensada (já aconteceu com
  `.about-outcomes__stats`, ver "Design e experiência").
- **`window.scrollTo()`/`.scroll()`/`.scrollBy()`/`.scrollIntoView()`
  respeitam `scroll-behavior: smooth` do CSS (a menos que passem
  `behavior: 'auto'` explícito no objeto de opções); atribuição direta a
  `elemento.scrollTop`/`.scrollLeft` NUNCA respeita, é sempre
  instantânea.** Chamar qualquer um desses MÉTODOS dentro de um loop de
  animação (JS) sem se dar conta disso é perigoso: cada chamada do loop
  (rodando a ~60fps) dispara sua própria animação nativa do navegador,
  que nunca termina antes da próxima chamada chegar — resultado
  imprevisível (aconteceu numa tentativa de smooth scroll customizado,
  implementada e depois totalmente revertida a pedido do usuário — ver
  "Design e experiência" e `memoria.md`, mas a lição em si continua
  válida pra qualquer scroll animado via JS no futuro). Se algum dia for
  preciso animar scroll manualmente via JS de novo, preferir atribuição
  direta (`document.scrollingElement.scrollTop = y`) em vez de qualquer
  um dos métodos — mais simples e nunca precisa lembrar de passar
  `behavior: 'auto'`.
- **Nota de metodologia de teste (Playwright + Chromium headless neste
  ambiente)**: `window.scrollY` não reflete de forma confiável chamadas a
  `window.scrollTo()` disparadas via `page.evaluate()` isoladas (mesmo
  com `behavior: 'auto'`) — confirmado em página totalmente vanilla, sem
  nenhum JS do projeto envolvido. Interações mais "reais" (`page.mouse.wheel()`,
  `page.keyboard.press()`, cliques de verdade) refletem `scrollY`
  corretamente na maioria dos casos, mas podem exigir mais
  iterações/tempo de espera do que o intuitivo. Ao testar qualquer coisa
  ligada a scroll: preferir `page.mouse.wheel()`/`scrollIntoViewIfNeeded()`
  a `window.scrollTo()`/`dispatchEvent(new WheelEvent(...))` via
  `evaluate()`, e verificar efeitos colaterais observáveis (classe
  `.is-active`, `getComputedStyle().transform`, contagem de
  `data-reveal.is-visible`) em vez de confiar só no valor bruto de
  `window.scrollY` de uma única leitura.
- **`aspect-ratio` + `min-height` no MESMO item de CSS Grid dentro de
  colunas `1fr` é uma combinação arriscada** (bug real, 2026-08-25, ver
  `.feature-showcase__visual-col` em `memoria.md` pro caso completo): um
  item de grid com `aspect-ratio` reporta um tamanho PREFERIDO de largura
  calculado a partir da própria altura mínima pro algoritmo de
  distribuição das colunas `1fr` — se essa largura implícita (altura ×
  aspect-ratio) for maior que a coluna disponível, ela "vaza" pra fora da
  própria célula do grid (o item renderiza mais largo que sua coluna,
  sobrepondo o vizinho, que fica espremido a 0px). `min-width: 0` no item
  e `grid-template-columns: minmax(0, 1fr) ...` (em vez de `1fr` puro)
  ajudam mas não resolvem sozinhos. Se precisar de um floor de altura
  (`min-height`) que às vezes precisa vencer o `aspect-ratio` num item de
  grid, **resetar `aspect-ratio: auto` no mesmo breakpoint** (não
  empilhar os dois competindo) — ou aplicar o floor em outro nível
  (`grid-auto-rows` no grid, não no item). **A lição fica, mas o próprio
  `min-height` que disparou o bug foi revertido no mesmo dia** — pedido
  explícito do usuário pra `.feature-showcase__visual-col` continuar só
  `aspect-ratio: 16/9`, sem floor nenhum (ver bullet "Telas reais do
  produto" acima).

## Memória

O arquivo `memoria.md` guarda o histórico de decisões e o estado atual do
projeto. **Consulte `memoria.md` antes de iniciar qualquer trabalho
relevante em uma nova sessão.**
