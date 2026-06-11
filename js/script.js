/* ═══════════════════════════════════════════════════════════
   ANANTHA KUMAR S — PORTFOLIO  |  Main Script
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   DATA — Edit these to update portfolio
───────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'inspectormatch',
    title: 'InspectorMatch',
    desc: 'Enterprise home inspection platform built with Angular Micro Frontends and .NET Microservices. Streamlines the entire inspection lifecycle from booking to report delivery.',
    tech: ['Angular', 'Micro Frontends', '.NET', 'Microservices', 'Kafka', 'QuickBooks', 'PostgreSQL'],
    icon: '🏠',
    banner: 'linear-gradient(135deg, #1a0533 0%, #2d0b5e 40%, #8B5CF6 100%)',
    github: 'https://github.com/ananthakumar',
    demo: 'https://inspectormatch.com',
  },
  {
    id: 'inspectiondepot',
    title: 'InspectionDepot',
    desc: 'Comprehensive inspection management platform with real-time reporting, QuickBooks integration, and role-based access controls for enterprise inspection firms.',
    tech: ['Angular', 'TypeScript', '.NET', 'gRPC', 'QuickBooks API', 'Stripe', 'PostgreSQL'],
    icon: '📋',
    banner: 'linear-gradient(135deg, #0a0f2e 0%, #1a2060 40%, #4158D0 100%)',
    github: 'https://github.com/ananthakumar',
    demo: 'https://inspectiondepot.com',
  },
  {
    id: 'dronesnap',
    title: 'DroneSnap',
    desc: 'Aerial inspection application leveraging drone technology for property and infrastructure surveys. Features AI-assisted damage detection and automated PDF reporting.',
    tech: ['Angular', 'TypeScript', '.NET', 'Kafka', 'gRPC', 'PostgreSQL'],
    icon: '🚁',
    banner: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 40%, #00B4D8 100%)',
    github: 'https://github.com/ananthakumar',
    demo: '#',
  },
  {
    id: 'razorpay',
    title: 'Razorpay Integration',
    desc: 'Full-stack payment gateway integration supporting subscriptions, one-time payments, webhooks, and real-time payment status tracking with .NET backend and Angular UI.',
    tech: ['Angular', '.NET', 'C#', 'Stripe', 'Razorpay SDK', 'PostgreSQL', 'REST APIs'],
    icon: '💳',
    banner: 'linear-gradient(135deg, #0e0e1a 0%, #1c1c40 40%, #3B82F6 100%)',
    github: 'https://github.com/ananthakumar',
    demo: '#',
  },
];

const REPOS = [
  {
    name: 'angular-microfrontend-starter',
    desc: 'Module Federation boilerplate for Angular Micro Frontend architecture with shared state management and dynamic remote loading.',
    lang: 'TypeScript',
    langColor: '#3178C6',
    stars: 24,
    forks: 8,
    url: 'https://github.com/ananthakumar',
  },
  {
    name: 'dotnet-microservices-template',
    desc: 'Production-ready .NET 8 microservices template with Kafka event bus, gRPC inter-service communication, and clean architecture patterns.',
    lang: 'C#',
    langColor: '#512BD4',
    stars: 18,
    forks: 5,
    url: 'https://github.com/ananthakumar',
  },
  {
    name: 'kafka-dotnet-consumer',
    desc: 'Reusable Apache Kafka consumer library for .NET with retry policies, dead-letter queuing, and structured logging built in.',
    lang: 'C#',
    langColor: '#512BD4',
    stars: 12,
    forks: 3,
    url: 'https://github.com/ananthakumar',
  },
  {
    name: 'grpc-angular-bridge',
    desc: 'Angular service layer library for seamless gRPC-Web communication with automatic type generation from .proto files.',
    lang: 'TypeScript',
    langColor: '#3178C6',
    stars: 9,
    forks: 2,
    url: 'https://github.com/ananthakumar',
  },
  {
    name: 'postgres-dapper-extensions',
    desc: 'Dapper extensions for PostgreSQL featuring bulk operations, paginated queries, and strongly-typed query builders.',
    lang: 'C#',
    langColor: '#512BD4',
    stars: 7,
    forks: 1,
    url: 'https://github.com/ananthakumar',
  },
  {
    name: 'quickbooks-dotnet-sdk-wrapper',
    desc: 'Simplified wrapper around the QuickBooks Online API for .NET with OAuth2 flow, token refresh, and common financial operations.',
    lang: 'C#',
    langColor: '#512BD4',
    stars: 5,
    forks: 2,
    url: 'https://github.com/ananthakumar',
  },
];

const PROJECT_PAGES = {
  inspectormatch: {
    title: 'InspectorMatch',
    tagline: '// enterprise · home-inspection · platform',
    icon: '🏠',
    banner: 'linear-gradient(135deg, #0a0014 0%, #1a033e 35%, #4c1d95 70%, #8B5CF6 100%)',
    desc: 'InspectorMatch is an enterprise-grade home inspection platform designed to handle the complete inspection lifecycle — from client booking through inspector dispatch, live reporting, and final delivery. Built with a Micro Frontend architecture that allows teams to ship features independently.',
    features: [
      'Angular Micro Frontend with Module Federation',
      '.NET 8 Microservices with Clean Architecture',
      'Apache Kafka event streaming pipeline',
      'gRPC inter-service communication layer',
      'Real-time inspection status tracking',
      'Automated PDF report generation',
      'QuickBooks billing integration',
      'Role-based access control (RBAC)',
    ],
    tech: ['Angular 17', 'TypeScript', 'Module Federation', '.NET 8', 'C#', 'Kafka', 'gRPC', 'PostgreSQL', 'Dapper', 'QuickBooks API'],
    screenshots: [
      { label: 'Dashboard', bg: 'linear-gradient(135deg, #1a033e, #4c1d95)' },
      { label: 'Inspector View', bg: 'linear-gradient(135deg, #2d0b5e, #6D28D9)' },
      { label: 'Reports', bg: 'linear-gradient(135deg, #1a033e, #8B5CF6)' },
    ],
    github: 'https://github.com/ananthakumar',
    demo: 'https://inspectormatch.com',
  },
  inspectiondepot: {
    title: 'InspectionDepot',
    tagline: '// inspection · management · portal',
    icon: '📋',
    banner: 'linear-gradient(135deg, #0a0f2e 0%, #1a2060 40%, #2563EB 80%, #4158D0 100%)',
    desc: 'InspectionDepot is the core inspection management platform serving enterprise-level clients. It provides a centralized hub for managing inspectors, clients, reports, and financials — with deep QuickBooks integration that eliminates double-entry bookkeeping.',
    features: [
      'Multi-tenant SaaS architecture',
      'Angular UI with lazy-loaded modules',
      '.NET Microservices backend',
      'Real-time dashboard with WebSocket updates',
      'QuickBooks bidirectional sync',
      'Advanced search and filtering',
      'Automated invoice generation',
      'Custom report template builder',
    ],
    tech: ['Angular 17', 'TypeScript', 'SCSS', '.NET 8', 'C#', 'gRPC', 'Stripe', 'QuickBooks API', 'PostgreSQL', 'Entity Framework', 'SignalR'],
    screenshots: [
      { label: 'Portal Home', bg: 'linear-gradient(135deg, #0a0f2e, #1a2060)' },
      { label: 'Order Management', bg: 'linear-gradient(135deg, #1a2060, #2563EB)' },
      { label: 'Financials', bg: 'linear-gradient(135deg, #0a0f2e, #4158D0)' },
    ],
    github: 'https://github.com/ananthakumar',
    demo: 'https://inspectiondepot.com',
  },
  dronesnap: {
    title: 'DroneSnap',
    tagline: '// aerial · inspection · intelligence',
    icon: '🚁',
    banner: 'linear-gradient(135deg, #0d1b2a 0%, #0a3d62 40%, #00B4D8 80%, #48CAE4 100%)',
    desc: 'DroneSnap transforms how property and infrastructure inspections are conducted using aerial drone technology. The platform captures high-resolution imagery, processes it for damage detection, and generates structured inspection reports automatically.',
    features: [
      'Drone flight plan management',
      'High-resolution image capture pipeline',
      'Automated damage detection analysis',
      'Kafka-powered image processing queue',
      'gRPC services for low-latency data flow',
      'Geo-tagged photo management',
      'Automated inspection PDF reports',
      'Angular dashboard for field teams',
    ],
    tech: ['Angular 17', 'TypeScript', '.NET 8', 'C#', 'Kafka', 'gRPC', 'PostgreSQL', 'Dapper', 'REST APIs'],
    screenshots: [
      { label: 'Flight View', bg: 'linear-gradient(135deg, #0d1b2a, #0a3d62)' },
      { label: 'Image Gallery', bg: 'linear-gradient(135deg, #0a3d62, #00B4D8)' },
      { label: 'Report View', bg: 'linear-gradient(135deg, #0d1b2a, #48CAE4)' },
    ],
    github: 'https://github.com/ananthakumar',
    demo: '#',
  },
  razorpay: {
    title: 'Razorpay Integration',
    tagline: '// payments · subscriptions · webhooks',
    icon: '💳',
    banner: 'linear-gradient(135deg, #0e0e1a 0%, #1e1e4a 40%, #3B82F6 80%, #60A5FA 100%)',
    desc: 'A comprehensive Razorpay payment gateway integration built with a .NET backend and Angular frontend. Supports one-time payments, recurring subscriptions, webhook event processing, and real-time payment status updates with a clean audit trail.',
    features: [
      'One-time and recurring payment flows',
      'Razorpay Subscription lifecycle management',
      'Secure webhook processing with HMAC validation',
      'Real-time payment status tracking',
      'Retry logic for failed transactions',
      'Angular payment UI components',
      'Comprehensive audit log',
      'Refund and dispute management',
    ],
    tech: ['Angular 17', 'TypeScript', '.NET 8', 'C#', 'Stripe SDK', 'Razorpay SDK', 'PostgreSQL', 'Dapper', 'REST APIs', 'HMAC Security'],
    screenshots: [
      { label: 'Payment Page', bg: 'linear-gradient(135deg, #0e0e1a, #1e1e4a)' },
      { label: 'Subscriptions', bg: 'linear-gradient(135deg, #1e1e4a, #3B82F6)' },
      { label: 'Transaction Log', bg: 'linear-gradient(135deg, #0e0e1a, #60A5FA)' },
    ],
    github: 'https://github.com/ananthakumar',
    demo: '#',
  },
};

/* ─────────────────────────────────────────
   ARTICLES DATA
───────────────────────────────────────── */
const ARTICLES = [
  {
    id: 'grpc-microservices',
    title: 'Building Microservice Communication with gRPC in .NET 8',
    subtitle: 'OrderService ↔ UserService',
    excerpt: 'How Protocol Buffers, HTTP/2, and auto-generated code work together to create fast, strongly-typed communication between microservices — with real implementation challenges.',
    readTime: '8 min read',
    date: 'June 2025',
    tags: ['.NET 8', 'gRPC', 'Protobuf', 'HTTP/2', 'Microservices'],
    icon: '⚡',
    banner: 'linear-gradient(135deg, #060b20 0%, #0f1f5c 45%, #1a3a9e 75%, #2563EB 100%)',
  },
];

