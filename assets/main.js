(function () {
  var body = document.body;

  /* ---------- language ---------- */
  var langBtn = document.getElementById('langBtn');
  var TITLES = {
    zh: '倪晓芬 Xiaofen Ni · 企业合规 / 出口管制 / 法律科技',
    en: 'Xiaofen Ni · Compliance / Export Control / Legal Tech'
  };

  function setLang(lang) {
    body.classList.toggle('lang-en', lang === 'en');
    body.classList.toggle('lang-zh', lang !== 'en');
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    langBtn.textContent = lang === 'en' ? '中文' : 'EN';
    langBtn.setAttribute('aria-label', 'switch language');
    document.title = TITLES[lang] || TITLES.zh;
    try { localStorage.setItem('nx-lang', lang); } catch (e) {}
  }

  var savedLang = 'zh';
  try { savedLang = localStorage.getItem('nx-lang') || 'zh'; } catch (e) {}
  setLang(savedLang);

  langBtn.addEventListener('click', function () {
    setLang(body.classList.contains('lang-en') ? 'zh' : 'en');
  });

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById('themeBtn');

  function setTheme(t) {
    body.classList.toggle('dark', t === 'dark');
    themeBtn.textContent = t === 'dark' ? '☀' : '◐';
    try { localStorage.setItem('nx-theme-v2', t); } catch (e) {}
  }

  var savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('nx-theme-v2') || 'dark'; } catch (e) {}
  setTheme(savedTheme);

  themeBtn.addEventListener('click', function () {
    setTheme(body.classList.contains('dark') ? 'light' : 'dark');
  });

  /* ---------- nav shadow on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.section, .footer');
  var STAGGER = '.about-grid, .cards-2, .timeline, .projects, .stats, .chips';
  function staggerIn(c) {
    if (c.classList.contains('in')) return;
    var kids = c.children;
    for (var i = 0; i < kids.length; i++) {
      kids[i].style.transitionDelay = (0.1 + i * 0.08) + 's';
    }
    c.classList.add('in');
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          var groups = e.target.querySelectorAll(STAGGER);
          for (var g = 0; g < groups.length; g++) { staggerIn(groups[g]); }
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
    document.querySelectorAll(STAGGER).forEach(function (el) { el.classList.add('in'); });
  }
})();
