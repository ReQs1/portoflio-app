import GlobalStyle from "./styles/globalStyles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
