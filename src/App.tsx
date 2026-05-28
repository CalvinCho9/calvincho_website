import { Component, JSX, Show, createSignal, onMount } from "solid-js";
import { A, useLocation } from "@solidjs/router";

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
    try { setDark(localStorage.getItem("theme") === "dark"); } catch (_) {}
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
  );
};

export default App;
