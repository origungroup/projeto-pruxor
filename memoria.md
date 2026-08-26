# Memória do Projeto

## Objetivo

Landing page de página única para a **Pruxor**, sistema de gestão e
acompanhamento de obras e projetos (engenharia, arquitetura, construção).
Objetivo da página: converter visitantes em demonstração/teste gratuito.

## Estado atual

**Fase "copy oficial" (iniciada 2026-08-22): concluída quanto à
reconstrução seção a seção; site agora é página única de fato.** O
usuário recebeu a copy oficial da Pruxor e reconstruiu o site com ela,
seção a seção. Direção confirmada desde o início: o site vira **landing
page única, só `index.html`**. `sobre.html`, `solucoes.html` e
`planos.html` ficaram no disco por um tempo sem uso real (pedido do
usuário, na época, foi "não apague as outras páginas agora"), mas **foram
apagadas em 2026-08-22**, no mesmo dia em que o usuário pediu a remoção
do announcement banner. Ver "Limpeza pós-remoção das páginas extras" (no
fim de "Decisões") para o que foi feito nessa apagada — inclui bastante
CSS/JS que só essas 3 páginas usavam. Já aplicado ao longo da fase (ver
"Decisões" para o detalhe de cada uma, em ordem): SEO, Hero, Sobre (prova
social), Problema, Soluções (5 módulos), Como funciona, Planilha vs
Pruxor, Diferenciais (comercial), Depoimentos, Planos, remoção das 3
seções legadas sem copy oficial (Integrações, Segurança, Diferenciais
antiga), remoção do announcement banner, e exclusão das 3 páginas extras
+ limpeza do código órfão. **Ver "Contexto para a próxima sessão" (mais
abaixo) para o resumo mais atualizado do estado do projeto.**

