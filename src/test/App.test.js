import { render, screen } from "@testing-library/react";
import App, { initializeTimes, updateTimes } from "../App";
import { MemoryRouter } from "react-router-dom";
import * as api from "../api/api"; // 👈 importante


jest.spyOn(api, "fetchAPI");

test("renders booking page", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading", {
    name: /reserve a table/i,
  });

  expect(heading).toBeInTheDocument();
});

describe("initializeTimes", () => {
  test("calls fetchAPI and returns its result", () => {
    const mockTimes = ["17:00", "18:00"];

    api.fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(api.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("returns times from fetchAPI when UPDATE_TIMES is dispatched", () => {
    const mockTimes = ["19:00", "20:00"];

    api.fetchAPI.mockReturnValue(mockTimes);

    const action = { type: "UPDATE_TIMES", date: "2026-05-01" };

    const result = updateTimes([], action);

    expect(api.fetchAPI).toHaveBeenCalledWith(new Date("2026-05-01"));
    expect(result).toEqual(mockTimes);
  });

  test("returns same state for unknown action", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "OTHER_ACTION" };

    const result = updateTimes(state, action);

    expect(result).toEqual(state);
  });
});