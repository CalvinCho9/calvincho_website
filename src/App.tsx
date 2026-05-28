import { Component, JSX, For, Show, createSignal, onMount } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const CLOUD_WORDS = [
  { w: "neuroscience",    x: 7,   y: 12,  s: 1.10, r: -12, o: 0.09 },
  { w: "biology",         x: 74,  y: 7,   s: 0.90, r:   8, o: 0.10 },
  { w: "Duke",            x: 47,  y: 92,  s: 1.30, r:  -5, o: 0.11 },
  { w: "Durham",          x: 84,  y: 28,  s: 0.90, r:  15, o: 0.09 },
  { w: "California",      x: 4,   y: 57,  s: 1.00, r:  -8, o: 0.10 },
  { w: "Python",          x: 88,  y: 68,  s: 0.90, r:  10, o: 0.09 },
  { w: "imaging",         x: 32,  y: 82,  s: 1.00, r: -18, o: 0.10 },
  { w: "genomics",        x: 61,  y: 18,  s: 1.10, r:   5, o: 0.09 },
  { w: "health",          x: 19,  y: 42,  s: 0.80, r:  12, o: 0.11 },
  { w: "research",        x: 76,  y: 55,  s: 1.20, r: -10, o: 0.09 },
  { w: "AI",              x: 52,  y: 48,  s: 1.70, r:   7, o: 0.10 },
  { w: "medicine",        x: 11,  y: 78,  s: 0.90, r: -15, o: 0.09 },
  { w: "data",            x: 90,  y: 14,  s: 1.10, r:  20, o: 0.10 },
  { w: "statistics",      x: 38,  y: 9,   s: 0.85, r:  -7, o: 0.11 },
  { w: "cells",           x: 66,  y: 86,  s: 0.80, r:  14, o: 0.09 },
  { w: "proteins",        x: 21,  y: 93,  s: 0.85, r: -10, o: 0.10 },
  { w: "NASA",            x: 92,  y: 44,  s: 0.90, r:   8, o: 0.09 },
  { w: "clinical",        x: 42,  y: 32,  s: 0.90, r: -14, o: 0.10 },
  { w: "headache",        x: 57,  y: 76,  s: 0.85, r:  12, o: 0.09 },
  { w: "UCSF",            x: 16,  y: 63,  s: 0.80, r: -18, o: 0.10 },
  { w: "Regeneron",       x: 79,  y: 80,  s: 0.85, r:   5, o: 0.09 },
  { w: "뇌과학",           x: 6,   y: 32,  s: 1.00, r: -10, o: 0.09 },
  { w: "연구",             x: 83,  y: 22,  s: 0.90, r:  15, o: 0.10 },
  { w: "과학",             x: 49,  y: 16,  s: 0.85, r:  -8, o: 0.09 },
  { w: "건강",             x: 71,  y: 93,  s: 0.80, r:  10, o: 0.10 },
  { w: "생물학",           x: 27,  y: 19,  s: 0.90, r:  -5, o: 0.09 },
  { w: "machine learning", x: 9,  y: 88,  s: 0.75, r:   8, o: 0.09 },
  { w: "ion channels",    x: 69,  y: 38,  s: 0.75, r: -16, o: 0.10 },
  { w: "astrocytes",      x: 37,  y: 56,  s: 0.85, r:  12, o: 0.09 },
  { w: "bioinformatics",  x: 87,  y: 52,  s: 0.80, r:  -6, o: 0.10 },
  { w: "MATLAB",          x: 52,  y: 63,  s: 0.90, r:  18, o: 0.09 },
  { w: "space biology",   x: 23,  y: 70,  s: 0.80, r: -20, o: 0.10 },
  { w: "TypeScript",      x: 79,  y: 5,   s: 0.85, r:   7, o: 0.09 },
  { w: "neurology",       x: 14,  y: 8,   s: 1.00, r: -10, o: 0.10 },
  { w: "multi-omics",     x: 61,  y: 50,  s: 0.85, r:  14, o: 0.09 },
  { w: "Orange County",   x: 42,  y: 73,  s: 0.80, r:  -7, o: 0.10 },
  { w: "미국",             x: 94,  y: 82,  s: 0.85, r: -12, o: 0.09 },
  { w: "공부",             x: 3,   y: 20,  s: 0.75, r:  13, o: 0.09 },
] as const;

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

const App: Component<{ children?: JSX.Element }> = (props) => {
  const location = useLocation();
  const [dark, setDark] = createSignal(false);

  onMount(() => {
    try {
      setDark(localStorage.getItem("theme") === "dark");
    } catch (_) {}
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
      <div class="word-cloud-bg" aria-hidden="true">
        <For each={CLOUD_WORDS}>
          {(item) => (
            <span
              class="cloud-word"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                "font-size": `${item.s}rem`,
                transform: `rotate(${item.r}deg)`,
                opacity: item.o,
              }}
            >
              {item.w}
            </span>
          )}
        </For>
      </div>

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
            <A href="/about" class="nav-link" classList={{ active: isActive("/about") }}>About</A>
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