const TYPING_STRINGS = [
  'Building Scalable Digital Experiences.',
  'Angular & .NET Full Stack Developer.',
  'Stripe · QuickBooks · Kafka · gRPC.',
  'Shipping features, not just writing code.',
];

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initParticles();
  initTyping();
  initScrollReveal();
  initNavigation();
  initCursorGlow();
  initCardTilt();
  renderProjects();
  renderRepos();
  renderArticles();
  initCounters();
  initContactForm();
  initArticleOverlay();
  checkURLParams();
  document.getElementById('yr').textContent = new Date().getFullYear();
});

/* ─────────────────────────────────────────
   LOADER
───────────────────────────────────────── */
function initLoader() {
  document.body.classList.add('loading');
  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
    triggerHeroAnimation();
  }, 2200);
}

function triggerHeroAnimation() {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => el.classList.add('visible'), i * 80);
    }
  });
}

/* ─────────────────────────────────────────
   PARTICLES
───────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let W, H, animId;
  const isMobile = window.innerWidth < 768;
  const COUNT = isMobile ? 50 : 100;
  const CONNECT_DIST = isMobile ? 100 : 150;
  const mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function Particle() {
    this.reset = function () {
      this.x   = Math.random() * W;
      this.y   = Math.random() * H;
      this.vx  = (Math.random() - 0.5) * 0.4;
      this.vy  = (Math.random() - 0.5) * 0.4;
      this.r   = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.15;
    };
    this.reset();
  }

  function initP() {
    particles = Array.from({ length: COUNT }, () => new Particle());
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // mouse repel
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        p.x += (dx / dist) * 1.2;
        p.y += (dy / dist) * 1.2;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
      ctx.fill();
    });

    // connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT_DIST) {
          const opacity = (1 - d / CONNECT_DIST) * 0.2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139,92,246,${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(drawFrame);
  }

  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    initP();
    drawFrame();
  });

  resize();
  initP();
  drawFrame();
}

/* ─────────────────────────────────────────
   TYPING EFFECT
───────────────────────────────────────── */
function initTyping() {
  const el = document.getElementById('typingEl');
  if (!el) return;

  let si = 0, ci = 0, deleting = false;
  const TYPE_SPEED = 60, DEL_SPEED = 30, PAUSE = 2200;

  function tick() {
    const current = TYPING_STRINGS[si];
    if (deleting) {
      ci--;
      el.textContent = current.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        si = (si + 1) % TYPING_STRINGS.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, DEL_SPEED);
    } else {
      ci++;
      el.textContent = current.slice(0, ci);
      if (ci === current.length) {
        setTimeout(() => { deleting = true; tick(); }, PAUSE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    }
  }

  setTimeout(tick, 800);
}

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          animateSkillBars(entry.target);
        }, 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => io.observe(el));
}

