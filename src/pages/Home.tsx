import { Component, For, Show, onMount } from "solid-js";
import { A } from "@solidjs/router";

type Link = { label: string; href: string; kind: "github" | "external" };

type Project = {
  title: string;
  subtitle?: string;
  tags: string[];
  desc: string;
  spec: [string, string][];
  links: Link[];
  media:
    | { type: "img"; src: string; alt: string; caption: string }
    | { type: "video"; src: string; caption: string };
};

const projects: Project[] = [
  {
    title: "2lazy4BSI",
    subtitle: "BSI data preparation",
    tags: ["TypeScript", "React", "SheetJS", "Data engineering"],
    desc:
      "Biospecimen datasets arrive as sprawling spreadsheets: merged headers, section rows, extra " +
      "tabs, and columns that move around between files. 2lazy4BSI inventories them automatically. " +
      "It matches fields by meaning rather than position, strips identifying columns the moment a " +
      "file is read, maps anatomical sites to a controlled vocabulary, and writes a clean CSV ready " +
      "to import into BSI. Anything ambiguous is flagged by source row instead of guessed.",
    spec: [
      ["in", ".xlsx · .xls · .csv"],
      ["out", "BSI-ready .csv"],
      ["server", "none, runs in-browser"],
    ],
    links: [
      { label: "Open tool", href: "https://calvincho9.github.io/2lazy4bsi/", kind: "external" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/2lazy4bsi", kind: "github" },
    ],
    media: {
      type: "img",
      src: "/projects/2lazy4bsi.jpg",
      alt: "2lazy4BSI workflow picker for Frederick and Endoscopy specimen data",
      caption: "Frederick manifests and endoscopy biopsies, processed locally",
    },
  },
  {
    title: "Vouch Health",
    subtitle: "NC hospital finder",
    tags: ["Full-stack", "Healthcare", "Maps"],
    desc:
      "A web app that helps patients find hospitals across North Carolina by ZIP code and insurer, " +
      "mapping 126 facilities and flagging Critical Access Hospitals that serve rural communities. " +
      "Built to make hospital access and coverage information legible to patients navigating the system.",
    spec: [
      ["facilities", "126"],
      ["search", "ZIP + insurer"],
      ["flags", "critical access"],
    ],
    links: [
      { label: "Live site", href: "https://vouchhealth.org", kind: "external" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/vouchhealth", kind: "github" },
    ],
    media: {
      type: "img",
      src: "/projects/vouchhealth.jpg",
      alt: "Vouch Health map of North Carolina hospitals with a searchable list",
      caption: "Critical Access Hospitals highlighted in amber",
    },
  },
  {
    title: "NeuroViz",
    subtitle: "EEG in 3D",
    tags: ["Neuroscience", "Visualization"],
    desc:
      "A real-time 3D mapping tool for 64-channel EEG data, allowing for dynamic visualization of " +
      "brain activity across different functional regions.",
    spec: [
      ["in", "64-ch EEG"],
      ["out", "live 3D cortex map"],
    ],
    links: [
      { label: "Live demo", href: "https://calvincho9.github.io/neuroviz/", kind: "external" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/neuroviz", kind: "github" },
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/sjrI1Nkojn4?autoplay=1&mute=1&loop=1&playlist=sjrI1Nkojn4&controls=0&modestbranding=1&playsinline=1",
      caption: "Activity propagating across functional regions",
    },
  },
  {
    title: "GCaMP Fluorescence Analyzer",
    subtitle: "R Shiny",
    tags: ["Neuroscience", "Imaging", "R"],
    desc:
      "An interactive R Shiny app for analyzing GCaMP fluorescence signals in microscopy images. " +
      "Upload a time-series image stack and the tool quantifies ΔF/F₀ (the change in " +
      "calcium-dependent fluorescence over baseline) across regions of interest, enabling " +
      "real-time visualization of neuronal activity patterns.",
    spec: [
      ["in", ".tif stack"],
      ["out", "ΔF/F₀ traces + CSV"],
    ],
    links: [
      { label: "Live demo", href: "https://calvincho.shinyapps.io/gcamp-analysis-in-r/", kind: "external" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/gcamp-analysis-in-R", kind: "github" },
    ],
    media: {
      type: "img",
      src: "/gcamp.png",
      alt: "GCaMP Fluorescence Analyzer upload and analysis controls",
      caption: "Image stack in, fluorescence traces out",
    },
  },
];

// Synthetic GCaMP-style calcium trace: fast rise, slow exponential decay,
// a little deterministic noise. Rendered once as an SVG path.
const W = 1200;
const H = 120;
const tracePath = (() => {
  const events = [
    [90, 0.55], [210, 0.9], [236, 0.5], [400, 0.35], [520, 1.0],
    [548, 0.6], [700, 0.45], [830, 0.8], [960, 0.3], [1060, 0.7],
  ];
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 3) {
    let y = 0;
    for (const [t0, amp] of events) {
      const dt = x - t0;
      if (dt > 0) y += amp * (1 - Math.exp(-dt / 4)) * Math.exp(-dt / 38);
    }
    y += 0.025 * Math.sin(x * 1.7) + 0.02 * Math.sin(x * 0.53 + 1.3);
    pts.push(`${x},${(H - 12 - y * (H - 24)).toFixed(1)}`);
  }
  return "M" + pts.join(" L");
})();

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
);

const Home: Component = () => {
  onMount(() => window.scrollTo(0, 0));

  return (
    <div class="page">
      <section class="hero">
        <div class="hero-text">
          <p class="eyebrow">Biology × Computer Science</p>
          <h1 class="hero-name">Calvin Cho</h1>
          <p class="hero-lede">
            I build tools that close the gap between <em>biological complexity</em> and{" "}
            <em>clinical decision-making</em>.
          </p>
          <p class="hero-bio">
            I'm an undergraduate at Duke University studying Biology and Computer Science
            (Class of 2026), broadly interested in the intersection of neuroscience, AI, and
            health systems.
          </p>
          <p class="hero-bio">
            My research has spanned automated fluorescence imaging pipelines, machine learning
            for multi-omics analysis, pharmaceutical R&amp;D, and health policy. I am currently a
            working group member of NASA GeneLab's AI/ML Analysis group and a research assistant
            in Duke's Department of Neurology.
          </p>
          <div class="hero-actions">
            <A href="/cv" class="btn btn-primary">View CV</A>
            <a
              href="#work"
              class="btn"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Selected work
            </a>
          </div>
        </div>

        <figure class="hero-photo">
          <div class="viewfinder">
            <img src="/profile.jpg" alt="Calvin Cho" />
          </div>
          <figcaption class="mono-caption">
            <span>img_0001.tif</span>
            <span>ex 488 nm</span>
          </figcaption>
        </figure>
      </section>

      <div class="trace" aria-hidden="true">
        <div class="trace-labels">
          <span>ΔF/F₀</span>
          <span>t →</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
          <path d={tracePath} class="trace-glow" pathLength="1" />
          <path d={tracePath} class="trace-line" pathLength="1" />
        </svg>
      </div>

      <section id="work" class="work">
        <header class="section-head">
          <span class="section-index">01</span>
          <h2 class="section-title">Selected work</h2>
          <span class="section-rule" />
        </header>

        <For each={projects}>
          {(p, i) => (
            <article class="project">
              <div class="project-body">
                <p class="project-num">{String(i() + 1).padStart(2, "0")}</p>
                <h3 class="project-title">
                  {p.title}
                  <Show when={p.subtitle}>
                    <span class="project-subtitle">{p.subtitle}</span>
                  </Show>
                </h3>
                <ul class="tags">
                  <For each={p.tags}>{(t) => <li>{t}</li>}</For>
                </ul>
                <p class="project-desc">{p.desc}</p>
                <dl class="spec">
                  <For each={p.spec}>
                    {([k, v]) => (
                      <div>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    )}
                  </For>
                </dl>
                <div class="project-links">
                  <For each={p.links}>
                    {(l) => (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" class="btn btn-sm">
                        {l.kind === "github" ? <GitHubIcon /> : <ExternalIcon />}
                        {l.label}
                      </a>
                    )}
                  </For>
                </div>
              </div>

              <figure class="project-media">
                <div class="window">
                  <div class="window-bar" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                  <div class="window-view" classList={{ video: p.media.type === "video" }}>
                    {p.media.type === "video" ? (
                      <iframe
                        src={p.media.src}
                        title={`${p.title} demo`}
                        allow="autoplay; encrypted-media"
                        loading="lazy"
                      />
                    ) : (
                      <img src={p.media.src} alt={p.media.alt} loading="lazy" />
                    )}
                  </div>
                </div>
                <figcaption class="mono-caption">
                  <span>fig. {i() + 1}</span>
                  <span>{p.media.caption}</span>
                </figcaption>
              </figure>
            </article>
          )}
        </For>
      </section>
    </div>
  );
};

export default Home;
