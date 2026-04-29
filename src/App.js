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
      <header className="bg-gray-800 text-white p-4">
        <Header />
      </header>

      {/* Main */}
      <main className="p-4">
        <Main />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4">
        <Footer />
      </footer>
    </div>
  );
    </>
  );
}

export default App;
