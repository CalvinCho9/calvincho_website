import { Component, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

// Unlisted short links. public/<slug>/index.html handles the exact path as a
// static redirect; this catches variants (casing, trailing paths) that fall
// through GitHub Pages' 404 into the SPA.
const SHORT_LINKS: Record<string, string> = {
  "2lazy4bsi": "https://calvincho9.github.io/2lazy4bsi/",
};

const NotFound: Component = () => {
  const location = useLocation();
  const slug = location.pathname.split("/").filter(Boolean)[0]?.toLowerCase() ?? "";
  const target = SHORT_LINKS[slug];

  if (target) window.location.replace(target);

  return (
    <div class="page notfound">
      <Show
        when={!target}
        fallback={<p class="notfound-msg">Redirecting&hellip;</p>}
      >
        <p class="eyebrow">err 404</p>
        <h1 class="notfound-title">No signal at this path.</h1>
        <p class="notfound-msg">
          <code>{location.pathname}</code> doesn't exist. It may have moved.
        </p>
        <A href="/" class="btn">&larr; Back home</A>
      </Show>
    </div>
  );
};

export default NotFound;
