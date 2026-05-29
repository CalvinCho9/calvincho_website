import { Component, onMount } from "solid-js";

const Home: Component = () => {
  onMount(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  return (
    <div class="page">
      <img src="/profile.jpg" alt="Calvin Cho" class="home-photo" />

      <p class="home-bio">
        I'm an undergraduate at Duke University studying Biology and Computer
        Science (Class of 2026), broadly interested in the intersection of
        neuroscience, AI, and health systems.
      </p>
      <p class="home-bio">
        My research has spanned automated fluorescence imaging pipelines,
        machine learning for multi-omics analysis, pharmaceutical R&D, and
        health policy. I am currently a working group member of NASA GeneLab's
        AI/ML Analysis group and a research assistant in Duke's Department of
        Neurology.
      </p>
      <p class="home-bio">
        I'm interested in building tools that close the gap between biological
        complexity and clinical decision-making.
      </p>


      <section class="projects-section">
        <p class="projects-heading">Things I've Built</p>

        <div class="project-card">
          <div>
            <span class="project-tag">Neuroscience · Visualization</span>
            <h3 class="project-title">NeuroViz</h3>
            <p class="project-desc">
              A real-time 3D mapping tool for 64-channel EEG data, allowing for
              dynamic visualization of brain activity across different functional
              regions.
            </p>
            <div class="project-btns">
              <a href="https://calvincho9.github.io/neuroviz/" target="_blank" rel="noopener noreferrer" class="project-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                GitHub
              </a>
              <a href="https://calvincho9.github.io/neuroviz/" target="_blank" rel="noopener noreferrer" class="project-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
            </div>
          </div>
          <div class="project-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/sjrI1Nkojn4?autoplay=1&mute=1&loop=1&playlist=sjrI1Nkojn4&controls=0&modestbranding=1&playsinline=1"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </div>
        </div>

        <div class="project-card">
          <div>
            <span class="project-tag">Neuroscience · Imaging</span>
            <h3 class="project-title">GCaMP Fluorescence Analyzer</h3>
            <p class="project-desc">
              An interactive R Shiny app for analyzing GCaMP fluorescence signals
              in microscopy images. Upload a time-series image stack and the tool
              quantifies ΔF/F₀ — the change in calcium-dependent fluorescence over
              baseline — across regions of interest, enabling real-time
              visualization of neuronal activity patterns.
            </p>
            <div class="project-btns">
              <a href="https://calvincho.shinyapps.io/gcamp-analysis-in-r/" target="_blank" rel="noopener noreferrer" class="project-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
            </div>
          </div>
          <div class="project-img-wrap">
            <img src="/gcamp.png" alt="GCaMP Fluorescence Analyzer" class="project-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
