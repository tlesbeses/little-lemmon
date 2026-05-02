import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReservationForm from "../components/ReservationForm";

 test("form can be submitted", async () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatch = jest.fn();
  const mockSubmit = jest.fn();

  render(
    <ReservationForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2030-12-25" }, // 👈 clave
  });

  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /confirm booking/i })
  );

  await waitFor(() => {
    expect(mockSubmit).toHaveBeenCalled();
  });
});