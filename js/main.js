/* ==========================================================================
   Hero spotlight — holofote de pontinhos que segue o mouse dentro do hero.
   `.hero__spotlight` já tem o grid de pontos desenhado via CSS
   (background-image); aqui só atualizamos --spot-x/--spot-y (a posição do
   mouse relativa à seção) e ligamos/desligamos a opacidade via classe, pra
   o efeito sumir quando o mouse sai (evita "holofote fantasma" parado no
   último ponto depois que o cursor vai embora).
   ========================================================================== */
function initHeroSpotlight() {
  const hero = document.querySelector('.hero');
  const spotlight = hero?.querySelector('.hero__spotlight');
  if (!hero || !spotlight) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    spotlight.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    spotlight.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  });
  hero.addEventListener('mouseenter', () => hero.classList.add('is-spotlight-active'));
  hero.addEventListener('mouseleave', () => hero.classList.remove('is-spotlight-active'));
}

/* ==========================================================================
   Card spotlight — mesmo holofote de pontinhos da hero, só que por card
   (`.card--vivid`), pedido explícito do usuário ("no local que o mouse
   passar, deve ter o mesmo efeito da hero"). Cada card tem seu próprio
   `.card__spotlight`, com --spot-x/--spot-y relativos a ELE (não à
   página), e reaproveita o mesmo filtro SVG #hero-wave já definido no
   <body> — não precisa duplicar o filtro nem a lógica de animação.
   `.compare` ("Planilha vs Pruxor") reaproveita o mesmo elemento/efeito
   (pedido explícito do usuário) — por isso entra na mesma busca abaixo em
   vez de precisar de uma função própria.
   ========================================================================== */
function initCardSpotlight() {
  document.querySelectorAll('.card--vivid, .compare').forEach((card) => {
    const spotlight = card.querySelector('.card__spotlight');
    if (!spotlight) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      spotlight.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      spotlight.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    });
    card.addEventListener('mouseenter', () => card.classList.add('is-spotlight-active'));
    card.addEventListener('mouseleave', () => card.classList.remove('is-spotlight-active'));
  });
}

/* ==========================================================================
   Header — estado ao rolar a página
   Marca `.has-hero` uma vez (só existe hero escuro no index.html, por isso
   a checagem via seletor em vez de hardcoded por página) e alterna
   `.is-scrolled` conforme a posição de scroll, pra virar a pílula flutuante
   compacta (ver .site-header.is-scrolled em css/style.css).
   ========================================================================== */
function initHeaderScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  if (document.querySelector('.hero')) {
    header.classList.add('has-hero');
  }

  const threshold = 24;
  let ticking = false;

  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > threshold);
  }

  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/* ==========================================================================
   Menu mobile — abre/fecha o overlay de navegação em telas pequenas
   ========================================================================== */
function initMobileNav() {
  const header = document.querySelector('.site-header');
  const hamburger = header?.querySelector('.nav__hamburger-button');
  const mobileList = header?.querySelector('.nav__list--mobile');
  if (!header || !hamburger || !mobileList) return;

  function close() {
    document.body.classList.remove('nav-mobile-open');
  }

  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('nav-mobile-open');
  });

  // Página única: os links do menu mobile são âncoras para seções desta
  // mesma página, então fechamos o overlay assim que o usuário navega.
  mobileList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ==========================================================================
   Feature showcase — "etapas presas". Imagem e texto ficam sticky dentro
   de um trilho alto (.feature-showcase__track, altura = etapas × 100vh) e
   trocam juntos por crossfade a cada etapa completa de scroll — nunca dois
   blocos de texto visíveis ao mesmo tempo, porque ambos são absolutamente
   posicionados um sobre o outro e só o [data-step] ativo tem opacidade 1.
   (Chegou a virar uma função genérica pra também servir "Como funciona",
   mas essa sessão trocou de mecânica — voltou a ser específica daqui.)
   ========================================================================== */
