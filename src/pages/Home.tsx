import { Component, For, Show, onMount } from "solid-js";
import { A } from "@solidjs/router";

type Project = {
  title: string;
  subtitle?: string;
  tags: string[];
  desc: string;
  links: { label: string; href: string }[];
  media: { type: "img"; src: string; alt: string } | { type: "video"; src: string };
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
    links: [
      { label: "Open tool", href: "https://calvincho9.github.io/2lazy4bsi/" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/2lazy4bsi" },
    ],
    media: {
      type: "img",
      src: "/projects/2lazy4bsi.jpg",
      alt: "2lazy4BSI workflow picker for Frederick and Endoscopy specimen data",
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
    links: [
      { label: "Live site", href: "https://vouchhealth.org" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/vouchhealth" },
    ],
    media: {
      type: "img",
      src: "/projects/vouchhealth.jpg",
      alt: "Vouch Health map of North Carolina hospitals with a searchable list",
    },
  },
  {
    title: "NeuroViz",
    subtitle: "EEG in 3D",
    tags: ["Neuroscience", "Visualization"],
    desc:
      "A real-time 3D mapping tool for 64-channel EEG data, allowing for dynamic visualization of " +
      "brain activity across different functional regions.",
    links: [
      { label: "Live demo", href: "https://calvincho9.github.io/neuroviz/" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/neuroviz" },
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/sjrI1Nkojn4?autoplay=1&mute=1&loop=1&playlist=sjrI1Nkojn4&controls=0&modestbranding=1&playsinline=1",
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
    links: [
      { label: "Live demo", href: "https://calvincho.shinyapps.io/gcamp-analysis-in-r/" },
      { label: "GitHub", href: "https://github.com/CalvinCho9/gcamp-analysis-in-R" },
    ],
    media: {
      type: "img",
      src: "/gcamp.png",
      alt: "GCaMP Fluorescence Analyzer upload and analysis controls",
    },
  },
];

const Home: Component = () => {
  onMount(() => window.scrollTo(0, 0));

  return (
    <div class="page">
      <section class="intro">
        <img src="/profile.jpg" alt="Calvin Cho" class="intro-photo" />
        <div>
          <p>
            I'm an undergraduate at Duke University studying Biology and Computer Science
            (Class of 2026), broadly interested in the intersection of neuroscience, AI, and
            health systems.
          </p>
          <p>
            My research has spanned automated fluorescence imaging pipelines, machine learning
            for multi-omics analysis, pharmaceutical R&amp;D, and health policy. I am currently a
            working group member of NASA GeneLab's AI/ML Analysis group and a research assistant
            in Duke's Department of Neurology.
          </p>
          <p>
            I'm interested in building tools that close the gap between biological complexity
            and clinical decision-making. My <A href="/cv">CV</A> has the details.
          </p>
        </div>
      </section>

      <section>
        <h2 class="section-title">Projects</h2>
        <For each={projects}>
          {(p) => (
            <article class="project">
              <div class="project-media">
                {p.media.type === "video" ? (
                  <div class="video">
                    <iframe
                      src={p.media.src}
                      title={`${p.title} demo`}
                      allow="autoplay; encrypted-media"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <img src={p.media.src} alt={p.media.alt} loading="lazy" />
                )}
              </div>
              <div>
                <h3 class="project-title">
                  {p.title}
                  <Show when={p.subtitle}>
                    <span class="project-subtitle"> — {p.subtitle}</span>
                  </Show>
                </h3>
                <p class="project-tags">{p.tags.join(", ")}</p>
                <p>{p.desc}</p>
                <p class="project-links">
                  <For each={p.links}>
                    {(l, i) => (
                      <>
                        <Show when={i() > 0}> · </Show>
                        <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                      </>
                    )}
                  </For>
                </p>
              </div>
            </article>
          )}
        </For>
      </section>
    </div>
  );
};

export default Home;
