import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ThemeBtn from "./components/ThemeBtn";
import DarkModeProvider from "./context/DarkModeContext";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <DarkModeProvider>
        <ThemeBtn />
        <GlobalStyle />

        <NavBar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </DarkModeProvider>
    </>
  );
}

export default App;