function initFeatureShowcase() {
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  document.querySelectorAll('.feature-showcase').forEach((showcase) => {
    const track = showcase.querySelector('.feature-showcase__track');
    const stage = showcase.querySelector('.feature-showcase__stage');
    const steps = showcase.querySelectorAll('.feature-showcase__block').length;
    const controlled = showcase.querySelectorAll('[data-step]');
    if (!track || !stage || !steps || !controlled.length) return;

    const mq = window.matchMedia('(max-width: 991px)');
    let ticking = false;

    function navHeightPx() {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
      return parseFloat(raw) || 0;
    }

    function layout() {
      track.style.height = mq.matches ? '' : `${steps * 100}vh`;
    }

    function setActiveStep(index) {
      const id = String(index + 1);
      controlled.forEach((el) => el.classList.toggle('is-active', el.dataset.step === id));
    }

    function update() {
      if (mq.matches) return;

      const trackRect = track.getBoundingClientRect();
      const stageHeight = stage.getBoundingClientRect().height;
      const scrollableRange = trackRect.height - stageHeight;

      if (scrollableRange <= 0) {
        setActiveStep(0);
        return;
      }

      const progress = clamp((navHeightPx() - trackRect.top) / scrollableRange, 0, 1);
      setActiveStep(Math.min(steps - 1, Math.floor(progress * steps)));
    }

    function queueUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    }

    layout();
    update();

    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', () => {
      layout();
      queueUpdate();
    });
  });
}

/* ==========================================================================
   Billing toggle — alterna o estado visual (mensal/anual) e troca de
   verdade o texto de qualquer elemento com `data-monthly`/`data-annual`
   (valor e período), além de alternar `.is-annual` nos `.pricing-card`
   (mostra/esconde parcelamento e economia).
   ========================================================================== */
function initBillingToggle() {
  document.querySelectorAll('.billing-toggle').forEach((toggle) => {
    const options = toggle.querySelectorAll('.billing-toggle__option');
    options.forEach((option) => {
      option.addEventListener('click', () => {
        options.forEach((el) => el.classList.remove('is-active'));
        option.classList.add('is-active');

        const period = option.dataset.billing;
        document.querySelectorAll('[data-monthly]').forEach((el) => {
          const value = period === 'annual' ? el.dataset.annual : el.dataset.monthly;
          if (value !== undefined) el.textContent = value;
        });
        document.querySelectorAll('.pricing-card').forEach((card) => {
          card.classList.toggle('is-annual', period === 'annual');
        });
      });
    });
  });
}

/* ==========================================================================
   FAQ accordion — um item aberto por vez
   ========================================================================== */
function initAccordion() {
  document.querySelectorAll('[data-accordion]').forEach((root) => {
    const items = root.querySelectorAll('[data-accordion-item]');

    function closeItem(item) {
      const panel = item.querySelector('[data-accordion-panel]');
      if (!panel) return;
      panel.style.height = panel.scrollHeight + 'px';
      requestAnimationFrame(() => {
        panel.style.height = '0px';
      });
      item.classList.remove('is-open');
    }

    function openItem(item) {
      const panel = item.querySelector('[data-accordion-panel]');
      if (!panel) return;
      items.forEach((other) => {
        if (other !== item && other.classList.contains('is-open')) closeItem(other);
      });
      item.classList.add('is-open');
      panel.style.height = panel.scrollHeight + 'px';
      panel.addEventListener(
        'transitionend',
        function handler() {
          if (item.classList.contains('is-open')) panel.style.height = 'auto';
          panel.removeEventListener('transitionend', handler);
        },
        { once: true }
      );
    }

    items.forEach((item, index) => {
      const trigger = item.querySelector('[data-accordion-trigger]');
      const panel = item.querySelector('[data-accordion-panel]');
      if (!trigger || !panel) return;

      panel.style.height = '0px';

      trigger.addEventListener('click', () => {
        item.classList.contains('is-open') ? closeItem(item) : openItem(item);
      });

      if (index === 0) openItem(item);
    });
  });
}

/* ==========================================================================
   Scroll reveal — fade + translate + blur ao entrar na viewport.
   Usa varredura por scroll/resize (em vez de só IntersectionObserver) para
   também revelar elementos "pulados" por saltos instantâneos de scroll,
   como cliques em âncora (#faq) ou scrollIntoView — a IO sozinha só
   dispara para posições intermediárias renderizadas, então um salto direto
   pode deixar elementos permanentemente com opacity:0.
   ========================================================================== */
