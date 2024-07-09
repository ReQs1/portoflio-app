import GlobalStyle from "./styles/globalStyles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeBtn from "./components/ThemeBtn";
import DarkModeProvider from "./context/DarkModeContext";

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

        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
