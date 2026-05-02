import "./App.css";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import { Route, Routes } from "react-router-dom";
import ReservationForm from "./components/ReservationForm";
import { useReducer } from "react";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};


export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // console.log("Fecha seleccionada enviada al reducer:", action.date);
      return state;
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<ReservationForm  availableTimes={availableTimes} dispatch={dispatch}/>} />
        </Route>
      </Routes>
  );
}

export default App;