function initScrollReveal() {
  const targets = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  let pending = targets.slice();
  let ticking = false;

  // Fila de stagger baseada em tempo (não na posição absoluta do elemento
  // na página): cada elemento revelado empurra o próximo +70ms, com um teto
  // de 350ms. Sem o teto, um salto de scroll (ex: link "#faq" do menu) revela
  // muitos elementos de uma vez e os últimos herdam o índice deles na página
  // inteira — uma seção pode ficar em branco por mais de 1s antes de aparecer.
  const STAGGER_MS = 70;
  const MAX_QUEUE_DELAY_MS = 350;
  let nextRevealAt = 0;

  function reveal(el) {
    const now = performance.now();
    const start = Math.min(Math.max(now, nextRevealAt), now + MAX_QUEUE_DELAY_MS);
    el.style.transitionDelay = `${Math.round(start - now)}ms`;
    el.classList.add('is-visible');
    nextRevealAt = start + STAGGER_MS;
  }

  function sweep() {
    ticking = false;
    if (!pending.length) return;
    const vh = window.innerHeight;
    pending = pending.filter((el) => {
      const rect = el.getBoundingClientRect();
      const hasEnteredOrPassed = rect.top < vh * 0.92;
      if (hasEnteredOrPassed) reveal(el);
      return !hasEnteredOrPassed;
    });
  }

  function queueSweep() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(sweep);
  }

  sweep();
  window.addEventListener('scroll', queueSweep, { passive: true });
  window.addEventListener('resize', queueSweep);
  window.addEventListener('load', queueSweep);
}

/* ==========================================================================
   About outcomes — números que contam de 0 até o valor real (data-count-to)
   quando o elemento entra na tela. `toLocaleString('pt-BR')` já formata
   milhares com ponto ("1.000"), sem precisar tratar isso na mão. Só conta
   uma vez por elemento (unobserve depois de disparar).
   ========================================================================== */
