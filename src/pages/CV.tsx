import { Component, onMount } from "solid-js";

const CV: Component = () => {
  onMount(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  return (
    <div class="page">
      <iframe
        src="/calvin_cv.pdf"
        class="cv-frame"
        title="Calvin Cho — Curriculum Vitae"
      />
      <p class="cv-fallback">
        Can't see the PDF?&nbsp;
        <a href="/calvin_cv.pdf" download="Calvin_Cho_CV.pdf">Download CV</a>
      </p>
    </div>
  );
};

export default CV;