function animateSkillBars(container) {
  const cards = container.querySelectorAll ? container.querySelectorAll('.skill-card') : [];
  cards.forEach(card => card.classList.add('animated'));
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */
function initNavigation() {
  const nav     = document.getElementById('navbar');
  const burger  = document.getElementById('hamburger');
  const menu    = document.getElementById('mobileMenu');
  const links   = document.querySelectorAll('.nav-links a');
  const mLinks  = document.querySelectorAll('.mobile-menu a');
  const sections = document.querySelectorAll('section[id]');

  // Scroll class
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);

    // Active link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  // Close menu on link click
  mLinks.forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─────────────────────────────────────────
   CURSOR GLOW
───────────────────────────────────────── */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) {
    if (glow) glow.style.display = 'none';
    return;
  }

  let tx = 0, ty = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });

  (function animate() {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(animate);
  })();
}

/* ─────────────────────────────────────────
   CARD TILT
───────────────────────────────────────── */
function initCardTilt() {
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────
   COUNTER ANIMATION
───────────────────────────────────────── */
function initCounters() {
  const els = document.querySelectorAll('.ach-num[data-target]');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const dur    = 1800;
      const start  = performance.now();

      function update(now) {
        const t   = Math.min((now - start) / dur, 1);
        const val = Math.round(easeOutExpo(t) * target);
        el.textContent = val + suffix;
        if (t < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  els.forEach(el => io.observe(el));
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ─────────────────────────────────────────
   RENDER PROJECTS
───────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="proj-card glass-card" role="listitem" style="animation-delay:${i * 0.1}s" data-project="${p.id}">
      <div class="proj-banner" style="background:${p.banner}" aria-hidden="true">
        <div class="proj-banner-num">0${i + 1}</div>
        <div class="proj-banner-icon">${p.icon}</div>
      </div>
      <div class="proj-body">
        <h3 class="proj-title">
          ${p.title}
          <svg class="proj-title-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </h3>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="proj-actions">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="proj-btn proj-btn-gh" onclick="event.stopPropagation()" aria-label="GitHub Repository for ${p.title}">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          ${p.demo && p.demo !== '#'
            ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="proj-btn proj-btn-demo" onclick="event.stopPropagation()" aria-label="Live Demo for ${p.title}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
               </a>`
            : `<button class="proj-btn proj-btn-demo" onclick="event.stopPropagation();openProjectOverlay('${p.id}')" aria-label="View details for ${p.title}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                View Details
               </button>`
          }
        </div>
      </div>
    </article>
  `).join('');

  // Click card → open overlay
  grid.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => openProjectOverlay(card.dataset.project));
  });

  // Re-init tilt after render
  initCardTilt();
}

