import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReservationForm from "../components/ReservationForm";
import { bookingFormSchema } from "../schemas/bookingFormSchema";

test("form can be submitted", async () => {
  const mockSubmit = jest.fn();

  render(
    <ReservationForm
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
      onSubmit={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2030-12-25" },
  });

  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: 2 },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  // 👇 esperar a que el botón esté habilitado
  await waitFor(() => {
    expect(
      screen.getByRole("button", { name: /confirm booking/i })
    ).not.toBeDisabled();
  });

  fireEvent.click(
    screen.getByRole("button", { name: /confirm booking/i })
  );

  await waitFor(() => {
    expect(mockSubmit).toHaveBeenCalled();
  });
});

test("date input has required attributes", () => {
  render(
    <ReservationForm
      availableTimes={[]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const dateInput = screen.getByLabelText(/date/i);

  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("min"); // 👈 importante
});

test("guests input has correct type", () => {
  render(
    <ReservationForm
      availableTimes={[]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const guestsInput = screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toHaveAttribute("type", "number");
});

test("valid form data passes validation", () => {
  const validData = {
    date: "2030-12-25",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  };

  const result = bookingFormSchema.safeParse(validData);

  expect(result.success).toBe(true);
});

test("invalid form data fails validation", () => {
  const invalidData = {
    date: "",       // ❌ vacío
    time: "",
    guests: 0,      // ❌ inválido
    occasion: "",
  };

  const result = bookingFormSchema.safeParse(invalidData);

  expect(result.success).toBe(false);
});

test("shows validation error for empty date", async () => {
  render(
    <ReservationForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      onSubmit={jest.fn()}
    />
  );

  fireEvent.click(
    screen.getByRole("button", { name: /confirm booking/i })
  );

  expect(await screen.findByText(/date/i)).toBeInTheDocument();
});

test("submit button is disabled when form is invalid", () => {
  render(
    <ReservationForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const button = screen.getByRole("button", {
    name: /confirm booking/i,
  });

  expect(button).toBeDisabled();
});