import GlobalStyle from "./styles/globalStyles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
