import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
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

`;

export default GlobalStyle;
