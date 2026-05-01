import "./App.css";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReservationForm from "./components/ReservationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<ReservationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
