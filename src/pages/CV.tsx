import { Component, onMount } from "solid-js";

const CV: Component = () => {
  onMount(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  return (
    <div class="page cv-page">

      {/* ── Header ── */}
      <div class="cv-header">
        <h1 class="cv-name">Calvin (Hwalang) Cho</h1>
        <div class="cv-contact">
          <a href="mailto:calvincho23@gmail.com">calvincho23@gmail.com</a>
          <span class="cv-sep">·</span>
          <span>714-308-6247</span>
          <span class="cv-sep">·</span>
          <a href="https://www.linkedin.com/in/calvinhlcho/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span class="cv-sep">·</span>
          <a href="https://calvincho.com">calvincho.com</a>
        </div>
      </div>

      {/* ── Education ── */}
      <section class="section">
        <h2 class="section-heading">Education</h2>
        <div class="cv-block">
          <div class="cv-row">
            <span class="cv-institution">Duke University</span>
            <span class="cv-date">2022–2026</span>
          </div>
          <p class="cv-role">Bachelor of Arts in Biology and Computer Science</p>
          <p class="cv-detail">Activities: Student Collaborative on Health Policy, iGEM, Undergraduate Research Support Office Student Advisory Board, International Students Center Global Fellowship</p>
          <p class="cv-detail">Relevant Coursework: Probability, Machine Learning, Data Structures &amp; Algorithms, Database Systems, Computer Systems, Discrete Math</p>
        </div>
      </section>

      {/* ── Research Experience ── */}
      <section class="section">
        <h2 class="section-heading">Research Experience</h2>

        <div class="cv-block">
          <div class="cv-row">
            <span class="cv-institution">Columbia University Irving Medical Center, Dept. of Systems Biology</span>
            <span class="cv-date">May 2026–present</span>
          </div>
          <p class="cv-role">Summer Research Intern · Advisors: Raul Rabadan, PhD; Anqi Wang, PhD</p>
          <ul class="cv-bullets">
            <li>Developing computational pipelines and statistical methods for investigating HLA-I alternative splicing using TCGA RNA-seq data with controlled-access de-identified datasets</li>
          </ul>
        </div>

        <div class="cv-block">
          <div class="cv-row">
            <span class="cv-institution">NASA, GeneLab</span>
            <span class="cv-date">August 2025–present</span>
          </div>
          <p class="cv-role">AI/ML Analysis Working Group Member</p>
          <ul class="cv-bullets">
            <li>Developing ML models to analyze &gt;1M single-cell perturb-seq profiles and integrate multi-omics data for astronaut health applications</li>
            <li>Designing predictive frameworks to classify thousands of genetic perturbations and inform countermeasure design for long-duration space missions</li>
          </ul>
        </div>

        <div class="cv-block">
          <div class="cv-row">
            <span class="cv-institution">Duke University School of Medicine, Dept. of Neurology</span>
            <span class="cv-date">September 2022–May 2026</span>
          </div>
          <p class="cv-role">Undergraduate Research Assistant · Advisors: Carlene Moore, PhD; Malak Fouani, PhD</p>
          <ul class="cv-bullets">
            <li>Developed automated imaging pipeline integrating Cellpose segmentation, Z-projections, and channel alignment — reducing analysis time from 8 minutes to 6 seconds per image (&gt;99% efficiency gain)</li>
            <li>Analyzed 5,000+ images from immunocytochemistry and calcium imaging experiments investigating TRPV4 ion channels and P2Y receptors in migraines/headaches</li>
          </ul>
        </div>

        <div class="cv-block">
          <div class="cv-row">
            <span class="cv-institution">UCSF Innovation Ventures</span>
            <span class="cv-date">June 2025–August 2025</span>
          </div>
          <p class="cv-role">Summer Catalyst Intern · Advisors: Julian Motzkin, MD, PhD; Prasad Shirvalkar, MD, PhD</p>
          <ul class="cv-bullets">
            <li>Designed a 45-field diagnostic evaluation framework to benchmark clinical performance, regulatory readiness, and commercialization potential</li>
            <li>Conducted comparative analysis of 20+ competitor solutions across 9 regulatory pathways</li>
          </ul>
        </div>

        <div class="cv-block">
          <div class="cv-row">
            <span class="cv-institution">U.S. Department of Justice, Bureau of Justice Statistics</span>
            <span class="cv-date">August 2024–October 2024</span>
          </div>
          <p class="cv-role">Student Expo Program Researcher / Presenter · Advisors: Matt Hickman, PhD; Matt Durose, MS</p>
          <ul class="cv-bullets">
            <li>Analyzed the Census of Publicly Funded Forensic Crime Laboratories, 2020 dataset (538 variables) using R</li>
            <li>Identified disparities in competency results: federal labs averaged 93.9% vs. lower ratings at state/county/municipal levels</li>
          </ul>
        </div>

        <div class="cv-block">
          <div class="cv-row">
            <span class="cv-institution">Regeneron Pharmaceuticals, Cardiovascular Diseases Therapeutics</span>
            <span class="cv-date">May 2024–August 2024</span>
          </div>
          <p class="cv-role">Summer Research Intern · Advisor: Feng Luo</p>
          <ul class="cv-bullets">
            <li>Conducted 8 experiments (ELISA, MSD, Gyroslab) assessing edema side effects of tPA treatment for ischemic stroke and tested anti-FXII antibodies for therapy use</li>
            <li>Created 50-slide presentation on potential utilization of Regeneron antibodies as treatment for tPA side effects</li>
          </ul>
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section class="section">
        <h2 class="section-heading">Technical Skills</h2>
        <div class="cv-skills">
          <p class="cv-skill-row"><span class="cv-skill-label">Computational</span> Python, R, machine learning (elastic net, random forest, gradient boosting, Bayesian inference), RNA-seq analysis, single-cell genomics, multi-omics integration, time-series analysis, statistical modeling, image analysis (Cellpose, EBImage), pipeline development</p>
          <p class="cv-skill-row"><span class="cv-skill-label">Laboratory</span> ELISA, MSD, Gyroslab, immunocytochemistry, calcium imaging, cell culture, tissue dissection, GLP compliance</p>
          <p class="cv-skill-row"><span class="cv-skill-label">Tools &amp; Platforms</span> Git, HPC/cluster computing, TCGA controlled-access datasets, NASA GeneLab, R Shiny, Microsoft Office</p>
        </div>
      </section>

      {/* ── Publications ── */}
      <section class="section">
        <h2 class="section-heading">Publications</h2>

        <p class="cv-pub-label">Journal Articles</p>
        <p class="cv-pub">
          Fouani M, Kumari S, Charles A, Wickware C, Moore A, <strong>Cho C</strong>, Moore C. "The TRPV4-Mast Cell Axis: Implications for Neurogenic Inflammation and Chronic Disease." <em>International Journal of Molecular Sciences.</em> March 2026.
        </p>

        <p class="cv-pub-label">Conference Workshop Papers</p>
        <p class="cv-pub">
          <strong>Cho C.</strong> "Biological Hallucinations in Time-Series Foundation Models: A Benchmark on High-Frequency Neural Waveforms." <em>ICML 2026 Workshop on Foundation Models for Structured Data (FMSD).</em> Seoul, South Korea, 2026.
        </p>
        <p class="cv-pub">
          <strong>Cho C.</strong> "Proteomic Divergence in the Trisomic Mouse Cortex: Machine Learning Identifies Tau, APP, and ADARB1 as Key Genotype Signatures and Reveals Limited Proteomic Response to Memantine." <em>ICML 2026 Workshop on Generative and Experimental Perspectives for Biomolecular Design (GenBio).</em> Seoul, South Korea, 2026.
        </p>

        <p class="cv-pub-label">Submitted Manuscripts</p>
        <p class="cv-pub">
          Werner K, Wickware C, Moore AA, <strong>Cho C</strong>, et al. "Biomarker Study in Children and Adolescents with New Daily Persistent Headache (NDPH)." Submitted to <em>Cephalalgia,</em> December 2025.
        </p>

        <p class="cv-pub-label">Manuscripts in Preparation</p>
        <p class="cv-pub">
          Sengupta S, Rozen S, <strong>Cho C</strong>, et al. "Anti-CGRP Neutralizing Antibody for Modulation of Neurogenic Inflammation in Trigeminal and Glossopharyngeal Pain Associated with Small Fiber Neuropathy/Fibromyalgia, a Phase 1B Clinical Study." In preparation, 2026.
        </p>
      </section>

      {/* ── Presentations ── */}
      <section class="section">
        <h2 class="section-heading">Scientific Presentations</h2>
        <ul class="cv-bullets">
          <li>ICML GenBio and FMSD Workshops (poster). Seoul, South Korea, 2026.</li>
          <li>Duke Department of Neurology TBS/DCEC Research Symposium (poster). Durham, NC, 2025.</li>
          <li>R Foundation useR! Conference (poster). Durham, NC, 2025.</li>
          <li>Duke Annual Undergraduate Research Symposium (poster). Durham, NC, 2024.</li>
        </ul>
      </section>

      {/* ── Honors ── */}
      <section class="section">
        <h2 class="section-heading">Honors &amp; Awards</h2>
        <ul class="cv-bullets">
          <li>Reagan Institute Civic Leaders Fellowship, Ronald Reagan Presidential Foundation &amp; Institute — 2025</li>
          <li>Journal Scholars Exchange, American Statistical Association (ASA) &amp; AAPOR — 2024</li>
          <li>Health Policy Case Competition Finalist (top 3 / 40), Duke University — 2023 &amp; 2024</li>
          <li>Health Policy Case Competition Finalist (top 3 / 88), Tulane University — 2023</li>
        </ul>
      </section>

    </div>
  );
};

export default CV;