/* ─────────────────────────────────────────
   RENDER REPOS
───────────────────────────────────────── */
function renderRepos() {
  const grid = document.getElementById('reposGrid');
  if (!grid) return;

  grid.innerHTML = REPOS.map(r => `
    <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="repo-card glass-card" role="listitem" aria-label="${r.name} repository">
      <div class="repo-top">
        <div class="repo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </div>
        <span class="repo-link-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </span>
      </div>
      <div class="repo-name">${r.name}</div>
      <div class="repo-desc">${r.desc}</div>
      <div class="repo-meta">
        <span class="repo-lang">
          <span class="repo-lang-dot" style="background:${r.langColor}" aria-hidden="true"></span>
          ${r.lang}
        </span>
        <span class="repo-stat" aria-label="${r.stars} stars">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ${r.stars}
        </span>
        <span class="repo-stat" aria-label="${r.forks} forks">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
          ${r.forks}
        </span>
      </div>
    </a>
  `).join('');
}

/* ─────────────────────────────────────────
   PROJECT OVERLAY
───────────────────────────────────────── */
function openProjectOverlay(id) {
  const data = PROJECT_PAGES[id];
  if (!data) return;

  const overlay = document.getElementById('projectOverlay');
  const body    = document.getElementById('overlayBody');
  const bg      = document.getElementById('overlayBg');

  body.innerHTML = buildOverlayHTML(data);
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;

  // Update URL without reload
  const url = new URL(window.location.href);
  url.searchParams.set('project', id);
  history.pushState({ project: id }, '', url);

  // Close handlers
  function close() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    const clean = new URL(window.location.href);
    clean.searchParams.delete('project');
    history.pushState({}, '', clean);
  }

  document.getElementById('overlayClose').onclick = close;
  bg.onclick = close;

  overlay.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') { close(); overlay.removeEventListener('keydown', onKey); }
  });

  // Focus close btn for accessibility
  setTimeout(() => document.getElementById('overlayClose').focus(), 100);
}

function buildOverlayHTML(data) {
  const screenshots = data.screenshots.map(s => `
    <div class="ov-screenshot" style="background:${s.bg}">
      <span class="ov-screenshot-label">${s.label}</span>
    </div>
  `).join('');

  const demoBtn = data.demo && data.demo !== '#'
    ? `<a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         Live Demo
       </a>`
    : '';

  return `
    <div class="ov-hero" style="background:${data.banner || 'var(--bg3)'}">
      <div class="ov-hero-icon">${data.icon}</div>
      <h2 class="ov-hero-title">${data.title}</h2>
      <p class="ov-hero-tagline">${data.tagline}</p>
    </div>
    <div class="ov-body">
      <div class="ov-section">
        <p class="ov-section-title">// About</p>
        <p class="ov-desc">${data.desc}</p>
      </div>
      <div class="ov-section">
        <p class="ov-section-title">// Key Features</p>
        <div class="ov-features">${data.features.map(f => `<div class="ov-feature">${f}</div>`).join('')}</div>
      </div>
      <div class="ov-section">
        <p class="ov-section-title">// Tech Stack</p>
        <div class="ov-tech-list">${data.tech.map(t => `<span class="ov-tech">${t}</span>`).join('')}</div>
      </div>
      <div class="ov-section">
        <p class="ov-section-title">// Screenshots</p>
        <div class="ov-screenshots">${screenshots}</div>
      </div>
    </div>
    <div class="ov-actions">
      <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub Repository
      </a>
      ${demoBtn}
    </div>
  `;
}

/* ─────────────────────────────────────────
   URL PARAM → AUTO-OPEN PROJECT PAGE
───────────────────────────────────────── */
function checkURLParams() {
  const params = new URLSearchParams(window.location.search);
  const project = params.get('project');
  if (project && PROJECT_PAGES[project]) {
    setTimeout(() => openProjectOverlay(project), 2400);
  }
}

