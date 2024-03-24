import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --section-bg: #f3f4f6;
  --section-bg-neutral: white;
  --heading-color: #222020;
  --primary-text: black;
  --primary-paragraph: #4b4b4b;
  --primary-accent: #7c3aed;
  --footer-bg: #27272a;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scrollbar-color: #8e8e8e #fff;
  scrollbar-width: thin;
}

html {
  scroll-behavior: smooth;

}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

body > #root {
  font-family: "Poppins", sans-serif;
}

@keyframes blub {
  0% {
    border-radius: 32% 68% 50% 50% / 26% 73% 27% 74%;
}
25% {
    border-radius: 49% 51% 25% 75% / 67% 71% 29% 33%;
}
50% {
    border-radius: 41% 59% 59% 41% / 49% 59% 41% 51%;
}
75% {
    border-radius: 54% 46% 29% 71% / 46% 56% 44% 54%;
}
100% {
    border-radius: 32% 68% 50% 50% / 26% 73% 27% 74%;
}
}

`;

export default GlobalStyle;
