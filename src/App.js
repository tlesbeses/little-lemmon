import "./App.css";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import ReservationForm from "./components/ReservationForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./api/api";
import ConfirmedBooking from "./components/ConfirmedBooking";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // console.log("Fecha seleccionada enviada al reducer:", action.date);
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route
          path="/booking"
          element={
            <ReservationForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              onSubmit={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Route>
    </Routes>
  );
}

export default App;
