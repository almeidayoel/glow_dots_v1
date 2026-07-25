(function () {
  const stage = document.getElementById('stage');
  const panel = document.getElementById('info-panel');
  const panelToggle = document.getElementById('panel-toggle');
  const panelReveal = document.getElementById('panel-reveal');
  const resetBtn = document.getElementById('reset-btn');
  const schemeButtons = document.querySelectorAll('.scheme-btn');
  const baseButtons = document.querySelectorAll('.base-btn');
  let grid = null;

  function setColorScheme(scheme) {
    document.body.setAttribute('data-scheme', scheme);
    localStorage.setItem('colorScheme', scheme);
    schemeButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.scheme === scheme);
    });
  }

  function setBaseColor(base) {
    document.body.setAttribute('data-base', base);
    localStorage.setItem('baseColor', base);
    baseButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.base === base);
    });
  }

  function resetToDefaults() {
    setColorScheme('cyan');
    setBaseColor('white');
  }

  function initColors() {
    const savedScheme = localStorage.getItem('colorScheme') || 'cyan';
    const savedBase = localStorage.getItem('baseColor') || 'white';
    setColorScheme(savedScheme);
    setBaseColor(savedBase);
  }

  function togglePanel(force) {
    const shouldCollapse = typeof force === 'boolean' ? force : !panel.classList.contains('is-collapsed');
    panel.classList.toggle('is-collapsed', shouldCollapse);
    panelToggle.setAttribute('aria-expanded', String(!shouldCollapse));
    panelReveal.style.display = shouldCollapse ? 'inline-grid' : 'none';
  }

  function buildGrid() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const columns = Math.max(14, Math.floor(width / 24));
    const rows = Math.max(10, Math.floor(height / 24));
    const size = Math.max(11, Math.min(18, Math.floor(Math.min(width, height) / 70)));

    const gridEl = document.createElement('div');
    gridEl.className = 'dot-grid';
    gridEl.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridEl.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dot';
        dot.dataset.row = String(row);
        dot.dataset.col = String(col);
        dot.style.setProperty('--size', `${size}px`);
        dot.addEventListener('mouseenter', () => setActive(dot));
        dot.addEventListener('focus', () => setActive(dot));
        gridEl.appendChild(dot);
      }
    }

    stage.innerHTML = '';
    stage.appendChild(gridEl);
    grid = gridEl;
  }

  function setActive(dot) {
    clearActive();
    dot.classList.add('is-active');
  }

  function clearActive() {
    if (!grid) return;
    grid.querySelectorAll('.dot.is-active').forEach((dot) => dot.classList.remove('is-active'));
  }

  function handlePointerMove(event) {
    const rect = stage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const columns = Math.max(14, Math.floor(window.innerWidth / 24));
    const rows = Math.max(10, Math.floor(window.innerHeight / 24));

    const col = Math.min(columns - 1, Math.max(0, Math.floor((x / rect.width) * columns)));
    const row = Math.min(rows - 1, Math.max(0, Math.floor((y / rect.height) * rows)));

    const dot = grid?.querySelector(`.dot[data-row="${row}"][data-col="${col}"]`);
    if (dot) {
      setActive(dot);
    }
  }

  buildGrid();
  togglePanel(false);
  initColors();

  panelToggle.addEventListener('click', () => togglePanel());
  panelReveal.addEventListener('click', () => togglePanel(false));
  resetBtn.addEventListener('click', resetToDefaults);
  
  schemeButtons.forEach((btn) => {
    btn.addEventListener('click', () => setColorScheme(btn.dataset.scheme));
  });

  baseButtons.forEach((btn) => {
    btn.addEventListener('click', () => setBaseColor(btn.dataset.base));
  });

  window.addEventListener('resize', () => {
    clearActive();
    buildGrid();
  });

  stage.addEventListener('pointermove', handlePointerMove);
  stage.addEventListener('pointerleave', clearActive);
  stage.addEventListener('blur', clearActive, true);
})();
