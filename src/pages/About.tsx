import { Component, onMount } from "solid-js";

const About: Component = () => {
  onMount(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  return (
    <div class="page">

      {/* ABOUT */}
      <section class="section">
        <h2 class="section-heading">About</h2>
        <p class="about-text">
          I am an undergraduate researcher at Duke University studying Biology and
          Computer Science, with a focus on the intersection of neuroscience, AI, and
          health systems. My work spans automated imaging pipelines, machine learning
          for multi-omics data, health policy analysis, and pharmaceutical research,
          with the goal of transforming complex biological data into actionable clinical
          insights.
        </p>
      </section>

      {/* EDUCATION */}
      <section class="section">
        <h2 class="section-heading">Education</h2>
        <div class="card">
          <div class="card-logo-row">
            <img src="/logos/duke.png" alt="Duke University" class="card-logo" />
            <div class="card-header">
              <div class="card-title-group">
                <span class="card-org">Duke University</span>
                <span class="card-date">2022 – 2026</span>
              </div>
              <p class="card-role">Bachelor of Arts in Biology and Computer Science</p>
              <ul class="card-bullets">
                <li>
                  <strong>Relevant Coursework:</strong> Machine Learning, Data Structures &amp;
                  Algorithms, Computational Neuroscience, Biostatistics, Cell Biology, Genetics,
                  Linear Algebra, Probability &amp; Statistics
                </li>
                <li>
                  <strong>Honors:</strong> Dean's List; Reagan Institute Civic Leaders Fellow;
                  Health Policy Case Competition Finalist (Duke, Tulane)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section class="section">
        <h2 class="section-heading">Research Experience</h2>

        <div class="card">
          <div class="card-logo-row">
            <img src="/logos/genelab.jpg" alt="NASA GeneLab" class="card-logo" />
            <div class="card-header">
              <div class="card-title-group">
                <span class="card-org">National Aeronautics and Space Administration (NASA)</span>
                <span class="card-date">Aug 2025 – Present</span>
              </div>
              <p class="card-role">AI/ML Analysis Working Group Member, GeneLab</p>
            </div>
          </div>
          <ul class="card-bullets">
            <li>Developing ML models to analyze &gt;1M single-cell perturb-seq profiles and integrate multi-omics data for astronaut health applications.</li>
            <li>Designing predictive frameworks to classify thousands of genetic perturbations and inform countermeasure design for long-duration space missions.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-logo-row">
            <img src="/logos/DukeSOM.png" alt="Duke School of Medicine" class="card-logo" />
            <div class="card-header">
              <div class="card-title-group">
                <span class="card-org">Duke University School of Medicine, Dept. of Neurology</span>
                <span class="card-date">Sep 2022 – Present</span>
              </div>
              <p class="card-role">Undergraduate Research Assistant</p>
              <p class="card-advisor">Advisors: Carlene Moore, PhD; Malak Fouani, PhD</p>
            </div>
          </div>
          <ul class="card-bullets">
            <li>Developed automated imaging pipeline integrating Cellpose segmentation, Z-projections, and channel alignment — reducing analysis time from 8 minutes to 6 seconds per image (&gt;99% efficiency gain).</li>
            <li>Analyzed 5,000+ images from immunocytochemistry and calcium imaging experiments to investigate TRPV4 ion channels and P2Y receptors in migraines/headaches.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-logo-row">
            <img src="/logos/ucsf.png" alt="UCSF" class="card-logo" />
            <div class="card-header">
              <div class="card-title-group">
                <span class="card-org">UCSF Innovation Ventures</span>
                <span class="card-date">Jun – Aug 2025</span>
              </div>
              <p class="card-role">Summer Catalyst Intern</p>
              <p class="card-advisor">Advisors: Julian Motzkin, MD, PhD; Prasad Shirvalkar, MD, PhD</p>
            </div>
          </div>
          <ul class="card-bullets">
            <li>Designed a 45-field diagnostic evaluation framework to benchmark clinical performance, regulatory readiness, and commercialization potential.</li>
            <li>Conducted comparative analysis of 20+ competitor solutions across 9 regulatory pathways, identifying gaps in clinical utility and market positioning.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-logo-row">
            <img src="/logos/doj.png" alt="Department of Justice" class="card-logo" />
            <div class="card-header">
              <div class="card-title-group">
                <span class="card-org">U.S. Department of Justice, Bureau of Justice Statistics</span>
                <span class="card-date">Aug – Oct 2024</span>
              </div>
              <p class="card-role">Student Expo Program Researcher / Presenter</p>
              <p class="card-advisor">Advisors: Matt Hickman, PhD; Matt Durose, MS</p>
            </div>
          </div>
          <ul class="card-bullets">
            <li>Analyzed the Census of Publicly Funded Forensic Crime Laboratories, 2020 dataset (538 variables across federal, state, county, and municipal labs) using R.</li>
            <li>Identified disparities in competency results: federal labs averaged 93.9% vs. lower ratings at state, county, and municipal levels.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-logo-row">
            <img src="/logos/regeneron.png" alt="Regeneron" class="card-logo" />
            <div class="card-header">
              <div class="card-title-group">
                <span class="card-org">Regeneron Pharmaceuticals, Cardiovascular Diseases Therapeutics</span>
                <span class="card-date">May – Aug 2024</span>
              </div>
              <p class="card-role">Summer Research Intern</p>
              <p class="card-advisor">Advisor: Feng Luo</p>
            </div>
          </div>
          <ul class="card-bullets">
            <li>Conducted 8 experiments (ELISA, MSD, Gyroslab) assessing edema side effects of tPA treatment for ischemic stroke and testing anti-FXII antibodies for therapy use.</li>
            <li>Created 50-slide presentation on potential utilization of Regeneron antibodies as treatment for tPA side effects.</li>
          </ul>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section class="section">
        <h2 class="section-heading">Publications</h2>

        <div class="pub">
          <span class="pub-badge badge-published">Published</span>
          <p class="pub-title">
            <a href="https://www.mdpi.com/1422-0067/27/6/2865" target="_blank" rel="noopener noreferrer">
              The TRPV4-Mast Cell Axis: Implications for Neurogenic Inflammation and Chronic Disease
            </a>
          </p>
          <p class="pub-authors">Fouani M, Kumari S, Charles A, Wickware C, Moore A, <strong>Cho C</strong>, Moore C.</p>
          <p class="pub-venue">International Journal of Molecular Science, January 2026</p>
        </div>

        <div class="pub">
          <span class="pub-badge badge-submitted">Submitted</span>
          <p class="pub-title">Biomarker Study in Children and Adolescents with New Daily Persistent Headache (NDPH)</p>
          <p class="pub-authors">Werner K, Wickware C, Moore AA, <strong>Cho C</strong>, Moore D, Collins T, Moore C.</p>
          <p class="pub-venue">Submitted to Cephalalgia, December 2025</p>
        </div>

        <div class="pub">
          <span class="pub-badge badge-prep">In Preparation</span>
          <p class="pub-title">Anti-CGRP neutralizing antibody for modulation of neurogenic inflammation in trigeminal and glossopharyngeal pain associated with small fiber neuropathy/fibromyalgia, a phase 1B clinical study</p>
          <p class="pub-authors">Sengupta S, Rozen S, <strong>Cho C</strong>, Bihlmeyer N, Meyers R, Charles A, Fouani M, Liedtke W, Moore C.</p>
          <p class="pub-venue">In preparation, 2025</p>
        </div>

        <div class="pub">
          <span class="pub-badge badge-prep">In Preparation</span>
          <p class="pub-title">Cell Degranulation Study</p>
          <p class="pub-authors">In preparation</p>
        </div>
      </section>

      {/* PRESENTATIONS */}
      <section class="section">
        <h2 class="section-heading">Scientific Presentations</h2>
        <div class="pres-item">
          <span class="pres-text">Poster Presentation — Duke Department of Neurology TBS/DCEC Research Symposium</span>
          <span class="pres-year">2025</span>
        </div>
        <div class="pres-item">
          <span class="pres-text">Poster Presentation — R Foundation useR! Conference, Durham, NC</span>
          <span class="pres-year">2025</span>
        </div>
        <div class="pres-item">
          <span class="pres-text">Poster Presentation — Duke Annual Undergraduate Research Symposium</span>
          <span class="pres-year">2024</span>
        </div>
      </section>

      {/* HONORS */}
      <section class="section">
        <h2 class="section-heading">Honors &amp; Awards</h2>
        <div class="honor-item">
          <span class="honor-text">Reagan Institute Civic Leaders Fellowship — Ronald Reagan Presidential Foundation &amp; Institute</span>
          <span class="honor-year">2025</span>
        </div>
        <div class="honor-item">
          <span class="honor-text">Journal Scholars Exchange — American Statistical Association (ASA) &amp; AAPOR</span>
          <span class="honor-year">2024</span>
        </div>
        <div class="honor-item">
          <span class="honor-text">Health Policy Case Competition Finalist (top 3 / 40) — Duke University</span>
          <span class="honor-year">2023 &amp; 2024</span>
        </div>
        <div class="honor-item">
          <span class="honor-text">Health Policy Case Competition Finalist (top 3 / 88) — Tulane University</span>
          <span class="honor-year">2023</span>
        </div>
      </section>

      {/* CONTACT */}
      <section class="section">
        <h2 class="section-heading">Contact</h2>
        <div class="contact-block">
          <a href="mailto:calvincho23@gmail.com">calvincho23@gmail.com</a>
          <span class="contact-sep">·</span>
          <span>714-308-6247</span>
          <span class="contact-sep">·</span>
          <a href="https://github.com/CalvinCho9" target="_blank" rel="noopener noreferrer">github.com/CalvinCho9</a>
        </div>
      </section>
    </div>
  );
};

export default About;
