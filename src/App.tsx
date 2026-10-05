import { Component, JSX } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const App: Component<{ children?: JSX.Element }> = (props) => {
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <div class="site">
      <header class="site-header">
        <div class="container header-inner">
          <A href="/" class="brand">Calvin Cho</A>
          <nav class="site-nav">
            <A href="/" class="nav-link" classList={{ active: isActive("/") }}>Home</A>
            <A href="/cv" class="nav-link" classList={{ active: isActive("/cv") }}>CV</A>
          </nav>
        </div>
      </header>

      <main class="container main">{props.children}</main>

      <footer class="site-footer">
        <div class="container footer-inner">
          <span class="footer-note">© {new Date().getFullYear()} Calvin Cho</span>
          <div class="footer-links">
            <a href="https://github.com/CalvinCho9" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/calvinhlcho/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:calvincho23@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
