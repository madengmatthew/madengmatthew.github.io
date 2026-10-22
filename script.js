/* Keep navigation in step with the page; all links also work without JavaScript. */
(() => {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const links = [...document.querySelectorAll('.section-nav a')];
  const sidebar = document.querySelector('.sidebar');
  let scheduled = false;

  const setCurrent = (id) => {
    for (const link of links) {
      if (link.getAttribute('href') === `#${id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  };

  const update = () => {
    scheduled = false;
    const mobile = window.matchMedia('(max-width: 700px)').matches;
    const headerHeight = mobile && sidebar ? sidebar.offsetHeight : 0;
    document.documentElement.style.setProperty('--header-offset', `${headerHeight + 20}px`);
    const readingLine = mobile ? headerHeight + 32 : 150;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    if (current) setCurrent(current.id);
  };

  const schedule = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('hashchange', schedule);
  if (sidebar && 'ResizeObserver' in window) {
    new ResizeObserver(schedule).observe(sidebar);
  }
  for (const link of links) {
    link.addEventListener('click', () => setCurrent(link.hash.slice(1)));
  }
  update();
})();