// Handle browser back/forward
window.addEventListener('popstate', e => {
  const overlay = document.getElementById('projectOverlay');
  if (!overlay) return;
  const params  = new URLSearchParams(window.location.search);
  const project = params.get('project');
  if (project && PROJECT_PAGES[project]) {
    openProjectOverlay(project);
  } else {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }
});

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) return;

    const mailto = `mailto:paulananth1912@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Hi Anantha,\n\n${message}\n\nBest regards,\n${name}\n${email}`)}`;
    window.location.href = mailto;
  });
}

/* ─────────────────────────────────────────
   SKILL BAR ANIMATION (on parent reveal)
   Override — trigger for all visible skill
   groups once the section is scrolled to.
───────────────────────────────────────── */
(function patchSkillReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-card').forEach(c => c.classList.add('animated'));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-group').forEach(g => io.observe(g));

  // Animate integration spotlight bars
  const spotIo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.sk-fill').forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--pct') || '0%';
        const pct = bar.style.cssText.match(/--pct:\s*([\d.]+%)/);
        if (pct) {
          bar.style.width = '0';
          requestAnimationFrame(() => {
            setTimeout(() => { bar.style.transition = 'width 1.3s cubic-bezier(0,0,0.2,1)'; bar.style.width = pct[1]; }, 200);
          });
        }
      });
      spotIo.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.integration-spotlight').forEach(el => spotIo.observe(el));
})();

/* ═══════════════════════════════════════════════════════════
   ARTICLES
═══════════════════════════════════════════════════════════ */

function renderArticles() {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;

  grid.innerHTML = ARTICLES.map((a, i) => `
    <article class="art-card reveal" role="listitem" data-article="${a.id}" style="animation-delay:${i * 0.12}s" tabindex="0" aria-label="Read article: ${a.title}">
      <div class="art-banner" style="background:${a.banner}">
        <div class="art-banner-pattern" aria-hidden="true"></div>
        <div class="art-banner-icon" aria-hidden="true">${a.icon}</div>
        <span class="art-read-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${a.readTime}
        </span>
      </div>
      <div class="art-body">
        <span class="art-num">// article · ${String(i + 1).padStart(2,'0')}</span>
        <h3 class="art-title">${a.title}</h3>
        <p class="art-subtitle">${a.subtitle}</p>
        <p class="art-excerpt">${a.excerpt}</p>
        <div class="art-footer">
          <div class="art-tags">${a.tags.slice(0,3).map(t => `<span class="art-tag">${t}</span>`).join('')}${a.tags.length > 3 ? `<span class="art-tag">+${a.tags.length - 3}</span>` : ''}</div>
          <span class="art-btn" aria-hidden="true">
            Read
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.art-card').forEach(card => {
    card.addEventListener('click', () => openArticleOverlay(card.dataset.article));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openArticleOverlay(card.dataset.article); });
  });
}

/* ─── Overlay open/close ─── */
function initArticleOverlay() {
  const bg    = document.getElementById('artOverlayBg');
  const close = document.getElementById('artOverlayClose');
  const body  = document.getElementById('artOverlayBody');
  const fill  = document.getElementById('artProgressFill');

  if (!bg) return;

  function closeOverlay() {
    document.getElementById('articleOverlay').hidden = true;
    document.body.style.overflow = '';
    if (body) body.removeEventListener('scroll', onScroll);
  }

  function onScroll() {
    const pct = body.scrollTop / (body.scrollHeight - body.clientHeight);
    if (fill) fill.style.width = Math.round(pct * 100) + '%';
  }

  bg.addEventListener('click', closeOverlay);
  close.addEventListener('click', closeOverlay);
  document.getElementById('articleOverlay').addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeOverlay();
  });
}

function openArticleOverlay(id) {
  const overlay = document.getElementById('articleOverlay');
  const body    = document.getElementById('artOverlayBody');
  const fill    = document.getElementById('artProgressFill');
  if (!overlay || !body) return;

  body.innerHTML = buildArticleHTML(id);
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  body.scrollTop = 0;
  if (fill) fill.style.width = '0';

  body.addEventListener('scroll', function onScroll() {
    const pct = body.scrollTop / (body.scrollHeight - body.clientHeight);
    if (fill) fill.style.width = Math.round(pct * 100) + '%';
  });

  setTimeout(() => document.getElementById('artOverlayClose').focus(), 100);
}

/* ─── Article content builder ─── */
function buildArticleHTML(id) {
  if (id === 'grpc-microservices') return buildGrpcArticle();
  return '<p style="padding:40px;color:var(--txt3)">Article not found.</p>';
}

