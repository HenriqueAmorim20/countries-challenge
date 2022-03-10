<template>
  <footer>
    <div>
      <span>Challenge by</span>
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        <span>Frontend Mentor</span>
      </a>
    </div>
    <div>
      <span>Coded by: Henrique Melo</span>
      <a
        href="https://www.linkedin.com/in/henriqueamorim20/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="footer-media-icon"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82Z"
          />
          <rect
            width="4.5"
            height="11.7"
            x="3"
            y="9.3"
            fill="currentColor"
            rx=".9"
            ry=".9"
          />
          <circle cx="5.25" cy="5.25" r="2.25" fill="currentColor" />
        </svg>
      </a>
      <a
        href="https://github.com/HenriqueAmorim20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="footer-media-icon"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822c0 5.277-3.002 6.824-5.823 7.279c.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187c0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185c0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728a.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092c-.455-.546-.819-1.001-1.274-1.092c-.09-.091-.364-.455-.273-.819c.091-.364.455-.637.82-.455c.91.182 1.455.91 2 1.547c.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093c-2.73-.546-5.914-2.093-5.914-7.279c0-1.456.455-2.73 1.365-3.822c-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterLayout",
};
</script>
<style scoped>
footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  font-weight: 400;
  flex-wrap: wrap;
}

footer div {
  display: flex;
  align-items: center;
  margin: 0.5rem 0 0 2rem ;
}

footer a {
  margin-left: 0.5rem;
  text-decoration: none;
}

footer span {
  font-weight: normal;
}

.footer-media-icon {
  width: 1.5rem;
  text-decoration: none;
  transition: transform 0.5s ease;
}

.footer-media-icon:hover {
  transform: translate(0, -5px);
}
</style>
