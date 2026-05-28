import { Component, JSX, Show, createSignal, onMount, onCleanup } from "solid-js";
import { A, useLocation } from "@solidjs/router";

/* ─── Cell animation ──────────────────────── */

type Cell = {
  x: number; y: number; r: number;
  vx: number; vy: number;
  phase: number; pulseSpeed: number;
};

function makeCell(w: number, h: number): Cell {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: 10 + Math.random() * 14,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    phase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.007 + Math.random() * 0.011,
  };
}

function drawCell(ctx: CanvasRenderingContext2D, c: Cell, dark: boolean) {
  const pulse = 1 + 0.07 * Math.sin(c.phase);
  const r = c.r * pulse;

  // soft body with radial gradient
  const bodyAlpha  = dark ? 0.10 : 0.09;
  const nuclAlpha  = dark ? 0.19 : 0.17;
  const [R, G, B]  = dark ? [160, 200, 240] : [40, 70, 120];

  const grad = ctx.createRadialGradient(
    c.x - r * 0.25, c.y - r * 0.25, 0,
    c.x, c.y, r,
  );
  grad.addColorStop(0,   `rgba(${R},${G},${B},${bodyAlpha * 1.4})`);
  grad.addColorStop(0.65,`rgba(${R},${G},${B},${bodyAlpha})`);
  grad.addColorStop(1,   `rgba(${R},${G},${B},0)`);

  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  // nucleus
  ctx.beginPath();
  ctx.arc(c.x + r * 0.12, c.y - r * 0.12, r * 0.36, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${R},${G},${B},${nuclAlpha})`;
  ctx.fill();
}

function startCellAnimation(canvas: HTMLCanvasElement, isDark: () => boolean) {
  const ctx = canvas.getContext("2d")!;
  const dpr = window.devicePixelRatio || 1;
  let w = 0, h = 0, cells: Cell[] = [];

  const resize = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width  = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width  = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);
    const n = Math.min(38, Math.max(20, Math.floor((w * h) / 28000)));
    cells = Array.from({ length: n }, () => makeCell(w, h));
  };

  resize();
  window.addEventListener("resize", resize);

  let raf = 0;
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const dark = isDark();
    for (const c of cells) {
      c.phase += c.pulseSpeed;
      c.x += c.vx;
      c.y += c.vy;
      if (c.x < -c.r * 2) c.x = w + c.r;
      if (c.x > w + c.r * 2) c.x = -c.r;
      if (c.y < -c.r * 2) c.y = h + c.r;
      if (c.y > h + c.r * 2) c.y = -c.r;
      drawCell(ctx, c, dark);
    }
    raf = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
  };
}

/* ─── Icons ───────────────────────────────── */

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

/* ─── App ─────────────────────────────────── */

const App: Component<{ children?: JSX.Element }> = (props) => {
  const location = useLocation();
  const [dark, setDark] = createSignal(false);
  let canvas!: HTMLCanvasElement;

  onMount(() => {
    try { setDark(localStorage.getItem("theme") === "dark"); } catch (_) {}
    const stop = startCellAnimation(canvas, dark);
    onCleanup(stop);
  });

  const toggleDark = () => {
    const next = !dark();
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <canvas ref={canvas} class="cell-canvas" aria-hidden="true" />

      <div class="site-wrapper">
        <header class="site-header">
          <div class="header-top">
            <A href="/" class="site-name">Calvin Cho</A>
            <button class="dark-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
              <Show when={dark()} fallback={<MoonIcon />}>
                <SunIcon />
              </Show>
            </button>
          </div>
          <hr class="header-rule" />
          <nav class="site-nav">
            <A href="/" class="nav-link" classList={{ active: isActive("/") }}>Home</A>
            <span class="nav-sep">|</span>
            <A href="/cv" class="nav-link" classList={{ active: isActive("/cv") }}>CV</A>
            <span class="nav-sep">|</span>
            <A href="/blog" class="nav-link" classList={{ active: isActive("/blog") }}>Writing</A>
          </nav>
        </header>

        <main class="main">{props.children}</main>

        <footer class="site-footer">
          <hr class="footer-rule" />
          <div class="footer-links">
            <a href="https://github.com/CalvinCho9" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
            <span class="footer-sep">|</span>
            <a href="https://www.linkedin.com/in/calvinhlcho/" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a>
            <span class="footer-sep">|</span>
            <a href="mailto:calvincho23@gmail.com" class="footer-link">Email</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