function buildGrpcArticle() {
  return `
<div class="art-reader-header">
  <span class="art-reader-tag">// Technical Deep Dive · June 2025</span>
  <h1 class="art-reader-title">Building Microservice Communication with gRPC in .NET 8</h1>
  <p class="art-reader-subtitle">OrderService ↔ UserService</p>
  <div class="art-reader-meta">
    <span class="art-meta-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      8 min read
    </span>
    <span class="art-meta-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      June 2025
    </span>
    <span class="art-meta-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      Written from real project experience
    </span>
  </div>
  <div class="art-reader-tags">
    <span class="art-reader-tag-item">.NET 8</span>
    <span class="art-reader-tag-item">gRPC</span>
    <span class="art-reader-tag-item">Protocol Buffers</span>
    <span class="art-reader-tag-item">HTTP/2</span>
    <span class="art-reader-tag-item">Microservices</span>
    <span class="art-reader-tag-item">C#</span>
    <span class="art-reader-tag-item">ASP.NET Core</span>
  </div>
</div>

<div class="art-content">

  <p class="art-lead">In modern microservice architectures, services need to communicate efficiently, reliably, and with minimal network overhead. While REST is the most common choice, it's not always the fastest solution for internal service-to-service traffic. I recently implemented gRPC communication between two ASP.NET Core 8 services — and here's everything I learned.</p>

  <h2 class="art-h2">Why gRPC Instead of REST?</h2>
  <p>Most developers start with REST because it's simple and universally understood. A typical REST call works like this: Service A sends an HTTP request with a JSON body, Service B parses it and sends JSON back. Simple — but not free. JSON is text-based, which means every message must be serialized and deserialized, adding overhead that compounds under load.</p>
  <p>gRPC solves this by combining four things:</p>
  <ul class="art-list">
    <li><strong>Protocol Buffers</strong> — binary serialization, smaller payloads, faster parsing</li>
    <li><strong>HTTP/2</strong> — multiplexing, header compression, persistent connections</li>
    <li><strong>Contract-first development</strong> — both sides agree on the schema before writing code</li>
    <li><strong>Auto-generated clients and server stubs</strong> — no manual DTO or endpoint wiring</li>
  </ul>

  <div class="art-table-wrap">
    <table class="art-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>REST API</th>
          <th>gRPC</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="td-feature">Protocol</td><td class="td-good">HTTP/1.1</td><td class="td-better">HTTP/2</td></tr>
        <tr><td class="td-feature">Payload format</td><td class="td-good">JSON (text)</td><td class="td-better">Protobuf (binary)</td></tr>
        <tr><td class="td-feature">Performance</td><td class="td-good">Good</td><td class="td-better">Excellent</td></tr>
        <tr><td class="td-feature">Contract</td><td class="td-good">Optional (OpenAPI)</td><td class="td-better">Required (.proto)</td></tr>
        <tr><td class="td-feature">Code generation</td><td class="td-good">Manual</td><td class="td-better">Automatic</td></tr>
        <tr><td class="td-feature">Payload size</td><td class="td-good">Larger</td><td class="td-better">Much smaller</td></tr>
        <tr><td class="td-feature">Streaming support</td><td class="td-good">Limited</td><td class="td-better">First-class</td></tr>
      </tbody>
    </table>
  </div>

  <h2 class="art-h2">Project Architecture</h2>
  <p>The solution has two independent ASP.NET Core 8 services. The browser never calls UserService directly — all traffic flows through OrderService, which acts as the gRPC client.</p>

  <div class="art-diagram-wrap">
    <div class="art-diagram-header">// solution structure</div>
    <pre class="art-diagram"><span class="d-hi">GRPC Solution</span>
<span class="d-arr">│</span>
<span class="d-arr">├──</span> <span class="d-box">OrderService</span>
<span class="d-arr">│   ├──</span> REST API (Controller)
<span class="d-arr">│   └──</span> gRPC Client
<span class="d-arr">│</span>
<span class="d-arr">└──</span> <span class="d-box">UserService</span>
    <span class="d-arr">├──</span> gRPC Server
    <span class="d-arr">└──</span> User Business Logic</pre>
  </div>

  <div class="art-diagram-wrap">
    <div class="art-diagram-header">// request flow</div>
    <pre class="art-diagram"><span class="d-box">Browser / Swagger</span>
        <span class="d-arr">│  HTTP/JSON</span>
        <span class="d-arr">▼</span>
<span class="d-hi">  OrderService (REST API)</span>
        <span class="d-arr">│  gRPC / Protobuf / HTTP/2</span>
        <span class="d-arr">▼</span>
<span class="d-hi">  UserService (gRPC Server)</span>
        <span class="d-arr">│  UserResponse (binary)</span>
        <span class="d-arr">▼</span>
<span class="d-hi">  OrderService</span>
        <span class="d-arr">│  JSON</span>
        <span class="d-arr">▼</span>
<span class="d-box">Browser</span></pre>
  </div>

  <h2 class="art-h2">Defining the Contract — The .proto File</h2>
  <p>The most important file in the entire setup. Both services must agree on the same contract — request shape, response shape, service name, and method names. This is defined once in a <code>.proto</code> file and shared between both projects.</p>
  <p>Think of it as an <code>interface</code> — but one that generates real code.</p>

  <div class="art-code-wrap">
    <div class="art-code-header">
      <div class="art-code-dots"><span></span><span></span><span></span></div>
      <span class="art-code-lang">protobuf · user.proto</span>
    </div>
    <code class="art-code"><span class="kw">syntax</span> = <span class="str">"proto3"</span>;

<span class="kw">package</span> <span class="kw2">UserRPC</span>;

<span class="cm">// The contract both services must follow</span>
<span class="kw">service</span> <span class="fn">UserProto</span> {
  rpc <span class="fn">GetUser</span>(<span class="kw2">UserRequest</span>) <span class="kw">returns</span> (<span class="kw2">UserResponse</span>);
}

<span class="kw">message</span> <span class="kw2">UserRequest</span> {
  <span class="kw2">int32</span> id = <span class="num">1</span>;
}

<span class="kw">message</span> <span class="kw2">UserResponse</span> {
  <span class="kw2">int32</span>  id    = <span class="num">1</span>;
  <span class="kw2">string</span> name  = <span class="num">2</span>;
  <span class="kw2">string</span> email = <span class="num">3</span>;
}</code>
  </div>

  <h2 class="art-h2">Code Generation Magic</h2>
  <p>One of the best things about gRPC is that you never write serialization code, DTOs, or client stubs by hand. Add the <code>.proto</code> file to your project, reference the Grpc.Tools NuGet package, and build:</p>

  <div class="art-code-wrap">
    <div class="art-code-header">
      <div class="art-code-dots"><span></span><span></span><span></span></div>
      <span class="art-code-lang">xml · .csproj</span>
    </div>
    <code class="art-code"><span class="op">&lt;</span><span class="kw">ItemGroup</span><span class="op">&gt;</span>
  <span class="op">&lt;</span><span class="kw2">Protobuf</span> <span class="fn">Include</span>=<span class="str">"Protos/user.proto"</span>
            <span class="fn">GrpcServices</span>=<span class="str">"Server"</span> <span class="op">/&gt;</span>  <span class="cm">&lt;!-- UserService --&gt;</span>

  <span class="op">&lt;</span><span class="kw2">Protobuf</span> <span class="fn">Include</span>=<span class="str">"Protos/user.proto"</span>
            <span class="fn">GrpcServices</span>=<span class="str">"Client"</span> <span class="op">/&gt;</span>  <span class="cm">&lt;!-- OrderService --&gt;</span>
<span class="op">&lt;/</span><span class="kw">ItemGroup</span><span class="op">&gt;</span></code>
  </div>

  <p>On build, the framework generates <code>UserRequest</code>, <code>UserResponse</code>, <code>UserProtoClient</code>, and <code>UserProtoBase</code> automatically. No manual DTO creation, no serialization code, no endpoint mapping.</p>

  <div class="art-callout art-callout-tip">
    <strong>Pro tip:</strong> Always rebuild after modifying a <code>.proto</code> file. The generated code lives in <code>obj/</code> and won't update until you rebuild — this caused me a confusing 20 minutes once.
  </div>

  <h2 class="art-h2">Implementing the Server (UserService)</h2>
  <p>UserService inherits from the generated base class and overrides only the method it needs to implement. Everything else — HTTP/2 handling, Protobuf deserialization, routing — is handled by the framework.</p>

  <div class="art-code-wrap">
    <div class="art-code-header">
      <div class="art-code-dots"><span></span><span></span><span></span></div>
      <span class="art-code-lang">c# · UserGrpcService.cs</span>
    </div>
    <code class="art-code"><span class="kw">public class</span> <span class="kw2">UserGrpcService</span> : <span class="fn">UserProto.UserProtoBase</span>
{
  <span class="kw">public override</span> <span class="kw2">Task</span>&lt;<span class="kw2">UserResponse</span>&gt; <span class="fn">GetUser</span>(
    <span class="kw2">UserRequest</span> request,
    <span class="kw2">ServerCallContext</span> context)
  {
    <span class="cm">// Framework handled HTTP/2, deserialization, routing.
    // We just write business logic.</span>
    <span class="kw">var</span> response = <span class="kw">new</span> <span class="kw2">UserResponse</span>
    {
      Id    = request.Id,
      Name  = <span class="str">"Anantha Kumar"</span>,
      Email = <span class="str">"paulananth1912@gmail.com"</span>
    };

    <span class="kw">return</span> <span class="kw2">Task</span>.<span class="fn">FromResult</span>(response);
  }
}</code>
  </div>

  <div class="art-code-wrap">
    <div class="art-code-header">
      <div class="art-code-dots"><span></span><span></span><span></span></div>
      <span class="art-code-lang">c# · Program.cs (UserService)</span>
    </div>
    <code class="art-code">builder.Services.<span class="fn">AddGrpc</span>();

app.<span class="fn">MapGrpcService</span>&lt;<span class="kw2">UserGrpcService</span>&gt;();</code>
  </div>

  <h2 class="art-h2">Implementing the Client (OrderService)</h2>
  <p>OrderService uses the generated client. Calling a remote service looks exactly like calling a local method — gRPC handles HTTP/2, serialization, connection management, and error propagation.</p>

  <div class="art-code-wrap">
    <div class="art-code-header">
      <div class="art-code-dots"><span></span><span></span><span></span></div>
      <span class="art-code-lang">c# · Program.cs (OrderService)</span>
    </div>
    <code class="art-code"><span class="cm">// Register the channel as singleton — reuses connections</span>
builder.Services.<span class="fn">AddSingleton</span>(serviceProvider =>
{
  <span class="kw">var</span> channel = <span class="kw2">GrpcChannel</span>.<span class="fn">ForAddress</span>(<span class="str">"https://localhost:7001"</span>);
  <span class="kw">return new</span> <span class="fn">UserProto.UserProtoClient</span>(channel);
});</code>
  </div>

  <div class="art-code-wrap">
    <div class="art-code-header">
      <div class="art-code-dots"><span></span><span></span><span></span></div>
      <span class="art-code-lang">c# · OrderController.cs</span>
    </div>
    <code class="art-code"><span class="kw">public class</span> <span class="kw2">OrderController</span> : <span class="fn">ControllerBase</span>
{
  <span class="kw">private readonly</span> <span class="kw2">UserProto.UserProtoClient</span> _grpcClient;

  <span class="kw">public</span> <span class="fn">OrderController</span>(<span class="kw2">UserProto.UserProtoClient</span> grpcClient)
    => _grpcClient = grpcClient;

  [<span class="fn">HttpGet</span>(<span class="str">"{id}"</span>)]
  <span class="kw">public async</span> <span class="kw2">Task</span>&lt;<span class="kw2">IActionResult</span>&gt; <span class="fn">GetUser</span>(<span class="kw2">int</span> id)
  {
    <span class="cm">// Feels like a local method call — gRPC handles the rest</span>
    <span class="kw">var</span> response = <span class="kw">await</span> _grpcClient.<span class="fn">GetUserAsync</span>(
      <span class="kw">new</span> <span class="kw2">UserRequest</span> { Id = id });

    <span class="kw">return</span> <span class="fn">Ok</span>(response);
  }
}</code>
  </div>

  <h2 class="art-h2">Why GrpcChannel Must Be a Singleton</h2>
  <p>This one bit me early. I was creating a new <code>GrpcChannel</code> per request — which meant opening and closing TCP connections constantly. A channel manages TCP connections, HTTP/2 streams, and network resources. Creating one per request is expensive.</p>

  <div class="art-callout art-callout-warn">
    <strong>Don't do this:</strong> Creating a new GrpcChannel inside a controller action for every request is a resource leak that increases latency and memory usage under load.
  </div>

  <p>The correct pattern — register once as a singleton, inject everywhere it's needed:</p>

  <div class="art-callout art-callout-success">
    <strong>Singleton benefits:</strong> reuses existing TCP connections · shares HTTP/2 streams · lower memory footprint · faster subsequent calls · production-ready by default
  </div>

  <h2 class="art-h2">How HTTP/2 Multiplexing Helps</h2>
  <p>HTTP/1.1 sends one request per connection (or a small pool). Under load this means connection starvation — requests queue waiting for a free connection.</p>
  <p>HTTP/2 multiplexes multiple requests over a single connection simultaneously. A single channel between OrderService and UserService can handle dozens of concurrent RPC calls without creating new TCP connections:</p>

  <div class="art-diagram-wrap">
    <div class="art-diagram-header">// HTTP/2 multiplexing</div>
    <pre class="art-diagram"><span class="d-hi">Single TCP Connection</span>
    <span class="d-arr">│</span>
    <span class="d-arr">├──</span> <span class="d-box">Stream 1</span>: GetUser(id=1)   → responds immediately
    <span class="d-arr">├──</span> <span class="d-box">Stream 2</span>: GetUser(id=2)   → responds immediately
    <span class="d-arr">├──</span> <span class="d-box">Stream 3</span>: GetUser(id=3)   → responds immediately
    <span class="d-arr">└──</span> <span class="d-box">Stream 4</span>: GetUser(id=4)   → responds immediately

<span class="cm">No queuing. No connection overhead. All concurrent.</span></pre>
  </div>

  <h2 class="art-h2">Complete Request Lifecycle</h2>
  <p>Here's every step that happens when a browser hits <code>GET /User/1</code>:</p>

  <ol class="art-step-list">
    <li><strong>Browser</strong> sends <code>GET /User/1</code> over HTTP/1.1 with JSON</li>
    <li><strong>OrderController</strong> receives the REST request</li>
    <li>Controller calls <strong>GrpcClientService</strong> (injected singleton)</li>
    <li>gRPC client creates a <strong>UserRequest</strong> Protobuf message</li>
    <li>Request is <strong>serialized to binary</strong> (Protobuf — not JSON)</li>
    <li>Binary payload sent to UserService over <strong>HTTP/2</strong></li>
    <li>UserService <strong>receives and deserializes</strong> the Protobuf bytes</li>
    <li><strong>GetUser()</strong> executes — pure business logic, no networking concerns</li>
    <li><strong>UserResponse</strong> Protobuf message is created</li>
    <li>Response <strong>serialized to binary</strong> and returned over the same HTTP/2 stream</li>
    <li>OrderService <strong>deserializes</strong> the response automatically</li>
    <li>Controller returns JSON to the <strong>browser</strong></li>
  </ol>

  <div class="art-callout art-callout-tip">
    Steps 4–11 are completely transparent. From the controller's perspective, it called a local async method and got a typed response back.
  </div>

  <h2 class="art-h2">Challenges I Hit</h2>

  <div class="art-challenge">
    <div class="art-challenge-title">Route Not Found / StatusCode = Unimplemented</div>
    <p><span class="label">Root cause</span>Package names differed between the two <code>.proto</code> files. OrderService had <code>package UserRPC;</code> and UserService had a different package name. gRPC uses the package + service name to route calls — if they don't match exactly, you get <code>Unimplemented</code>.</p>
    <p><span class="label">Fix</span>Keep the <code>package</code>, <code>service</code> name, and C# namespace identical in both projects. Copy the <code>.proto</code> file, don't rewrite it.</p>
  </div>

  <div class="art-challenge">
    <div class="art-challenge-title">Generated Classes Missing After Editing Proto</div>
    <p><span class="label">Root cause</span>Modified <code>user.proto</code>, ran the app — old generated code was still active. The generated files live in <code>obj/</code> and only update on rebuild.</p>
    <p><span class="label">Fix</span>Always do a full rebuild after editing any <code>.proto</code> file. I added this to muscle memory.</p>
  </div>

  <div class="art-challenge">
    <div class="art-challenge-title">HTTP/2 TLS Errors in Development</div>
    <p><span class="label">Root cause</span>gRPC over HTTP/2 requires TLS by default. Without proper Kestrel config or dev certs trusted, you get connection errors immediately.</p>
    <p><span class="label">Fix</span>Either configure Kestrel for HTTP/2 explicitly in <code>appsettings.json</code>, or use <code>AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true)</code> for local dev only.</p>
  </div>

  <div class="art-divider"></div>

  <h2 class="art-h2">What This Taught Me</h2>
  <p>gRPC is more than a faster HTTP call — it's a different approach to service design. The contract-first model forces you to think about your API surface explicitly before writing any code. The auto-generated clients eliminate an entire category of bugs that come from manually maintaining DTOs on both sides of a service boundary.</p>
  <p>For anything internal — where you control both ends of the wire — gRPC is genuinely the better tool. For external APIs where developer experience and browser compatibility matter, REST remains the right choice. Use both where each makes sense.</p>

  <div class="art-divider"></div>

  <h2 class="art-h2">Tech Stack</h2>
  <div class="art-tech-grid">
    <span class="art-tech-item">ASP.NET Core 8</span>
    <span class="art-tech-item">gRPC</span>
    <span class="art-tech-item">Protocol Buffers (Proto3)</span>
    <span class="art-tech-item">HTTP/2</span>
    <span class="art-tech-item">Dependency Injection</span>
    <span class="art-tech-item">Swagger</span>
    <span class="art-tech-item">C#</span>
    <span class="art-tech-item">Microservices Architecture</span>
  </div>

</div>`;
}
