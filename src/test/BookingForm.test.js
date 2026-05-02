import {render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import { initializeTimes, updateTimes } from "../App";

test('renders booking page', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading", {
    name: /reserve a table/i,
  });

  expect(heading).toBeInTheDocument();
});

// describe("initializeTimes", () => {
//   test("returns the correct initial times", () => {
//     const expectedTimes = [
//       "17:00",
//       "18:00",
//       "19:00",
//       "20:00",
//       "21:00",
//       "22:00",
//     ];

//     const result = initializeTimes();

//     expect(result).toEqual(expectedTimes);
//   });
// });

// describe("updateTimes", () => {
//   test("returns the same state that is passed in", () => {
//     const state = ["17:00", "18:00"];
//     const action = { type: "UPDATE_TIMES", date: "2026-05-01" };

//     const result = updateTimes(state, action);

//     expect(result).toEqual(state);
//   });
// });