function initCountUp() {
  const els = document.querySelectorAll('[data-count-to]');
  if (!els.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setFinal(el) {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.countSuffix || '';
    el.textContent = target.toLocaleString('pt-BR') + suffix;
  }

  if (reduceMotion) {
    els.forEach(setFinal);
    return;
  }

  function animate(el) {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.countSuffix || '';
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString('pt-BR') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        animate(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   About outcomes — globo pontilhado 3D (canvas, sem biblioteca nenhuma).
   Continentes definidos como polígonos simplificados de lat/lon; os pontos
   do globo vêm de uma amostragem tipo "Fibonacci sphere" (distribuição
   uniforme numa esfera), testados contra os polígonos pra separar
   terra/oceano. A cada frame, gira a longitude e reprojeta em 2D
   (projeção ortográfica: só desenha o hemisfério voltado pra "câmera").
   ========================================================================== */
function initAboutGlobe() {
  const canvas = document.querySelector('.about-outcomes__globe-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Continentes simplificados (lon, lat) — não são contornos reais de
  // costa, só polígonos aproximados o bastante pra ficarem reconhecíveis
  // como "manchas de continente" na escala pequena do globo renderizado.
  const CONTINENTS = [
    // América do Norte
    [[-165, 68], [-140, 70], [-95, 75], [-75, 68], [-60, 50], [-52, 47], [-65, 45], [-80, 25], [-97, 18], [-105, 20], [-117, 32], [-124, 40], [-124, 49], [-130, 55], [-140, 60], [-165, 68]],
    // América do Sul
    [[-80, 10], [-70, 12], [-60, 10], [-50, 0], [-35, -5], [-35, -10], [-40, -20], [-48, -25], [-58, -35], [-65, -40], [-70, -45], [-73, -50], [-70, -55], [-65, -55], [-68, -45], [-72, -35], [-78, -20], [-80, -5], [-80, 10]],
    // Europa
    [[-10, 36], [-5, 43], [0, 50], [5, 55], [10, 58], [20, 60], [30, 60], [40, 55], [35, 45], [27, 40], [15, 38], [5, 38], [-5, 36], [-10, 36]],
    // África
    [[-17, 15], [-10, 20], [0, 25], [10, 32], [20, 32], [32, 30], [35, 22], [42, 12], [50, 10], [45, 0], [40, -10], [35, -25], [25, -33], [18, -34], [15, -25], [12, -15], [8, -5], [0, 5], [-10, 10], [-17, 15]],
    // Ásia
    [[30, 45], [40, 50], [55, 55], [70, 55], [90, 55], [110, 55], [130, 55], [140, 50], [135, 40], [130, 32], [120, 25], [110, 20], [100, 15], [95, 10], [90, 20], [80, 25], [70, 25], [60, 30], [45, 35], [35, 40], [30, 45]],
    // Austrália
    [[113, -22], [120, -18], [135, -12], [145, -15], [150, -25], [145, -38], [135, -35], [125, -33], [115, -30], [113, -22]],
  ];

  function isLand(lat, lon) {
    return CONTINENTS.some((poly) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1];
        const xj = poly[j][0], yj = poly[j][1];
        const intersect = yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }
      return inside;
    });
  }

  // Fibonacci sphere: espalha N pontos quase uniformemente pela esfera —
  // muito mais parelho que uma grade lat/lon comum (que amontoa pontos
  // nos polos).
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  function generatePoints(count) {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      const lat = (Math.asin(y) * 180) / Math.PI;
      const lon = (Math.atan2(z, x) * 180) / Math.PI;
      pts.push({ lat, lon, land: isLand(lat, lon) });
    }
    return pts;
  }

  // Quantidade de pontos escala com a área do globo renderizado (raio²),
  // não fixa — 18000 pontos ficam densos e finos no globo grande de
  // desktop (pedido explícito do usuário, comparando com print de
  // referência), mas os MESMOS 18000 num globo pequeno (fallback
  // empilhado, ~320px, ou mobile) ficam tão apertados que os pontos se
  // fundem numa mancha sólida — os continentes perdem o estilo pontilhado
  // por completo (bug real, achado ao revisar o fallback mobile depois de
  // aumentar a contagem). BASE_RADIUS é o raio aproximado do globo grande
  // de desktop (container de até 1020px) — MAX_POINT_COUNT só se aplica
  // perto desse tamanho; abaixo disso a contagem cai proporcionalmente à
  // área, preservando a mesma densidade (pontos por px²) em qualquer
  // tamanho de tela.
  const MAX_POINT_COUNT = 18000;
  const MIN_POINT_COUNT = 900;
  const BASE_RADIUS = 480;
  let points = [];
  let currentPointCount = 0;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const brandColor = getComputedStyle(document.documentElement).getPropertyValue('--color-brand').trim() || '#514fee';
  let rotation = 0;
  let rafId = null;
  let running = false;
  let cssWidth = 0;
  let cssHeight = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = window.devicePixelRatio || 1;
    cssWidth = rect.width;
    cssHeight = rect.height;
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const radius = Math.min(cssWidth, cssHeight) * 0.47;
    const targetCount = Math.round(
      Math.min(MAX_POINT_COUNT, Math.max(MIN_POINT_COUNT, MAX_POINT_COUNT * (radius / BASE_RADIUS) ** 2))
    );
    if (Math.abs(targetCount - currentPointCount) / Math.max(currentPointCount, 1) > 0.1) {
      points = generatePoints(targetCount);
      currentPointCount = targetCount;
    }
  }

  function draw() {
    if (!cssWidth || !cssHeight) resize();
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const cx = cssWidth / 2;
    const cy = cssHeight / 2;
    const radius = Math.min(cssWidth, cssHeight) * 0.47;

    // aro sutil marcando o contorno da esfera — sem ele, os pontos de
    // oceano (bem fracos) não bastam pra "ler" como globo, só como uma
    // nuvem solta de pontos.
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(247, 247, 255, 0.16)';
    ctx.lineWidth = 1;
    ctx.stroke();

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const latRad = (p.lat * Math.PI) / 180;
      const lonRad = ((p.lon + rotation) * Math.PI) / 180;
      const x3 = Math.cos(latRad) * Math.sin(lonRad);
      const y3 = Math.sin(latRad);
      const z3 = Math.cos(latRad) * Math.cos(lonRad);
      if (z3 < -0.05) continue; // esconde o hemisfério de trás

      const depth = (z3 + 1) / 2; // 0 (borda) .. 1 (centro/mais perto)
      const sx = cx + x3 * radius;
      const sy = cy - y3 * radius;
      const size = (p.land ? 1.7 : 1.3) * (0.55 + 0.45 * depth);

      ctx.globalAlpha = (p.land ? 0.6 : 0.28) * (0.55 + 0.45 * depth);
      ctx.fillStyle = p.land ? '#f7f7ff' : brandColor;
      ctx.beginPath();
      ctx.arc(sx, sy, size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (!reduceMotion) rotation += 0.12;
  }

  function loop() {
    draw();
    if (running && !reduceMotion) rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    resize();
    loop();
  }
  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
  }

  // só anima enquanto o globo está visível na tela — evita gastar CPU
  // com o card fora da viewport.
  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => (entry.isIntersecting ? start() : stop())),
    { threshold: 0.01 }
  );
  io.observe(canvas);

  window.addEventListener('resize', () => {
    resize();
    if (!running) draw();
  });

  resize();
  draw();
  // com prefers-reduced-motion, `rotation` nunca incrementa (ver draw()),
  // então o observer acima segue funcionando normalmente, só que sempre
  // redesenha o mesmo frame estático em vez de animar de verdade.
}

/* ==========================================================================
   Init
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initHeroSpotlight();
  initCardSpotlight();
  initHeaderScrollState();
  initMobileNav();
  initFeatureShowcase();
  initBillingToggle();
  initAccordion();
  initCountUp();
  initAboutGlobe();
  initScrollReveal();
});
