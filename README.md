# Base do site — clonado de clarasight.com/industries/professional-services

Este projeto reconstrói a **estrutura, o design system e os efeitos** da página de
referência (Webflow) em HTML/CSS/JS puro, para servir de ponto de partida para um
novo site. Não é uma cópia 1:1 dos arquivos originais — veja "O que foi feito
diferente" abaixo antes de publicar.

## Como abrir

Não precisa de build. Basta servir os arquivos estáticos:

```
npx serve .
# ou
python -m http.server 8000
```

Abrir `index.html` direto no navegador (`file://`) também funciona, exceto pelo
`fetch`/`preconnect` de fontes, que precisa de rede.

## Estrutura

```
index.html        # todas as seções da página
css/style.css      # design tokens + estilos de todos os componentes
js/main.js          # banner, menu mobile, marquee, accordion, scroll-reveal
```

## Landing page única

O site é **uma página só** — não existe mais mega menu com links para outras
páginas (Plataforma/Soluções do site de referência, que levavam a subpáginas).
O menu (desktop e mobile) agora é uma lista simples de âncoras que rolam até
seções desta própria página: `#produto`, `#integracoes`, `#seguranca`, `#faq`.
O footer segue o mesmo padrão, no lugar das 4 colunas de sitemap do original
(Blog, Carreiras, outros setores etc., que não existem aqui).

Se algum dia você precisar de mais páginas, adicione `id`s novos nas seções
(ou crie os arquivos `.html`) e um link correspondente no `nav__list` do
header e no `nav__list--mobile`.

## Seções replicadas

Banner de aviso · header com navegação por âncora (desktop + mobile) · hero
com formulário · marquee de logos em loop infinito · seção de problema
(cards) · divisor de seção · "por que somos diferentes" (com painel de
estatísticas) · dois blocos de feature-set (lista + visual) · integrações ·
segurança (cards) · faixa de destaque em fundo escuro · FAQ em accordion ·
CTA final · footer.

## Efeitos replicados

- **Banner que some ao rolar** a página (fade + slide).
- **Menu mobile**: abre em overlay de tela cheia no clique do hambúrguer,
  fecha ao clicar num link, clicar fora ou pressionar Esc.
- **Marquee infinito**: a lista é duplicada via JS e roda em loop com CSS puro.
- **Accordion do FAQ**: um item aberto por vez, animação de altura suave.
- **Scroll reveal**: elementos entram com fade + leve translação + blur ao
  aparecer na tela (`[data-reveal]` no HTML, lógica em `initScrollReveal()`).
  Diferente de implementações comuns baseadas só em `IntersectionObserver`,
  aqui também existe uma varredura por scroll/resize — isso evita o problema
  clássico de elementos ficarem com `opacity:0` para sempre quando a página dá
  um salto de scroll instantâneo (ex: um link `#faq` do menu), caso em que a
  IntersectionObserver pode nunca "ver" o elemento passar pela tela. O
  stagger entre elementos também usa uma fila com atraso máximo (350ms), não
  o índice absoluto do elemento na página — senão uma seção longe do topo
  (como o FAQ, alcançado via âncora) ficaria em branco por mais de 1s antes
  de aparecer.

Testado com Playwright (Chromium headless): sem erros de console, menu mobile
cobrindo a tela corretamente, accordion, marquee e reveal funcionando em
saltos de scroll instantâneos (incluindo navegação por âncora direto para
`#faq`, o caso mais extremo por estar no fim da página).

## O que foi feito diferente do site de referência (e por quê)

1. **Fonte**: o original usa **TWK Lausanne**, uma fonte paga da fundição TWK.
   Não é possível copiar os arquivos da fonte sem uma licença. Este projeto usa
   **General Sans** (Fontshare, gratuita para uso comercial) no lugar, com a
   mesma sensação neo-grotesca. Se você comprar a licença da TWK Lausanne,
   troque em `css/style.css`:
   ```css
   --font-primary: "General Sans", "Inter", sans-serif;
   ```
   e adicione o `@font-face` correspondente.
2. **Conteúdo**: todo o texto (headlines, parágrafos, FAQs, links de menu) é
   **placeholder genérico em português**, não o texto de marketing da
   Clarasight — o conteúdo deles é propriedade da empresa. Substitua pelo
   discurso do seu próprio produto.
3. **Imagens e logos**: não há nenhuma imagem baixada do site original.
   Screenshots de produto, logos de clientes e selos de certificação (SOC 2,
   ISO etc.) foram trocados por placeholders (`.hero__visual`,
   `.logo-marquee__item`, `.security-card`, `.integrations__chip`). Troque
   pelos seus próprios assets — e só use selos de certificação que sua empresa
   realmente possui.
4. **Ícones**: todos os SVGs são desenhados do zero (traços simples,
   genéricos), não os ícones originais do site.
5. **JS de efeitos**: a lógica foi reimplementada de forma independente e mais
   enxuta (o script de scroll-reveal original tinha ~630 linhas com heurísticas
   de auto-detecção; aqui o mesmo efeito visual usa `[data-reveal]` explícito
   no HTML, mais simples de entender e manter).

## Sistema de design (tokens em `css/style.css`)

- `--color-brand` (#514fee) e `--color-ink` (#070628): troque para rebrandear
  o site inteiro — todos os tons (badges, hovers, textos secundários) são
  derivados via `color-mix()`.
- Escala de espaçamento, tipografia e raio de borda em variáveis CSS no
  `:root`, com breakpoints em 991px / 767px / 479px (mesmos do Webflow
  original).

## Próximos passos sugeridos

- Substituir todo texto entre `[colchetes]` e os placeholders "Sua Marca" /
  "Empresa A-H" / "Certificação A-D".
- Conectar o formulário do hero a um serviço real (o original usa HubSpot).
- Trocar `.hero__visual`, `.feature-set__visual` e `.integrations__collage`
  por imagens/screenshots reais do seu produto.
- Revisar `alt` text das imagens que você adicionar (vazio por padrão nos
  ícones decorativos).
