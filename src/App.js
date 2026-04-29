import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
    <div className="
      min-h-screen 
      grid 
      grid-rows-[auto_1fr_auto]
    ">
      {/* Header */}
      <header >
        <Header />
      </header>

      {/* Main */}
      <main >
        <Main />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