Antes dessa fase, o site era: conteúdo real da Pruxor na maior parte das seções e
dois efeitos de scroll mais elaborados já implementados e testados
(feature showcase sticky e `.pinned-cards` com scroll horizontal — esse
último generalizado e reusado em 4 seções de 3 páginas, não mais
exclusivo da home; **`.pinned-cards` não existe mais, ver "Limpeza pós-
remoção das páginas extras"**). Havia
três páginas extras — `sobre.html`, `solucoes.html` e `planos.html`, hoje
apagadas — com conteúdo completo real (as duas primeiras tinham versão
reduzida correspondente no index com botão "saiba mais"/"ver todas as
soluções"; `planos.html` só tinha um botão "Ver planos" no CTA final, sem
seção
própria no index). A seção antes chamada "Produto" foi renomeada para
"Soluções" (`id="solucoes"`) e movida para logo após "Problema", pra
melhorar o fluxo problema→solução.

## Decisões

- **Origem**: o site nasceu como um clone estrutural/visual de outro site
  de referência (Webflow), sem copiar texto, imagens ou ícones — só
  layout, design system e efeitos. Fonte paga do original (TWK Lausanne)
  foi trocada por **General Sans** (Fontshare, gratuita) + **Inter**
  (Google Fonts) para UI.
- **Stack**: HTML/CSS/JS puro, de propósito — sem framework, sem build
  step. Não introduzir um sem necessidade real.
- **Página única**: decisão do usuário de remover o mega menu com links
  para subpáginas; navegação virou âncoras (`#produto`, `#integracoes`,
  `#seguranca`, `#faq`) e o footer virou uma linha só de links.
- **Cor de marca**: roxo `#514fee`, herdado do clone original — não foi
  trocado para a cor real da marca Pruxor (teal), porque o usuário nunca
  pediu isso.
- **Conteúdo real**: extraído de pruxor.com.br e mapeado seção a seção
  (usuário aprovou aplicar o mapeamento inteiro de uma vez, sem precisar
  de prints seção por seção). Seção "Problema" ganhou um 4º card para
  bater com a quantidade da referência.
- **Seção "Diferenciais"**: não existia no site — foi criada porque
  existe conteúdo equivalente no site de referência da Pruxor. Reaproveita
  o componente `.card` já usado em "Problema".
- **Feature showcase**: pedido evoluiu em duas rodadas. Primeiro só a
  imagem devia ficar fixa (sticky) enquanto o texto rolava. Depois o
  usuário pediu que o texto TAMBÉM ficasse preso e trocasse por
  crossfade — nunca os dois blocos de texto visíveis ao mesmo tempo,
  só troca depois que aquele trecho do scroll "completa".
- **Diferenciais**: mesma lógica em duas rodadas. Primeiro só os cards
  deviam deslizar (3 visíveis, 2 entrando da direita). Depois o usuário
  pediu que título e subtítulo também ficassem presos junto — a seção
  inteira pausa até o deslize dos cards terminar.
- **Efeitos de scroll travado são exclusivos de desktop**: abaixo de
  991px, tanto o feature showcase quanto os diferenciais caem para
  layout empilhado normal, sem sticky/scroll-hijack — decisão própria
  (usuário não pediu, mas scroll-hijack em toque é má prática).
- **Não inventar conteúdo sensível**: Integrações e Segurança seguem
  como placeholder porque o site da Pruxor não tem conteúdo real
  equivalente — decisão de não inventar certificações/integrações
  fictícias (risco de alegação enganosa).
- **Página "Sobre" completa**: o usuário pediu para reduzir o "Sobre" no
  index (mantendo o sentido, sem distorcer) e criar uma página separada
  (`sobre.html`) com a versão completa, acessível por um botão "Saiba
  mais". Foi a exceção explícita à regra de página única. Conteúdo da
  página completa foi expandido a partir do que já tínhamos extraído de
  pruxor.com.br (parágrafos e taglines que ainda não tinham sido usados),
  sem buscar a página `/sobre` real do site de referência.
- **Nav virou 100% âncora, sem link direto pra página externa**: depois
  de criar `sobre.html` com nav "Sobre" apontando pra lá, o próprio
  usuário (ou lint) mudou para `#sobre` (âncora na seção reduzida do
  index) — padrão consolidado: a navbar SEMPRE aponta pra âncoras do
  `index.html`; só os botões "saiba mais" dentro das seções levam pra
  página completa. Segui esse padrão em `solucoes.html` também.
- **Página "Soluções" completa**: pedido igual ao do "Sobre" — reduzir no
  index (o que já existia, a seção Produto/feature-showcase já era esse
  conteúdo) e criar página separada com o conteúdo completo real (print
  da página `/solucoes` do site de referência, que reaproveita quase todo
  o texto já extraído da home). Como o conteúdo já se repetia em 3 seções
  do index (feature-showcase, "feita para quem", diferenciais), perguntei
  e o usuário confirmou: manter tudo no index como está e aceitar
  repetição de tema com a página nova, em vez de mover/consolidar.
- **Produto → Soluções**: renomeado (label do nav e `id`) porque o
  conteúdo real dessa seção sempre foi "Soluções" no site de referência —
  "Produto" era só um nome genérico que eu tinha escolhido antes de saber
  disso. Também movida para logo após "Problema" (antes vinha depois de
  "Sobre") — pedido do usuário de melhorar o fluxo problema→solução,
  julgamento próprio sobre onde exatamente reordenar.
- **Botão "ver mais" precisa ficar dentro do conteúdo visível, não depois
  de uma área sticky/scroll travado**: o botão "Ver todas as soluções"
  inicialmente ficou depois do `.feature-showcase__track` inteiro e
  parecia flutuando sozinho (o track reserva muito mais altura de scroll
  do que o conteúdo visível ocupa). Corrigido colocando o botão dentro de
  cada `.feature-showcase__block`, junto do botão principal — regra geral
  agora: nunca colocar CTA logo depois de uma área com scroll
  travado/sticky, sempre dentro do bloco de conteúdo visível.
- **Página "Planos" completa**: mesmo padrão de Sobre/Soluções — print da
  página `/planos` real, conteúdo (nomes de planos, preços, limites de
  usuário, features) copiado fielmente por vir de uma fonte real fornecida
  pelo usuário (diferente do caso Segurança/Integrações, onde não havia
  fonte). Diferença dos outros dois: não existe seção reduzida no index
  pra "Planos" — só um botão estratégico ("Ver planos") no CTA final, e um
  link no footer. Inicialmente sem link no nav principal (não tinha sido
  pedido); adicionado depois, num pedido separado, entre "Soluções" e
  "Sobre" — como não há âncora correspondente no index, o item do nav
  aponta direto pra `planos.html` (única exceção à regra "nav só aponta
  pra âncora do index").
- **Toggle mensal/anual só visual**: perguntei como tratar, já que não
  tenho os preços anuais reais. Usuário escolheu deixar o toggle
  funcional no clique (alterna estado ativo) mas sem trocar o valor
  exibido — plugar preço real quando existir.
- **Hero com gradiente escuro + textura + holofote de mouse**: pedido
  baseado em 2 prints do site de referência ORIGINAL (não o Pruxor) —
  fundo com gradiente, grade de linhas sutil, e pontinhos que só aparecem
  perto do mouse ao passar o cursor. Implementado só como mudança visual
  de fundo do hero, mantendo o layout/conteúdo atual (texto + card do
  produto) — não recriei o layout centralizado de coluna única do
  print.
- **Gradiente do hero, ajuste fino (2ª rodada)**: usuário pediu 2 coisas
  a mais, olhando o mesmo print com mais atenção — (1) o gradiente devia
  ir até branco de forma suave, sem quebra pra seção seguinte (mudei de
  2 pra 4 paradas de cor, segurando a marca sólida onde fica o conteúdo e
  só desbotando pro branco nos ~20% finais); (2) o holofote não devia ser
  um círculo estático, mas ondular "como água" — resolvido com um filtro
  SVG (`feTurbulence` + `feDisplacementMap` + `<animate>` SMIL) aplicado
  na máscara do holofote, sem precisar de JS pra animar (a própria SVG
  anima sozinha via SMIL).
- **Gradiente do hero, 3ª rodada — o platô era o problema**: usuário
  mandou 2 prints comparando lado a lado (referência vs. o que eu tinha
  entregue) e apontou que o final "ainda tem uma mudança muito brusca".
  Causa raiz: a 2ª rodada segurava `--color-brand` sólido (mesma cor) dos
  40% aos 80% — um platô sem nenhuma mudança — e só desbotava pro branco
  nos 20% finais, criando um "degrau" perceptível (a taxa de mudança
  pulava de zero pra rápida de repente). Resolvido trocando pra 6 paradas
  com cores progressivamente mais claras (`color-mix(in srgb,
  var(--color-brand) N%, white)`) o tempo todo, sem nenhum trecho parado
  na mesma cor — curva contínua, sem degrau. Documentado como regra
  permanente em `CLAUDE.md` (não reintroduzir platô de cor sólida).
- **Navbar transparente sobre a hero + pílula flutuante ao rolar**: mesmo
  pedido, 3º print de referência (site original, estado rolado). Pedido:
  (1) navbar com opacidade reduzida no topo, revelando o fundo; (2) ao
  rolar, transição pra um formato diferente — pílula compacta, arredondada
  e flutuante. Implementado com `initHeaderScrollState` (nova função em
  `js/main.js`) alternando `.has-hero`/`.is-scrolled` no `.site-header`, e
  duas descobertas importantes no caminho: (a) a navbar não sobrepunha a
  hero por padrão (ocupava espaço próprio no fluxo, hero começava depois
  dela) — transparência só revelava o fundo claro da página, deixando o
  texto claro do menu ilegível (claro sobre quase-branco); corrigido dando
  à `.hero` um `margin-top` negativo igual a `--nav-height` (compensado no
  `padding-top`) pra ela "subir" e ficar atrás do header; (b) a regra de
  texto claro vazava pro menu mobile (que também tem `.nav__link`, mas é
  um irmão fora de `.site-header__bar`, sempre com fundo claro) — corrigido
  restringindo o seletor a `.site-header__bar` e excluindo
  `body.nav-mobile-open`. Ambos os achados documentados em `CLAUDE.md`.
- **Hero sem card visual + títulos balanceados**: usuário pediu (1)
  remover o card de mockup/screenshot do lado direito da hero e
  centralizar título+subtítulo, com quebra de linha "balanceada" (sem
  palavra órfã sozinha, como no print de referência); (2) apontou que o
  mesmo problema de quebra desequilibrada aparecia em outras seções (print
  da seção Segurança, "tal." órfão numa linha) e pediu validar o site
  inteiro. Resolvido com `text-wrap: balance` (suporte nativo do
  navegador, sem JS) aplicado a todos os headings/parágrafos de destaque
  que podem quebrar em 2+ linhas — como esses são componentes
  compartilhados (`.section-header__heading`, `.card__heading` etc.), o
  ajuste cobre `index.html` e as 3 páginas extras de uma vez só. A hero
  virou coluna única centralizada (`.hero__content`, max-width 46rem);
  `.hero__visual`/`.placeholder-frame` removidos do HTML e do CSS (não
  eram usados em mais nenhum lugar).
- **Badges de "Para quem é" (`.about-audience__tags`) quebrando torto**:
  usuário mandou print mostrando a 6ª badge ("Gestores de obras") sozinha
  numa segunda linha, e pediu validar a melhor forma de resolver — uma
  linha só, ou quebra igual — sem sair do padrão, medindo antes de aplicar
  pra não piorar em outras larguras/páginas. Medi via Playwright: no
  tamanho antigo (`--text-sm`, padding `0.6em 1.2em`) as 6 badges
  precisavam de ~1241px, mas só havia ~1120px disponíveis a 1440px de
  viewport (e menos ainda em larguras menores) — não cabia de jeito
  nenhum. Reduzido pra `--text-2xs` + padding `0.45em 0.9em`: cabem numa
  linha só até ~1280px de viewport (cobre a maioria das larguras de
  desktop comuns — 1280/1366/1440/1536/1920 testados). Abaixo disso ainda
  quebra (ex: 1200px, ainda fica 5+1), mas `justify-content: center`
  centraliza a badge que sobra em vez de deixá-la solta à esquerda — não
  elimina 100% a quebra em todas as larguras, mas resolve o caso comum e
  deixa o fallback visualmente intencional. Validado nas duas versões
  (`.badge` normal em `sobre.html`, `.badge--inverse` em `solucoes.html`)
  antes de finalizar. Nota: essas mesmas badges tinham sido aumentadas
  numa sessão anterior por parecerem "apertadas" (ver "Para quem é" em
  `sobre.html` mais abaixo) — essa mudança reduz o tamanho de novo, mas
  por um motivo diferente (quebra de linha, não espaçamento); se o
  "apertado" voltar a incomodar, meça de novo antes de aumentar, pra não
  reabrir o problema da quebra.
- **Subtítulo da hero em menos linhas**: usuário pediu reduzir o número de
  linhas do `.hero__paragraph` (estava em 4), autorizando editar o texto
  se necessário, contanto que o sentido não mudasse. Causa raiz: o
  parágrafo tinha `max-width: 46ch` (~482px) — bem mais estreito que a
  coluna da hero (`.hero__content`, 46rem/736px) sem necessidade, já que
  agora a hero é coluna única centralizada (não mais grid 2 colunas).
  Removido o `max-width` próprio do parágrafo (herda os 46rem do
  container-pai) e o texto foi condensado: a lista de 5 públicos
  ("Empresas da Construção Civil e Construtores, Engenheiros, Arquitetos
  e Designers de Interiores") virou 3 categorias mais gerais que cobrem o
  mesmo escopo ("empresas de engenharia, arquitetura e construção
  civil") — o detalhamento público a público já existe em outro lugar do
  site (badges de "Para quem é"), então a hero não precisa repetir a
  granularidade. Os 3 benefícios (controle, previsibilidade, lucro) foram
  mantidos, só cortando palavras de preenchimento ("total da obra", "em
  seus projetos"). A frase-chave "Sistema de Gestão e Acompanhamento"
  (linguagem de produto real, usada também no `CLAUDE.md`) foi mantida
  intacta de propósito. Resultado: 2 linhas em desktop (1440px), 3 em
  tablet, 4 em mobile — todas bem distribuídas graças ao `text-wrap:
  balance` já aplicado.
- **Pílula da navbar grudada no topo + sombra forte**: usuário pediu
  descolar a pílula (`.is-scrolled .site-header__bar`) do topo da viewport
  e reduzir muito ou remover a sombra. 1ª tentativa: subir a margem de
  `--space-2xs` pra `--space-sm` em `margin-top` do `.site-header__bar` —
  usuário reportou que continuava colada (print novo confirmando). Causa
  real: `.site-header__bar` é o primeiro filho de `.site-header` (sem
  padding/borda própria), então a margin-top do filho colapsa com a do
  pai — combinado com `position: sticky` no pai, o respiro não aparece de
  verdade. Corrigido trocando pra `padding-top: var(--space-sm)` em
  `.site-header.is-scrolled` (padding não colapsa). Sombra reduzida de
  `0 16px 40px rgba(7,6,40,0.14)` pra `0 4px 12px rgba(7,6,40,0.05)`
  (quase imperceptível). Validado via `file://` direto (mesmo setup do
  usuário) nas 4 páginas e no mobile, sem erros de console — confirmado
  24px de respiro real entre o topo da viewport e a pílula.
  **Regra geral daqui pra frente**: espaçamento vertical em elementos que
  são filho direto de algo com `position: sticky`/`fixed` deve usar
  `padding` no ancestral posicionado, não `margin-top` no filho — risco de
  margin collapsing silencioso.
- **Cards de "Problema" e "Diferenciais" redesenhados**: usuário mandou 2
  prints (estado atual em branco + um card de referência escuro com
  gradiente colorido, ícone e sparkles) pedindo visual mais animado, e
  pediu explicitamente que o fundo/gradiente "sintonizasse" com o design
  da Pruxor em vez de copiar as cores do print de referência. Criado
  `.card--vivid` (modificador, só nas duas seções do index — Problema e
  Diferenciais, não em `.card-grid` de sobre/soluções): fundo escuro
  (`--color-ink`) + brilho radial na ÚNICA cor de marca do produto (não
  as 4 cores arco-íris do print), textura de grade igual à da hero (reusa
  a mesma identidade visual já existente em vez de inventar uma nova),
  ícone por card (9 SVGs novos, um por card, estilo consistente com os
  outros ícones do site) e 2 sparkles decorativos com leve animação de
  piscar. Também adicionado hover (zoom `scale(1.02)` + borda acendendo
  na cor de marca) ao `.card` base, sitewide (não só nas 2 seções).
- **Bug real: hover com `transform` não fazia nada visualmente em cards
  com `data-reveal`**: implementei `.card:hover { transform: scale(1.02)
  }`, mas `[data-reveal].is-visible` também define `transform`
  (`translateY(0)`) com a MESMA especificidade (0,2,0) e vem depois no
  arquivo — por cascata, ele vencia e o scale nunca era aplicado de
  verdade (só bordas/sombra funcionavam, por serem propriedades
  diferentes, sem conflito). Só percebi comparando o valor computado de
  `transform` antes/depois do hover via Playwright — visualmente o
  brilho da borda já dava uma falsa impressão de que o zoom também
  funcionava. Corrigido reforçando a especificidade do seletor
  (`.card.card:hover`, specificity 0,3,0 > 0,2,0). Regra registrada em
  `CLAUDE.md`: qualquer `:hover` com `transform` num elemento que também
  tem `data-reveal` precisa desse reforço de especificidade.
- **Cards de "Problema"/"Diferenciais", 2ª rodada — reforço + holofote**:
  usuário achou os efeitos da 1ª rodada sutis demais, pediu ícone animado
  o tempo todo (não só no hover), reportou os cards da seção Diferenciais
  sendo cortados pela própria seção quando o hover aumentava o card, e
  pediu um "efeito mais moderno" incluindo o mesmo holofote de pontinhos
  da hero seguindo o mouse dentro dos cards.
  - Hover reforçado: `scale(1.02)` → `translateY(-6px) scale(1.045)`,
    sombra/borda mais fortes; no `.card--vivid`, o halo de brilho (`::before`)
    cresce de `scale(1.15)` pra `scale(1.3)` no hover, com anel de borda
    mais grosso.
  - `.card__icon` ganhou 2 animações contínuas (`card-icon-float` +
    `card-icon-glow`, sempre rodando, com `animation-delay` escalonado
    por card pra não baterem em sincronia) — antes só existia como ícone
    estático.
  - **Causa do corte em "Diferenciais"**: `.differentiators__viewport`
    tinha `overflow: hidden` nos dois eixos (só o horizontal precisa,
    pra esconder os cards fora de vez no slide) — o eixo vertical nunca
    precisou de corte, só herdava do shorthand, e cortava o hover mais
    forte em cima/embaixo. Corrigido pra `overflow-x: hidden;
    overflow-y: visible;` + `padding: 28px 0` (respiro extra pedido
    explicitamente pelo usuário). `initDifferentiators` mede a altura do
    estágio dinamicamente via `getBoundingClientRect`, então a altura
    extra foi absorvida automaticamente, sem precisar tocar no JS —
    validado que o slide horizontal ainda alcança o último card
    corretamente depois da mudança.
  - **Holofote nos cards**: criado `.card__spotlight` (mesma máscara
    radial + o filtro SVG `#hero-wave` já existente, reaproveitado sem
    duplicar) e `initCardSpotlight()` em `js/main.js` (mesmo padrão de
    `initHeroSpotlight`, só que por elemento `.card--vivid` em vez de por
    `.hero`). Atendeu literalmente o pedido "no local que o mouse passar,
    deve ter o mesmo efeito da hero".
- **`.differentiators` virou `.pinned-cards` (componente genérico) +
  reusado em sobre.html/solucoes.html + fade nas bordas**: usuário pediu
  pra padronizar os cards de `sobre.html` (seção "Pilares", 3 cards) e
  `solucoes.html` (seções "Soluções", 6 cards, e "Diferenciais", 5 cards
  — essa última já duplicava o conteúdo da Diferenciais do index, só que
  antes num grid simples) com o mesmo padrão visual (`.card--vivid`) e o
  mesmo efeito sticky/scroll horizontal já usado só na home. Isso reverte
  uma decisão registrada antes ("scroll-hijack reservado como efeito de
  destaque só da home, outras páginas focadas em leitura") — decisão
  nova do usuário substitui a antiga.
  - Renomeei `.differentiators__track/__stage/__viewport/__cards` →
    `.pinned-cards__*` (e `initDifferentiators` → `initPinnedCards` em
    `js/main.js`), já que agora é um componente reusado em 4 lugares, não
    mais exclusivo de uma seção chamada "Diferenciais". `querySelectorAll`
    já suportava múltiplas instâncias por página, então não precisou
    mudar a lógica, só os nomes.
  - As regras `nth-child` de posição do brilho (`--glow-x`/`--glow-y`) e
    atraso do ícone, que antes eram fixas por seção (`.problem__cards
    .card--vivid:nth-child(1)`, `.differentiators__cards
    .card--vivid:nth-child(1)`, uma regra por card por seção), viraram
    padrões cíclicos direto em `.card--vivid` (`:nth-child(4n+1)` etc.) —
    sem isso, cada seção nova (3, 5 ou 6 cards) precisaria de regras
    novas hardcoded; com o ciclo, qualquer quantidade de cards em
    qualquer seção já sai variado automaticamente.
  - Criados ícones novos pras seções que não existiam antes: Pilares
    (layers, gauge, olho) e Soluções (reaproveita o ícone de hub de
    "Centralização" já usado em Diferenciais + 4 novos: checklist, lista,
    olho reaproveitado, link). A seção "Diferenciais" de `solucoes.html`
    reaproveita os 5 ícones exatos do index (mesmo conteúdo/títulos).
  - `.card-grid` e `.about-pillars` (grids simples antigos, sem o
    tratamento escuro nem o efeito sticky) ficaram sem nenhum uso depois
    da conversão — removidos do CSS.
  - **Fade nas bordas** (pedido separado, mesmo print mostrando um corte
    brusco): `.pinned-cards__viewport` ganhou `mask-image` — os cards
    agora aparecem/somem com fade em vez de corte duro nas bordas
    esquerda/direita. Desativado no fallback mobile (`mask-image: none`),
    onde não há mais slide horizontal pra esconder. Passou por 4 ajustes
    até acertar: 64px (2 pontos, sem parada intermediária) foi "muito
    forte"; 220px (com parada intermediária a meio caminho) foi na
    direção errada — usuário esclareceu que "diminua" era sobre o
    **espaço ocupado**, não a suavidade da curva, e reportou que 220px
    "avançava demais" sobre o card; 28px (2 pontos, sem parada
    intermediária, igual à 1ª tentativa só que mais curta) resolveu o
    espaço mas trouxe de volta o problema da 1ª tentativa — usuário
    reportou que a transição ainda parecia "dura", revelando o branco do
    fundo da página logo na borda ("diminua esse branco"). Resolvido em
    **24px com parada intermediária** (55% de opacidade na metade do
    caminho, não só transparent→black direto) — curto o bastante pra não
    comer o card, mas com uma curva suave em vez de linear pura.
    5ª rodada: usuário pediu "mais extenso, e a opacidade mais sutil" —
    ou seja, o oposto do "menor espaço possível" pedido antes, mas ainda
    com curva suave. Resolvido esticando pra **100px com 4 paradas
    intermediárias** (15%/35%/65% de opacidade em vez de só uma parada a
    55%) — cada degrau muda pouco em relação ao anterior, então a
    transição cobre bem mais distância sem nenhum salto de opacidade
    perceptível em nenhum ponto. Fica registrado que **largura da faixa**
    e **suavidade da curva** (nº de paradas intermediárias) são os dois
    parâmetros independentes desse efeito — o usuário já pediu ajustes
    nos dois eixos separadamente (menor/maior espaço; mais/menos
    paradas), então ao mexer de novo, mudar só um dos dois sem considerar
    o outro.
    6ª rodada — **mudança de abordagem** (não mais só ajuste de número):
    usuário propôs 2 soluções alternativas ao "fade sempre visível nas
    bordas": (1) sem fade nenhum quando os 3 cards estão parados
    (início/fim do slide), fade só aparece durante o scroll ativo, no
    card saindo à esquerda/entrando à direita; (2) manter o fade sempre
    visível, mas com gradiente assimétrico (parte externa igual, parte
    interna — mais perto do card cheio — bem mais fraca). Pediu pra
    implementar a opção 1 primeiro, reportar pra avaliação, só depois
    perguntar se quer ver a opção 2, e só depois de ver as duas perguntar
    qual manter — processo ainda em aberto, aguardando resposta do
    usuário sobre qual (ou se nenhuma) manter.
    - **Opção 1 implementada**: `update()` de `initPinnedCards` (js/main.js)
      agora alterna uma classe `.is-sliding` em `.pinned-cards__viewport`
      conforme `progress > 0 && progress < 1` (a cada frame de scroll). O
      `mask-image` (a mesma faixa de 100px/4 paradas da 5ª rodada) saiu do
      `.pinned-cards__viewport` base e foi pra
      `.pinned-cards__viewport.is-sliding` — ou seja, só existe enquanto
      `is-sliding` estiver presente. Validado matematicamente (sem
      depender de acertar posições exatas de scroll via Playwright,
      pouco confiável): amostrei ~30 posições de scroll ao longo de todo
      o trilho, recalculando `progress` com a mesma fórmula do JS, e
      comparei contra o estado real da classe — 0 divergências. Screenshots
      confirmaram visualmente: início (3 primeiros cards) sem fade, meio do
      scroll com fade nas duas bordas, fim (últimos 3 cards) sem fade de
      novo. Seções com `distance = 0` (Pilares, 3 cards, nada pra
      deslizar) nunca ganham `is-sliding` — confirmado que fica sempre sem
      fade.
    - **Opção 2 implementada em seguida** (usuário pediu na sequência, sem
      esperar pra avaliar a 1 sozinha por muito tempo): o `mask-image`
      voltou pro `.pinned-cards__viewport` base (sempre ativo,
      independente de `is-sliding`) — a regra `.pinned-cards__viewport
      .is-sliding` da opção 1 foi removida do CSS (não só desativada) pra
      não competir por especificidade com a base. Curva assimétrica: parte
      externa (0–45px) idêntica à 5ª rodada; parte interna esticada de
      72–100px (rampa rápida até 100%) pra 45–180px com incrementos bem
      menores (35%→48%→62%→100%) — mais fraca e gradual, como pedido.
      Diferença de comportamento notável entre as duas: na seção "Pilares"
      (sobre.html, 3 cards, `distance = 0`, nunca "desliza"), a opção 1
      nunca mostrava fade (sempre nítida) enquanto a opção 2 mostra fade o
      tempo todo ali também, já que não depende de estado de scroll.
    - **Decisão final: opção 2**, com ajuste extra de legibilidade. O
      usuário escolheu a opção 2, mas reportou (com print) que o texto
      (título/parágrafo) ficava difícil de ler onde o fade passava por
      cima — a faixa de 180px passava um bom tempo em opacidade média
      (35–62%), e como o conteúdo do card começa cedo (ícone logo nos
      primeiros ~50px, título logo em seguida), esse trecho "lavado"
      cobria texto de verdade, não só a moldura do card. Resolvido subindo
      o piso de opacidade de cada parada bem mais rápido (30%→60%→80%→92%
      já nos primeiros 110px) e encurtando a faixa total pra 150px — agora
      só um trechinho bem próximo da borda (~36px, quase todo dentro da
      área do ícone) fica de fato "fraco"; título e parágrafo já caem numa
      região com opacidade alta o bastante pra manter contraste.
      **Limpeza**: como a opção 2 venceu definitivamente, removi o código
      da opção 1 que tinha ficado pra trás — o `viewport.classList.toggle
      ('is-sliding', ...)` dentro de `update()` em `initPinnedCards`
      (js/main.js) foi deletado (não fazia mais nada útil, já que nenhuma
      regra CSS usa `.is-sliding`). Se um dia quiser reativar o
      comportamento da opção 1 (fade só durante o scroll), essa lógica
      precisa ser reescrita — não ficou só comentada/desativada.
    - **8ª rodada — sombra do hover cortada embaixo + 2 bugs achados
      junto**. Usuário reportou (com print) a sombra do hover sendo
      cortada na parte de baixo dos cards, e pediu diminuir mais um
      pouco a opacidade do fade (continuação da rodada anterior).
      - **Causa raiz do corte**: `overflow-x: hidden; overflow-y:
        visible;` no `.pinned-cards__viewport` **não fazia o eixo Y ficar
        realmente visible** — confirmei via `getComputedStyle` que o
        valor USADO de `overflow-y` era `auto`, não `visible`. Isso é uma
        regra real da spec do CSS Overflow Module: quando os dois eixos
        de overflow não são ambos `visible`/`clip`, o navegador força
        `auto` no eixo que ficou `visible` sozinho. `auto` ainda recorta
        (só evita mostrar barra de scroll se não precisar) — então o
        `padding: 28px 0` que eu tinha posto antes (pra resolver o corte
        do zoom/lift) nunca foi suficiente pra sombra grande do
        `.card--vivid:hover` (offset 32px + blur 56px, alcance prático
        de quase 90px). Corrigido subindo o padding pra `32px 0 100px`
        (assimétrico — o pedido foi só sobre "embaixo").
      - **Bug extra achado no caminho**: `.card--vivid:hover` (specificity
        0,2,0) estava perdendo pro `.card.card:hover` genérico (0,3,0,
        reforçado antes pra vencer o conflito com `data-reveal`) — os
        cards escuros no hover mostravam só a sombra cinza neutra do
        `.card` base, nunca o brilho colorido de marca que eu tinha
        desenhado pra eles. Corrigido reforçando `.card--vivid:hover` pra
        `.card--vivid.card--vivid:hover` (mesmo truque de seletor
        duplicado, mesma razão). Confirmei via `getComputedStyle` antes/
        depois — o `box-shadow` computado agora inclui as 3 camadas certas
        (anel de borda + halo de marca + sombra grande), não só uma.
      - **Opacidade reduzida mais um pouco**: cada parada do gradiente
        assimétrico baixou (30→22%, 60→48%, 80→68%, 92→85%) — mantendo a
        legibilidade da rodada anterior (o piso ainda sobe rápido nos
        primeiros ~110px), só um pouco mais sutil no geral.
    - **9ª rodada — fade condicional por seção, sombra menor, corte em
      cima também**. Usuário pediu 3 coisas: (1) seções sem cards extras
      pra revelar (Pilares, `distance = 0`) não deveriam ter fade nenhum
      — só as que realmente têm mais conteúdo entrando/saindo pela borda
      durante o slide; (2) diminuir a sombra dos cards; (3) a sombra
      também estava sendo cortada em cima, não só embaixo.
      - **Fade condicional**: `layout()` de `initPinnedCards` (js/main.js)
        agora alterna `.has-overflow` em `.pinned-cards__viewport`
        conforme `distance > 0` (calculado uma vez por layout/resize, não
        por frame de scroll como a extinta opção 1). O `mask-image` saiu
        do `.pinned-cards__viewport` base e foi pra
        `.pinned-cards__viewport.has-overflow` — Pilares (sobre.html, 3
        cards) nunca ganha essa classe, então nunca tem fade; as demais
        seções (4+ cards no total, sempre mais que os 3 visíveis) sempre
        têm. Confirmado via `className` direto: Pilares fica só
        `pinned-cards__viewport`, as outras ficam `pinned-cards__viewport
        has-overflow`. Fallback mobile reforçado pra cobrir
        `.has-overflow` também (senão a regra desktop, com especificidade
        maior por causa da classe extra, venceria a de mobile numa
        eventual corrida de resize).
      - **Sombra reduzida**: `.card.card:hover` de `0 28px 48px` pra
        `0 18px 32px` (opacidade 0.14→0.1); `.card--vivid.card--vivid:hover`
        — anel de borda 75%→70%, halo `0 0 40px`→`0 0 24px` (opacidade
        45%→32%), sombra grande `0 32px 56px`→`0 16px 30px` (opacidade
        0.5→0.35).
      - **Corte em cima corrigido**: o padding do `.pinned-cards__viewport`
        virou assimétrico de verdade — `50px 0 75px` (antes era `32px 0
        100px`, só pensado pra embaixo). Com a sombra bem menor agora, o
        total de espaço necessário caiu, mas o TOPO precisava de mais do
        que os 32px que tinha (o halo `0 0 40px` sozinho, antes de eu
        reduzir a sombra, já bastava pra estourar 32px pra cima, já que é
        simétrico em todas as direções — glow simétrico soma nos dois
        lados, só a sombra grande com offset é que empurra mais pra um
        lado só).
    - **10ª rodada — corte lateral no hover (Pilares) + "espiadinha" do
      próximo card em todas as seções**. Usuário reportou (print) o hover
      cortando a lateral dos cards em `sobre.html` (seção "Pilares") e
      pediu 2 coisas: (1) resolver esse corte; (2) nas seções COM fade,
      diminuir os cards pra sobrar uma tirinha do próximo espiando na
      borda — e deixar isso **igual em todas as páginas/seções**, não um
      ajuste isolado.
      - **Causa do corte lateral**: `.pinned-cards__viewport` tinha
        `overflow-x: hidden` sem nenhum padding horizontal — diferente do
        eixo vertical (que já tinha ganhado padding generoso em rodadas
        anteriores), o eixo X sempre recortou de verdade (não sofre a
        pegadinha do `auto`, já que `overflow-x` estava mesmo como
        `hidden`, não `visible`). Em "Pilares" isso é pior porque os 3
        cards enchem o viewport inteiro (sem sobra pra deslizar), então
        as bordas esquerda/direita dos cards das pontas encostam direto
        na borda do viewport — qualquer hover ali é cortado na certa.
        Corrigido com `padding: 50px 40px 75px` (40px nas laterais).
      - **Efeito de "próximo card espiando"**: a fórmula de largura do
        card (`.pinned-cards__cards .card`) mudou de "3 cards exatos"
        (`/ 3`) pra "~3.3 cards" (`/ 3.3`, com o desconto de gap também
        ajustado de `2 *` pra `3 * var(--space-sm)`) — cabem só ~90% de 3
        cards cheios + uma tira de ~10% do próximo, que o fade (já
        existente nas seções com `.has-overflow`) cobre suavemente. Regra
        única, sem escopo por página/seção — pedido explícito do usuário
        ("deixe os cards no mesmo tamanho, não apenas em uma página ou
        sessão específica"). Em "Pilares" (só 3 cards reais) sobra um
        respiro vazio à direita em vez de um 4º card de verdade — troca
        aceitável pelo tamanho consistente.
      - **JS ajustado pra não quebrar o cálculo do slide**: `clientWidth`
        do viewport agora inclui o padding horizontal novo, então usar
        ele direto pra calcular `distance` ficaria errado (subestimaria
        quanto falta deslizar, cortando o último card). Criei
        `visibleWidthPx()` em `initPinnedCards` (js/main.js), que desconta
        o padding horizontal via `getComputedStyle` antes de calcular a
        distância. Validado nas 4 instâncias: o último card de cada seção
        fica 100% dentro do viewport ao final do scroll (`cardRight <=
        viewportRight`, testado via Playwright, sem margem de erro
        maior que 1px).
  - CTA da seção "Soluções" (`solucoes.html`) precisou ir pra dentro do
    `.pinned-cards__stage` (não como irmão depois do `.pinned-cards__track`
    inteiro) pra não recriar o bug já documentado do botão "Ver todas as
    soluções" (CTA "sumindo" atrás de um vão de scroll enorme).
  - Validado: as 4 instâncias (index Diferenciais, sobre Pilares,
    solucoes Soluções, solucoes Diferenciais) alcançam o último card
    corretamente ao rolar até o fim, sem erros de console, com fallback
    mobile/tablet em grid normal (2 colunas ou empilhado) igual ao
    padrão já usado.
- **Contraste da hero + remoção do marquee + cor do ícone do FAQ**.
  Usuário mandou 3 pedidos com prints de referência num mesmo turno:
  - **Contraste da hero**: o texto claro (heading, span "no caos." em
    `.text-accent-inverse`, parágrafo) perdia contraste em certas alturas
    do degradê contínuo da hero (que vai clareando o tempo todo, sem
    platô — ver decisão da "3ª rodada" do gradiente) — dependendo de onde
    o texto cai na altura da hero (varia com a proporção da viewport),
    ficava sobre um trecho já bem claro do degradê. Resolvido com
    `text-shadow` sutil e escuro no heading/parágrafo (garante leitura
    sem depender de exatamente onde o texto cai no degradê) e um
    override específico só dentro do heading pra `.text-accent-inverse`
    (fica quase branco puro ali, mais claro que a versão padrão dessa
    classe usada no CTA sobre fundo sólido — não mudei a classe global
    pra não afetar o CTA, que já tinha contraste OK).
  - **Marquee de logos removido**: seção inteira (`.logo-marquee` e
    filhos) entre a hero e "O problema" no `index.html`, só usada ali —
    removida do HTML, CSS (`.logo-marquee`, `__title`, `__container`,
    `__track`, `__item`, `@keyframes logo-marquee`) e JS
    (`initLogoMarquee` e sua chamada) por não ficar código morto. Pedido
    explícito do usuário, sem alternativa pedida — não recriar sem
    pedido novo.
  - **Ícone +/− do FAQ**: `.faq-item__icon::before/::after` usava
    `var(--text-primary)` (escuro) — trocado pra `var(--color-brand)`
    (roxo de marca), igual à cor do eyebrow "PERGUNTAS FREQUENTES" logo
    ao lado, como pedido.
  Validado nas 4 páginas, desktop e mobile, sem erros de console;
  confirmado que não sobrou nenhuma referência a `.logo-marquee`/
  `initLogoMarquee` em lugar nenhum do código.
- **Seção "Sobre" virou `.about-outcomes` (card escuro + globo 3D pontilhado
  + stats que contam)**. Usuário mandou 2 prints: um card de referência
  (Clarasight-style — fundo escuro, badge, heading, parágrafo, botão, 3
  stats em linha, globo 3D pontilhado grande sangrando pela direita) e um
  print do `.why-different` atual da Pruxor (fundo claro, grid 2x2 de
  stats). Pedido: redesenhar pro estilo escuro do print de referência,
  adicionar um globo 3D pontilhado que gira sozinho ("pegue a imagem de um
  globo como molde, e faça ele pontilhado"), seguir a disposição do print,
  e animar os números subindo de 0 até o valor real.
  - **`.why-different`/`.stat-panel` substituídos por `.about-outcomes`**:
    reaproveita a linguagem visual já existente (`--color-ink`, textura de
    grade igual à hero/`.card--vivid`) em vez de inventar paleta nova — só
    o layout (badge + heading + stats em linha + globo grande à direita)
    segue o print. CSS/HTML antigos removidos por completo (não só
    desativados).
  - **Globo 3D pontilhado sem biblioteca nenhuma** (projeto é vanilla, sem
    three.js/globe.gl): `initAboutGlobe()` em `js/main.js` usa Canvas 2D
    puro — continentes definidos como polígonos simplificados de lat/lon
    (6 formas: América do Norte/Sul, Europa, África, Ásia, Austrália),
    pontos distribuídos por "Fibonacci sphere" (~1500 pontos, distribuição
    quase-uniforme numa esfera), cada ponto testado contra os polígonos
    via ray-casting (terra vs. oceano) pra variar tamanho/opacidade/cor.
    Projeção ortográfica simples (só desenha o hemisfério voltado pra
    "câmera") reprojetada a cada frame com a longitude girando
    (`requestAnimationFrame`). Detalhes: `IntersectionObserver` pausa a
    animação quando o canvas sai da tela (economia de CPU); anel/rim sutil
    (`stroke`) adicionado pra dar sensação de esfera — sem ele os pontos
    pareciam um blob solto, sem contorno; `prefers-reduced-motion` trava a
    rotação (`rotation` nunca incrementa) e redesenha só um frame estático.
  - **Contagem de 0 até o valor real**: `initCountUp()` em `js/main.js`,
    `IntersectionObserver` (dispara uma vez por elemento, threshold 0.4) +
    `requestAnimationFrame` com easing ease-out cúbico, 1.6s de duração.
    `toLocaleString('pt-BR')` formata milhar com ponto automaticamente
    ("1.000+") sem tratamento manual de string. `prefers-reduced-motion`
    pula direto pro valor final, sem animar.
  - **3 bugs de responsividade achados e corrigidos durante verificação**
    (nenhum pedido pelo usuário — achados testando faixas de largura antes
    de dar o trabalho por concluído):
    1. Heading sobrepondo o globo em larguras "tweener" (~1024–1200px,
       entre o desktop cheio e o empilhamento de 991px) — `text-wrap:
       balance` deixava o heading caber numa linha só bem perto da largura
       do globo. Corrigido com breakpoint novo em 1240px
       (`.about-outcomes__content { max-width: 30rem }`,
       `.about-outcomes__globe { width: 40% }`), verificado em
       1200/1100/1024/992px via screenshot.
    2. **Bug real de overflow horizontal na página inteira em mobile**:
       `.about-outcomes__stats` tinha `flex-wrap: nowrap` fixo (dos ajustes
       de largura de stats numa rodada anterior), com o comentário
       assumindo que "o card empilha com o globo embaixo, então sobra
       largura pra caber os 4 mesmo assim" — falso. Confirmado via script
       (`stats.scrollWidth > stats.clientWidth`) que isso estourava a
       largura da viewport em **qualquer** tela entre 320px e ~560px
       (`body.scrollWidth` 434px contra 390px de viewport, por exemplo),
       criando scroll horizontal na página inteira, não só na seção.
       Corrigido com `flex-wrap: wrap` + grid 2x2 (`flex: 0 0 calc(50% -
       var(--space-m) / 2)`) num breakpoint novo de 767px (breakpoint
       padrão do projeto, cobre toda a faixa problemática com folga).
       Revalidado nas mesmas larguras: `overflow` false em todas de
       320px a 767px.
    3. (Achado, não corrigido — fora de escopo) Overflow horizontal
       menor e **pré-existente**, causado por `.nav__hamburger-button`/
       `.nav__list--mobile` em mobile — já documentado como pendência
       conhecida (ver Pendências); confirmado que existe até em
       `sobre.html`, que nem tem `.about-outcomes`, então não tem relação
       com este trabalho.
  Validado com varredura completa: sem erros de console nas 4 páginas,
  100% dos `[data-reveal]` visíveis após scroll completo, stats finais
  corretos ("50+"/"200+"/"1.000+"/"95%"), canvas do globo renderiza só em
  `index.html` (guards `if (!canvas) return` confirmados no-op nas outras
  3 páginas), mobile (390px) sem overflow depois do fix.
  - **2ª rodada — globo bem maior, só 1/4 visível, mais pontos**. Usuário
    mandou 1 print (crop do card de referência, globo ocupando a maior
    parte do quadro, denso, só um quadrante visível) e pediu: aumentar o
    tamanho do globo, mostrar só 1/4 dele (não mais o círculo quase
    inteiro que a 1ª versão mostrava), no tamanho do print, e aumentar a
    quantidade de pontos pra melhorar a imagem.
    - **Técnica pro "1/4 visível" robusta a qualquer proporção do card**:
      `.about-outcomes__globe` trocou de `top:50%; right:-6%;
      transform:translateY(-50%)` (círculo quase inteiro, centralizado
      verticalmente) pra `right:0; bottom:0; transform:translate(50%,
      50%)`. Como `%` em `transform` é relativo ao tamanho do PRÓPRIO
      elemento (não do container), esse combo centraliza o globo
      exatamente no canto inferior-direito do card **independente da
      proporção largura/altura do `.about-outcomes`** (usar `right`/
      `bottom` em % puros pra isso, sem `transform`, não funcionaria
      direito — são relativos a dimensões diferentes do container,
      largura vs. altura). Com o centro exatamente no canto e o
      `overflow: hidden` do card recortando, sobra matematicamente 1/4 do
      círculo — sem precisar ajustar valores manualmente pra "acertar" a
      fração visível.
    - **Tamanho**: `width` do container foi de `46%` (max 460px) pra
      `84%` (max 760px) — quase o dobro. Breakpoint de 1240px (criado na
      1ª rodada) ajustado junto (`40%` → `64%`, max 540px) pra manter a
      mesma proporção relativa nessa faixa; revalidado que não volta a
      sobrepor o heading (testado em 1240/1100/991px via screenshot).
    - **Mais pontos**: `POINT_COUNT` em `initAboutGlobe` (js/main.js) foi
      de 1500 pra **7000** (~4.7x) — subiu em 2 passos (4500, depois 7000)
      comparando screenshot a cada passo contra o print de referência, até
      a textura ficar fina/densa o bastante (o valor final ainda mostra
      contorno de continente reconhecível quando um passa pela área
      visível, sem virar uma mancha sólida). Rotação recontada via 2
      screenshots com ~2s de intervalo — confirmado que ainda gira
      normalmente com a contagem maior (sem perda perceptível de
      performance nos testes).
    - Fallback de tablet (991px, círculo inteiro centralizado abaixo do
      texto) **mantido como estava** — decisão própria de não estender o
      efeito "1/4 recortado" pro estado empilhado, já que ali o efeito
      perderia o sentido (não tem canto de card sangrando pra usar).
      Revalidado que continua saudável nessa largura e no mobile (390px)
      depois do aumento de tamanho/densidade.
    Validado com nova varredura completa: sem erros de console nas 4
    páginas, sem overflow horizontal novo em nenhuma largura de
    320px a 1440px (o único overflow que aparece em 390px é o bug
    pré-existente do menu mobile, já documentado, sem relação com o
    globo).
  - **3ª rodada — globo ainda maior, muito mais pontos, mais opacidade**.
    Usuário pediu (sem print novo, comparando com o resultado da 2ª
    rodada): aumentar mais o globo, aumentar MUITO a quantidade de pontos,
    e aumentar a opacidade.
    - **Tamanho**: container foi de `84%`/760px pra `112%`/1020px; ajuste
      correspondente no breakpoint de 1240px (`64%`/540px → `84%`/720px).
    - **Opacidade**: alpha por ponto subiu de `(land?0.85:0.22) *
      (0.45+0.55*depth)` pra `(land?1:0.5) * (0.65+0.35*depth)` — chão
      (terra) vai a opacidade total no ponto mais próximo da câmera, oceano
      dobrou de piso (0.22→0.5); aro (`stroke`) do contorno também subiu
      (0.14→0.28).
    - **Bug real encontrado e corrigido: densidade fixa quebrava o estilo
      pontilhado em telas menores**. Primeira tentativa: só subir
      `POINT_COUNT` de 7000 pra 18000 (constante fixa, igual pras 3 faixas
      de tamanho do globo — desktop grande, fallback empilhado ≤991px,
      mobile). Funcionou bem no globo grande de desktop, mas no fallback
      empilhado (~320px de diâmetro) e no mobile, os MESMOS 18000 pontos
      ficam tão apertados num raio pequeno que se fundem visualmente —
      os continentes viravam uma mancha branca sólida, sem nenhum ponto
      individual visível (achado ao revisar o screenshot do fallback
      991px depois de aumentar a contagem — não foi pedido pelo usuário,
      mas quebra a identidade "estilo pontilhado" documentada no
      `CLAUDE.md`). Corrigido tornando a contagem de pontos adaptativa ao
      tamanho real renderizado: `generatePoints(count)` virou uma função
      (não um bloco fixo no início), chamada dentro de `resize()` com
      `count` calculado a partir da área do círculo (`radius²`) — mantém a
      MESMA densidade (pontos por px²) em qualquer tamanho de globo, então
      18000 só se aplica perto do tamanho grande de desktop (raio-base
      ~480px); no fallback empilhado (raio ~150px) cai pra ~1800; no
      mobile (raio ~110-130px) cai pra ~1000-1300. Regenera só quando o
      alvo muda mais de 10% do atual, pra não recalcular à toa em resizes
      pequenos. Revalidado nas mesmas larguras: globo grande de desktop
      continua denso/fino, fallback empilhado e mobile voltaram a mostrar
      pontos individuais nítidos (não mais mancha sólida).
    - Rotação reconfirmada via 2 screenshots (~2s de intervalo) depois de
      todas as mudanças — ainda gira normalmente.
  - **4ª rodada — opacidade reduzida de volta**. Usuário pediu "diminua a
    opacidade do globo" (comparando com o resultado bem opaco da 3ª
    rodada). Alpha por ponto voltou de `(land?1:0.5) * (0.65+0.35*depth)`
    pra `(land?0.6:0.28) * (0.55+0.45*depth)`; aro do contorno de `0.28`
    pra `0.16` — mais sutil que a 3ª rodada, mas ainda mais visível que a
    2ª (não foi um "desfazer" completo, só um ajuste pro meio-termo
    pedido). Pedido também mencionava "diminua a opacidade do globo... no
    `index.html` e no `sobre.html`" — **`sobre.html` não tem seção
    `.about-outcomes`/globo nenhum** (só existe em `index.html`,
    confirmado via grep); avisei o usuário disso em vez de inventar um
    globo novo lá sem pedido explícito.
- **"Feita para quem precisa tocar operação de verdade." em `solucoes.html`
  ganhou layout próprio + loop vertical de badges**. Usuário mandou um
  print dessa sessão (fundo escuro liso, texto centralizado, badges numa
  fileira horizontal) e pediu: (1) fundo igual ao da sessão "Sobre" do
  index (`.about-outcomes` — na prática já era a mesma cor sólida
  `--color-ink`/`--bg-inverse`, o que faltava era a textura de grade
  sutil que a "Sobre" tem e essa sessão não tinha); (2) texto posicionado
  à esquerda; (3) a `.about-audience__tags` (badges) virando uma lista
  VERTICAL com efeito de loop contínuo de baixo pra cima, posicionada à
  direita da sessão.
  - **Novo modificador `.full-width-feature--audience`**, aplicado só
    nessa instância em `solucoes.html` — a versão base `.full-width-feature`
    (também usada no `index.html`, sessão "FULL WIDTH FEATURE" mais
    abaixo, conteúdo diferente) continua centralizada/empilhada, sem
    textura, intocada. O modificador troca o layout pra grid 2 colunas
    (texto 1.3fr + loop 1fr), `text-align: left`, e adiciona
    `.full-width-feature__texture` (reaproveita a MESMA receita CSS da
    `.about-outcomes__texture` — grid de linhas + radial-mask).
  - **`.audience-loop`**: componente novo (não reaproveita
    `.about-audience__tags`, que continua igual e intocada em
    `sobre.html`/no uso normal — as duas versões têm DOM/comportamento
    incompatíveis: uma é flex-wrap horizontal centralizada, a outra é uma
    coluna vertical animada). Lista de 6 badges duplicada 2x dentro de
    `.audience-loop__track` (2ª cópia com `aria-hidden="true"`, só a 1ª é
    lida por leitor de tela) — `@keyframes audience-loop-scroll` anima
    `transform: translateY(0 → -50%)`, que corresponde exatamente à altura
    de UMA cópia (já que as duas são idênticas), criando loop contínuo sem
    salto perceptível no fim, sem precisar calcular altura em JS. Direção
    "de baixo pra cima" = os itens sobem (saem por cima, entram por baixo).
    `mask-image` linear vertical funde os badges com o fundo nas bordas
    superior/inferior do container (fade, não corte brusco) — mesma
    técnica já usada no fade horizontal do `.pinned-cards__viewport`.
    `prefers-reduced-motion` desativa a animação (`animation: none`),
    consistente com o padrão já usado no globo/count-up/sparkles do site.
  - **Sem JS nenhum** — é só `@keyframes` CSS puro, consistente com a
    regra do projeto de não introduzir bibliotecas/scripts pra efeitos
    visuais quando dá pra fazer só com CSS.
  - Fallback ≤991px: grid vira 1 coluna, texto centralizado (igual ao
    padrão dos outros grids do site), loop menor (220px) com badges
    centralizadas em vez de alinhadas à esquerda.
  Validado: sem erros de console nas 4 páginas, contagem de `[data-reveal]`
  inalterada em `solucoes.html` (a `data-reveal` já existia na sessão
  antes, só o conteúdo interno mudou), overflow horizontal em mobile
  (390px) confirmado como o MESMO bug pré-existente do menu hambúrguer
  (checado via inspeção de elemento, não introduzido por essa mudança),
  loop confirmado girando via 2 screenshots com ~3s de intervalo.
- **Início da fase "copy oficial" — SEO aplicado, direção de página única
  confirmada**. Usuário avisou que recebeu a copy oficial da Pruxor e vai
  reconstruir o site sessão a sessão, mandando conteúdo/instruções aos
  poucos (não tudo de uma vez). Primeira instrução: aplicar o SEO
  fornecido.
  - **Meta tags de `index.html` atualizadas** com o briefing oficial:
    `<title>Pruxor | Sistema de Gestão de Obras para Construtores</title>`
    e `<meta name="description" content="Controle o financeiro de cada
    obra, faça diário de obra com fotos e orce com a tabela SINAPI. Teste
    grátis de 15 dias, sem cartão e sem fidelidade.">`. Palavra-chave
    primária ("sistema de gestão de obras") e secundárias ("controle
    financeiro de obras", "diário de obra", "orçamento de obra SINAPI")
    anotadas pra guiar o copy das próximas seções — não inseridas como
    `<meta name="keywords">` (prática obsoleta, ignorada por buscadores
    modernos); servem de referência temática, não de tag literal.
  - **Direção confirmada pelo usuário: site vira landing page única, só
    `index.html`** — `sobre.html`/`solucoes.html`/`planos.html` saem da
    arquitetura do site, mas ficam no disco por enquanto (pedido
    explícito: "não apague as outras páginas agora"). Não mexer
    proativamente nessas 3 páginas até vir instrução de remoção; todo
    trabalho novo é em `index.html`.
  - Novidade revela que essas 3 páginas eram baseadas em conteúdo
    inferido/aproximado (extraído do site de referência e do
    pruxor.com.br na época) — a copy oficial que está chegando agora
    substitui esse conteúdo aproximado por texto real fornecido pelo
    usuário, seção por seção.
- **1ª seção da copy oficial: HERO reescrito por completo**. Usuário
  mandou eyebrow, H1, subheadline, CTA (texto + link) e microcopy prontos.
  - **Eyebrow novo**: `.hero__eyebrow`, reaproveita `badge badge--inverse`
    (mesmo padrão já usado em "Sobre a Pruxor" na `.about-outcomes` —
    único precedente de rótulo em fundo escuro no site; não existia
    `.eyebrow` em fundo escuro antes, então virou o ponto de partida em
    vez de criar uma variante nova `.eyebrow--inverse`).
  - **H1/subheadline**: texto oficial aplicado literalmente. Destaquei
    "lucro antes de ela acabar." com `text-accent-inverse` (mesmo padrão
    sitewide de destacar a cláusula final/chave do heading) — decisão de
    estilo minha, a copy em si não veio marcada, mas segue o padrão já
    consistente em todos os outros headings do site.
  - **CTA virou link externo direto, sem formulário**: o antigo
    `<form class="demo-form">` (captura de e-mail, nunca teve JS de
    verdade por trás — só CSS decorativo pra um estado "success" que
    nunca era ativado) foi removido por completo (HTML + CSS,
    `.demo-form`/`.demo-form__field`/`.demo-form__success` deletados do
    `style.css`, dead code cleanup). Virou um `<a class="btn btn--primary
    hero__cta" href="https://www.pruxor.com/login">Começar meu teste
    grátis</a>` simples — o briefing já veio com uma URL de destino real,
    não fazia sentido manter a captura de e-mail decorativa.
  - **Bug real achado e corrigido no caminho**: `.hero__microcopy` (nova,
    pro texto "15 dias de acesso completo...") nasceu sem `text-shadow` —
    ficou ilegível na faixa mais clara do degradê da hero (mesmo problema
    de contraste já documentado pro heading/parágrafo, esquecido dessa
    vez pro elemento novo). Corrigido subindo a opacidade (0.6→0.75) e
    adicionando a mesma receita de `text-shadow` escuro sutil.
  Validado: link do CTA aponta pra URL certa (checado via
  `getAttribute('href')`), sem erros de console, sem `.demo-form` sobrando
  em lugar nenhum do código, microcopy legível (confirmado via screenshot
  recortado só do elemento), testado em 1440/1024/390px.
- **2ª seção da copy oficial: "Sobre" virou prova social e moveu pra logo
  abaixo da hero**. Usuário pediu (1) mover a seção `#sobre` inteira pra
  ser a primeira depois da hero (antes ficava entre Soluções e
  Integrações) — "é apenas trocar de lugar, o resto do site continua da
  mesma forma"; (2) trocar o conteúdo pra virar prova social (stats reais
  de mercado, não mais os números antigos); (3) pediu explicitamente pra
  eu melhorar o texto do subtítulo (a copy que ele mandou pro subheadline
  era literalmente igual ao parágrafo que já existia — entendi que ele
  queria uma versão nova que funcionasse melhor como ponte pra prova
  social, não a reafirmação do texto atual).
  - **Reordenação**: bloco `<section id="sobre">` inteiro cortado de onde
    estava (entre a feature-showcase/Soluções e Integrações) e colado
    como primeira seção dentro de `.layout-container`, antes do bloco
    "PROBLEM". Nova ordem confirmada via Playwright (`querySelectorAll`
    na ordem do DOM): Hero → Sobre → Problema → divisor → Soluções →
    Integrações → Segurança → Full width feature → Diferenciais → FAQ →
    CTA final. "Problema" continua seguido direto por "Soluções" — regra
    de fluxo problema→solução preservada, só a posição da Sobre mudou.
  - **Navbar/footer reordenados nas 4 páginas** (regra do `CLAUDE.md`:
    ordem dos itens-âncora segue a ordem das seções, reordenar sempre que
    mudar seções): "Sobre" passou a vir primeiro — `Sobre → Soluções →
    Planos → Integrações → Segurança → FAQ`. Como o header/footer é
    compartilhado (mesmo HTML copiado nas 4 páginas), a troca foi aplicada
    em `index.html`, `sobre.html`, `solucoes.html` e `planos.html` — não
    só na página onde a seção mora de verdade — pra não deixar a
    navegação inconsistente entre páginas (mesmo essas 3 últimas estando
    "descontinuadas" da arquitetura, ver decisão da fase de copy oficial
    acima, o header delas ainda é renderizado igual e precisa continuar
    coerente).
  - **Subtítulo reescrito** (melhoria pedida, não just colar a copy
    recebida): "Hoje, centenas de empresas técnicas já trocaram a
    planilha pela Pruxor para ganhar controle real sobre cada obra — e os
    números abaixo mostram esse resultado." — conecta a origem (headline
    "nasceu de uma dor real do mercado") ao presente (resultado real,
    prova social), e a frase final ("os números abaixo mostram esse
    resultado") funciona como ponte explícita pro bloco de stats logo em
    seguida.
  - **Stats: de 4 números antigos pra 3 números reais de prova social**
    — "2.000+ Obras acompanhadas", "500+ Construtores e empresas
    atendidos", "95% Satisfação dos clientes" (`data-count-to`/
    `data-count-suffix` atualizados, `initCountUp` não precisou de
    nenhuma mudança de lógica). Layout mobile (`.about-outcomes__stats`
    abaixo de 767px) mudou de "grid 2x2" pra "coluna única" — com 3 stats
    um grid de 2 colunas deixaria o 3º item sozinho numa linha
    desalinhada; coluna única funciona bem pra qualquer contagem futura
    de stats, mais robusto que hardcodear frações de largura pro número
    exato de itens de hoje.
  - **CTA trocado**: era `<a href="sobre.html">Saiba mais sobre a
    Pruxor</a>`; virou `<a href="https://www.pruxor.com/login">Começar
    meu teste grátis</a>` — mesmo texto/link do CTA da hero (consistência
    entre os dois primeiros pontos de conversão da página).
  Validado: ordem do DOM confirmada via script, nav/footer idênticos nas
  4 páginas, count-up dispara certo ao rolar até a seção (testado via
  `scrollIntoViewIfNeeded`, valores finais "2.000+"/"500+"/"95%"
  corretos), sem overflow novo em nenhuma largura (320–1440px, exceto o
  bug pré-existente do menu mobile em 390px, já documentado), sem erros
  de console nas 4 páginas, `data-reveal` 100% visível.
- **3ª seção da copy oficial: "O problema" reescrita, com fechamento +
  CTA novos**. Usuário mandou título, texto de abertura, os 4 cards e um
  parágrafo de fechamento com CTA que não existia antes na seção.
  - **Título/abertura**: aplicados literalmente. Título segue o mesmo
    padrão de destaque (1ª frase normal, 2ª frase inteira em
    `.text-accent`) já usado antes nessa seção e no site inteiro.
  - **4 cards**: textos aplicados literalmente. **Ícones trocados** (não
    pedido explicitamente, mas os ícones antigos eram específicos demais
    dos temas anteriores — ex: ícone de "engrenagem circular" pra
    "Retrabalho constante" não fazia sentido nenhum sob "Financeiro no
    achismo"). Novos: carteira (Financeiro no achismo), grid/planilha
    (Planilha que não acompanha o ritmo), balão de chat com "?" (Cliente
    cobrando posição), dado de 5 pontos (Orçamento na intuição — remete a
    "aposta"). Mantive o estilo de ícone já usado sitewide (linha fina
    1.5px, `viewBox 24x24`, `currentColor`).
  - **Fechamento novo** (`.problem__closing`, classe nova — a seção antes
    terminava só nos cards): parágrafo centralizado + CTA
    "Quero organizar minhas obras". **O briefing não deu link pra esse
    CTA especificamente** (diferente da hero e da "Sobre", que vieram com
    URL explícita) — usei a mesma `https://www.pruxor.com/login` por
    consistência com os outros CTAs de conversão já linkados, sinalizei
    pro usuário como suposição minha, e ele confirmou na sequência que é
    o link certo mesmo — nenhuma mudança de código foi necessária.
  Validado: CTA aponta pra URL usada (checado via `getAttribute('href')`),
  sem erros de console, `data-reveal` 100% visível (total subiu de 21 pra
  22 por causa do novo bloco de fechamento), testado em 1440px e 390px.
- **4ª seção da copy oficial: "Feature showcase" virou "5 módulos com
  prints"**. Usuário mandou um print da sessão atual (2 etapas, cada uma
  com heading + checklist de 3 sub-itens) e pediu manter o layout como
  está, só trocando o conteúdo por um título/abertura de sessão novos +
  5 blocos (cada um = 1 módulo do produto: financeiro, diário de obra,
  orçamento SINAPI, gestão de obras, estoque) + 1 CTA único.
  - **Título/abertura viraram um `.section-header` de verdade**, fora da
    área presa (sticky) — antes não existia isso: o heading da 1ª etapa
    ("Mais do que funções...") funcionava como um "título de fachada" da
    sessão inteira, mas sumia ao trocar de etapa. Agora tem um `<h2>`
    fixo (sempre visível, independente do módulo ativo no crossfade),
    igual ao padrão já usado no header da sessão "Problema" logo acima.
  - **De "2 etapas com checklist de 3 itens" pra "5 etapas de 1 módulo
    cada"**: `initFeatureShowcase` (js/main.js) já contava
    `.feature-showcase__block` no DOM automaticamente
    (`steps = querySelectorAll(...).length`) — zero mudança de JS pra ir
    de 2 pra 5 etapas, só adicionar 3 blocos/painéis novos com
    `data-step="3/4/5"`. Cada bloco agora é heading (`<h3>`, não mais
    `<h2>` — o `<h2>` de verdade passou pro `.section-header`) +
    1 parágrafo (`.feature-set__paragraph`, classe nova) + 1 CTA — a
    antiga `<ul class="feature-set__list">` (checklist de 3 sub-itens por
    etapa) não fazia mais sentido com 1 módulo por etapa, então sumiu.
    **Dead code cleanup**: `.feature-set__list`/`__list-item`/`__icon`/
    `__item-heading`/`__item-paragraph` (CSS) removidos por ficarem sem
    nenhum uso em lugar nenhum do código (confirmado via grep no repo
    inteiro antes de remover).
  - **Placeholders com rótulo por módulo**: como ainda não temos os
    prints reais de cada tela, cada `.feature-showcase__visual-panel`
    (crossfade desktop) ganhou um `<span class="feature-showcase__visual-label">`
    dizendo qual tela vai entrar ali ("Tela do financeiro", "Tela do
    diário de obra" etc.) — sem isso, 5 caixas cinzas idênticas ficariam
    indistinguíveis entre si. Cada `data-step` ganhou uma variação sutil
    de ângulo do mesmo gradiente de marca (`--brand-10`/`--bg-subtle`,
    mesma dupla de tokens já usada no step 2 da versão antiga) — nunca
    uma cor nova, mesma disciplina do `.card--vivid`.
  - **Bug real evitado no fallback mobile (achado antes de dar por
    concluído, não pedido)**: a versão mobile já existente só mostrava a
    imagem do `.is-active` (sempre a 1ª etapa) acima de TODOS os blocos
    de texto empilhados — tolerável com 2 etapas genéricas, mas com 5
    módulos sendo telas de fato diferentes (financeiro ≠ estoque), isso
    ficaria claramente errado: a imagem do financeiro continuaria fixa no
    topo enquanto o texto descia até "Controle de estoque" lá embaixo.
    Corrigido escondendo `.feature-showcase__visual-col` inteira no
    mobile (`display:none`) e dando a cada bloco sua PRÓPRIA miniatura
    (`.feature-showcase__block-visual`, escondida no desktop) logo acima
    do próprio heading — confirmado via screenshot que cada módulo agora
    desce com a miniatura certa emparelhada (ex: "Tela de orçamento" bem
    acima de "Orçamento com a tabela SINAPI").
  - **CTA único**: os 2 botões antigos (`Experimente gratuitamente` +
    `Ver todas as soluções` → `solucoes.html`) viraram só
    `Testar tudo isso grátis por 15 dias` → `https://www.pruxor.com/login`
    (mesmo link já confirmado pelo usuário antes) — `solucoes.html` está
    sendo descontinuada mesmo, não fazia sentido manter o link.
  Validado: scroll completo pela sessão confirma as 5 etapas alcançáveis
  em ordem (`querySelectorAll` amostrado a cada 30px de scroll pelo track
  inteiro), screenshot de cada uma das 5 mostra heading/parágrafo/rótulo
  do painel corretos, sem erros de console, `data-reveal` 100% visível
  (total 22→23 pelo novo `.section-header`), fallback mobile com
  miniatura+texto pareados testado em 390px.
- **5ª seção da copy oficial: "Como funciona", sessão NOVA (não substitui
  nenhuma outra)**. Usuário deu título + 3 passos numerados + CTA, e
  pediu explicitamente pra não substituir nada — só criar uma sessão nova
  logo abaixo da "Soluções" (módulos) que tinha acabado de ser ajustada,
  "seguindo o design do site atual".
  - **Reaproveitou o `.card--vivid` de "Problema" sem nenhum CSS de card
    novo** — mesmo spotlight, sparkles, hover, textura de grade. Único
    componente novo de verdade: `.card__icon--number` (variante do
    `.card__icon` já existente, mesma caixa 44×44px e mesma animação
    contínua de float+glow, só troca o SVG por um número 1/2/3 — a cor já
    vinha de graça do `.card__icon` base). Grid próprio
    (`.how-it-works__steps`) só muda de 4 pra 3 colunas.
  - **Título com eyebrow "Como funciona"** (nome da própria sessão, igual
    ao padrão já usado — "Soluções" como eyebrow do módulo anterior,
    "O problema" no anterior a esse) — sem parágrafo de abertura dessa
    vez, já que o briefing só deu um título curto.
  - **Sem item no nav/âncora própria** — mesmo padrão de "Problema" e
    "Diferenciais", que também não têm entrada no menu. Não foi pedido
    pelo usuário, então não inventei uma.
  - **CTA** ("Criar minha conta grátis" → mesma URL de login já usada em
    todo o resto da página) centralizado abaixo dos 3 cards
    (`.how-it-works__closing`).
  Validado: screenshot desktop e mobile confirmam os 3 cards com número/
  título/parágrafo corretos e o mesmo tratamento visual de "Problema",
  CTA aponta pra URL certa, sem erros de console, `data-reveal` 100%
  visível (total 23→28: 1 header + 3 cards + 1 fechamento).
  - **Redesenho imediato, mesma sessão**: usuário mandou um print de
    referência (site em inglês, "Learn More About Process" — título +
    subtítulo centralizados, 3 círculos claros com ícone, ligados por um
    traço tracejado, número pequeno acima-esquerda de cada círculo) e
    pediu pra trocar os cards por isso. Trocado por completo: os 3
    `.card card--vivid` viraram `.how-it-works__timeline` (linha do
    tempo horizontal) — única sessão do site que foge do card escuro
    padrão, por pedido explícito com referência visual. Título/eyebrow
    viraram centralizados (`section-header--center`) pra bater com o
    print; não adicionei o parágrafo de abertura do print (só o título)
    porque o briefing original da sessão não tinha esse texto — copiar só
    o LAYOUT do print, não inventar copy que não veio.
    - **Círculo + número + ícone**: `.how-it-works__icon-wrap` (posição
      relativa) contém o número (`.how-it-works__step-number`, canto
      superior-esquerdo, absoluto) e o círculo (`.how-it-works__step-icon`,
      88px, fundo branco, borda tracejada, ícone na cor de marca — nunca
      copiando o teal do print de referência).
    - **Traço tracejado sem JS**: `::after` no `.how-it-works__icon-wrap`
      de cada passo (exceto o último) vai de `left:50%` (centro do
      próprio círculo) até `width: calc(100% + var(--space-l))` — como as
      3 colunas do grid (`repeat(3, 1fr)`) têm a mesma largura, isso
      alcança exatamente o centro do círculo seguinte, sem depender de
      medição em JS nem de largura fixa em px. Confirmado via
      `getBoundingClientRect` dos 3 círculos: os 2 espaçamentos entre
      centros deram exatamente iguais (432px em 1440px de viewport).
    - **Ícones novos** (pessoa/cadastro/foguete) desenhados no mesmo
      estilo de linha fina do resto do site — o ícone de "Cadastre sua
      primeira obra" reaproveita literalmente o mesmo SVG de checklist já
      usado antes em "Acompanhamento de obras" (solucoes.html), em vez de
      desenhar um novo do zero.
    - **`.card__icon--number` (da versão anterior) removido do CSS** por
      ficar sem nenhum uso depois da troca — dead code cleanup, confirmado
      via grep antes de remover.
    - Mobile: empilha os 3 passos em coluna e esconde o traço tracejado
      (não faz sentido uma linha horizontal entre itens empilhados).
    Validado: medição de geometria confirma o traço alcançando o próximo
    círculo com precisão de pixel, screenshot desktop e mobile conferem
    com o layout do print de referência, sem erros de console,
    `data-reveal` inalterado (mesma quantidade de elementos, só trocou o
    conteúdo interno).
  - **Ajuste fino: espaçamento entre o título e os passos**. Usuário
    reportou (com print) o header colado na linha do tempo. Medi via
    `getBoundingClientRect` (com o elemento revelado — medir ANTES de
    rolar até ele dá leitura errada, ver "Problemas e soluções" mais
    abaixo) e confirmei **0px de gap real**: nem `.section-header` nem
    `.how-it-works__timeline` tinham margin nenhuma entre si (headings/
    parágrafos do site inteiro têm `margin:0` por reset global, então sem
    uma regra explícita o espaço é mesmo zero). Corrigido com
    `.how-it-works__header { margin-bottom: var(--space-l) }` — mesmo
    respiro já usado entre header e conteúdo em "Problema" e "Soluções".
    Escopei numa classe nova (`how-it-works__header`, adicionada ao lado
    de `section-header--center` no HTML) em vez de mudar
    `.section-header--center` direto, porque essa classe genérica também
    é usada nos headers de página inteira de `sobre.html`/`solucoes.html`/
    `planos.html` — mudar ali teria efeito colateral fora do pedido.
- **Ajuste na sessão "Soluções" (módulos): header horizontal + tudo numa
  viewport só**. Usuário mandou print da sessão atual e pediu 3 coisas
  juntas: (1) heading à esquerda, parágrafo à direita, "nos dois
  extremos"; (2) esse conteúdo (heading+parágrafo) precisa ficar preso
  (sticky) junto com o resto, não rolar separado; (3) a sessão inteira
  precisa caber numa viewport só.
  - **Header moveu pra DENTRO da área sticky**: até então o
    `.section-header` (título+parágrafo empilhados) ficava FORA de
    `.feature-showcase__stage`, rolando normalmente antes do visitante
    chegar na parte presa — pedido explícito agora foi o oposto: o header
    vira `.feature-showcase__header`, entra DENTRO do stage, então fica
    preso junto com o módulo em crossfade.
  - **Virou layout horizontal**: `.feature-showcase__header` é
    `display:flex; justify-content:space-between;` — heading num filho
    (`.feature-showcase__header-heading`) e parágrafo no outro
    (`.feature-showcase__header-paragraph`), cada um ocupando uma ponta
    da linha (`space-between` já entrega "nos dois extremos" de graça,
    sem precisar de `margin-left:auto` ou truque parecido).
  - **`.feature-showcase__stage` precisou virar `flex-direction: column`**:
    antes só tinha 1 filho (o grid), então `display:flex` sem direção
    explícita (row, padrão) nunca importava; agora com 2 filhos (header +
    grid) empilhados, sem essa mudança os dois ficariam lado a lado na
    horizontal em vez de um em cima do outro.
  - **`min-height: 620px` do stage removido** (junto com o pedido de
    caber numa viewport só) — travar uma altura mínima alta empurraria o
    conteúdo pra fora da tela em telas mais baixas, o oposto do que foi
    pedido. `.feature-showcase__visual-col` também caiu de 460px pra
    400px de `min-height`, pra abrir espaço vertical pro header novo sem
    estourar a viewport.
  - **Validado por medição, não só visual**: `getBoundingClientRect()` do
    `.feature-showcase__stage` deu altura total de ~659px, confirmada
    cabendo dentro da viewport em 768px (altura de laptop comum), 800px,
    864px, 900px e 1000px — sem cortar nada em nenhuma delas. Confirmei
    também que as 5 etapas do crossfade continuam alcançáveis em ordem
    depois da mudança de `flex-direction`/remoção do `min-height`
    (`initFeatureShowcase` recalcula tudo dinamicamente via
    `getBoundingClientRect`, não tinha nada hardcoded pra quebrar).
  - Mobile (≤991px): `.feature-showcase__header` volta a empilhar
    (`flex-direction: column`) — layout horizontal só faz sentido em
    largura de desktop, mesmo padrão já usado em outros ajustes desta
    sessão de trabalho.
  Validado: sem erros de console, `data-reveal` inalterado (mesma
  quantidade de elementos, só o header mudou de posição/layout interno),
  testado em 768/800/864/900/1000px de altura e 390/1024/1440px de
  largura.
  - **Ajuste fino seguinte: alinhamento pela base**. Usuário mandou print
    anotado (seta + linha vermelha) mostrando que o parágrafo da direita
    deveria "descer" até alinhar com a base do heading da esquerda, em
    vez de começar no topo junto com ele. Trocado `align-items: flex-start`
    por `flex-end` em `.feature-showcase__header` — como é `justify-content:
    space-between` numa linha só, isso alinha os dois filhos pela borda
    de baixo em vez da de cima, sem precisar calcular nenhuma altura na
    mão. Removido também um `padding-top: 0.4em` que só fazia sentido no
    alinhamento antigo (pelo topo) e teria empurrado o parágrafo pra
    baixo da base certa se deixado. `text-align: left` explícito
    adicionado ao parágrafo (era implícito antes, herdado — deixado
    explícito por pedido do usuário, sem mudança visual real). Revalidado:
    stage ainda cabe nas mesmas alturas de viewport testadas antes
    (768–1000px), fallback mobile (empilhado) intocado, sem erros de
    console.
- **6ª seção da copy oficial: "Planilha vs Pruxor"**, sessão nova, logo
  abaixo de "Como funciona". Usuário mandou 2 prints: um com os dados da
  tabela comparativa (7 linhas, "Na planilha" vs "Na Pruxor") e outro de
  referência visual (card escuro "Outras Agências / V/S / ORIGUN" com
  linhas hachuradas à esquerda e destacadas com ícone de raio à direita,
  ligadas por um traço vertical) — pedido explícito: usar o MESMO fundo
  dos cards do site (não o verde do print) e seguir a estrutura do
  exemplo.
  - **`.compare`**: card escuro reaproveitando a identidade visual já
    estabelecida (`--color-ink` + textura de grade do `.about-outcomes`/
    `.card--vivid`) — zero cor nova introduzida, mesma disciplina de
    sempre nesse projeto (nunca copiar a paleta arbitrária de um print de
    referência).
  - **Header + linhas com o MESMO grid de 3 colunas**
    (`1fr 48px 1.15fr`), pra a coluna do meio (badge "VS" no header, traço
    divisor nas linhas) ficar alinhada verticalmente entre o cabeçalho e
    as 7 linhas abaixo.
  - **Textura diagonal só na metade "antes"** de cada linha
    (`repeating-linear-gradient(-45deg, ...)`, bem sutil) — imita o
    hachurado do print sem copiar a cor. A metade "depois" fica limpa,
    com um ícone de raio na cor de marca (não o verde do print) + texto
    em destaque.
  - **Logo da Pruxor no header reaproveita `.nav__logo-mark`** (o
    quadradinho roxo já usado na navbar) em vez de um ícone novo — mesmo
    elemento, sem inventar mais um asset visual.
  - **CTA**: "Quero fazer essa troca" → mesmo link de login usado no
    resto da página.
  - Mobile: linhas colapsam pra 1 coluna (traço vertical vira borda
    horizontal entre as duas metades), header também empilha ("Na
    planilha" + badge "VS" numa linha, "Pruxor" numa linha própria
    abaixo).
  Validado: CTA aponta pra URL certa, sem erros de console,
  `data-reveal` 100% visível (total 28→31: header + `.compare` +
  fechamento), overflow em mobile confirmado como o mesmo bug
  pré-existente do menu hambúrguer (não novo), testado em 1440px e 390px.
  - **Ajuste seguinte: mesmo bug de espaçamento de "Como funciona", 2ª
    vez**. Usuário reportou (com print) o header colado no card escuro —
    exatamente o mesmo problema já corrigido em "Como funciona" (h2/p com
    `margin:0` por reset global, `.section-header` sem `margin-bottom`
    próprio = 0px de gap real). Corrigido com uma classe nova
    (`.compare__intro`, ao lado de `.section-header` no HTML) +
    `margin-bottom: var(--space-l)`. **Registrado em `CLAUDE.md` como
    regra permanente** (já é a 2ª vez que esse exato oversight acontece):
    toda sessão nova com `.section-header` precisa de uma regra de
    `margin-bottom` própria desde a implementação inicial, não só depois
    que o usuário reportar o encostamento.
- **7ª seção da copy oficial: "Diferenciais" (comercial)**, sessão nova,
  logo abaixo de "Planilha vs Pruxor". Usuário deu título, subtítulo e 4
  cards (headline + subheadline cada), pedindo pra seguir o padrão de
  design do site.
  - **Reaproveitou o padrão de "Problema" quase 1:1**: `.section-header`
    (com `margin-bottom` já aplicado desde o início dessa vez — lição da
    rodada anterior colocada em prática, não esperei o usuário reportar)
    + grid de 4 `.card--vivid`, mesmo spotlight/sparkles/ícone animado.
    Classes do grid próprias (`.value-props__cards`) em vez de reusar
    `.problem__cards` — mesma receita de CSS, mas mantém a convenção do
    projeto de cada sessão ter suas próprias classes semânticas.
  - **4 ícones novos escolhidos** (não vieram no briefing): cadeado
    aberto (sem fidelidade), relógio (teste de 15 dias), camadas/losangos
    empilhados (acesso completo em todos os planos), capacete de obra
    (feita pra obra, não adaptada) — cada um pensado pra combinar com o
    tema da headline do card.
  - **Achado durante a implementação, sinalizado ao usuário**: já existe
    OUTRA sessão chamada "Diferenciais" mais abaixo na página
    (`.pinned-cards`, 5 cards sobre foco no setor/centralização/controle/
    redução de falhas/estrutura pra crescer) — agora existem DUAS sessões
    com o mesmo nome conceitual e eyebrow "Diferenciais", conteúdo
    diferente. Não removi nem renomeei nenhuma das duas (não foi pedido),
    só documentei em `CLAUDE.md` que a coexistência é conhecida e que uma
    das duas provavelmente será removida quando o usuário revisar a
    página inteira.
  Validado: sem erros de console, `data-reveal` 100% visível (total
  31→36: header + 4 cards), grid testado em 1440/800/390px (4→2→1
  colunas).
- **8ª seção da copy oficial: "Depoimentos"**, sessão nova, logo abaixo da
  "Diferenciais" comercial. Usuário mandou um print de referência (cards
  claros com aspas, texto, foto+nome+@handle, dots de paginação embaixo)
  + 5 depoimentos (texto e profissão reais, `[Nome]`/`[Cidade]` como
  parâmetro pra eu preencher) + pedido de layout: "carrossel em loop da
  direita pra esquerda, 1 por vez no mobile, até 3 no desktop".
  - **Nomes/cidades fictícios inventados** (pedido explícito): Marcos
    Ferreira (Belo Horizonte, MG), Rafael Souza (Curitiba, PR), André
    Martins (Campinas, SP), Eduardo Lima (Goiânia, GO), Fernando Costa
    (Porto Alegre, RS). Os 5 cargos do briefing já vieram todos no
    masculino ("Construtor", "Sócio de construtora" etc.) — usei nomes
    masculinos pra não criar um erro de concordância de gênero
    introduzindo um nome feminino num cargo redigido no masculino.
  - **Decisão própria, não perguntada antes: SEM foto realista de
    pessoa**. O projeto é 100% vanilla/SVG, nunca teve nenhum asset de
    imagem real (nem um `<img>` sequer no código) — introduzir 5 fotos de
    "pessoas fictícias" seria o primeiro asset de imagem de verdade do
    site inteiro, uma mudança de precedente que não me pareceu certo
    decidir sozinho no meio da implementação. Optei por avatar com
    iniciais coloridas (variação da cor de marca, mesma disciplina do
    `.card--vivid`) em vez de foto — funcionalmente cobre "tem uma
    identidade visual de pessoa ali", mas sinalizei pro usuário que, se
    ele quiser fotos de verdade (banco de imagens ou geradas por IA),
    isso é uma decisão de projeto maior (primeiro asset de imagem) que
    vale alinhar antes de implementar.
  - **Carrossel virou loop contínuo em CSS puro** (não um carrossel
    paginado com JS/dots clicáveis, como sugeria os "dots" do print) —
    interpretei "carrossel em loop da direita pra esquerda" como o padrão
    de marquee já usado no `.audience-loop` de `solucoes.html` (lista
    duplicada, `translateX` até -50%, sem fim), só horizontal. Sem dots
    de paginação (não fariam sentido funcional num loop automático sem
    "páginas" de verdade) — se o usuário queria um carrossel manual/
    paginado de verdade, precisa avisar que a interpretação foi outra.
  - **Cards reusam `.card--vivid`** (mesmo padrão dark de "Problema"/
    "Diferenciais"), com estrutura interna nova (ícone de aspas + texto +
    rodapé com avatar) — sem inventar um componente visual novo do zero.
  - Pausa no hover, `prefers-reduced-motion` respeitado, fade nas bordas
    via `mask-image` dentro do `.layout-container` normal (não full-bleed
    — testei um `margin` negativo primeiro pra fazer full-bleed, mas o
    valor não batia com `--container-gutter` real e a técnica não seguia
    o padrão do resto do site, então simplifiquei pra ficar dentro do
    container como tudo mais).
  Validado: loop confirmado girando (2 screenshots ~3s de intervalo),
  pausa no hover confirmada via `getComputedStyle` (transform idêntico
  antes/depois de 1s parado), sem erros de console, `data-reveal` 100%
  visível (total 36→38: header + `.testimonials__loop` — os cards dentro
  do loop não têm `data-reveal` próprio, mesma razão já documentada pro
  `.audience-loop`: evitar competir com o sistema de animação do próprio
  componente), overflow em mobile confirmado como o mesmo bug
  pré-existente do menu hambúrguer.
  - **Ajuste seguinte: hover cortado em cima/embaixo, 3ª vez que esse
    exato bug acontece**. Usuário reportou (com print) o brilho/lift do
    hover de um `.testimonial-card` sendo cortado nas bordas superior e
    inferior do carrossel. Causa raiz idêntica à já documentada no
    `.pinned-cards__viewport` (2 vezes antes: vertical e depois
    horizontal/"Pilares"): `.testimonials__loop` usava o shorthand
    `overflow: hidden` (recorta os DOIS eixos), mas só o eixo horizontal
    precisa recortar de verdade (pra esconder os cards saindo/entrando
    pelas bordas do loop) — o vertical só herdava isso à toa e cortava o
    `transform`/`box-shadow` do hover do `.card--vivid`. Corrigido com
    `overflow-x: hidden; overflow-y: visible;` (o eixo vertical vira
    `auto` de verdade só evita a scrollbar, mas MESMO ASSIM precisa de
    padding, pela mesma pegadinha da spec já documentada) +
    `padding: 50px 0 75px` (os MESMOS valores já usados no
    `.pinned-cards__viewport`, reaproveitados direto em vez de recalcular
    do zero). Sem padding horizontal — o corte lateral nas bordas do loop
    é intencional (mask-image já funde visualmente ali).
    **Registrado em `CLAUDE.md` como regra permanente** (3ª ocorrência do
    mesmo bug): qualquer container novo com `overflow` que tenha um
    `.card--vivid` dentro precisa desse tratamento desde a implementação
    inicial, não só depois que o usuário reportar.
    Validado: `getBoundingClientRect()` do card em hover (com a animação
    pausada via `animationPlayState` pra conseguir hoverar um card
    específico de forma confiável) confirma que o card fica inteiro
    dentro dos limites do container (`cardTop`/`cardBottom` dentro de
    `loopTop`/`loopBottom`), `getComputedStyle` confirma `overflowY:
    auto` (coagido pela spec, como esperado) mas sem cortar mais nada,
    screenshot confirma o brilho/borda do hover completo, sem erros de
    console, espaçamento header→cards revisado (não ficou excessivo com
    o padding novo).
- **9ª seção da copy oficial: "Planos"**, logo abaixo de "Depoimentos".
  Usuário deu título, subtítulo, o comportamento do toggle mensal/anual
  (com destaque "pague o equivalente a cerca de 10 meses"), os 4 planos
  completos (Starter/Duo/Pro/Elite, Pro em destaque) com preço mensal E
  anual REAIS pela primeira vez (à vista + parcelado + economia), uma
  faixa resumo abaixo dos cards e um bloco discreto sobre serviço de
  implementação. Print de referência (cards claros com degradê colorido)
  serviu só de inspiração de CONTEÚDO/estrutura — não copiei as cores,
  usei o componente que o projeto já tinha.
  - **Reaproveitou `.pricing-card`/`.pricing-grid`/`.billing-toggle` de
    `planos.html` sem nenhuma mudança de CSS de base** — só 1 grupo agora
    (não mais 2 categorias Construtor/Arquitetura), então
    `.pricing-group__header` não é usado nessa sessão nova.
  - **Toggle mensal/anual virou FUNCIONAL** (grande mudança — antes era
    só visual em todo o projeto, por nunca termos preço anual real):
    `initBillingToggle` (js/main.js) agora troca o texto de qualquer
    elemento com `data-monthly`/`data-annual` (valor e período) e alterna
    `.is-annual` nos `.pricing-card`, que mostra/esconde
    `.pricing-card__installment` (parcelamento) e `.pricing-card__savings`
    (economia) — ambos escondidos por padrão, só aparecem no anual.
    `planos.html` não ganhou esses atributos/classes (permanece
    descontinuada, sem investir esforço lá) — seu toggle continua só
    visual, sem quebrar (o seletor `[data-monthly]` simplesmente não
    encontra nada nessa página).
  - **Caso especial preservado literalmente**: o plano Duo não tem um
    valor de parcelamento exato no briefing ("ou 3x no cartão (valor
    conforme checkout)") — usei esse texto ao pé da letra em vez de
    calcular um valor (1447/3), já que o usuário claramente NÃO quis
    disclosear um número ali, diferente dos outros 3 planos que vieram
    com valor de parcela explícito.
  - **Bug real evitado antes de ir pro ar**: `.pricing-card` é flex
    column, então margens entre seus filhos diretos NÃO colapsam (somam)
    — diferente de siblings de bloco normal. Um `margin-top` que tentei
    adicionar direto em `.pricing-card__features` (pra dar respiro antes
    da lista de features nos cards novos, que não têm
    `.pricing-card__limit`) estava SOMANDO com o `margin-bottom` de
    `.pricing-card__limit` nos cards de `planos.html`, dobrando o
    respiro lá por engano. Corrigido escopando com
    `:has()` (`.pricing-card:not(:has(.pricing-card__limit))
    .pricing-card__features`), afetando só os cards novos.
  - **"Planos" ganhou `id="planos"` e o nav passou a apontar pra âncora**
    (`#planos`) em vez do arquivo `planos.html` direto — única sessão
    nova dessa fase que já tinha um item de nav antes (as outras
    "Diferenciais"/"Como funciona"/etc. nunca tiveram). Atualizado nos 4
    arquivos: `index.html` (nav+footer+CTA final "Ver planos", 4 pontos)
    e `sobre.html`/`solucoes.html`/`planos.html` (nav+footer, virou
    `index.html#planos` — inclusive o próprio link "Planos" DENTRO de
    `planos.html`, que antes apontava pra si mesmo).
  Validado: toggle testado programaticamente (clique mensal→anual→mensal)
  confirma os 4 valores mensais, os 4 valores anuais, os 4 textos de
  parcelamento (incluindo o caso especial do Duo), as 4 economias, e a
  volta pro mensal, tudo batendo com o briefing; `planos.html` confirmado
  ainda funcionando (toggle alterna estado, sem erros); clique no nav
  "Planos" confirmado navegando até a âncora certa; sem erros de console
  nas 4 páginas; `data-reveal` 100% visível (total 38→47: header + toggle
  + hint + 4 cards + faixa + bloco de implementação); grid testado em
  1440/800/390px (4→2→1 colunas), overflow mobile confirmado como o
  mesmo bug pré-existente do menu hambúrguer.
- **Remoção de 3 seções legadas sem copy oficial: Integrações ("Stack"),
  Segurança e a "Diferenciais" antiga (`.pinned-cards`, 5 cards sobre
  foco no setor/centralização/etc.)**. Usuário mandou 3 prints (uma de
  cada seção) e pediu, verbatim: "Remova essas 3 sessões que não devem
  estar mais no site." Diferente das 9 seções anteriores desta fase, essa
  não trouxe copy nova — era remoção pura das últimas 3 seções que ainda
  tinham conteúdo placeholder/aproximado (ERP/CRM/HR/API/SSO/BI fictícios,
  "Certificação A-D" fictícias, cards de diferencial genéricos) sem
  equivalente na copy oficial recebida até agora.
  - Removidas do `index.html`: as duas seções inteiras (`id="integracoes"`
    e `id="seguranca"`, comentários incluídos) entre "Planos" e "Full
    width feature"; e a seção `.pinned-cards` antiga entre "Full width
    feature" e "FAQ". A seção "Full width feature" (faixa escura "Feita
    para quem precisa tocar operação de verdade") ficava ENTRE Segurança
    e a Diferenciais antiga — não fazia parte da remoção, foi preservada
    intacta no meio das duas.
  - Nav (`.nav__list`/`.nav__list--mobile`) e footer (`.footer__nav-links`)
    perderam os itens "Integrações"/"Segurança" nas 4 páginas (em
    `sobre.html`/`solucoes.html`/`planos.html` eram links
    `index.html#integracoes`/`index.html#seguranca`, mesmo padrão
    compartilhado de header/footer). Ordem restante do nav:
    Sobre → Soluções → Planos → FAQ.
  - CSS removido por completo (dead code, confirmado sem uso em nenhuma
    das 4 páginas via grep antes de apagar): `.integrations__grid`,
    `.integrations__list(-item)`, `.integrations__collage`,
    `.integrations__chip`; `.security` (bg+radius), `.security__grid`,
    `.security__list(-item)`, `.security__cards`, `.security-card` — e
    os respectivos media queries de 991px de cada um.
  - **`.pinned-cards__*` e `.card`/`.card--vivid` foram preservados
    intactos** — mesmo com a instância do index removida, o componente
    genérico continua em uso em `sobre.html` (Pilares) e `solucoes.html`
    (Soluções + Diferenciais), além de outras seções do próprio
    `index.html` (Problema, Diferenciais comerciais, Depoimentos). Nenhum
    JS precisou mudar: `initPinnedCards` já detecta instâncias via
    `querySelectorAll`, simplesmente passou a encontrar 1 a menos no
    `index.html`; não havia JS específico de Integrações/Segurança (eram
    seções estáticas).
  - **Resolve a nota "duas sessões Diferenciais coexistem"** (levantada
    na 7ª seção da copy oficial): com a antiga removida, só resta UMA
    "Diferenciais" no site — a comercial (`.value-props`, 4 cards sobre
    fidelidade/teste/planos/produto).
  Validado via Playwright nas 4 páginas: zero erros de console; zero
  links remanescentes pra `#integracoes`/`#seguranca` (checado via
  seletor `a[href*=...]`); `.pinned-cards__track` presente em
  `sobre.html` (1) e `solucoes.html` (2), ausente em `index.html`/
  `planos.html` (esperado); os 37 elementos `data-reveal` do `index.html`
  chegam a 100% visível com scroll pausado o bastante para o
  `IntersectionObserver` acompanhar (uma varredura inicial mais rápida
  deu falso negativo de 2/37 — artefato do próprio script de teste, não
  bug real, confirmado refazendo com scroll mais lento). (2026-08-22)
- **10ª/11ª seção da copy oficial: FAQ reescrito + CTA final trocou de
  seção e ganhou copy nova**. Usuário mandou print da sessão
  "Feita para quem precisa tocar operação de verdade." (`.full-width-feature`,
  ainda na posição antiga, entre Planos e FAQ) e pediu pra mover ela pra
  depois do FAQ com a copy do briefing "11. CTA FINAL"; na mesma mensagem,
  mandou as 9 perguntas/respostas novas do FAQ.
  - **FAQ**: as 6 perguntas antigas (genéricas, ex: "A Pruxor é só um
    CRM?") foram substituídas 1:1 pelas 9 do briefing — mesma estrutura
    `.faq-item`/`data-accordion-item`, zero mudança de CSS/JS, só troca
    de conteúdo (heading/subtítulo do header do FAQ não mudaram).
  - **CTA final**: a peça mais delicada foi decidir QUAL seção vira "a"
    CTA final, já que o index tinha duas seções de fechamento parecidas:
    `.full-width-feature` (fundo `--color-ink`, a do print) e
    `.call-to-action` (fundo roxo sólido, com 2 botões "Experimente
    gratuitamente"/"Ver planos", ainda com copy antiga/inferida). O
    print do usuário bateu inequivocamente com `.full-width-feature`
    (card arredondado, fundo escuro — visualmente muito diferente do
    roxo full-bleed do `.call-to-action`). Ação: moveu
    `.full-width-feature` pra depois do FAQ (onde `.call-to-action`
    estava) e REMOVEU `.call-to-action` do `index.html` por completo —
    não fazia sentido manter duas seções de fechamento consecutivas, e a
    copy nova do briefing já tinha o formato completo de um CTA final
    (título, texto, CTA primário, microcopy, CTA secundário). A classe
    `.call-to-action` em si não foi tocada no CSS — `sobre.html`,
    `solucoes.html` e `planos.html` continuam usando sua própria instância
    dela, com conteúdo independente, intocado.
  - **3 elementos novos dentro de `.full-width-feature`** (só a instância
    do index — a variante `--audience` de `solucoes.html` não ganhou
    nada disso): `.full-width-feature__cta-group` (wrapper `flex-direction:
    column` com `gap` menor que o gap do container pai, pra aproximar o
    CTA primário da microcopy — mesmo problema/solução já usado no hero,
    onde `.hero__microcopy` também precisa ficar mais perto do botão do
    que o espaçamento padrão entre heading/parágrafo/CTA permitiria),
    `.full-width-feature__microcopy` (reaproveita a mesma paleta de
    opacidade do já existente, mas nunca usado no index,
    `.call-to-action__caption`) e `.full-width-feature__secondary-cta`
    (link sublinhado, fora do cta-group, com gap normal — visualmente mais
    "separado", combinando com o tom de pergunta-à-parte "Ainda com dúvida?
    Fala com a gente no WhatsApp").
  - **Assunção sinalizada, não resolvida**: o CTA secundário é
    explicitamente "o único ponto de WhatsApp da página" segundo o
    usuário, mas o briefing não trouxe o número/link real — usei `href="#"`
    como placeholder (mesmo padrão já usado em botões sem link definido
    no restante do site, ex: "Solicitar demonstração" do header) em vez
    de inventar um número de WhatsApp, que seria uma informação de negócio
    fabricada, não uma escolha de copy/design. **Substituir por
    `https://wa.me/55...` (ou o link que o usuário de fato usa) assim que
    ele for informado** — não é uma pendência de copy, é a única coisa
    literalmente faltando pra essa sessão funcionar de ponta a ponta.
  Validado via Playwright: ordem final das seções em `<main>` confirmada
  (`... planos → faq → full-width-feature`); 9 perguntas no FAQ
  (`.faq-item` count); accordion continua abrindo o 1º item por padrão e
  alternando ao clicar (comportamento do `initAccordion`, sem mudança);
  heading/CTA primário (href correto pro login)/microcopy/CTA secundário
  do novo CTA final todos conferidos via `textContent`/`getAttribute`;
  screenshot da sessão renderizada conferida visualmente; zero erros de
  console. (2026-08-22)
- **12ª seção da copy oficial: RODAPÉ** — contato + links legais, ícones
  sociais antigos removidos. Usuário deu: logo+tagline (já batia
  literalmente com o que já existia, sem mudança), "Contato:
  contato@pruxor.com.br | Instagram @sistemapruxor", "Links legais:
  Política de Privacidade | Termos de Uso", copyright (já batia) e uma
  instrução explícita: sem WhatsApp no rodapé, canal fica só no CTA final.
  - Como o rodapé é componente COMPARTILHADO pelas 4 páginas (mesma regra
    de propagação já usada pra navbar), a mudança foi replicada em
    `index.html`/`sobre.html`/`solucoes.html`/`planos.html`, ajustando só
    os hrefs (`#sobre` vs `index.html#sobre`, igual ao padrão já
    existente).
  - Nova coluna `.footer__contact-links` em `.footer__top` (ao lado de
    brand e nav-links): e-mail (`mailto:`) e Instagram (URL inferida a
    partir do handle dado — `instagram.com/sistemapruxor`, `target="_blank"`),
    separados por um `.footer__divider` (traço de 1px, técnica de divisor
    visual já usada em `.compare__divider` — nunca caractere "|" literal
    digitado, pra seguir o padrão do resto do site).
  - `.footer__social` (ícones de LinkedIn/X, sempre `href="#"`,
    placeholder/inferido desde antes da copy oficial) REMOVIDO por
    completo (CSS + HTML nas 4 páginas, confirmado sem uso via grep antes
    de apagar) e substituído por `.footer__legal-links` ("Política de
    Privacidade" | "Termos de Uso") dentro de `.footer__bottom`, ao lado
    do copyright — drop-in no lugar do social, mesmo
    `justify-content: space-between` do container, sem reestruturar nada.
  - **Bug real achado e corrigido antes de finalizar**: no mobile
    (≤767px), `.footer__contact-links` quebra em 2 linhas (e-mail é longo
    demais pra caber ao lado do Instagram em 390px) — sem tratamento
    extra, o `.footer__divider` ficava sozinho e órfão no fim da 1ª
    linha, entre os dois links quebrados. Corrigido empilhando a lista em
    coluna e escondendo o divisor nesse breakpoint (mesma lição já
    registrada pro `.compare__divider`, que também some no mobile quando
    o conteúdo empilha).
  - **Assunções sinalizadas, ambas sem página/link real por trás**: (1)
    URL do Instagram foi inferida a partir do handle `@sistemapruxor`
    dado pelo usuário (`instagram.com/<handle>` é convenção universal do
    Instagram, não uma invenção de dado de negócio como seria um número
    de telefone) — risco baixo, mas ainda vale confirmar se o handle bate
    exatamente com o perfil real. (2) "Política de Privacidade" e "Termos
    de Uso" usam `href="#"` porque essas páginas não existem no site e
    criar novas páginas não foi pedido explicitamente (regra do projeto:
    não criar rotas novas sem pedido explícito) — ficam como placeholder
    até o usuário fornecer conteúdo ou pedir a criação das páginas.
  - **Não removido**: `.footer__nav-links` (Sobre/Soluções/Planos/FAQ) —
    o briefing não pediu pra tirar a navegação do rodapé, só adicionar
    contato/legal ao lado dela.
  Validado via Playwright nas 4 páginas: contact-links e legal-links
  presentes com texto/href corretos, `.footer__social` ausente (grep + DOM
  query), zero erros de console, zero overflow horizontal introduzido
  pela mudança (confirmado isolando: escondendo `.site-footer` inteiro via
  `display:none` o `scrollWidth` do documento não muda — o overflow de
  ~20px que aparece em 390px é o bug de hambúrguer JÁ documentado em
  "Pendências", pré-existente e sem relação com o rodapé). (2026-08-22)
- **"MAPA DE LINKS" — resolveu o WhatsApp pendente, trouxe checkouts
  parciais da Greenn, decisão explícita de não mexer nos cards de plano
  ainda**. O usuário mandou (mensagem duplicada por interrupção, mesmo
  conteúdo nas duas): link real de todos os CTAs de teste grátis
  (`https://www.pruxor.com/login`, já usado em todo o site — só
  confirmação, sem mudança necessária), o WhatsApp do CTA final
  (`https://wa.me/5521966616597` + mensagem pré-preenchida "Olá, vim do
  site e quero saber mais sobre o Sistema Pruxor."), e links de checkout
  Greenn pra assinatura mensal de 3 dos 4 planos (Starter/Pro/Elite) —
  Duo (mensal e anual) e os checkouts anuais de Starter/Pro/Elite ainda
  não existem ("a criar"/"a coletar").
  - **WhatsApp**: resolveu a pendência sinalizada na sessão anterior
    (CTA final). Mensagem codificada via `encodeURIComponent` (não
    digitada à mão, pra garantir acentuação/pontuação corretas na URL) —
    resultado: `%C3%A1` (á), `%2C` (vírgula), `%20` (espaço), ponto final
    sem encoding (não precisa). Link ganhou `target="_blank" rel="noopener"`,
    mesmo padrão do link do Instagram no rodapé.
  - **"Entrar" (nav desktop+mobile, 4 páginas)**: não estava explícito no
    mapa, mas é literalmente a mesma URL de login já usada em todo CTA de
    teste grátis do site — apliquei por analogia direta, não como
    invenção de link novo.
  - **Pergunta feita ao usuário antes de mexer nos cards de plano**: os 4
    `.pricing-card__cta` hoje dizem "Começar teste grátis" e apontam pro
    login, iguais entre si. Os links Greenn deram munição pra uma decisão
    de produto (esses botões deveriam virar "assinar" quando o checkout
    existir?) que não dava pra resolver sozinho — perguntei com 3 opções
    (trocar só o link mantendo o texto / trocar link e texto pra
    "Assinar" / não mexer ainda) e o usuário escolheu explicitamente
    **não mexer nos cards ainda**, guardando os 3 links Greenn como
    referência. **Os `pricing-card__cta` dos 4 planos continuam
    idênticos a antes, sem nenhuma mudança de href ou texto** — só peguei
    os links de referência pra não perdê-los, registrados aqui e no
    CLAUDE.md pra quando o usuário quiser aplicá-los (provavelmente
    esperando o conjunto Duo+anuais ficar completo).
  Validado via Playwright: `href` do "Entrar" correto nas 4 páginas
  (desktop+mobile), `href`/mensagem decodificada do WhatsApp conferidos,
  zero erros de console. Nenhuma mudança nos pricing cards (confirmado
  que os 4 continuam com "Começar teste grátis" → login, por decisão
  explícita do usuário). (2026-08-22)
- **Cor do título e do preço dos cards de plano, igual ao badge "Mais
  popular"**. Usuário mandou print anotado do card "Pruxor Pro" (sessão
  Planos do index) pedindo pra trocar a cor do título ("Pruxor Pro") e do
  preço ("R$297") pra mesma cor do badge "Mais popular" — que é
  `var(--color-brand)` (fundo do badge; o texto do badge em si é branco,
  então "a mesma cor" só faz sentido como o roxo de fundo, não o branco).
  Ajustado na regra BASE de `.pricing-card__name`/`.pricing-card__amount`
  (não um seletor escopado só pro `--featured`), porque "Nos planos"
  (plural) leu como pedido de consistência pra fileira toda, não exclusivo
  do card com o badge — e o projeto já tinha precedente disso
  (`.pricing-card__savings` já usava `--color-brand` em todos os 4 cards
  antes desse ajuste). Como `.pricing-card`/`.pricing-grid` é componente
  compartilhado, a mudança de CSS por si só já propagou pros cards de
  `planos.html` também (2 grupos, Construtor e Arquitetura e Design) sem
  precisar editar HTML lá — confirmado via screenshot que ficou consistente
  nas duas páginas. `.pricing-card__period` ("/mês") não mudou, continua
  cinza (`--text-tertiary`) de propósito, pra o número seguir sendo o
  elemento mais forte visualmente. Validado via Playwright:
  `getComputedStyle` confirma `rgb(81, 79, 238)` (equivalente a
  `#514fee`) em nome+preço dos 4 cards E no `background-color` do badge,
  batendo exatamente; zero erros de console. (2026-08-22)
  - **Correção imediata**: a leitura de "Nos planos" (plural) como pedido
    pra fileira toda estava ERRADA — usuário corrigiu na mensagem
    seguinte: "Essa alteração da cor, é apenas para a tabela de planos do
    'Pruxor Pro'". Revertido a regra base de `.pricing-card__name`/
    `__amount` pro estado original (sem cor própria, herda a cor de texto
    padrão) e a cor de marca virou um seletor composto,
    `.pricing-card--featured .pricing-card__name`/
    `.pricing-card--featured .pricing-card__amount` — mesmo padrão que
    `.pricing-card--featured`/`.pricing-card__badge` já usam pra dar
    tratamento visual exclusivo ao card em destaque (border/box-shadow/
    badge), agora estendido pra cor de nome+preço. Validado de novo via
    Playwright: só "Pruxor Pro" (`--featured`) sai com
    `rgb(81, 79, 238)`; Starter/Duo/Elite voltam pro
    `rgb(7, 6, 40)` (`--color-ink`, cor de texto padrão) — conferido nos
    4 cards do index e (por herança do mesmo componente compartilhado)
    também nos 2 cards `--featured` de `planos.html`. (2026-08-22)
- **Início de rodada de ajustes focados SÓ EM MOBILE** — usuário avisou
  explicitamente antes de começar: "Tudo que vou falar aqui será
  referente apenas a mobile" (2026-08-22). Diferente da fase de copy
  oficial (seção por seção, conteúdo novo), essa rodada é sobre polimento
  visual/responsivo do que já existe, só na faixa mobile — não mexer em
  desktop/tablet a menos que pedido.
  - **1º ajuste: reduzir a fonte do H1 da hero no mobile**. Usuário
    mandou print do hero em ~390px mostrando o H1 grande demais (3 linhas
    de texto grande dominando a tela) e pediu pra diminuir, sem
    especificar tamanho exato ("veja um tamanho que fica bom"), e marcou
    isso como **padrão pra qualquer H1 do site no mobile**, não só o
    hero. Hoje `.hero__heading` é o ÚNICO `<h1>` do `index.html`
    (headers de seção tipo Problema/Planos/FAQ são `<h2>`,
    `.section-header__heading`) — já tinha uma redução em ≤991px
    (`--text-5xl` desktop → `--text-3xl`, 40px, cobrindo tablet+mobile
    juntos). Adicionada uma 2ª redução, só em ≤767px (mobile de verdade,
    não tablet): `--text-3xl` → `--text-2xl` (40px → 32px). Testado
    visualmente via screenshot em 390/375/320px — 32px manteve o H1
    proeminente e legível sem dominar a tela, sem gerar linha órfã. Virou
    regra documentada em CLAUDE.md (não só um ajuste pontual do hero):
    qualquer `<h1>` futuro deve usar `--text-2xl` no mobile por padrão.
    (2026-08-22)
  - **2º ajuste: "balancear" o espaçamento vertical da hero no mobile**.
    Usuário mandou o mesmo print da hero (já com o H1 menor do ajuste
    anterior) lado a lado com um print de referência de outro site
    (Clarasight: heading bem colado no header, CTA + botão secundário, e
    um gráfico de globo pontilhado preenchendo o resto da hero até o
    rodapé dela) e pediu pra "fazer o balanceamento" com base nessa
    referência. Medi a hero atual via `getBoundingClientRect` antes de
    mexer: `padding-top` de 174px (`--space-2xl` + `--nav-height`) e
    `padding-bottom` de 96px (`--space-2xl`) — nenhum dos dois tinha
    override mobile até agora, só o `.hero__heading` (ajuste anterior).
    Com o H1 mais curto, esse padding generoso (pensado pra escala de
    desktop) sobrava demais nas duas pontas: ~174px de vão vazio antes do
    eyebrow e mais ~96px depois da microcopy, deixando o conteúdo "boiando"
    no meio de uma faixa alta de gradiente sem nada. **Decisão importante**:
    a referência resolve esse mesmo problema com um elemento visual (o
    globo) preenchendo o espaço — mas a hero da Pruxor não tem mais
    nenhum elemento visual ao lado do texto (removido de propósito numa
    fase anterior, ver `CLAUDE.md`), e reintroduzir uma imagem/gráfico
    novo não foi pedido agora (e contrariaria essa decisão já tomada).
    Em vez de copiar o elemento, copiei o EFEITO (conteúdo mais compacto,
    menos vão morto) reduzindo o padding: `--space-2xl` → `--space-l` nas
    duas pontas (96px → 48px), mantendo o `+ var(--nav-height)` no topo
    (ainda precisa compensar a sobreposição da navbar transparente, essa
    parte não é "espaço morto"). Resultado: hero caiu de ~700px pra
    ~604px de altura total em 390px de largura, com o eyebrow bem mais
    perto do header e a transição pra "Sobre" (próxima seção) muito mais
    rápida. Testado em 320/375/390/414px via screenshot — proporção
    ficou consistente em todos; único "overflow" detectado (375px e
    320px) é o bug de hambúrguer JÁ documentado (confirmado de novo
    escondendo a hero inteira via `display:none` — o overflow não muda,
    então não tem relação com esse ajuste). Só mexeu em `.hero`
    (padding), nenhuma outra seção foi tocada. (2026-08-22)
- **Pausa na rodada mobile — usuário voltou pra "versão completa"
  (desktop) pra aplicar 2 ajustes que faltaram na hero**. Aviso explícito
  antes de mandar: "vou voltar para versão completa" — deixando claro que
  os 2 pontos a seguir são sobre DESKTOP, não mobile (fase anterior).
  - **H1 da hero quebrando em 2 linhas, não 3**: em 1440px o H1 ("Saiba
    quanto cada obra te dá de lucro antes de ela acabar.") quebrava em 3
    linhas dentro do `.hero__content` (`max-width: 46rem`/736px). Pedido
    explícito: 2 linhas. Como `.hero__heading` usa `text-wrap: balance`
    mas é limitado pela largura do PAI (`.hero__content`), não dava pra
    resolver só no seletor do heading — testei várias larguras via
    Playwright (`getBoundingClientRect`) até achar o ponto de virada: a
    partir de ~900px de largura disponível, o `balance` do navegador já
    escolhe 2 linhas sozinho ao invés de 3 (não precisei forçar quebra
    manual com `<br>`, o algoritmo resolve). Subi `.hero__content` de
    46rem pra 60rem (960px, com margem de segurança acima do mínimo de
    900px). **Efeito colateral evitado**: `.hero__paragraph` não tinha
    `max-width` próprio, herdava os 46rem do container — alargar o
    container também alargaria as linhas do parágrafo (não pedido, e
    mudaria a leitura visual dele). Dei um `max-width: 46rem` PRÓPRIO ao
    parágrafo (exatamente o valor antigo do container), preservando a
    largura de linha que ele já tinha. Testado em 1920/1440/1280px: 2
    linhas em todos. Em 1024px volta pra 3 linhas sozinho (830px
    disponíveis não cabe em 900px+) — comportamento aceito, não pedido
    cobrir esse meio-termo entre desktop grande e o breakpoint de tablet
    (991px); o `balance` ainda funciona bem nesse fallback, só usa 3
    linhas em vez de 2.
  - **Microcopy "15 dias de acesso completo..." na cor primária**: hoje
    usava `rgba(247,247,255,0.75)` (branco translúcido, igual ao resto do
    texto claro da hero). "Cor primária" foi lida como a cor de marca —
    `var(--color-brand)`, a mesma do `.btn--primary`/badge "Mais popular"
    — e não o token `--text-primary` (que é escuro, pensado pra fundo
    claro; usá-lo aqui deixaria o texto ilegível contra o fundo escuro da
    hero). Troquei só a `color`, mantendo o `text-shadow` escuro já
    existente (esse shadow ajuda o roxo da marca a não se perder contra o
    trecho do próprio degradê que também é roxo, na altura onde a
    microcopy cai). Testado visualmente em desktop E mobile (a regra não
    tem media query, então vale pros dois) — contraste ficou bom nas duas
    faixas de largura testadas. Nenhum erro de console; zero mudança em
    qualquer outra seção. (2026-08-22)
- **"Soluções" (feature showcase) — vão entre heading e parágrafo do
  header, investigação em 2 rodadas**. Usuário mandou um 1º print com
  seta+linha vermelhas apontando pro parágrafo "Nada de sistema
  complicado..." e pediu "posicionar no final da sessão a esquerda" — texto
  ambíguo o suficiente pra eu preferir perguntar antes de mexer (3
  opções via `AskUserQuestion`: mover pro final da seção/embaixo, só
  ajustar alinhamento vertical, ou mandar novo print). Usuário escolheu
  mandar novo print.
  - **2º print, mais claro**: uma caixa azul sólida cobrindo a linha
    inteira do header (heading + parágrafo) e uma faixa roxa/violeta
    tracejada bem mais estreita marcando especificamente o VÃO entre os
    dois blocos de texto — com a legenda "ela está colada na divisão do
    centro, preciso que ela vá para o final". Interpretação: "ela"
    (o parágrafo) parece "grudado" nessa faixa central (o vão), e não
    "alcançando o final" (a borda direita real) — mesmo a caixa azul
    (desenhada pelo usuário) sugerindo que o parágrafo deveria preencher
    até a borda dela.
  - **Investigação antes de mexer em qualquer CSS**: medi
    `.feature-showcase__header-paragraph` vs `.feature-showcase__header`
    via `getBoundingClientRect` em 9 larguras diferentes (995px a
    1920px, cobrindo de "recém acima do breakpoint de tablet" até
    desktop bem grande) — em TODAS, `paragraph.right` bateu
    EXATAMENTE com `header.right` (ex: 1344=1344 em 1440px, 1600=1600
    em 1920px, 1054=1054 em 1150px). Ou seja, `justify-content:
    space-between` já empurrava o parágrafo até a borda direita real em
    100% dos casos testados — tecnicamente não havia bug de
    posicionamento. Também tirei screenshot com `outline` colorido
    (vermelho no header, verde na borda do heading, azul no parágrafo)
    pra confirmar visualmente que a borda azul batia com a vermelha —
    confirmado.
  - **O que realmente estava acontecendo**: o VÃO entre heading (`max-width:
    32rem`) e parágrafo (`max-width: 26rem`, na época) crescia com a
    largura da tela — de ~64px logo acima do breakpoint de tablet
    (991px) até 320-350px+ em telas grandes (1920px) — porque
    `space-between` joga toda a largura "sobrando" (container menos os
    dois `max-width` fixos) pro vão do meio. Em telas menores (~1100-
    1250px, provavelmente o que o usuário estava vendo, dado que a
    proporção do print batia muito mais com essa faixa do que com
    1440/1920px), o vão fica pequeno (~64px) e a composição parece
    equilibrada; em telas maiores o vão vazio cresce e a leitura visual
    muda — o parágrafo, mesmo tecnicamente na borda, PARECE flutuando
    longe dela por causa de todo aquele espaço morto no meio.
  - **Fix aplicado**: `.feature-showcase__header-paragraph` foi de
    `max-width: 26rem` pra `max-width: 32rem` (igualando ao heading) —
    reduz o vão em todas as larguras (ex: 64px permanece igual perto do
    breakpoint de tablet, mas cai de ~320px pra ~224px em 1440px, de
    ~352px pra ~256px em 1920px) sem alterar a lógica de
    `space-between` nem a borda direita (que continua idêntica —
    confirmado de novo via `getBoundingClientRect` depois do ajuste).
    Screenshot em 1150px (a largura que mais parecia bater com o print
    do usuário) ficou visualmente muito próximo da composição do print
    de referência dele. **Ainda não é zero vão em telas muito grandes**
    (1920px+ ainda sobra ~256px) — se o usuário quiser mais agressivo, a
    próxima opção é trocar `space-between` por `gap` fixo +
    `margin-left: auto` só no parágrafo, não implementado ainda (ver
    CLAUDE.md). Não voltei a perguntar de novo antes de aplicar esse fix
    porque já era a 2ª rodada de esclarecimento — decidi mostrar o
    resultado concreto (screenshot antes/depois) em vez de abrir uma 3ª
    pergunta aberta. (2026-08-22)
  - **3ª rodada — usuário questionou a abordagem técnica em si**: depois
    de ver o resultado do `max-width: 32rem`, o usuário perguntou (com
    print do DevTools do Chrome aberto, mostrando a árvore de elementos e
    o overlay de flexbox destacando o vão em roxo tracejado): "E se ao
    invés de uma div, criar duas, e uma colar a esquerda e a outra colar
    a direita? Pelo código, tem uma div apenas" — sugerindo trocar a
    estrutura de 1 container flex com 2 filhos por 2 divs independentes
    posicionadas nas pontas (ex: `position:absolute; left:0`/`right:0`).
    Expliquei ANTES de mexer em qualquer código: matematicamente, 2 divs
    posicionadas nas pontas dariam o MESMO resultado visual que o flex
    atual, porque em ambas as técnicas o tamanho de cada vão é
    "largura do container − largura dos 2 blocos" — trocar a estrutura
    não muda essa conta. A mudança que de fato reduziria o vão é outra:
    dar `flex-grow` ao parágrafo (ele passa a esticar até preencher o
    espaço livre, em vez de ter uma largura fixa). Perguntei via
    `AskUserQuestion` se ele queria essa mudança de verdade (2 opções:
    aplicar `flex:1` ou manter como estava) — escolheu aplicar.
  - **Fix definitivo (`flex: 1`)**: `.feature-showcase__header-paragraph`
    perdeu o `max-width` e ganhou `flex: 1`; `.feature-showcase__header-heading`
    ganhou `flex: none` (pra não encolher agora que o parágrafo tem
    `flex-grow`); `.feature-showcase__header` trocou
    `justify-content: space-between` por `flex-start` (ficou inerte, já
    que o `flex-grow` do parágrafo consome 100% do espaço livre, não
    sobra nada pro `justify-content` distribuir). Resultado: o vão vira
    FIXO em `--space-xl` (64px, já era o `gap` do flex container) em
    QUALQUER largura de tela, e o parágrafo sempre encosta na borda real
    — testado em 1150/1280/1440/1920px via `getBoundingClientRect`,
    `gap` deu exatamente 64px e `paragraph.right === header.right` nos 4
    casos. Não precisou de `max-width` de segurança pra telas
    ultra-largas: o `.layout-container` já trava em 1280px, então o
    parágrafo nunca ultrapassa ~704px de largura (1280 − 512 do heading
    − 64 do gap) — testado visualmente em 1920px, ficou confortável (o
    texto virou 2 linhas em vez de 3-4). Testado também no mobile
    (390px): `flex:1`/`flex:none` não têm efeito no `flex-direction:
    column` do breakpoint mobile porque o container não tem altura extra
    sobrando pra distribuir — sem regressão, zero erro de console.
  - **Desfeito logo em seguida**: ainda dentro da mesma mensagem/turno
    (antes de eu terminar de documentar), o usuário mandou "Desfaça e
    volte a um passo antes" — pedido pra reverter o `flex: 1` e voltar
    pro estado anterior (`max-width: 32rem` nos dois +
    `justify-content: space-between`). Revertido: `.feature-showcase__header`
    voltou a `justify-content: space-between`; `.feature-showcase__header-heading`
    perdeu o `flex: none`; `.feature-showcase__header-paragraph` perdeu o
    `flex: 1` e recuperou `max-width: 32rem`. Estado final do CSS depois
    do undo é idêntico ao que existia logo após a 2ª rodada (antes do
    print do DevTools). Não ficou claro SE o usuário rejeitou o resultado
    visual do `flex:1` ou só quis comparar/ver a versão anterior de novo
    — próxima sessão, se o assunto voltar, perguntar antes de reaplicar
    `flex:1` de novo sem confirmação nova. (2026-08-22)
- **"Como funciona" redesenhada pela 2ª vez — de linha do tempo estática
  pra "etapas presas" (scroll travado), igual "Soluções"**. Usuário
  mandou 2 prints: um GIF de um site de referência (Prisma AI) mostrando
  heading fixo à esquerda enquanto o visual muda à direita conforme rola,
  e um print do estado atual do "Como funciona" (linha do tempo horizontal
  com 3 círculos, sem nenhum efeito de scroll). Pedido: "Quem vai ficar
  fixo é o headline ao lado esquerdo, e ao lado direito, deve ser exibido
  o card com a mesma estrutura da referência, sendo: um card, com headline
  e subheadline, ícone e a etapa em que está [...] mantendo o padrão do
  card que temos atualmente, mas dentro do card também tendo a etapa como
  no gif."
  - **Decisão de reaproveitar o mecanismo de "Soluções" em vez de
    inventar um novo**: como o comportamento pedido (heading fixo +
    conteúdo à direita trocando por scroll) é EXATAMENTE o que
    `.feature-showcase` já faz (`initFeatureShowcase`, extraído nesta
    sessão pra virar `initStickyStepShowcase` genérica), reusei a mesma
    matemática de scroll (trilho = nº etapas × 100vh, progresso decide o
    `[data-step]` ativo) em vez de escrever uma solução do zero. A
    diferença real de "Soluções" é que lá o heading TAMBÉM muda por
    etapa (parte do `.feature-showcase__block` que crossfada); aqui o
    heading fica ESTÁTICO fora da área que crossfada — só o card
    muda.
  - **Removida por completo a 1ª versão** (linha do tempo horizontal,
    `.how-it-works__timeline` + círculos com traço tracejado) — não era
    mais compatível com o novo layout de 2 colunas. CSS morto limpo
    (`__timeline`/`__step`/`__icon-wrap`/`__step-number`/`__step-icon`/
    `__step-heading`/`__step-paragraph`/`__closing`), confirmado sem uso
    em nenhuma outra página antes de apagar.
  - **Card reaproveita `.card--vivid` peça por peça** (spotlight, 2
    sparkles, `.card__icon` animado, `.card__heading`, `.card__paragraph`)
    — "mantendo o padrão do card que temos atualmente" foi levado ao pé
    da letra, zero CSS novo pro card em si, só a tag "Etapa N" é
    novidade (`.how-it-works__card-tag`, reaproveitando `.badge.badge--inverse`
    + o mesmo ícone sparkle de 4 pontas do `.card__sparkle`, só que como
    conteúdo em vez de decoração). Ícones dos 3 passos são os MESMOS SVGs
    da versão antiga (pessoa/checklist/foguete) — só peguei do markup
    velho e colei dentro do `.card__icon` novo, sem redesenhar.
  - **CTA "Criar minha conta grátis" foi pro lado esquerdo (fixo)**, não
    ficou preso dentro do card que crossfada — decisão própria, já que o
    CTA não muda por etapa (mesma ação em qualquer uma das 3), então faz
    mais sentido ficar ao lado do heading, sempre visível, do que dentro
    de um card específico ou repetido nos 3.
  - **`initStickyStepShowcase` extraída de `initFeatureShowcase`**: a
    função antiga tinha a lógica de scroll HARDCODED pra `.feature-showcase`;
    virou uma função genérica que recebe 4 seletores (root/track/stage/
    step) — `initFeatureShowcase()` e a nova `initHowItWorks()` chamam
    essa função genérica cada uma com seus próprios seletores. Zero
    mudança de comportamento em "Soluções" (confirmado via scroll
    programático em 5 pontos do trilho: steps 1→2→4→5 capturados, mesma
    "pulada" 2→4 de amostragem grosseira já documentada antes como
    artefato de teste, não bug real).
  - Validado via Playwright: trilho do novo "Como funciona" mede
    3×900=2700px; scroll programático em 4 pontos (10%/40%/70%/95%) ativa
    corretamente as etapas 1/2/3/3; screenshot confirma heading+CTA
    parados à esquerda enquanto o card muda (ícone, tag "Etapa N",
    headline, subheadline) à direita; mobile empilha os 3 cards
    normalmente sem scroll travado (`position:static`, `opacity:1`
    forçado, trilho com `height:auto`); zero erro de console nas 4
    páginas do site (a mudança só existe em `index.html`, mas rodei o
    sweep completo pra garantir que o refactor do JS genérico não quebrou
    nada em `sobre.html`/`solucoes.html`/`planos.html`). (2026-08-22)
  - **Correção imediata: crossfade simples não era o pedido**. Usuário
    reportou: "tem uma diferença, esses cards, os próximos devem vir
    aparecendo como no GIF que foi anexado, como uma linha do tempo, não
    substituindo pelo próximo, deve vir de baixo para cima." A 1ª versão
    só tinha `.is-active` (opacidade 0→1 + `translateY(16px)→0`, um
    crossfade sutil, sem noção de "antes"/"depois"). Virou 3 estados via
    `setActiveStep` (agora marca `.is-past` além de `.is-active`,
    comparando o número do `data-step` com o índice ativo): card default
    espera ABAIXO (`translateY(var(--space-xl))`, opacidade 0, esse é o
    estado das etapas futuras), `.is-active` no lugar, `.is-past`
    continua subindo e desaparece por CIMA (`translateY(calc(-1 *
    var(--space-xl)))`) — dá o efeito de "trem"/linha do tempo passando
    de baixo pra cima, não uma troca no mesmo lugar. `.is-past` foi
    adicionado na função COMPARTILHADA `initStickyStepShowcase` (não só
    numa cópia local), então "Soluções" também recebe a classe nos seus
    `[data-step]` — mas como não existe nenhuma regra CSS pra
    `.feature-showcase__block.is-past`, fica inofensivo lá (confirmado
    via scroll programático, comportamento idêntico a antes).
  - **Bug real pego durante a implementação (não reportado pelo usuário,
    achado ao testar hover antes de dar por concluído)**: pra esconder os
    cards fora de tela (esperando embaixo / saindo por cima), o
    `.how-it-works__card-col` precisa de `overflow: hidden`. Isso
    ameaçava cortar o lift/scale do hover do `.card--vivid`
    (`translateY(-6px) scale(1.045)`) — mesmo problema já visto 3x antes
    (`.pinned-cards__viewport`, `.testimonials__loop`), mas a correção de
    sempre (`padding` generoso no container) NÃO funcionou dessa vez.
    Investigado via `getBoundingClientRect`: com `padding: 32px 28px` no
    `.how-it-works__card-col`, o card (`position:absolute; inset:0`)
    continuava ocupando EXATAMENTE o mesmo retângulo do container, hover
    incluso — nem 1px de diferença. Motivo (spec do CSS): o "containing
    block" de um elemento `position:absolute` é a PADDING BOX do
    ancestro posicionado, e essa caixa já INCLUI o padding — `inset:0`
    alinha com a borda EXTERNA dela (que já contém o padding), não com a
    borda do conteúdo. Ou seja, padding no PAI não sobra espaço nenhum
    pro filho absoluto. **Fix real**: trocar `inset: 0` por
    `inset: 32px 28px` DIRETO no `.how-it-works__card` (não no
    container) — isso desloca as bordas do próprio elemento posicionado.
    Confirmado via `getBoundingClientRect` antes/depois: card em repouso
    foi de 592×320 (idêntico ao container, ignorando o padding) pra
    536×256 com folga real de 32px/28px; com hover ativo, os 4 lados do
    card ficaram dentro dos limites do container
    (`cardExceedsCol: false`, testado programaticamente). Essa é uma
    pegadinha de CSS nova (diferente da já documentada sobre
    `overflow-x`/`overflow-y` distintos) — registrada em CLAUDE.md como
    regra própria pra não repetir: padding no pai não ajuda filhos
    absolutos com `inset:0`, a folga tem que vir do próprio `inset` do
    filho. Validado visualmente: screenshot do hover mostra o
    spotlight/glow/lift completos, sem corte em nenhum lado.
  (2026-08-22)
  - **3ª rodada — o crossfade também estava errado, não só o efeito de
    entrada/saída**. Usuário mandou um print com ZOOM no GIF de
    referência (não o frame completo de antes) mostrando claramente: os 3
    cards em FLUXO NORMAL, um visivelmente abaixo do outro com gap real
    entre eles (bordas arredondadas completas, sem overlap, sem
    transparência parcial) — nada de crossfade ou troca no mesmo lugar.
    Junto: "Eu quero que o efeito fique exatamente como no GIF... e o
    texto deve ficar com no máximo duas linhas." Percebi que toda a
    mecânica de "etapas presas" (2ª versão, ainda copiando o padrão de
    "Soluções") estava conceitualmente errada desde o início — o efeito
    pedido nunca precisou de scroll travado nem de JS: é literalmente
    `position: sticky` no heading ao lado de uma lista normal mais alta
    (padrão clássico "sidebar sticky + lista"), porque scroll comum já
    faz "o próximo vir de baixo pra cima" sozinho.
    - **Removido por completo**: `.how-it-works__track`/`__stage`/
      `__grid`, classes `.is-active`/`.is-past`, a função
      `initHowItWorks()` inteira, e a chamada dela em `DOMContentLoaded`.
      `initStickyStepShowcase` (a função genérica criada na 2ª versão pra
      servir "Soluções" + "Como funciona") voltou a ser código específico
      de `initFeatureShowcase` — sem "Como funciona" como 2º usuário, a
      abstração não tinha mais razão de existir (mesma disciplina de não
      generalizar prematuramente já seguida em outras partes do projeto).
    - **Layout novo, só CSS**: `.how-it-works__intro` (eyebrow+heading+CTA)
      usa `position: sticky; top: var(--nav-height);` (mesmo `top` de
      qualquer sticky do site) — fica parado enquanto
      `.how-it-works__card-col` (`flex-direction: column`, 3 cards em
      fluxo normal, sem `position:absolute`, sem JS nenhum) rola por
      trás dele, já que essa coluna é mais alta que a do heading.
    - **Layout do topo do card ajustado**: novo `.how-it-works__card-top`
      (flex row, ícone à esquerda / tag "Etapa N" à direita, nos dois
      extremos) — bate com o print de referência, que mostra ícone e tag
      na mesma linha, não empilhados como na versão anterior.
    - **Parágrafo limitado a 2 linhas**: `.how-it-works__card .card__paragraph`
      ganhou `-webkit-line-clamp: 2` (escopado só aqui, `.card__paragraph`
      é usado em várias outras sessões sem esse limite). Os 3 textos da
      copy oficial majoritariamente já cabem; o mais longo trunca com
      reticências — não reescrevi a copy, já que o pedido foi limitar a
      altura visual, não editar o texto.
    - Validado via Playwright: `.how-it-works__intro` com `top` fixo em
      78px (nav-height) uma vez que o scroll passa do topo da sessão,
      confirmando o sticky; os 3 parágrafos medem exatamente 2 linhas de
      altura (`43.375px = 2 × 21.7px`); mobile confirma
      `.how-it-works__intro` virando `position: static` (sem sticky
      empilhado sobre lista já empilhada); zero erro de console em todas
      as 4 páginas; screenshot da versão final bate visualmente com a
      composição do print de referência (ícone+tag na mesma linha, 3
      cards com gap real entre si, heading parado à esquerda enquanto os
      cards passam por trás). (2026-08-22)
- **2 ajustes finais em "Como funciona" + smooth scroll sitewide**. Usuário
  mandou print da versão atual (com o headline em 3 linhas) e pediu 2
  coisas: (1) headline com no máximo 2 linhas; (2) "de uma suavisada no
  scroll, um smooth scroll, me corrija se não for esse o efeito que
  suaviza o scroll" — explicitamente convidando a esclarecer antes de
  implementar algo invasivo.
  - **Headline em 2 linhas**: `.how-it-works__intro` tinha `max-width:
    26rem` (416px), estreito demais pro texto "Comece hoje. Sem cartão,
    sem burocracia." caber em 2 linhas. Testado via `getBoundingClientRect`
    que 460px já é suficiente pra 2 linhas — aplicado `30rem` (480px) com
    margem de segurança. Confirmado 2 linhas em 1280/1440/1920px; mobile
    não afetado (`max-width: none` nesse breakpoint, já existia).
  - **Smooth scroll — esclarecido antes de implementar**: o site já tinha
    `scroll-behavior: smooth` (CSS, `html`) — mas isso só suaviza SALTOS
    programáticos (clique em âncora do menu), não a sensação da rolagem
    normal (roda do mouse/trackpad). Perguntei via `AskUserQuestion` se
    era só confirmação disso ou se queria a rolagem normal mais
    inercial/fluida (avisando que isso é uma mudança mais invasiva, JS
    customizado interceptando o scroll, risco de conflito com os vários
    efeitos sticky/presos já existentes) — usuário confirmou que queria a
    2ª opção, "tipo Apple.com".
  - **Implementação (`initSmoothScroll`, js/main.js)**: intercepta
    `wheel` e anima o `scrollTop` REAL do documento via
    `requestAnimationFrame` + lerp (`current += (target-current)*0.12`)
    — decisão importante de design: NUNCA fake-scroll via transform num
    wrapper (a técnica que libs tipo Lenis/Locomotive Scroll usam),
    porque isso quebraria todo `position:sticky` do site (são muitos:
    navbar, hero, feature-showcase, pinned-cards, "Como funciona") e todo
    cálculo de `getBoundingClientRect()` que os efeitos de scroll já
    fazem — como só o `scrollTop` de verdade muda, nenhum efeito
    existente precisou ser tocado.
  - **3 bugs reais encontrados e corrigidos durante a implementação**
    (nenhum reportado pelo usuário — achados testando antes de dar por
    concluído):
    1. **`window.scrollTo()` dentro do loop herdava `scroll-behavior:
       smooth` do CSS global**: cada chamada do loop (~60x/s) disparava
       sua PRÓPRIA animação nativa do navegador que nunca terminava antes
       da próxima chamada, resultado imprevisível (scroll "voltando pra
       0" sozinho). Descoberto via teste isolado de `window.scrollTo`
       numa página totalmente vanilla (sem nenhum JS do projeto) — o
       problema replicava mesmo lá, confirmando que era o CSS global, não
       lógica minha. **Fix**: usar a forma com objeto e `behavior:
       'auto'` explícito em vez da forma de dois argumentos.
    2. **Comparar `window.scrollY` com o valor esperado pra detectar
       "alguém mais mexeu no scroll" dava falso positivo**: `scrollY` não
       é garantido atualizar no mesmo frame que `scrollTo()`, então a
       verificação `Math.abs(window.scrollY - current) > 2` disparava
       toda hora achando que o teclado/scrollbar tinha assumido o
       controle, quando na verdade era só o próprio `scrollTo()` ainda
       não refletido. **Fix**: trocar a checagem reativa por uma flag
       `programmatic` (marca quando o PRÓPRIO código disparou o scroll,
       ignorada pelo listener de `scroll`).
    3. **Teclado (PageDown) e clique em âncora ficavam brigando com a
       animação do wheel se ela ainda estivesse rodando**: mesmo com a
       flag `programmatic`, havia uma janela onde a animação do wheel
       continuava chamando `scrollTo()` com um alvo antigo por cima do
       que o teclado/âncora tinham acabado de definir. **Fix**: em vez de
       tentar detectar e reconciliar depois, `yieldControl()` CANCELA a
       própria animação (`cancelAnimationFrame`) PROATIVAMENTE assim que
       detecta teclas de navegação (seta/PageUp/PageDown/Home/End/Espaço)
       ou clique num link de âncora — cede o controle antes do conflito
       acontecer.
  - **Dificuldade real de teste**: `window.scrollY` não refletia de forma
    confiável chamadas a `window.scrollTo()`/`dispatchEvent(new
    WheelEvent(...))` disparadas via `page.evaluate()` isoladas nesse
    ambiente headless (Playwright + Chromium) — confirmado até numa
    página totalmente vanilla sem nenhum JS do projeto, então não era bug
    meu. `page.mouse.wheel()` (simulação mais "real") refletiu
    corretamente na maioria dos casos, só precisando de mais
    iterações/tempo de espera do que o intuitivo. Virou nota de
    metodologia no CLAUDE.md pra não perder tempo de novo com isso em
    testes futuros de scroll.
  - Validado (com `page.mouse.wheel()`, não `scrollTo`/`dispatchEvent`
    isolados): feature-showcase chegou até a etapa 5 rolando com wheel
    simulado; pinned-cards (`solucoes.html`) mudou o `transform`
    horizontal corretamente; os 35 `data-reveal` do index.html ficaram
    100% visíveis depois de rolar quase até o fim; teclado (PageDown) e
    clique em âncora (`#planos`) funcionam sem brigar com a animação;
    mobile (≤991px) e `prefers-reduced-motion` desativam a função por
    completo (`return` antecipado/checagem de `matchMedia`); zero erro de
    console nas 4 páginas. (2026-08-22)
  - **Feedback imediato do usuário: "ficou muito travado... trava e
    depois rola tudo de uma vez só"** — a versão validada acima
    tecnicamente funcionava (todos os efeitos continuavam corretos), mas
    a EXPERIÊNCIA em si não estava boa. Diagnóstico: `ease = 0.12` levava
    ~55-60 frames pra convergir por gesto de scroll, e cada frame chamava
    `window.scrollTo()` — numa página com bastante coisa rodando ao mesmo
    tempo (globo em canvas com até ~18000 pontos, holofotes, scroll-
    reveal, feature-showcase/pinned-cards com seus próprios listeners de
    scroll), esse volume de chamadas competindo por tempo de main thread
    provavelmente derrubava frames — o padrão clássico de "várias
    entradas de wheel se acumulam enquanto a main thread está ocupada, e
    quando ela libera, processa tudo de uma vez", batendo exatamente com
    a descrição do usuário.
    - **3 ajustes de performance, sem mudar o comportamento/API**:
      (1) `ease` subiu de 0.12 pra 0.2 (convergindo em ~28-30 frames, quase
      metade do antes) — reduz a janela de tempo em que há contenção de
      main thread por gesto de scroll; (2) trocado `window.scrollTo({top,
      left:0, behavior:'auto'})` por atribuição direta
      `scroller.scrollTop = y` — atribuição direta de propriedade NUNCA
      respeita `scroll-behavior:smooth` do CSS (só os MÉTODOS
      scrollTo()/scroll()/scrollBy()/scrollIntoView() respeitam), então
      nem precisa do `behavior:'auto'` explícito, e é mais direto/barato
      que construir um objeto de opções a cada frame; (3) removida uma
      duplicação real de agendamento: a versão anterior chamava
      `requestAnimationFrame` DUAS vezes por frame (uma pro próximo
      `tick()`, outra só pra resetar a flag `programmatic` de forma
      "seguramente assíncrona") — na real, resetar a flag no INÍCIO do
      PRÓPRIO `tick()` seguinte é seguro (JS é single-thread, nenhum
      evento `scroll` consegue disparar no meio da execução síncrona de
      uma função), então virou 1 `requestAnimationFrame` por frame no
      caso comum — só o frame FINAL de cada gesto (onde não existe
      "próximo tick") ainda precisa de um `requestAnimationFrame` isolado
      pra resetar a flag, senão ela fica `true` pra sempre e trava a
      resincronização com scroll externo depois desse ponto.
    - Revalidado com `page.mouse.wheel()` depois do ajuste: sequência de
      escritas em `scrollTop` medida diretamente (interceptando o setter
      da propriedade) — convergiu de 800px de intenção em 30 frames,
      monotonicamente crescente, sem saltos nem reset (`[160, 288, 390,
      ..., 793, 795, 797, 798, 799, 800]`); reconfirmado que
      feature-showcase (chegou até etapa 5), pinned-cards (`transform`
      mudou corretamente) e scroll-reveal continuam funcionando; zero
      erro de console nas 4 páginas.
    - **Não é garantia de que a jank sumiu por completo** — não tem como
      eu "sentir" a fluidez de verdade sem um usuário real testando ao
      vivo (o ambiente de teste headless nem reflete `scrollY` de forma
      confiável, ver nota de metodologia). Se o usuário ainda reportar
      travamento depois desse ajuste, o próximo suspeito é o globo em
      canvas de `.about-outcomes` (única outra animação contínua cara da
      página) — a opção de pausar o redesenho do globo enquanto o usuário
      rola ativamente NÃO foi implementada ainda, porque é uma troca
      perceptível (o globo "congela" brevemente) que merece confirmação
      explícita antes, não uma decisão unilateral. (2026-08-22)
  - **Usuário insistiu: "Ainda está travado, melhore ainda mais, deixe
    mais fluido"** — sem detalhar mais, então segui o próprio suspeito que
    eu tinha acabado de sinalizar (o globo) em vez de perguntar de novo,
    já que "melhore ainda mais" depois de eu ter explicado exatamente essa
    opção pendente leu como autorização implícita.
    - **Confirmado via instrumentação (interceptando `ctx.arc()` do
      canvas) que o globo É de fato pesado**: ~140000-150000 chamadas de
      `arc()` em 300ms de renderização normal (até ~18000 arcos
      individuais por frame) — um número grande o bastante pra
      plausivelmente competir por main thread com os ~30 frames/gesto do
      `initSmoothScroll`, especialmente rolando logo depois da hero (onde
      a sessão "Sobre"/`.about-outcomes` com o globo fica).
    - **Implementado**: sinal compartilhado no topo do `js/main.js` (fora
      de qualquer função) — `isFastScrolling` (flag) +
      `markScrollActivity()` (liga a flag, reseta um `setTimeout` de
      200ms que desliga de novo). `initSmoothScroll.onWheel` chama
      `markScrollActivity()` a cada evento de wheel;
      `initAboutGlobe.loop()` pula a chamada de `draw()` (todo o desenho
      dos ~18000 pontos) enquanto `isFastScrolling` é `true` — o loop de
      `requestAnimationFrame` continua rodando por baixo (só o desenho é
      pulado), então retoma sozinho ~200ms depois que o scroll para, sem
      precisar de nenhuma lógica de "catch-up" (a rotação só incrementa
      dentro de `draw()`, então simplesmente "congela" durante esse
      intervalo em vez de pular posições).
    - **Validado via instrumentação, não só inspeção de código**:
      interceptei `ctx.arc()` do canvas do globo pra contar chamadas reais
      — 0 chamadas durante uma rajada contínua de wheel simulado (300ms),
      voltando a ~150000/300ms assim que o scroll para (dentro da janela
      de 200ms esperada). Também confirmado que `prefers-reduced-motion`
      continua funcionando (nem depende de `isFastScrolling`, já que
      nunca incrementa `rotation` de qualquer forma) e que o
      `IntersectionObserver` que pausa o globo fora da viewport continua
      independente desse novo mecanismo. Regressão completa reconfirmada
      depois da mudança: feature-showcase (etapa 5), pinned-cards
      (`transform` mudando), teclado/âncora sem brigar com a animação,
      zero erro de console nas 4 páginas.
    - **Ainda não é garantia de fluidez total** — não tem como eu validar
      a "sensação" de verdade sem um usuário testando ao vivo num
      dispositivo real. Se ainda travar depois desse 2º ajuste, os
      próximos suspeitos (não descartados, só não investigados ainda) são:
      o próprio custo residual de `e.preventDefault()` num listener
      `{passive:false}` de `wheel` (que por si só já torna o processamento
      de scroll síncrono com a main thread em QUALQUER navegador,
      independente do que mais está rodando) — nesse caso a próxima opção
      seria reconsiderar a técnica de base inteira, não só otimizar o que
      já existe; e/ou o dispositivo do usuário ter um trackpad com inércia
      nativa já boa, que a interceptação de wheel pode estar
      SUBSTITUINDO por uma curva pior em vez de só "adicionar" suavidade
      — não investigado ainda, mas é a explicação mais plausível se o
      ajuste do globo não resolver por completo. (2026-08-22)
  - **Confirmado: a hipótese acima se concretizou — usuário pediu reversão
    total**. "Não gostei, continua muito travado, deixe como estava antes,
    estava mais fluido, deixe como estava antes de eu pedir a alteração."
    Depois de 2 rodadas de ajuste (ease/atribuição direta, depois pausa do
    globo) sem melhora percebida, ficou claro que o problema não era um
    parâmetro pra calibrar — era a técnica em si (interceptar `wheel` com
    `preventDefault()` e substituir por uma curva de easing própria)
    piorando a experiência em vez de melhorar, provavelmente porque o
    dispositivo de teste do usuário já tinha inércia nativa boa (trackpad)
    que a interceptação estava substituindo por algo pior, não só
    complementando.
  - **Revertido por completo**: `initSmoothScroll` (função inteira,
    handlers de `wheel`/`scroll`/`keydown`/`click`/`resize`), o sinal
    compartilhado `isFastScrolling`/`markScrollActivity`/`fastScrollTimer`
    (introduzido só pra pausar o globo durante scroll), e a chamada
    `initSmoothScroll()` em `DOMContentLoaded` — todos REMOVIDOS.
    `initAboutGlobe.loop()` voltou a chamar `draw()` incondicionalmente
    (sem checagem de `isFastScrolling`). `scroll-behavior: smooth` (CSS)
    NÃO foi tocado — nunca fez parte do problema, só afeta saltos de
    âncora, que sempre continuaram funcionando bem.
  - Validado via Playwright depois da reversão: `wheel` disparado
    manualmente confirma `defaultPrevented: false` (não é mais
    interceptado, volta a ser 100% nativo do navegador); clique em âncora
    (`#planos`) continua funcionando; globo em canvas volta a desenhar
    normalmente (~113000 chamadas de `ctx.arc()` em 300ms, sem nenhuma
    pausa condicionada a scroll); zero erro de console nas 4 páginas;
    `grep` confirma zero referências residuais a `initSmoothScroll`/
    `isFastScrolling`/`markScrollActivity`/`fastScrollTimer` no
    `js/main.js`.
  - **Não reintroduzir smooth scroll customizado sem pedido explícito
    novo** — se o assunto voltar, a lição registrada é: simplesmente
    ajustar parâmetros (ease, throttling, pausar outras animações) não
    resolve se a causa raiz for a técnica substituindo uma inércia nativa
    já boa por uma pior; a próxima ideia válida seria diferenciar tipos de
    input (só suavizar mouse de roda tradicional — deltaY grande e
    discreto — deixando trackpad, que já manda muitos eventos pequenos e
    já é suave nativamente, intocado), mas isso é uma reformulação da
    técnica, não um ajuste incremental, e só vale a pena investir nisso se
    o usuário pedir de novo. (2026-08-22)
- **"Planilha vs Pruxor" (`.compare`) ganhou 3 ajustes visuais**, pedidos
  juntos com print de referência: centralizar "Na planilha"/"Pruxor" no
  header, adicionar o mesmo brilho radial dos cards, e o holofote de
  pontinhos no mouse.
  - **Centralização**: `.compare__header-label` (span "Na planilha")
    ganhou `text-align: center`; `.compare__header-label--brand` (flex
    com o logo + "Pruxor") ganhou `justify-content: center` — antes os
    dois ficavam colados nas bordas internas do grid (perto do "VS"),
    porque nenhum definia alinhamento próprio dentro da própria coluna.
  - **Brilho radial**: `.compare` não tinha o brilho colorido do
    `.card--vivid::before` (só tinha `.compare__texture`, a textura de
    grade — equivalente ao `::after`, não ao `::before`). Adicionado
    `.compare::before` com a MESMA receita exata (`radial-gradient(circle
    at 20% 0%, color-mix(in srgb, var(--color-brand) 65%, transparent)
    0%, transparent 62%)`, opacidade 0.85) — posição fixa em vez de
    `var(--glow-x)`/`--glow-y` com ciclo por `nth-child`, já que aqui é 1
    instância só, não uma fileira.
  - **Holofote de pontinhos**: reaproveitou o elemento/efeito
    `.card__spotlight` já existente (mesmo elemento usado em todo
    `.card--vivid` e na hero) em vez de criar algo novo — adicionado
    `<div class="card__spotlight" aria-hidden="true">` dentro de
    `.compare` no HTML, `initCardSpotlight` (js/main.js) teve a busca
    ampliada de `.card--vivid` pra `.card--vivid, .compare`, e as 2 regras
    de CSS que dependiam do ancestral ser `.card--vivid` especificamente
    (`z-index` do spotlight — pra ficar acima do `::before`/`::after` — e
    a ativação de opacidade via `.is-spotlight-active`) ganharam `.compare`
    como alternativa no seletor (`,`), sem duplicar regra nem criar
    seletor genérico novo. **Decisão consciente de NÃO adicionar a classe
    `.card--vivid` inteira no `.compare`** — só o elemento spotlight +
    essas 2 regras CSS pontuais bastam; a classe inteira traria de
    brinde o lift/scale de hover (`.card--vivid:hover`) e pressupostos de
    tipografia (`.card__heading`/`.card__paragraph`) que não se aplicam
    aqui (`.compare` tem sua própria tipografia via `.compare__cell`
    etc.).
  Validado via Playwright: `getComputedStyle` confirma `text-align:
  center`/`justify-content: center` nos 2 labels; hover sobre `.compare`
  ativa `.is-spotlight-active` e o spotlight vai pra `opacity: 1`;
  screenshot mostra o brilho radial sutil no canto superior esquerdo e o
  holofote de pontinhos seguindo o cursor corretamente; mobile (390px)
  segue funcionando sem quebra visual; zero erro de console nas 4
  páginas. (2026-08-22)
- **CTA final da "Planilha vs Pruxor" desalinhado com o "VS"**. Usuário
  mandou print apontando o botão "Quero fazer essa troca" e pediu pra
  alinhar, "observando a linha do meio que divide a planilha com o
  botão" — o botão estava centralizado no card INTEIRO
  (`.compare__closing { text-align: center }`), mas o "VS"/traço
  divisório do header e das linhas não fica no centro geométrico do
  card, porque o grid `1fr 48px 1.15fr` é assimétrico de propósito
  (coluna "Pruxor" um pouco maior que "Na planilha", pra caber o ícone +
  texto em negrito). Resultado: o botão parecia "puxado" pra direita
  comparado à linha do "VS".
  - **Fix sem calcular o deslocamento manualmente**: em vez de medir a
    diferença em px e aplicar uma margem/transform mágica (frágil,
    quebraria se o grid mudasse), criei `.compare__closing-grid` com o
    MESMO `grid-template-columns: 1fr 48px 1.15fr` E o MESMO `padding`
    horizontal do `.compare` (`var(--space-xl)`) — replicar as DUAS
    coisas é essencial: só o grid não bastaria, porque o padding do
    `.compare` desloca onde a proporção 1fr/1.15fr realmente começa a
    contar (confirmei isso antes de implementar, pensando no cálculo).
    O botão (`.compare__closing-btn`) foi posicionado com `grid-column: 2`
    (a coluna de 48px do "VS") + `justify-self: center` — mesmo sendo bem
    mais largo que 48px, isso centraliza o botão em torno do CENTRO
    daquela coluna especificamente (o navegador deixa ele "vazar"
    simetricamente pros 2 lados), não do grid inteiro.
  - Validado via `getBoundingClientRect` comparando o centro do `.compare__vs`
    com o centro do `.compare__closing-btn` em 1280/1440/1920px: diferença
    de 0.01px nos 3 casos (arredondamento de subpixel, essencialmente
    perfeito) — não foi preciso nenhum valor mágico ajustado à mão. No
    mobile (≤767px), onde o "VS" e a divisão em 2 colunas somem (linhas
    empilham), `.compare__closing-grid` também colapsa pra 1 coluna
    (`grid-template-columns: 1fr; padding: 0;`) — sem assimetria pra
    compensar nesse breakpoint, confirmado que o botão fica perfeitamente
    centralizado na tela (390px: `left`+`right` médio bate exatamente com
    o centro do viewport). Zero erro de console nas 4 páginas; overflow
    mobile detectado é o mesmo bug pré-existente do menu hambúrguer, já
    documentado, sem relação com essa mudança. (2026-08-22)
- **CTA final (`.full-width-feature`) ganhou o mesmo plano de fundo dos
  cards**. Usuário mandou print da sessão e pediu "adicione o mesmo plano
  de fundo do card" — até então essa sessão (só a instância base do
  `index.html`, "Sua próxima obra pode ser a primeira com controle
  total.") tinha fundo sólido (`--bg-inverse`), sem nenhum brilho/textura;
  só a variante `--audience` (solucoes.html) tinha isso, via um elemento
  próprio.
  - **Implementado com `::before`/`::after`** (mesma receita e mesma
    posição fixa `20% 0%` já usada em `.compare` — brilho radial na cor
    de marca + textura de grade sutil), em vez de reaproveitar
    `.full-width-feature__texture` (elemento real, usado só pela
    `--audience`) — mais simples pra essa instância que não tem um
    wrapper `.full-width-feature__content` como a `--audience` tem.
  - **Cuidado real com escopo**: `solucoes.html` usa as DUAS classes
    juntas no mesmo elemento (`class="full-width-feature
    full-width-feature--audience"`), então uma regra de `::before`/
    `::after` na classe base SEM RESSALVA também entraria nessa
    instância, empilhando por cima da textura própria dela (que usa uma
    posição de máscara diferente, pensada pro layout dela). Escopado com
    `:not(.full-width-feature--audience)` nas 2 novas regras — confirmado
    via screenshot que `solucoes.html` ficou EXATAMENTE igual a antes,
    sem nenhuma textura nova vazando pra lá.
  - Heading/parágrafo/cta-group/secondary-cta (filhos diretos da
    instância base, sem wrapper `__content`) ganharam `position:relative;
    z-index:1` individualmente pra ficarem acima dos novos
    pseudo-elementos — a `--audience` já tinha esse z-index via o
    wrapper `__content` dela, então não precisou de nada novo lá.
  Validado via Playwright: screenshot do `index.html` mostra o brilho
  roxo + textura de grade no card do CTA final, igual à identidade visual
  dos outros cards escuros do site; screenshot do `solucoes.html`
  confirma a variante `--audience` intocada; mobile (390px) renderiza sem
  quebra; zero erro de console nas 4 páginas. (2026-08-22)

## O que já foi feito

- Estrutura completa: banner de aviso, header/nav por âncora (desktop +
  mobile), hero com form, marquee de logos, problema (4 cards), divisor,
  seção "sobre" (texto + estatísticas), feature showcase, integrações,
  segurança, faixa escura, diferenciais, FAQ (accordion), CTA final,
  footer.
- Conteúdo real da Pruxor aplicado em: hero, problema, "sobre" +
  estatísticas, feature showcase (2 blocos), faixa escura, FAQ (6
  perguntas reais com respostas), CTA, footer.
- Feature showcase convertido para "pinned steps" (imagem + texto presos,
  crossfade por etapa) — `initFeatureShowcase` em `js/main.js`.
- Diferenciais convertido para scroll horizontal preso (título + cards
  presos juntos) — `initDifferentiators` em `js/main.js`.
- `CLAUDE.md` criado com as regras permanentes do projeto.
- `sobre.html` criado (página completa do "Sobre"), com botão de acesso
  a partir da seção equivalente reduzida no `index.html`.
- Cards de "pilares" do `sobre.html` padronizados para o mesmo componente
  `.card` do resto do site (título + parágrafo de apoio — o parágrafo foi
  escrito por não existir texto de apoio na fonte original, mantendo o
  tom já usado no site).
- Seção "Para quem é" do `sobre.html` ajustada (respiro entre parágrafo e
  tags, badges maiores) — estava sem `margin-top` antes da fileira de
  tags, parecia "apertada".
- Link "Sobre" adicionado à navbar (desktop e mobile) em `index.html` e
  `sobre.html`; depois ajustado para apontar para `#sobre` (âncora) em
  vez de `sobre.html` diretamente.
- Navbar reordenada para bater com a ordem real das seções no index.
- Seção "Produto" renomeada para "Soluções" (`id="solucoes"`) e movida
  para logo após "Problema"; ganhou o botão "Ver todas as soluções".
- `solucoes.html` criado (página completa de "Soluções"), reaproveitando
  conteúdo real já extraído (6 cards, "feita para quem" com tags, 5
  diferenciais, CTA com dois botões). Componentes novos reutilizáveis:
  `.card-grid`, `.badge--inverse`, `.btn--outline-inverse`,
  `.call-to-action__actions`.
- Botão "Ver todas as soluções" corrigido: estava fora do bloco de
  conteúdo visível (depois do `.feature-showcase__track` inteiro),
  flutuando sozinho por causa da altura reservada pro scroll travado.
  Movido pra dentro de cada `.feature-showcase__block`.
- `planos.html` criado (página completa de "Planos"), com toggle
  mensal/anual (só visual), 2 grupos de planos (Construtor e Arquitetura
  e Design, 4 cards cada, com plano em destaque "Mais popular") e CTA
  final com dois botões. Componentes novos reutilizáveis:
  `.pricing-card`, `.pricing-group__header`, `.billing-toggle`.
- Botão "Ver planos" adicionado ao CTA final do `index.html` (mesmo
  padrão de dois botões já usado em `solucoes.html`/`planos.html`).
  Link "Planos" adicionado ao footer das 4 páginas.
- Link "Planos" adicionado à navbar principal (desktop e mobile) das 4
  páginas, entre "Soluções" e "Sobre" — aponta direto pra `planos.html`
  (não tem âncora no index pra apontar).
- Hero do `index.html` redesenhado: fundo em gradiente escuro
  (`--color-ink` → `--color-brand`) com textura de grade sutil e holofote
  de pontinhos que segue o mouse (`initHeroSpotlight` em `js/main.js`).
  Card do produto virou um card de vidro (`backdrop-filter`) pra
  contrastar com o novo fundo. Textos do hero passaram a usar cores
  claras.
- Gradiente do hero refinado (4 paradas, funde com o fundo da página sem
  quebra) e holofote ganhou distorção animada tipo água (filtro SVG
  `#hero-wave` com `feTurbulence`/`feDisplacementMap`/`<animate>`).
- Gradiente do hero refeito de novo (6 paradas contínuas, sem platô) pra
  eliminar a transição brusca no final; máscaras de `.hero__texture`/
  `.hero__spotlight` resincronizadas com os novos pontos de fade.
- Navbar ganhou dois estados novos: transparente sobre a hero no topo do
  index (texto claro) e pílula flutuante compacta ao rolar (qualquer
  página) — `initHeaderScrollState` em `js/main.js`, mais o ajuste de
  `.hero` (margin negativa) pra ela ficar atrás do header.
- Hero simplificada: card visual/mockup removido, título+subtítulo+form
  centralizados numa coluna única. `text-wrap: balance` aplicado em todos
  os headings/parágrafos de destaque do site (hero, section-header, card,
  feature-set, full-width-feature, call-to-action) pra evitar linha final
  com palavra órfã.
- Pílula da navbar descolada do topo (`padding-top` no `.site-header`,
  não `margin-top` no filho) e sombra suavizada.
- Cards de "Problema" e "Diferenciais" redesenhados com `.card--vivid`
  (fundo escuro, brilho de marca, textura de grade da hero, ícone, 2
  sparkles) em 2 rodadas — 1ª rodada com hover básico; 2ª rodada reforçou
  o hover (zoom+lift maiores), deu animação contínua ao ícone (float +
  glow, não só no hover), adicionou o mesmo holofote de pontinhos da
  hero seguindo o mouse dentro de cada card (`.card__spotlight` +
  `initCardSpotlight`), e corrigiu um corte vertical no hover dos cards
  de Diferenciais.
- Componente de scroll horizontal preso generalizado: `.differentiators__*`
  → `.pinned-cards__*` (e `initDifferentiators` → `initPinnedCards`), com
  fade nas bordas via `mask-image`. Padrão `.card--vivid` + sticky/scroll
  agora usado em 4 lugares (antes só em Diferenciais do index): Pilares
  (sobre.html), Soluções e Diferenciais (solucoes.html). `.card-grid` e
  `.about-pillars` (grids simples antigos) removidos por ficarem sem uso.
- 9 bugs reais encontrados e corrigidos até agora (ver seção abaixo).
- Contraste do texto da hero reforçado (`text-shadow` + branco mais puro
  no "no caos."), marquee de logos removido (HTML+CSS+JS), ícone +/− do
  FAQ trocado pra cor de marca.
- Seção "Sobre" (`#sobre`, index.html) redesenhada como `.about-outcomes`:
  card escuro com globo 3D pontilhado (Canvas 2D puro, sem biblioteca,
  gira sozinho) e 4 stats que contam de 0 até o valor real ao entrar na
  tela (`initAboutGlobe`/`initCountUp` em `js/main.js`). `.why-different`/
  `.stat-panel` removidos. Mais 1 bug real encontrado e corrigido durante
  a verificação (overflow horizontal em mobile pelas stats em nowrap) —
  ver "Decisões" e seção "Problemas e soluções" logo abaixo.

## O que está sendo feito

Nada em andamento no momento — última tarefa concluída foi a remoção das
3 seções legadas (Integrações, Segurança, Diferenciais antiga) que não
tinham copy oficial equivalente, a pedido explícito do usuário (ver
"Decisões", entrada logo após a 9ª seção da copy oficial "Planos").

## Pendências

- ~~Conteúdo real para as seções Integrações e Segurança~~ — **resolvido
  por remoção**: as duas seções (e a "Diferenciais" antiga) foram
  removidas do `index.html` por pedido explícito do usuário (2026-08-22,
  ver "Decisões"), já que não tinham copy oficial equivalente. Não é mais
  conteúdo pendente — deixou de existir.
- Preços/desconto anual reais para o toggle de `planos.html` (hoje só
  visual, não muda o valor exibido) — nota: `index.html#planos` já tem
  toggle FUNCIONAL com preços reais desde a 9ª seção da copy oficial;
  essa pendência é só sobre a página descontinuada `planos.html`, que
  não recebe mais investimento proativo.
- Imagens reais do produto (hoje: placeholders de cor sólida/gradiente em
  `.feature-showcase__visual-panel` etc. — a hero não tem mais card
  visual, foi removido de propósito, ver `CLAUDE.md`).
- Conectar o formulário do hero e os botões "Assinar agora"/"Falar com o
  comercial" a serviços reais (checkout, CRM, WhatsApp etc.).
- `README.md` ainda descreve o site como base genérica com placeholder —
  não reflete o conteúdo real da Pruxor nem as páginas extras (sobre,
  soluções, planos) (atualização opcional, não crítica).
- **Achado durante teste, não corrigido**: em viewports bem estreitos
  (testado em 390px), o botão de hambúrguer (`.nav__hamburger-button`)
  fica parcialmente fora da tela — `.nav__container` tem 3 itens visíveis
  no mobile (logo, botão "Solicitar demonstração", hambúrguer) com
  `gap: var(--space-m)` (32px) e `justify-content: space-between`, e a
  soma das larguras mínimas estoura os ~350px de conteúdo disponível.
  Pré-existente, não é causado pelas mudanças desta sessão (não mexi em
  `.nav__container`/`.nav__actions`) — precisa de decisão de design
  (esconder texto do botão, reduzir gap, ou empilhar diferente nesse
  breakpoint) antes de corrigir.

## Problemas e soluções

- **Elementos com `opacity:0` permanente após salto de scroll** (ex:
  clicar em `#faq` no menu): `IntersectionObserver` sozinho não detecta
  elementos "pulados" num salto instantâneo. Solução: varredura (`sweep`)
  por scroll/resize além da observação normal, em `initScrollReveal`.
- **Atraso do reveal passando de 1s** em seções longe do topo: o stagger
  usava o índice absoluto do elemento na página inteira. Solução: fila
  com atraso máximo de 350ms, não índice fixo.
- **Menu mobile preso a ~64px de altura em vez da tela inteira**:
  `backdrop-filter` no `<header>` criava um *containing block* para o
  menu `position:fixed`. Solução: isolar o `backdrop-filter` num wrapper
  próprio (`.site-header__bar`), fora do elemento que contém o menu.
- **`position: sticky` sem efeito nenhum no feature showcase**:
  `align-items: start` no grid impedia a coluna do visual de esticar até
  a altura da coluna de texto, e sem essa altura o sticky não tem espaço
  para "grudar". Solução: voltar o grid para o padrão (`stretch`).
- **Dois blocos de texto sobrepostos no feature showcase**: os blocos
  tinham `data-reveal` (scroll-reveal genérico) *além* da classe
  `.is-active` (crossfade por etapa) — os dois sistemas competiam pela
  mesma propriedade `opacity`. Solução: remover `data-reveal` desses
  blocos (regra já registrada em `CLAUDE.md` para não repetir em novos
  componentes).
- **Botão de hambúrguer impossível de clicar para fechar o menu mobile**
  (achado ao testar `sobre.html`, mas o bug já existia também no
  `index.html`): `.site-header__bar` tinha `z-index: auto`, enquanto o
  overlay `.nav__list--mobile` tinha `z-index: 20` — como z-index só
  compara elementos com `position` diferente de `static`, o overlay
  cobria o botão mesmo estando "atrás" na hierarquia visual esperada.
  Solução: `position: relative; z-index: 25;` em `.site-header__bar`
  (regra registrada em `CLAUDE.md`).
- **Botão "ver mais" flutuando sozinho, longe do conteúdo**: coloquei o
  botão "Ver todas as soluções" depois do `.feature-showcase__track`
  (fora da área presa/sticky) — como o track reserva bem mais altura de
  scroll do que o conteúdo visível ocupa, o botão só aparecia depois de
  um vão enorme em branco. Solução: mover o botão para dentro de cada
  `.feature-showcase__block`, junto do botão principal (mesmo padrão do
  botão "Saiba mais" em `#sobre`, que já ficava dentro do bloco de
  conteúdo).
- **Texto claro do menu invisível no topo do index** (achado ao implementar
  a navbar transparente): a hero não sobrepunha o header — ocupava espaço
  próprio no fluxo, começando só depois dele — então a transparência da
  navbar revelava o fundo claro da página (não o degradê escuro), e o
  texto claro do menu ficava ilegível (claro sobre quase-branco). Solução:
  `margin-top: calc(-1 * var(--nav-height))` na `.hero` (compensado no
  `padding-top`), pra ela ficar atrás do header de propósito.
- **Texto claro do menu vazando pro overlay mobile**: a regra de texto
  claro (pensada só pra barra desktop) usava seletor `.nav__link` sem
  qualificar `.site-header__bar` — como o menu mobile (`.nav__list--mobile`)
  também tem `.nav__link` e é irmão do `.site-header__bar` (fora dele, com
  fundo sempre claro), a regra vazava pra lá e apagava os itens do menu
  aberto (claro sobre claro). Solução: restringir os seletores a
  `.site-header__bar .nav__link` e excluir `body.nav-mobile-open`.
- **`.about-outcomes__stats` estourando a largura da página em mobile**:
  `flex-wrap: nowrap` (pensado pra caber 4 stats numa linha só, como no
  print de referência) tinha um comentário assumindo que sobraria largura
  suficiente sempre que o card estivesse empilhado (abaixo de 991px, com o
  globo embaixo do conteúdo) — não testado de verdade nessa faixa. Ao
  verificar com Playwright antes de dar a tarefa por concluída,
  `stats.scrollWidth > stats.clientWidth` em qualquer viewport entre
  320px e ~560px, causando `body.scrollWidth` maior que a viewport (scroll
  horizontal na página inteira, não só na seção). Solução: `flex-wrap:
  wrap` formando grid 2x2 abaixo de 767px (breakpoint padrão do projeto).
  Lição: comentário no CSS assumia comportamento responsivo sem medir — ao
  declarar `nowrap`/larguras fixas em qualquer componente novo, testar
  fisicamente a faixa mobile inteira (não só o breakpoint onde a mudança
  foi pensada) antes de considerar concluído.
- **Medir espaçamento entre elementos com `data-reveal` sem rolar até eles
  primeiro dá leitura errada** (achado ajustando o espaçamento de "Como
  funciona"): `getBoundingClientRect()` de um elemento inclui qualquer
  `transform` ativo nele — e um elemento `data-reveal` ainda não revelado
  (fora da viewport, nunca observado pelo `IntersectionObserver`) está com
  `transform: translateY(...)` do estado inicial "escondido". Isso não
  afeta o tamanho/posição do CONTAINER pai (transform não move o pai),
  só do próprio elemento — então medir um pai (ex: `.how-it-works__timeline`,
  sem `data-reveal` próprio) contra um filho ainda não revelado (`.how-it-works__step`,
  com `data-reveal`) dá números que não batem entre si (no caso real,
  sugeriu um "overlap" de 18px que não existia de verdade). Solução:
  sempre `scrollIntoViewIfNeeded()` (ou rolar manualmente) + esperar a
  transição de reveal assentar (não só `waitForTimeout` curto) antes de
  tirar qualquer medição de posição/espaçamento via Playwright — mesma
  lição geral já registrada sobre `scroll-behavior: smooth` em "Tentativas
  descartadas", só que a causa aqui é `transform` de reveal, não scroll
  suave.

## Tentativas descartadas

- Extrair o texto do site da Pruxor com um seletor simples (sem incluir
  `<strong>`/`<em>`) cortava trechos em negrito de vários parágrafos
  (ex: o parágrafo principal do hero). Descartado em favor de incluir
  esses seletores na extração.
- Medir posição/estado de elementos logo após `scrollIntoView` com
  `scroll-behavior: smooth` ainda ativo deu leituras erradas (a medição
  pegava um estado intermediário da animação). Descartado: passou a
  forçar `scroll-behavior: auto` antes de medir em qualquer teste manual.

## Próximos passos

1. Aguardar o usuário enviar a próxima seção de copy oficial (o rebuild é
   feito sessão a sessão, sem previsão fixa de quais seções faltam).
2. Substituir os placeholders visuais por imagens reais do produto.
3. Conectar o formulário do hero e os botões de assinatura/comercial a
   serviços reais.
4. Avaliar se vale atualizar o `README.md` (não bloqueante).
5. Quando o usuário confirmar, remover de vez `sobre.html`/`solucoes.html`/
   `planos.html` do disco (hoje mantidos só por instrução explícita de não
   apagar ainda) — ver nota de fase "copy oficial" em "Decisões".

- **Remoção do announcement banner + exclusão das 3 páginas extras +
  limpeza de código órfão (2026-08-22)**. Usuário mandou um print da faixa
  fixa no topo da página ("Novidade: recurso X acabou de ser lançado") e
  pediu pra remover, e no mesmo pedido autorizou apagar `sobre.html`,
  `solucoes.html` e `planos.html` ("pode apagar... pois não estão mais
  sendo usadas") — a autorização que faltava desde o início da fase "copy
  oficial" (até então só tínhamos ordem pra não apagar).
  - **Announcement banner**: removido por completo de `index.html` (era a
    única página que ainda tinha, as 3 extras também tinham mas foram
    apagadas de qualquer forma) — HTML, CSS (`.announcement-banner*`, a
    variável `--banner-height`, `@keyframes pulse`, as regras
    `body.is-announcement-hidden`) e JS (`initAnnouncementBanner` + sua
    chamada em `DOMContentLoaded`). O padding do menu mobile
    (`.nav__list--mobile`), que compensava a altura do banner na conta
    (`+ var(--banner-height)`), foi ajustado pra não somar mais essa
    variável.
  - **As 3 páginas foram apagadas do disco** (`sobre.html`, `solucoes.html`,
    `planos.html`) — confirmado antes via grep que `index.html` não tinha
    nenhum `href` real apontando pra elas (só menções em comentários), só
    então elas foram removidas.
  - **Limpeza de CSS/JS órfão**: como essas 3 páginas eram as ÚNICAS
    usuárias de vários componentes, apagá-las deixou bastante código sem
    nenhum uso em lugar nenhum. Perguntei ao usuário se quereria essa
    limpeza também (não era o pedido literal) e ele confirmou
    explicitamente ("sim, remover tudo"). Removido por completo (CSS +
    JS, confirmado sem uso via grep antes de apagar cada um):
    - **`.pinned-cards` inteiro** (`__track`/`__stage`/`__viewport`/
      `__cards`, ~100 linhas de CSS incluindo o fade assimétrico de 10
      rodadas de ajuste) + a função `initPinnedCards`/`visibleWidthPx`
      (js/main.js) + sua chamada em `DOMContentLoaded`. Esse componente só
      era usado em "Pilares" (`sobre.html`), "Soluções" e "Diferenciais"
      (`solucoes.html`) — a instância que existia em `index.html`
      ("Diferenciais" antiga) já tinha sido removida numa rodada anterior
      da fase copy oficial, então o componente já estava, sem que
      ninguém tivesse notado, com ZERO uso real em `index.html` antes
      mesmo dessa limpeza.
    - **`.call-to-action`** (CTA roxo sólido full-bleed) — o `index.html`
      já tinha migrado pra `.full-width-feature` reposicionado numa
      rodada anterior; só as 3 páginas extras ainda usavam a classe
      antiga.
    - **`.full-width-feature--audience` + `.audience-loop`** (variante de
      layout 2 colunas com lista de badges em loop vertical, só usada na
      sessão "Feita para quem..." de `solucoes.html`). Os seletores
      `:not(.full-width-feature--audience)` que existiam em
      `.full-width-feature::before`/`::after` (pra não empilhar textura
      duplicada nessa variante) foram simplificados de volta pra
      `.full-width-feature::before`/`::after` puro, já que não existe
      mais variante nenhuma pra excluir.
    - **`.about-story`, `.about-audience__tags`** — conteúdo/estilo
      exclusivos de `sobre.html`.
    - **`.pricing-group__*`** (header com ícone + título + subtítulo por
      grupo de planos) e **`.pricing-card__limit`** (contador "Até N
      usuários") — exclusivos do layout de 2 grupos de `planos.html`; a
      sessão "Planos" do index sempre teve 1 grupo só e nunca usou esses
      elementos. A regra `.pricing-card:not(:has(.pricing-card__limit))
      .pricing-card__features` (que existia só por causa do
      `.pricing-card__limit`) foi simplificada de volta pra uma regra
      direta em `.pricing-card__features`.
  - **Validação**: brace balance do CSS conferido via script (contagem de
    `{`/`}` bate), `node --check` no JS sem erros de sintaxe, e um agente
    verificou `index.html` num Chromium headless — zero erros de console,
    zero `pageerror`, `.pinned-cards`/`initPinnedCards` confirmados sem
    nenhuma referência (nem pendurada nem quebrada), banner ausente do
    DOM, seção Planos e menu mobile renderizando normalmente em
    desktop/mobile. O agente também confirmou que o overflow horizontal
    em viewports ≤~410px (botão "Solicitar demonstração" não cabendo ao
    lado do hambúrguer) é **pré-existente**, sem relação com nenhuma
    dessas mudanças — mesma pendência já registrada antes.
  - **`CLAUDE.md` reescrito por extenso** pra remover a arquitetura de 4
    páginas como estado-alvo (agora é definitivamente página única) e
    todas as descrições de componentes que deixaram de existir
    (`.pinned-cards`, `.call-to-action`, `.audience-loop`,
    `.full-width-feature--audience`, `.about-audience__tags`,
    `.pricing-group__*`) — histórico completo de cada um fica só aqui em
    `memoria.md`.

- **Botão "Solicitar demonstração" do nav (desktop + mobile) passou a
  linkar pro WhatsApp (2026-08-22)** — antes era `href="#"` (placeholder,
  nunca tinha sido resolvido no "MAPA DE LINKS"). Pedido explícito do
  usuário: "deve ter o mesmo link do botão falar no whatsapp". Usa o
  mesmo link/texto pré-preenchido já usado no CTA final
  (`.full-width-feature__secondary-cta`): `https://wa.me/5521966616597?text=...`
  + `target="_blank" rel="noopener"` (mesmo padrão de link externo do
  site). Não é mais um link único — agora há 3 pontos de WhatsApp no
  site (CTA final + os 2 botões de nav), não só 1 como registrado antes.

- **Heading de "Soluções" em 2 linhas (2026-08-22)** — usuário pediu, com
  print, que o headline da sessão ("Veja por dentro: tudo que a sua
  operação precisa, sem inchaço.") ficasse em só 2 linhas (estava
  quebrando em 3). `.feature-showcase__header-heading` tinha
  `max-width: 32rem` — largo o bastante pra não colidir com o parágrafo
  à direita (mesmo layout horizontal documentado em "Header horizontal"),
  mas estreito demais pro texto caber em 2 linhas. Medido via Playwright
  testando vários valores: **36rem** é o menor que garante 2 linhas
  balanceadas (557px/570px) sem encostar no parágrafo, confirmado em
  1440px e 1920px. **Em larguras "tweener" (~991–1344px, incluindo
  1280px cravado) ainda cai pra 3 linhas** — mesmo padrão de degradação
  do `text-wrap: balance` já aceito no projeto pro heading da hero (não é
  bug, é o algoritmo de balanceamento reagindo a menos espaço
  disponível); não foi pedido cobrir esse meio-termo especificamente.
  Nenhuma regressão nova: confirmado sem overlap/quebra em 991px, 767px e
  390px (fallback empilhado), e sem overflow horizontal novo (o overflow
  que aparece em 1100px/390px é pré-existente, vem do
  `.testimonials__track`, sem relação com essa mudança).

- **Bug real corrigido: hover de `.btn--on-dark` quase invisível
  (2026-08-22)**. Usuário mandou print do botão "Começar meu teste grátis
  agora" (CTA final) no hover, mostrando fundo escuro/borrado e texto
  ilegível, pedindo pra "deixar mais escuro" e "melhorar a leitura da
  fonte". Causa raiz: `.btn--on-dark:hover` usava `background:
  var(--brand-10)` — um roxo com só 10% de opacidade — mas esse botão
  SEMPRE fica sobre fundo escuro (`.about-outcomes__cta` e o CTA final
  `.full-width-feature`), então o fundo quase-transparente deixava o
  escuro da seção por trás dominar, com o texto (`color: var(--color-ink)`,
  escuro) quase invisível sobre um fundo também escuro — não é só "pouco
  contraste", é literalmente escuro-sobre-escuro. Corrigido pra
  `background: color-mix(in srgb, var(--color-ink) 12%, white)` — opaco,
  um tom só um pouco mais escuro que o branco base, mantendo o texto
  escuro com contraste bem acima do mínimo (medido via Playwright: 19.7:1
  no CTA final, 15.1:1 em `.about-outcomes__cta`, ambos WCAG AAA
  folgados). Não depende mais de transparência sobre fundo variável.
  **Ajuste seguinte, mesmo dia**: usuário pediu "deixe mais escuro um
  pouco" — subido de 12% pra **20%** de mistura de `--color-ink` no
  branco. Continua opaco e com contraste alto (texto escuro sobre um
  cinza-claro mais perceptível), só um degrau mais visível como estado de
  hover.
- **Subheadline do CTA final reduzido de 4 pra 3 linhas (2026-08-22)** —
  mesmo pedido do usuário, mesma sessão. `.full-width-feature__paragraph`
  tinha `max-width: 56ch`; texto não podia mudar (pedido explícito). Medido
  via Playwright testando vários valores: **62ch** é o menor que garante 3
  linhas bem balanceadas (~530-560px cada linha, ~5% de diferença) — todo
  valor maior testado (66/70/74/78/82ch) rendeu EXATAMENTE igual, já que
  `text-wrap: balance` sempre acha a largura mínima que ainda cabe no
  número de linhas possível; não há motivo pra usar um valor maior que o
  mínimo. Card tem espaço de sobra (~1150px disponíveis dentro do
  padding), sem risco de estourar em nenhuma largura de desktop comum.

- **Início de uma rodada dedicada a ajustes mobile (2026-08-22)** —
  usuário avisou explicitamente: "tudo que for passado aqui, será para
  versão mobile". Enquanto essa rodada estiver em andamento (sem aviso
  contrário do usuário), interpretar pedidos genéricos ("o botão", "o
  headline", "o menu") como referindo-se especificamente ao breakpoint
  mobile (≤767px/≤479px, ou ≤991px quando o componente em questão só tem
  esse breakpoint, como a navbar) — não ao desktop/tablet.
  - **Bug real corrigido: overflow horizontal no header mobile**. Usuário
    mandou print do DevTools (emulador iPhone XR, 414×896) mostrando a
    página "rolando pro lado" e pediu pra validar/corrigir, além de
    confirmar que o menu mobile deveria virar hambúrguer. Causa raiz:
    o media query `@media (max-width: 991px)` do `.nav__container`
    escondia só `.nav__actions .btn--secondary` ("Entrar"), deixando
    `.nav__actions .btn--primary` ("Solicitar demonstração") visível na
    barra ao lado do hambúrguer — logo + botão + hambúrguer juntos não
    cabiam em telas estreitas, empurrando o hambúrguer pra fora e
    causando overflow horizontal na PÁGINA INTEIRA (não só no header).
    Esse era exatamente o "bug pré-existente do botão de hambúrguer"
    registrado como pendência havia várias rodadas. Corrigido escondendo
    `.nav__actions .btn--primary` também nesse breakpoint — o header
    mobile agora mostra só logo + hambúrguer; as duas ações (Entrar/
    Solicitar demonstração) continuam acessíveis dentro do overlay do
    menu (`.nav__actions--mobile`, classe/seletor diferente, não afetado
    por essa regra). Validado via Playwright em 414/390/375/320px: zero
    overflow em qualquer um (inclusive rolando a página inteira, não só o
    topo), menu abre/fecha corretamente com os 2 botões + 4 âncoras
    dentro, zero erros de console. Também descartada a hipótese de que o
    carrossel de depoimentos (`.testimonials__track`, scrollWidth grande
    por design, é um loop duplicado) contribuísse pro overflow — confirmado
    que ele fica contido pelo próprio `overflow-x: hidden` do ancestral,
    sem vazar pro `body.scrollWidth`.

  - **Hero mobile passou a ocupar 80% da viewport** — pedido explícito
    ("deixe a hero viewport 80%, para ocupar 80% da tela"). No breakpoint
    ≤767px, `.hero` ganhou `min-height: 80vh` (não `height`, pra crescer
    além de 80vh em vez de cortar se o conteúdo precisar de mais espaço
    algum dia) + `display:flex; flex-direction:column;
    justify-content:center;` pra centralizar `.hero__grid` verticalmente
    nesse espaço (sem isso, sobraria um vão vazio embaixo em vez de
    centralizar). Validado via Playwright em 4 tamanhos de iPhone
    (XR/414, 390, SE/375, 14 Pro Max/430): altura bate exatamente com
    80vh nos 3 aparelhos "normais", e no SE (o mais baixo, 667px de
    altura) o `min-height` deixa a hero crescer um pouco além de 80vh
    porque o conteúdo não cabe — comportamento esperado, não bug.
    Centralização vertical confirmada (espaço livre dividido
    uniformemente acima/abaixo do conteúdo). Sem overflow novo, sem erros
    de console, transição pra `.about-outcomes` (próxima sessão)
    continua com respiro adequado.

  - **"Sobre a Pruxor" (`.about-outcomes`) reformulada no mobile**, 4
    pedidos explícitos num só turno (usuário avisou que o print não
    mostrava o conteúdo inteiro, mas pra considerar tudo mesmo assim):
    1. Globo voltou a `position: absolute` (a regra de ≤991px tinha
       posto em fluxo normal, empurrando badge/heading/parágrafo pra
       baixo dele — o globo aparecia ANTES de todo o conteúdo, não atrás)
       — content (`z-index:1`) por cima, globo (`z-index:0`) atrás.
    2. Globo aumentado pra `height: 40%` do card (`aspect-ratio:1`
       herdado deriva a largura), ancorado embaixo e centralizado
       (`bottom:0; left:50%; transform:translateX(-50%)`) — troca do
       antigo ancoramento de canto (`translate(50%,50%)`, pensado só pro
       recorte de 1/4 do desktop).
    3. Padding do card: `var(--space-l) var(--space-2xs)` — bateu exato
       com os 48px/12px pedidos, sem precisar hardcodear px.
    4. Conteúdo centralizado (`text-align:center` + `margin-inline:auto`
       no parágrafo, que tem `max-width` próprio) e `line-height` do
       heading reduzido de 1.55 (herdado do body, nunca tinha sido
       definido pra esse heading especificamente — inconsistente com os
       outros headings do site, que já usam ~1.05-1.15) pra 1.15.
    Validado via Playwright em 414/390/375px: todas as 4 medidas batem
    exatamente (altura do globo = 40.0% da seção, padding 48/12px,
    centralização, line-height 1.15), sem overflow novo, zero erros de
    console. **Observação encontrada na validação, não pedida, não
    corrigida ainda**: como a coluna de stats é mais alta que os 40% do
    globo, ele acaba ficando atrás dos 3 stats (não só do espaço vazio
    abaixo deles) — os valores (grandes, brancos, negrito) continuam bem
    legíveis, mas os rótulos pequenos (`rgba(247,247,255,0.6)`, parecido
    com o tom dos pontinhos do globo) ficam com leitura um pouco mais
    "mole" onde encostam em aglomerados de pontos mais densos. Não é bug
    de layout, é só uma questão de contraste em alguns pontos — avisado
    ao usuário, sem alterar nada até ele decidir se quer ajustar.

    **2ª rodada do globo, mesmo dia**: usuário pediu "aumente o globo,
    para que apenas 50% do globo apareça, e esses 50% do globo ocupe 40%
    desse card" — ou seja, dobrar o círculo INTEIRO (que já tinha 40% de
    altura) pra 80%, mas cortar exatamente a metade de baixo, deixando só
    o semicírculo de cima visível, ocupando os mesmos 40% de antes.
    Resolvido sem precisar calcular offset manualmente: `height: 80%` +
    `transform: translate(-50%, 50%)` (o `translateY(50%)` usa % da
    PRÓPRIA altura da caixa, não do container — desloca o centro do
    círculo pra baixo até coincidir exatamente com a borda inferior do
    card, cortando a metade de baixo via `overflow:hidden` do card).
    Validado via Playwright: 80.00%/40.00% exatos em 414px e 390px de
    largura. **Efeito colateral esperado, não bug**: como o círculo tem
    aspect-ratio 1:1 e agora é bem maior (diâmetro = 80% da ALTURA do
    card, ~625px numa tela de 414px, contra ~374px de largura do card),
    ele também é cortado nas laterais pelo mesmo `overflow:hidden` — o
    resultado visual não é mais um semicírculo "redondo", e sim uma
    curva mais achatada tipo "horizonte de planeta" ocupando a largura
    inteira do card (só a parte central/mais reta do círculo fica
    visível, a curvatura mais fechada das bordas do círculo é cortada).
    Screenshot confirmou visual final: globo funciona bem como pano de
    fundo atrás dos 3 stats, lê como intencional.

- **`.section-header__heading` reduzido no mobile (2026-08-22)** — usuário
  olhou a sessão "Problema" e pediu fonte um pouco menor + linhas mais
  próximas, com uma condição explícita: "todas as outras sessões que
  usam essa mesma fonte devem receber o ajuste feito nesta". Como
  `.section-header__heading` é a classe COMPARTILHADA por 8 headings
  diferentes no `index.html` (Problema, Soluções, Como funciona, Planilha
  vs Pruxor, Diferenciais, Depoimentos, Planos, FAQ), editar a classe em
  si (em vez de uma classe específica de sessão) já propaga o pedido
  automaticamente pras 8 — não precisou de nenhum trabalho extra por
  sessão. Adicionado `@media (max-width: 767px) { .section-header__heading
  { font-size: var(--text-2xl); line-height: 1.1; } }` — `--text-2xl`
  (32px) é um degrau abaixo do `--text-3xl` (40px) base, mesmo padrão já
  usado pro `<h1>` da hero no mobile (ver regra de `.hero__heading` em
  CLAUDE.md); `line-height` 1.15→1.1 (mais apertado, mas não tão apertado
  quanto o 1.05 da hero, já que esse heading costuma quebrar em frases de
  3 linhas, não só 2-3 palavras). Validado via Playwright em 414px: os 8
  headings batem com 32px/35.2px de computed style, `text-wrap:balance`
  continua funcionando bem em todos (sem palavra órfã), sem overflow
  novo, zero erros de console.

- **`.feature-set__heading`/`.feature-set__paragraph` com linhas mais
  próximas no mobile (2026-08-22)** — mesmo padrão de pedido do
  `.section-header__heading`: usuário olhou o 1º módulo de "Soluções"
  ("Controle financeiro por obra") e pediu menos espaço entre linhas,
  "todos que seguem essa fonte devem seguir a mesma alteração". Como
  essas duas classes são compartilhadas pelos 5 módulos (Financeiro,
  Diário de obra, Orçamento SINAPI, Gestão de obras, Estoque), editar a
  classe já propaga sozinho — sem precisar de nenhum ajuste por módulo.
  Nenhum dos dois tinha `line-height` próprio antes (herdavam o 1.55
  solto do body). Adicionado em `≤767px`: heading pra 1.15 (mesmo padrão
  já usado nos outros headings do site), parágrafo pra 1.4 (mais compacto
  que 1.55, mas ainda com respiro de leitura — parágrafo, não heading).
  Validado via Playwright: os 5 módulos batem com 36.8px/22.4px de
  computed line-height, desktop (1440px) confirmado intocado (continua
  1.55), sem overflow novo, zero erros de console.

- **Headline/subheadline centralizados em 5 sessões + CTA final com o
  mesmo tratamento de "Sobre a Pruxor" (2026-08-22, mobile)**. Dois
  pedidos no mesmo turno:
  1. Centralizar headline+subheadline no mobile em: Soluções
     (`.feature-showcase__header`), Como funciona (`.how-it-works__intro`
     — só heading+CTA, essa sessão não tem parágrafo), Planilha vs Pruxor
     (`.compare__intro`), Diferenciais comercial (`.value-props__header`)
     e FAQ. Todas ganharam `text-align: center` em `≤767px`, escopado por
     sessão (cada uma no seu próprio bloco/seletor, não uma regra
     genérica) pra não afetar Depoimentos/Planos (que já usam
     `.section-header--center` desde antes) nem Problema (que não estava
     na lista). **FAQ precisou de uma classe nova** (`.faqs__intro`) — a
     div do header do FAQ não tinha classe própria antes, só
     `data-reveal`.
     - **Bug real encontrado e corrigido na verificação**: em Soluções,
       `.feature-showcase__header-paragraph` tem `text-align: left`
       EXPLÍCITO na regra base (parte do layout desktop
       heading-esquerda/parágrafo-direita) — texto explícito no próprio
       elemento sempre vence herança, então centralizar só o pai
       (`.feature-showcase__header`) não bastava pra esse parágrafo
       específico (os outros elementos, sem `text-align` próprio,
       herdavam certinho). Corrigido adicionando
       `.feature-showcase__header-paragraph { text-align: center; }`
       explicitamente dentro do mesmo bloco `≤767px`.
  2. CTA final (`.full-width-feature`) ganhou os MESMOS 2 ajustes já
     feitos em `.about-outcomes` numa rodada anterior — usuário pediu
     comparando as duas sessões escuras: `padding: var(--space-l)
     var(--space-2xs)` (48px/12px) e `.full-width-feature__heading {
     line-height: 1.15 }` (não tinha valor próprio antes, herdava o 1.55
     do body).
  Validado via Playwright em 414px: as 5 sessões centralizadas (após o
  fix do parágrafo de Soluções), `.full-width-feature` com padding
  48/12px exatos e heading em 36.8px de line-height (32×1.15) — tudo
  confirmado intocado em 1440px desktop (nenhuma das novas regras vaza
  pra lá). Sem overflow novo em nenhuma seção da página, zero erros de
  console.

- **4 ajustes estruturais de mobile num só turno (2026-08-22)**:
  1. **CTA de "Como funciona" movido pra depois dos cards** — antes ficava
     entre o heading e os 3 cards. Como o botão era filho de
     `.how-it-works__intro` (irmão diferente de `.how-it-works__card-col`
     no grid), reordenar exigiu extrair o `<a>` pra ser item PRÓPRIO do
     grid (`.how-it-works__layout`), usando `grid-template-areas`:
     desktop mantém `"intro cards" / "cta cards"` (botão embaixo do
     heading, cards ocupando a coluna toda via span); mobile (≤991px)
     virou `"intro" / "cards" / "cta"` (botão por último). Botão ganhou
     `data-reveal` próprio (antes vinha de graça do wrapper `.intro`).
  2. **Espaço entre sessões = 80px no mobile** — `.section` (classe
     compartilhada por quase toda sessão) tinha `padding-top/bottom:
     64px` cada (≤767px); baixado pra `40px` cada (soma 80px entre duas
     sessões `.section` adjacentes — paddings não colapsam). 40px não
     bate com token nenhum da escala, usado direto de propósito. Hero e
     CTA final (`.full-width-feature`) não usam `.section`, ficam fora
     dessa conta (documentado no comentário do CSS). **Achado na
     verificação, não corrigido**: a transição Problema→Soluções tem
     ~184px em vez de 80px, por causa de um `.section-divider`
     decorativo (linha-ponto-linha) que só existe entre essas duas
     sessões — 104px de altura própria dele + 80px do padding = 184px,
     matematicamente consistente, só não é "80px limpo" ali por causa
     desse elemento extra. Não mexi nele (não foi pedido, e é decorativo
     — avisar o usuário antes de qualquer ajuste).
  3. **"Planilha vs Pruxor" sem alternar planilha/pruxor no mobile** —
     antes cada uma das 7 linhas empilhava seu próprio before+after,
     então a rolagem mostrava planilha→pruxor 7 vezes seguidas. Como o
     par vivia dentro de UMA `.compare__row` (dona da borda arredondada
     da linha), não dava só pra reordenar — `.compare__row` virou
     `display: contents` no mobile (some da árvore de caixas, filhos
     passam a ser flex-items diretos de `.compare__rows`), e
     `order: 1`/`order: 2` em `--before`/`--after` agrupa os 7 primeiros
     e os 7 últimos (ordem relativa dentro de cada grupo preservada).
     Cada célula ganhou a própria borda+cantos (antes só a linha inteira
     tinha isso) pra continuar lendo como item de lista sozinha.
  4. **Depoimentos virou lista horizontal simples, sem loop nem fade** —
     antes era um carrossel CSS puro em loop automático (`animation:
     testimonials-scroll 42s infinite`) com 5 cards reais + 5 duplicados
     (`aria-hidden`) pra loop sem salto, e fade nas bordas
     (`mask-image`). No mobile: animação removida, `mask-image: none`,
     os 5 cards duplicados escondidos (`display:none`, já que sem loop
     eles só apareceriam como repetição no fim da lista), e
     `overflow-x` de `hidden` pra `auto` (+ `-webkit-overflow-scrolling:
     touch`) — vira uma lista horizontal de verdade, arrastável com o
     dedo, sem nenhum efeito de carrossel.
  Validado via Playwright em 414px, medição extensa (posições Y/X,
  `getComputedStyle`, simulação de scroll horizontal): os 4 itens
  passaram sem ressalva real, zero overflow novo em toda a página, zero
  erros de console, e confirmado que NENHUMA das 4 mudanças vazou pro
  desktop (1440px segue com o CTA ao lado dos cards, padding de sessão
  original, planilha/pruxor pareados lado a lado, depoimentos com loop +
  fade intactos).

- **Mais 4 ajustes mobile num turno (2026-08-22/23), continuação da
  rodada anterior**:
  1. **Divisória entre as duas listas de "Planilha vs Pruxor"** — depois
     de agrupar (rodada anterior) as 7 frases "planilha" seguidas das 7
     "pruxor", sem NADA sinalizando onde uma lista acaba e a outra
     começa. Usuário pediu uma divisória. Adicionado
     `.compare__group-divider` (linha — círculo "VS" reaproveitando
     `.compare__vs` — linha), elemento novo no HTML com `order: 2` (entre
     `--before` order:1 e `--after`, que subiu de order:2 pra order:3 pra
     abrir espaço). `display:none` por padrão, só existe visualmente em
     ≤767px.
  2. **"O problema" também centralizado no mobile** — tinha ficado de
     fora da 1ª leva de sessões centralizadas (Soluções/Como
     funciona/Planilha vs Pruxor/Diferenciais/FAQ); usuário pediu
     explicitamente estender pra ela também. `.problem__header {
     text-align: center }` em ≤767px.
  3. **Headings de 3 dos 5 módulos de "Soluções" com quebra manual** —
     `text-wrap: balance` sozinho estava deixando a 1ª linha BEM menor
     que a 2ª (ex: "Controle" / "financeiro por obra"); usuário pediu o
     oposto, 1ª linha maior. Sem forma confiável de forçar isso só com
     CSS de wrap automático, usei `<br class="feature-set__heading-break">`
     manual nos 3 headings que realmente quebram em 2 linhas no mobile
     (Financeiro: "Controle financeiro" / "por obra"; Diário de obra:
     "Diário de obra" / "profissional"; Orçamento SINAPI: "Orçamento com
     a" / "tabela SINAPI") — `display:none` por padrão (não quebra nada
     em desktop/tablet), só vira `<br>` de verdade em ≤767px. Os outros 2
     headings ("Gestão de obras", "Controle de estoque") já cabiam numa
     linha só no mobile — confirmado via Playwright, nenhuma mudança
     neles. Validado: as 3 quebras manuais resultam em linha 1
     visivelmente mais larga que a linha 2 nos 3 módulos, exatamente como
     pedido.
  4. **Depoimentos: scroll vertical, não horizontal** — correção da
     rodada anterior (onde eu tinha implementado como lista horizontal
     arrastável, `overflow-x:auto`). Usuário viu o resultado (1 card só
     visível, tinha que arrastar pro lado pra ver os próximos) e pediu
     scroll vertical de verdade. `.testimonials__track` virou
     `flex-direction: column`, `.testimonial-card` virou `width: 100%;
     flex: none;`, `.testimonials__loop` virou `overflow: visible` (sem
     mais container de scroll horizontal) — os 5 cards reais empilham
     como qualquer outra fileira de cards do site, revelados pelo scroll
     normal da página.
     - **Bug real encontrado e corrigido na verificação**: sobrava uma
       regra `@media (max-width:767px) { .testimonial-card { flex-basis:
       min(85vw, 340px); } }` de uma fase anterior (quando a seção ainda
       era horizontal e essa regra controlava LARGURA do card). Com
       `flex-direction: column`, `flex-basis` passou a controlar ALTURA
       — forçava todo card a 340px fixos, cortando o padding inferior de
       2 dos 5 cards (os com texto de 3 linhas, ~7px de padding restante
       em vez de 32px, sem cortar texto/avatar mas com espaçamento
       visivelmente inconsistente entre cards). Regra removida por
       completo (não fazia mais sentido nenhum no layout novo) —
       confirmado que os 5 cards agora têm `scrollHeight` ≈
       `boundingHeight` (sem clipping) em todos.
  Validado via Playwright em 414px: os 4 itens conferidos em detalhe
  (posições, texto por linha, computed style), zero overflow novo, zero
  erros de console, nenhuma das mudanças vazou pro desktop (1440px
  continua com linhas pareadas lado a lado no compare, Problema
  esquerda-alinhado, headings sem quebra manual, depoimentos com loop
  horizontal + fade intactos).

- **Cabeçalho de "Planilha vs Pruxor" reorganizado no mobile + bug real
  achado e corrigido no grid de Planos (2026-08-23)**:
  1. **"Na planilha" sozinho no header, "Pruxor" mudou de lugar** —
     usuário mandou 2 prints apontando que o "VS" não devia dividir
     espaço com "Na planilha" (queria só o texto, centralizado), e que a
     divisória entre as duas listas (adicionada na rodada anterior)
     devia ganhar o rótulo "Pruxor" também. Implementado: `.compare__vs`
     escondido dentro de `.compare__header` só no mobile (o badge "VS" do
     cabeçalho desktop continua intacto); `.compare__group-divider`
     ganhou uma 2ª linha com `.compare__header-label--brand` (mesmo
     ícone+texto "Pruxor" do cabeçalho, reaproveitado) embaixo do traço
     — a divisória agora funciona como um mini-cabeçalho introduzindo a
     lista que vem a seguir, do mesmo jeito que "Na planilha" introduz a
     lista do topo. Validado via Playwright: header mobile mostra só
     "Na planilha" / "Pruxor" empilhados e centralizados, divisória
     mostra linha-VS-linha + "Pruxor" exatamente entre as duas listas,
     desktop (1440px) confirmado intocado.
  2. **Bug real: grid de 4 colunas dos Planos estourava a página entre
     ~992-1259px de viewport** (usuário reportou com print do DevTools
     no iPad Pro, 1024×1366, "acabou quebrando"). Causa: `.pricing-card__cta`
     usa `.btn`, que tem `white-space: nowrap` — o texto "Começar teste
     grátis" sem quebra trava a largura mínima de cada card em ~249px;
     4 cards + gaps somam ~1068px mínimos, mas o `.layout-container` só
     atinge essa largura a partir de ~1260px de viewport (breakpoint
     antigo de 2 colunas era só ≤991px, deixando uma "zona morta" de
     ~268px de viewport sem cobertura, onde a 4ª coluna ("Pruxor Elite")
     estourava a largura real da página, não só cortava visualmente).
     Mesmo padrão de bug já visto antes em `.about-outcomes` (fixado com
     breakpoint tweener em 1240px) — aqui o breakpoint de 2 colunas do
     `.pricing-grid` subiu de `991px` pra `1260px`, calculado pra fechar
     a zona morta por completo. Validado via Playwright em
     1024/1100/1260/1280/1440px: 2 colunas até 1260px inclusive, 4
     colunas a partir de 1280px, zero overflow em qualquer um, todos os
     4 cards sempre visíveis por completo.

- **Bug real corrigido: botão de "Como funciona" descolava do heading
  sticky no desktop/tablet (2026-08-23)**. Usuário mandou print mid-scroll
  mostrando o botão "Criar minha conta grátis" sobrepondo o texto "Sem
  cartão, sem burocracia." — o botão devia rolar JUNTO com o heading
  (ambos sticky), mas só o heading tinha `position: sticky`. Causa raiz:
  na rodada que moveu o botão pra depois dos cards no mobile, heading e
  botão viraram 2 LINHAS separadas do grid (`"intro cards" / "cta
  cards"`) — mas o "range" de sticky de um item vale só dentro da altura
  da PRÓPRIA linha do grid em que ele está, e a linha 1 (só o heading,
  curta) é bem menor que a linha 2 (que soma o resto dos cards). O
  heading ficava "preso" corretamente (sticky funcionando dentro do seu
  range curto), mas o botão (não-sticky, numa linha com range de posição
  diferente) rolava numa velocidade diferente — descolando visualmente
  conforme a página rolava, até sobrepor o heading.
  - **Correção**: heading e botão voltaram a viver dentro de UM wrapper
    só (`.how-it-works__sticky-col`, elemento novo no HTML) que é o único
    item `position: sticky` agora — grid voltou a ter 1 linha só
    (`"sticky cards"`, não mais 2), então o wrapper ocupa a MESMA altura
    de linha que a coluna de cards (a mais alta), dando ao sticky o range
    inteiro pra "colar" durante o scroll — exatamente o comportamento
    original, antes da mudança que introduziu o bug.
  - **Mobile preservado com `display: contents`**: pra ainda dar pra
    mover o botão pra depois dos cards no mobile (pedido de rodada
    anterior, continua válido), `.how-it-works__sticky-col` vira
    `display: contents` em ≤991px — some da árvore de caixas (o
    `position: sticky` nele também deixa de fazer sentido/se aplicar,
    coerente com o breakpoint onde o intro já vira `static` de qualquer
    forma), e heading/botão voltam a ser filhos DIRETOS do grid, dando
    pra reordenar via `grid-template-areas` como antes.
  - **Validado via Playwright**: gap entre heading e botão medido em 5
    pontos ao longo de todo o scroll no desktop (1440px) — exatamente
    24px em TODOS, sem nenhum drift. Breakpoint 990px/992px testado dos
    dois lados (mobile stack vs. sticky desktop) — ambos corretos, sem
    modo quebrado na fronteira. Mobile (414px) reconfirmado: botão ainda
    aparece depois dos 3 cards, ainda centralizado. Zero erros de
    console em qualquer largura testada.

- **Cabeçalho de "Planilha vs Pruxor" no mobile: só "Na planilha" sobra
  (2026-08-23)** — 3ª rodada nesse mesmo componente. Depois de mover
  "Pruxor" pra dentro da divisória (rodada anterior), o cabeçalho ainda
  mostrava "Na planilha" + "Pruxor" empilhados; usuário pediu deixar só
  "Na planilha" ali (redundante repetir "Pruxor" duas vezes na tela).
  `.compare__header .compare__header-label--brand { display: none; }`
  em ≤767px — "Pruxor" continua existindo normalmente na divisória
  mid-lista, só sumiu do cabeçalho do topo. Desktop confirmado intocado.

- **Bug real corrigido: palavras coladas em 3 headings de "Soluções" no
  desktop/tablet (2026-08-25)**. Usuário mandou print mostrando "Controle
  financeiropor obra" (sem espaço) no desktop. Causa raiz: ao inserir o
  `<br class="feature-set__heading-break">` manual (rodada de ajustes
  mobile, `display:none` em desktop/tablet, `display:inline` só em
  ≤767px) nos 3 headings mais longos, o espaço que existia entre as
  palavras naquele ponto foi removido por engano junto com o texto
  substituído — sem esse espaço, quando o `<br>` fica `display:none`
  (desktop/tablet), não sobra NADA separando as duas palavras. Corrigido
  adicionando um espaço logo depois de cada `<br>` (`financeiro<br
  class="...">  por obra` etc.) — funciona nos dois cenários: no
  desktop/tablet (`<br>` escondido) o espaço garante a separação normal;
  no mobile (`<br>` ativo) o navegador colapsa/descarta espaço em branco
  no início de uma nova linha, então não sobra recuo nem gap visível
  antes de "por obra"/"profissional"/"tabela SINAPI" — confirmado via
  medição de posição (Range API), não só visualmente.
  Validado via Playwright nos 3 breakpoints pedidos pelo usuário
  (desktop 1440px, tablet 991px/850px, mobile 414px): os 5 headings do
  módulo (incluindo os 2 que nunca tiveram `<br>`, "Gestão de obras" e
  "Controle de estoque") renderizam corretos em todos, `<br>` confirmado
  `display:none`/`inline` no breakpoint certo, zero erro de console.

- **Primeiras imagens reais do projeto: 5 telas do produto na sessão
  "Soluções" (2026-08-25)**. Usuário adicionou os arquivos em
  `assets/Imagens-solucoes/` e pediu pra mapear cada um a um módulo — o
  primeiro mapeamento que ele mandou repetia "Controle financeiro por
  obra" três vezes (erro de digitação/copy-paste), deixando "Orçamento"
  e "Gestão de obras" sem imagem; identifiquei a inconsistência pelos
  nomes dos arquivos (FINANCEIRO/ORÇAMENTOS/OBRAS/ESTOQUE/DIÁRIO DE
  OBRA batem 1:1 com os 5 módulos) e o usuário confirmou o mapeamento
  correto antes de eu mexer em qualquer coisa:
  - `Pruxor - FINANCEIRO.jpg` → Controle financeiro por obra
  - `Pruxor-ORÇAMENTOS.png` → Orçamento com a tabela SINAPI
  - `Pruxor-OBRAS.png` → Gestão de obras
  - `Pruxor-ESTOQUE.png` → Controle de estoque
  - `Pruxor - DIÁRIO DE OBRA.png` → Diário de obra profissional
  - **Substituem o placeholder de texto** (`.feature-showcase__visual-label`,
    "Tela do financeiro" etc., mais os gradientes de marca variados por
    `data-step` que só existiam pra diferenciar 5 caixas cinzas idênticas)
    nos DOIS lugares onde cada módulo aparece: o painel de crossfade do
    desktop (`.feature-showcase__visual-panel`) e a miniatura do fallback
    mobile/tablet (`.feature-showcase__block-visual`). `<img
    class="feature-showcase__visual-img">` com `object-fit: cover` +
    `overflow: hidden` no container preenche sem distorcer, respeitando o
    `border-radius`. `alt` descritivo nos painéis do desktop (o conteúdo
    real, ex: "Tela do financeiro"); `alt=""` nas miniaturas mobile (já
    eram `aria-hidden="true"` desde antes, decorativas). `loading="lazy"`
    nos 10 `<img>` (5 imagens, cada uma referenciada 2x).
  - **Bug real cometido e corrigido na mesma rodada**: ao limpar o CSS do
    placeholder antigo, removi `display: flex` de
    `.feature-showcase__block-visual` (achando que servia só pra
    centralizar o texto) sem perceber que ele TAMBÉM era o único override
    do `display: none` da regra base desse elemento (que só deveria
    existir visualmente no mobile) — a miniatura sumiu por completo no
    mobile/tablet (nem a imagem chegava a carregar, já que `loading="lazy"`
    não dispara sem caixa de layout). Achado na verificação via Playwright
    (não pelo usuário) e corrigido na hora com `display: block` explícito.
    Lição registrada em `CLAUDE.md`: esse elemento tem `display: none`
    como regra base — qualquer edição no override do breakpoint precisa
    manter ALGUM valor de `display` que não seja `none`.
  - Validado via Playwright em desktop (1440px, os 5 passos do
    crossfade), tablet (850px) e mobile (414px, os 5 módulos empilhados):
    todas as 10 posições carregando a imagem certa, sem 404 (nomes de
    arquivo com espaço e acento — Á, Ç — resolvem bem, sem precisar
    renomear nada), sem overflow novo, zero erros de console.
  - **Nota de tamanho de arquivo, não endereçada**: as imagens têm
    ~1-1.5MB cada (PNG sem compressão, exceto o financeiro que é JPG
    ~170KB) — funcional, mas pesado; otimizar/comprimir não foi pedido,
    fica como possível follow-up se o usuário notar carregamento lento.

- **Favicon adicionado, convertido de PDF (2026-08-25)**. Usuário
  adicionou uma pasta nova `assets/Imagens-logo/` (com 2 PDFs — "Logo
  completa.pdf" e "logo-fav-icon.pdf" — e 2 PNGs já prontos, fundo
  transparente, fonte branca/preta) e pediu explicitamente pra usar
  `logo-fav-icon.pdf` como favicon, convertendo de PDF pra PNG (não
  havia ferramenta de PDF→imagem pronta no ambiente — usei Ghostscript
  10.04, já instalado mas fora do PATH como `gs`, via caminho completo
  `gswin64c.exe`, + Python/Pillow pra recortar).
  - **O PDF tem mais conteúdo que só o ícone**: é um lockup completo —
    símbolo triangular (gradiente azul/verde, tipo um "A" ou avião de
    papel) + um texto/tagline em branco logo abaixo (invisível contra
    fundo claro, provavelmente pensado pra uso sobre fundo escuro em
    outro contexto). Recortei só o símbolo (achei o bbox exato via
    varredura do canal alpha, ignorando as linhas de texto abaixo) —
    texto ficaria ilegível em tamanho de favicon de qualquer forma.
    Reempacotado num canvas quadrado com ~16% de respiro ao redor,
    exportado em 3 tamanhos: `favicon-master.png` (2035px, fonte de alta
    resolução pra reaproveitar depois se precisar), `favicon.png`
    (512px, usado no `<link rel="icon">`) e `apple-touch-icon.png`
    (180px, usado no `<link rel="apple-touch-icon">`). Ambos os links
    adicionados no `<head>` do `index.html`. Validado via Playwright:
    os dois carregam com 200, conteúdo visível confirmado (não é PNG
    vazio/transparente), zero erros de console.
  - **Observação não endereçada, vale mencionar ao usuário**: a cor do
    símbolo (gradiente azul/verde/teal) é bem diferente do roxo
    `#514fee` (`--color-brand`) usado em todo o resto do site — CLAUDE.md
    já registra que o roxo foi herdado do clone original de referência e
    NÃO é a cor real da marca Pruxor (que, por essa logo, parece ser
    teal/verde-azulado). Não mudei nada da paleta do site — só usei a
    imagem pedida como favicon — mas fica registrado que pode ser um
    sinal de rebrand futuro se o usuário pedir.
  - **`Logo completa.pdf` ainda não foi tratado** — usuário só deu
    instrução pro arquivo do favicon nesta rodada; "vamos ajustar as
    logos" (plural) sugere que outros usos (navbar `.nav__logo-mark`,
    footer) podem vir a seguir, aguardando pedido explícito antes de
    mexer neles.

- **Logo real aplicada em 4 lugares (navbar, "Planilha vs Pruxor",
  rodapé) — 2026-08-25**. Usuário mandou 2 PNGs prontos
  (`logo-sem-fundo-fonte-branca.png`/`-preto.png`, fundo transparente)
  com o lockup completo (ícone + "PRUXOR" + tagline "Sistema de gestão e
  acompanhamento de obras" — **tagline com erro de digitação no arquivo
  original, "ACOMPANHEMTNO" em vez de "ACOMPANHAMENTO", avisado ao
  usuário, não corrigido por não ter ferramenta de edição de texto em
  raster**) e pediu pra usar a branca na navbar (padrão)/"Planilha vs
  Pruxor", e a preta na navbar (quando rola)/rodapé.
  - **Recorte necessário**: os PNGs originais são o lockup INTEIRO
    (ícone + PRUXOR + 2 linhas de tagline, formato retrato). Pra caber
    numa navbar/rodapé compactos (e não duplicar a tagline no rodapé,
    que já tem a própria via `.footer__tagline`), recortei só ícone +
    "PRUXOR" (excluindo as 2 linhas de tagline) — mesma técnica de
    varredura do canal alpha usada no favicon. Gerou 2 arquivos novos,
    reaproveitados nos 4 lugares: `logo-lockup-white.png` e
    `logo-lockup-black.png` (1512×854, mesma proporção ~1.77:1 nos
    dois).
  - **Navbar precisa de troca de versão conforme o scroll** (branca no
    topo transparente sobre a hero, preta na pílula rolada) — como não
    dá pra trocar a COR de uma imagem raster via CSS (era `color` no
    texto antigo "Pruxor"), as DUAS versões ficam no DOM
    (`.nav__logo-img--white`/`--black`) e o CSS mostra uma ou esconde a
    outra via `display`, reaproveitando o MESMO escopo/seletor já usado
    pro texto claro vs escuro do menu (`body:not(.nav-mobile-open)
    .site-header.has-hero:not(.is-scrolled) .site-header__bar`) — inclui
    o caso de borda do menu mobile aberto no topo da página, onde a
    versão PRETA aparece mesmo sem ter rolado (overlay do menu é sempre
    claro, branco ficaria ilegível).
  - **"Planilha vs Pruxor"**: sempre a versão branca nos dois lugares que
    já usavam `.compare__header-label--brand` (cabeçalho desktop +
    divisória mobile) — fundo do card é sempre escuro, sem estado
    "rolado" equivalente à navbar.
  - **Rodapé**: sempre a versão preta, sem troca (fundo sempre claro).
  - **`.nav__logo-mark` removido do CSS** — não tem mais nenhum uso
    (substituído pela imagem nos 4 lugares).
  - Validado via Playwright: troca branco/preto confirmada nos 2
    estados de scroll da navbar + no caso de borda do menu mobile aberto
    no topo, logo correta (branca) nos 2 pontos do compare (desktop
    header + divisória mobile), logo correta (preta) no rodapé, zero
    404, zero erro de console.

- **Rodapé: logo compacta + tagline separada trocadas por UMA imagem só
  (2026-08-25, mesmo dia, 2ª rodada da logo)**. Usuário pediu pra usar
  `Logo completa.pdf` (a 3ª imagem de logo da pasta, ainda sem uso até
  então) no lugar da logo compacta + `.footer__tagline` (parágrafo
  próprio, "Gestão inteligente para obras e projetos..."). Convertido
  pra PNG do mesmo jeito que os outros (Ghostscript + recorte via
  canal alpha) → `logo-completa.png` (3139×2321, ~1.35:1). **Essa versão
  tem a tagline com o texto CERTO** ("Sistema de Gestão e
  Acompanhamento de Obras") — diferente do PNG preto usado antes
  (`logo-sem-fundo-fonte-preto.png`), que tinha o erro de digitação
  "ACOMPANHEMTNO" (ver rodada anterior); esse PDF aparentemente é a
  versão corrigida/final. `<p class="footer__tagline">` removido do
  HTML (a tagline agora vem embutida na imagem) e sua regra CSS também
  removida — sem uso em lugar nenhum do site. Nova classe
  `.footer__logo-img--completa { width: 200px; height: auto; }` —
  dimensiona por LARGURA (não altura como a logo compacta da navbar),
  já que agora é um lockup vertical (ícone em cima, texto embaixo), não
  mais horizontal. Validado via Playwright: 200px de largura fica bem
  proporcional ao lado das outras colunas do rodapé (nav-links,
  contact-links), tagline legível nos dois tamanhos, sem overflow, sem
  gap órfão onde o parágrafo antigo estava, zero erro de console.
  `Logo completa.pdf` agora está em uso; sobram só os 2 PNGs prontos
  originais (`logo-sem-fundo-fonte-branca/preto.png`) sem uso — os
  cortes derivados deles (`logo-lockup-white/black.png`) continuam em
  uso na navbar e em "Planilha vs Pruxor".

- **Rodapé inteiro centralizado no mobile (2026-08-25)** — usuário viu o
  print do rodapé mobile (logo, nav-links, contact-links alinhados à
  esquerda; só a faixa de baixo, copyright+legal links, já vinha
  centralizada por herdar `align-items:center` da regra base) e pediu
  centralizar tudo. `.footer__top` foi de `align-items: flex-start` pra
  `center` (+ `text-align: center`), `.footer__contact-links` (os 2
  links empilhados: e-mail, Instagram) foi de `flex-start` pra `center`
  também. Validado via Playwright: logo, nav-links, contact-links,
  copyright e legal-links todos com centro-x batendo com o centro exato
  da viewport (207px em 414px de largura, sub-pixel de tolerância), sem
  overflow, desktop confirmado intocado.

- **Logo da navbar e de "Planilha vs Pruxor" aumentadas (2026-08-25)** —
  usuário achou pequenas. `.nav__logo-img` (as 2 versões, branca/preta)
  de 28px pra 40px de altura; `.compare__brand-logo` (cabeçalho desktop
  + divisória mobile) de 24px pra 32px. Validado via Playwright no
  ponto de maior risco (pílula rolada da navbar, altura reduzida pra
  60px): logo de 40px cabe com 10px de folga em cima/embaixo,
  perfeitamente centralizada, sem corte. Sem overflow novo, zero erro
  de console em nenhuma das 4 larguras/estados testados.

- **Bug real corrigido: globo de "Sobre a Pruxor" com tratamento errado
  na faixa de tablet, 768-991px (2026-08-25)**. Usuário mandou print no
  iPad Air (820px) mostrando o globo como círculo inteiro, empurrando
  badge/heading/parágrafo pra baixo dele — o tratamento "antigo"
  (`position: relative`, fluxo normal). Causa raiz: quando o globo
  ganhou o tratamento novo ("metade visível, 40% do card, atrás do
  conteúdo") numa rodada anterior, a mudança só foi escopada em
  `≤767px` — mas a regra ANTIGA (círculo inteiro relative) continuava
  ativa em `≤991px`, cobrindo sozinha a faixa 768-991px (tablet de
  verdade) sem nunca ter sido atualizada. Corrigido movendo o
  tratamento novo pro bloco `≤991px` (que já cobre `≤767px` por
  conter essa faixa), removendo a duplicata que sobrava no bloco
  `≤767px`. Validado via Playwright em 820/850/900/991px: globo com
  `position: absolute`, 80% de altura do card (40% visível, atrás do
  conteúdo) em TODOS — matemática idêntica ao mobile (414px,
  reconfirmado sem regressão) — e desktop/tweener (1100-1440px)
  confirmados intocados (continuam com o recorte de 1/4 no canto).

- **Bug real corrigido: telas reais de "Soluções" cortando conteúdo
  (2026-08-25, mesmo dia)**. `.feature-showcase__visual-img` usava
  `object-fit: cover` desde que as imagens reais substituíram o
  placeholder — em 4 das 5 telas (Financeiro, Orçamentos, Obras,
  Estoque, todas ~1280x720/1672x941) isso recortava conteúdo real da
  UI (barra lateral, linhas de tabela) pra preencher o painel. Trocado
  pra `object-fit: contain` na regra base — mostra a tela inteira, com
  o `background: var(--bg-subtle)` do painel preenchendo a sobra
  (letterbox) quando a proporção da imagem não bate exatamente com a
  do painel. **Diário de obra (`data-step="2"`) é a exceção
  deliberada**: sozinha entre as 5, tem proporção bem mais larga
  (1807x870, ~2.08:1) que as outras (~1.78:1) — usuário pediu
  explicitamente pra ela "adotar o tamanho das outras" (não esticar o
  painel por causa de 1 imagem) e aceitar corte. Seletor
  `[data-step="2"] .feature-showcase__visual-img { object-fit: cover; }`
  restaura o comportamento antigo só nela, nos dois lugares que
  reusam essa classe (painel desktop com crossfade E miniatura mobile
  — mesmo `data-step` nos dois). Também adicionado, pedido explícito
  do usuário, `border: 10px solid rgba(0, 0, 0, 0.1)` (preto a 10% de
  opacidade — bem sutil, não um contorno preto forte) em
  `.feature-showcase__visual-panel` (painel desktop) e
  `.feature-showcase__block-visual` (miniatura mobile) — enquadra as 5
  telas com uma moldura fina, consistente nos dois breakpoints;
  `box-sizing: border-box` (global do projeto) garante que a borda
  entra pra dentro da caixa já definida (`inset: 0` / `aspect-ratio`)
  em vez de estourar o tamanho do painel. Validado via Playwright
  (forçando `.is-active` em cada `data-step` via JS, sem depender do
  scroll-crossfade): as 4 telas "contain" mostram o conteúdo inteiro
  sem cortar nada, Diário de obra preenche o painel de ponta a ponta
  (cover, sem letterbox), borda visível e sutil nas 5 + nas 2
  miniaturas mobile testadas (`data-step="1"` e `"2"`).

- **Bug real corrigido: `object-fit: contain` sobrando "letterbox" em
  cima/embaixo no mobile (2026-08-25, mesmo dia, correção seguinte)**.
  A troca pra `contain` (bullet acima) resolveu o corte de conteúdo, mas
  os CONTAINERS (`.feature-showcase__visual-col` no desktop,
  `.feature-showcase__block-visual` no mobile) continuavam com tamanhos
  **inventados antes de existir imagem real** — `min-height: 400px` fixo
  no desktop e `aspect-ratio: 4/3.2` (1.25) no mobile — que não batem
  com a proporção real das telas (~1.78, quase 16:9). Resultado: faixas
  vazias visíveis (cor `--bg-subtle` do painel) em cima/embaixo da
  miniatura mobile — usuário mandou print do módulo "Gestão de obras"
  mostrando exatamente isso e pediu pra "deixar responsivo com a
  imagem, tanto desktop quanto mobile". Trocado os dois containers pra
  `aspect-ratio: 16 / 9` (bate quase exato com 4 das 5 telas reais:
  Financeiro 1280x720 = 16:9 exato, Orçamentos/Obras/Estoque 1672x941 ≈
  16:9 com 0.06% de diferença) — a altura do container passa a seguir a
  proporção real da imagem em vez de um número solto, eliminando a
  sobra quase por completo nessas 4. Diário de obra (proporção 2.08:1,
  bem mais larga) continua em `object-fit: cover` (bullet acima) dentro
  desse mesmo container 16:9 — preenche de ponta a ponta sem sobra
  nenhuma, só recorta um pouco mais das laterais, comportamento já
  aceito explicitamente pelo usuário. Validado via Playwright: no
  desktop, a imagem renderizada preenche o painel até a borda de 10px
  nos 5 steps (sem gap visível); no mobile, as 5 miniaturas preenchem a
  caixa igual, sem faixa vazia. Section inteira ("Soluções") continua
  cabendo numa viewport de 768px de altura sem cortar nada — a troca de
  `min-height` fixo pra `aspect-ratio` não estourou a viewport.

- **Texto do módulo sobrepondo o parágrafo do header em larguras
  "tweener" de desktop, 992-1220px (2026-08-25, mesmo dia) — 1ª correção
  tentada e DESFEITA no mesmo dia, ver "revertido" abaixo**. Efeito
  colateral direto do `aspect-ratio: 16/9` do bullet acima: nessa faixa
  de largura, as 2 colunas do grid ficam estreitas (368-472px) o
  bastante pra o parágrafo de alguns módulos (Financeiro, Orçamentos)
  quebrar em bem mais linhas, precisando de até ~440px de altura pro
  conteúdo (heading+parágrafo+CTA) — bem mais que os ~207-266px que o
  `aspect-ratio` dava nessa faixa. Como o conteúdo do
  `.feature-showcase__block` é `position:absolute` com
  `justify-content:center`, o excesso TRANSBORDAVA pra fora da caixa dos
  2 lados (não só embaixo) — usuário mandou print (viewport ~992px,
  módulo "Orçamento com a tabela SINAPI") mostrando o heading do módulo
  colidindo com a última linha do parágrafo do header, bem acima da
  própria caixa, e pediu pra "colocar a div mais pra baixo" + "diminuir o
  espaço entre linhas".
  - **1ª tentativa (revertida)**: além de (1) `line-height: 1.05` no
    heading do header e (2) `margin-bottom` de `--space-m` pra
    `--space-l` no header (as duas ficaram, ver "revertido" abaixo), a
    correção de raiz tentada foi (3) `@media (max-width: 1240px) {
    .feature-showcase__visual-col { aspect-ratio: auto; min-height:
    480px; } }` — resetava o aspect-ratio nessa faixa estreita pra dar
    mais altura ao texto.
  - **Armadilha real no caminho (lição que continua válida mesmo com o
    revert)**: a 1ª versão dessa tentativa foi só empilhar `min-height:
    480px` por cima do `aspect-ratio: 16/9` já existente (sem resetar o
    aspect-ratio) — isso causou um "grid blowout" pior que o bug
    original. Um item de CSS Grid com `aspect-ratio` reporta um tamanho
    PREFERIDO de largura calculado a partir da própria altura mínima
    (480 × 16/9 ≈ 853px) pro algoritmo das colunas `1fr`, e esse valor
    vazou pra fora da própria célula — medido via Playwright,
    `.feature-showcase__visual-col` renderizou com 853px de largura
    (quase o grid inteiro), SOBREPONDO `.feature-showcase__content-col`
    (espremida a 0px de largura). **Lição pra próxima vez**:
    `aspect-ratio` + `min-height` competindo no MESMO elemento dentro de
    um grid `1fr` é uma combinação arriscada — se precisar de um floor de
    altura que vença o aspect-ratio, resetar o aspect-ratio junto (não
    empilhar os dois) ou aplicar o floor em outro nível (ex:
    `grid-auto-rows` no grid, não no item). Documentado também em
    "Cuidados importantes" do `CLAUDE.md`.
  - **Revertido no mesmo dia, pedido explícito do usuário**: o usuário
    mandou OUTRO print (módulo "Controle de estoque", que nem precisava
    de altura extra) mostrando a imagem com sobra/letterbox visível e
    disse que a caixa da imagem "não deve ter esse espaço extra... deve
    ser responsivo" e que o pedido original "era apenas para essa parte
    separar mais do header e subheader" — ou seja, o floor de altura
    NUNCA foi pedido, só o espaçamento. Removida a media query inteira
    (`aspect-ratio: auto; min-height: 480px`) e os apoios que ela tinha
    exigido (`min-width: 0` no item, `minmax(0, 1fr)` nas colunas do
    grid) — `.feature-showcase__visual-col` voltou a ser só
    `aspect-ratio: 16/9` sozinho, sem floor nenhum, igual ao bullet
    acima. Ficaram só as 2 mudanças de espaçamento (line-height do
    heading + margin-bottom do header), que eram o pedido de verdade.
    **Resultado conhecido e aceito**: com só essas 2 mudanças, o overlap
    ainda existe, mas bem menor — validado via Playwright, ficou negativo
    (seguro) em 1150px+ pra qualquer módulo, e só nos 2 módulos mais
    longos (Financeiro, Orçamentos) nas 2 larguras mais estreitas da
    faixa: ~1px de sobreposição em 1050px, ~19px (Financeiro) / ~7px
    (Orçamentos) em 992px (o extremo inferior antes do empilhamento
    mobile). Não corrigir esse resíduo aumentando a caixa da imagem de
    novo sem pedido explícito novo — se o usuário quiser fechar esse
    último resíduo, a via combinada com o pedido dele é mexer só no
    TEXTO (ex: encurtar o parágrafo desses 2 módulos, ou limitar linhas
    só nessa faixa), nunca no tamanho da imagem.

- **Texto do módulo de "Soluções" alinhado com o topo da imagem, não mais
  centralizado (2026-08-26)**. Usuário mandou print comparando: o
  heading do módulo ("Controle financeiro por obra" etc.) ficava
  vertical-centralizado na altura da imagem, visivelmente mais baixo que
  `.feature-showcase__header-paragraph` ("Nada de sistema complicado...")
  na linha acima, e pediu pra alinhar os dois. `.feature-showcase__block`
  trocou `justify-content: center` por `flex-start` — o texto do módulo
  agora começa no topo da própria caixa (mesma altura do topo da
  imagem), lendo de forma mais consistente com o parágrafo do header
  acima. Só afeta desktop — no mobile o bloco já vira `position:static`
  (fluxo normal), onde `justify-content` não faz diferença.
  - **Correção seguinte, mesmo dia**: o fix acima resolveu só o eixo
    vertical — o usuário voltou com OUTRO print (2 caixas vermelhas + 1
    linha ligando as bordas esquerdas dos 2 blocos) mostrando que o eixo
    HORIZONTAL continuava desalinhado: a borda esquerda do parágrafo do
    header não batia com a do texto do módulo/imagem abaixo. Causa:
    `.feature-showcase__header` era `flex` + `justify-content:
    space-between`, então a borda esquerda do parágrafo era "largura do
    container − largura do próprio parágrafo" (ele fica encostado na
    borda DIREITA) — sem nenhuma relação com onde a coluna 2 do
    `.feature-showcase__grid` (`1fr 1fr`) começa. Trocado
    `.feature-showcase__header` pra `display: grid; grid-template-columns:
    1fr 1fr; align-items: end` — o MESMO `grid-template-columns` do grid
    de baixo — assim as 2 linhas passam a compartilhar a mesma matemática
    de coluna, e a borda esquerda do parágrafo cai exatamente em cima da
    borda esquerda do texto do módulo, em qualquer largura. Validado via
    Playwright: diferença entre as 2 bordas ficou em `0px` exato em
    992/1050/1150/1280/1440/1920px. **Bônus**: essa mudança também fechou
    por completo o resíduo de overlap conhecido (Financeiro/Orçamentos em
    992-1050px, ver bullet de espaçamento acima) — virou `-48px` (gap
    seguro) constante em todas as larguras testadas. **Trade-off aceito**:
    o parágrafo deixou de ficar encostado na borda DIREITA do container
    (uma decisão de 2026-08-22) — o pedido novo (alinhar com a coluna do
    módulo) prevalece; os 2 pedidos eram incompatíveis e o usuário
    confirmou o novo com 2 rodadas de feedback. Mobile (≤991px): a regra
    que empilhava o header (`flex-direction: column`) virou
    `grid-template-columns: 1fr`, já que `flex-direction` não tem efeito
    nenhum num `display: grid`.

- **Bug real corrigido: Depoimentos demorava muito pra aparecer e o loop
  parava no fim de um ciclo, só no Safari (2026-08-26)**. Usuário mandou
  3 prints: heading "Quem usa, aprova." sozinho por um bom tempo sem os
  cards (2ª imagem), cards aparecendo só depois de muito tempo (3ª
  imagem), e relatou que o loop contínuo não recomeçava ao chegar no
  fim. Causa raiz: `.testimonials__loop` tinha `data-reveal` (fade
  genérico de scroll, `opacity:0; transform:translateY(18px);
  filter:blur(6px)` no estado escondido) — mas esse MESMO elemento
  também tem `overflow-x:hidden` + `mask-image` (fade nas bordas do
  carrossel) e é ancestral direto de `.testimonials__track`, cuja
  animação (`translateX`, 42s, `infinite`) nunca para. `filter` +
  `mask-image`/`overflow:hidden` + `animation:infinite` num descendente é
  uma combinação com bug DOCUMENTADO no WebKit/Safari — confirmado via
  busca na web (não só suspeita): Safari renderiza `filter:blur()` via
  CPU em vez de GPU (ao contrário de Chrome/Firefox), o que já é lento
  sozinho, e o mix com mask+overflow+infinite é um padrão relatado de "o
  loop não recomeça depois da 1ª volta".
  - **Correção**: `data-reveal` removido de `.testimonials__loop` no
    `index.html` (só do loop — `.testimonials__header`, o título,
    continua revelando normalmente) — o carrossel nunca mais recebe
    `filter:blur()`, já que é ele quem tem o mask+overflow+animação
    infinita. `.testimonials__track` ganhou `transform: translateZ(0)`
    (CSS) — promove a faixa pra sua própria camada de composição desde o
    início, mitigação recomendada pra esse padrão de bug (a troca
    dinâmica de camada em torno de filter/mask é onde o Safari trava o
    loop).
  - **Validação real teve um limite**: sem Mac disponível, não deu pra
    reproduzir o bug 1:1. Usei Playwright com o engine WebKit (o mesmo
    motor do Safari, mas empacotado sem as camadas proprietárias da
    Apple — instalado via `npx playwright install webkit`, ~60MB,
    baixado só pra essa investigação). Nesse engine específico, o
    `getAnimations()` do track já mostrava `playState: "running"` e
    `currentTime` crescendo continuamente através de várias voltas
    completas (testado ~46s de execução real, atravessando o ponto de
    wrap de -50% pra 0% do `translateX`) tanto ANTES quanto DEPOIS do
    fix — ou seja, não consegui reproduzir o "trava no fim" diretamente
    aqui. O que SIM foi confirmado e corrigido: `.testimonials__loop`
    ficava com `opacity:0` até a 1ª sweep de scroll disparar o reveal
    (mesmo delay de qualquer `[data-reveal]` no site) antes do fix; com
    `opacity:1` desde o primeiro frame, sem transição nenhuma, depois.
    A correção do "trava no fim" se apoia no bug documentado (busca web)
    da combinação filter+mask+overflow+infinite, não numa reprodução
    local exata — vale reconfirmar com o usuário depois que ele testar
    em Safari de verdade de novo.

## Contexto para a próxima sessão

**Atualizada em 2026-08-22 (mesmo dia da remoção do banner + exclusão das
páginas extras). Ver "Remoção do announcement banner + exclusão das 3
páginas extras + limpeza de código órfão" no fim da seção "Decisões"
para o histórico completo dessa rodada.**

O site é hoje **uma landing page única de verdade — só `index.html`
existe no repositório**. `sobre.html`, `solucoes.html` e `planos.html`
foram apagadas (não é mais "vão sair", já saíram). Todas as seções do
index já foram reescritas com copy oficial, nesta ordem (que é também a
ordem do nav/footer): SEO, Hero, Sobre (prova social), Problema, Soluções
(5 módulos), Como funciona, Planilha vs Pruxor, Diferenciais (comercial),
Depoimentos, Planos, FAQ, CTA final (Full width feature). Nav é 100%
âncora dentro do próprio index: Sobre → Soluções → Planos → FAQ — não há
mais nenhum link pra arquivo externo em lugar nenhum do site.

**Componentes que existiam só nas 3 páginas apagadas foram removidos
junto** (CSS + JS, zero uso restante): `.pinned-cards` inteiro
(`initPinnedCards`/`visibleWidthPx`, efeito de scroll horizontal preso —
não existe mais NENHUMA instância no site, nem em `index.html`, que já
tinha perdido a sua própria numa rodada anterior sem que isso tivesse
sido notado na hora), `.call-to-action` (CTA roxo sólido, substituído no
index por `.full-width-feature` faz tempo), `.full-width-feature--audience`
+ `.audience-loop`, `.about-story`, `.about-audience__tags`,
`.pricing-group__*`, `.pricing-card__limit`. `.card--vivid` (cards
escuros com ícone animado, holofote de mouse, spotlight, sparkles)
continua sendo o padrão de qualquer fileira de cards — hoje só em
`index.html` (Problema, Diferenciais comerciais, Como funciona,
Depoimentos). O toggle mensal/anual de `index.html#planos` é FUNCIONAL
com preços reais (`initBillingToggle`).

**Announcement banner removido por completo** (HTML/CSS/JS,
`initAnnouncementBanner` não existe mais) — a página não tem mais nenhuma
faixa fixa no topo, só o header normal.

Pendências reais que restam: imagens reais do produto (hoje sem nenhuma
imagem, só SVG inline), conectar formulário/botões de assinatura a
serviços reais (links de checkout Greenn já coletados pros planos
mensais Starter/Pro/Elite, mas ainda não aplicados aos cards por decisão
explícita do usuário — ver bullet "MAPA DE LINKS"). **O bug antigo do
hambúrguer/CTA do header estourando a tela em viewports estreitos foi
CORRIGIDO em 2026-08-22** (ver "Ajustes mobile" no fim da seção
"Decisões") — não é mais pendência. Próximo passo mais provável:
aguardar novo pedido do usuário (próxima seção de copy oficial, ou outro
ajuste).

---

## Regras de manutenção

1. Atualize este arquivo sempre que uma decisão importante for tomada.
2. Atualize quando uma parte significativa da landing page for concluída.
3. Atualize quando o usuário mudar uma decisão anterior.
4. Registre problemas relevantes e suas soluções.
5. Não registre cada pequena alteração de código.
6. Não transforme este arquivo em um histórico gigantesco.
7. Mantenha o conteúdo objetivo.
8. Não invente informações.
9. Se uma informação deixar de ser válida, atualize-a em vez de manter
   informações contraditórias.
10. Antes de iniciar uma nova sessão ou continuar um trabalho importante,
    leia `CLAUDE.md` e `memoria.md`.
11. Antes de finalizar uma sessão importante, atualize `memoria.md`.
