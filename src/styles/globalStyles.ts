import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --section-bg: #f3f4f6;
  --hover-color: #8b5cf6
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

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  scroll-behavior: smooth;
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
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
}

`;

export default GlobalStyle;
