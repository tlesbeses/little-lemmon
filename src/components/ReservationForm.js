import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema } from "../schemas/bookingFormSchema";

const getLocalNow = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
    fullDate: now,
  };
};

export default function ReservationForm({ availableTimes, dispatch }) {
  const { date: todayStr } = getLocalNow();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      guests: 1,
    },
  });

  const onSubmit = (data) => {
    console.log("Reserva confirmada:", data);
    alert("¡Reserva exitosa!");
  };


  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 flex items-center justify-center font-sans">
      <div className="w-full max-w-2xl bg-white p-8 shadow-xl rounded-2xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Reserve a Table</h2>
          <p className="text-gray-500 mt-2">
            Enjoy an unforgettable experience
          </p>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Fecha */}
          <div className="flex flex-col">
            <label htmlFor="date" className="font-semibold text-gray-700 mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              min={todayStr}
              {...register("date", {
                onChange: (e) => {
                  const selectedDate = e.target.value;

                  dispatch({
                    type: "UPDATE_TIMES",
                    date: selectedDate,
                  });
                },
              })}
              className={`p-3 rounded-lg border outline-none transition-all focus:ring-2 focus:ring-blue-400 ${
                errors.date ? "border-red-500 shadow-sm" : "border-gray-300"
              }`}
            />
            {errors.date && (
              <span className="text-red-500 text-xs mt-1">
                {errors.date.message}
              </span>
            )}
          </div>

          {/* Hora */}
          <div className="flex flex-col">
            <label htmlFor="time" className="text-body text-grayDark mb-1">
              Time
            </label>
            <select
              id="time"
              {...register("time")}
              className="p-3 rounded-lg border border-grayLight focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a time</option>
              {/* Mostramos los tiempos dinámicos que vienen del padre */}
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>

          {/* Personas */}
          <div className="flex flex-col">
            <label
              htmlFor="guests"
              className="font-semibold text-gray-700 mb-2"
            >
              Number of Guests
            </label>
            <input
              id="guests"
              type="number"
              {...register("guests", { valueAsNumber: true })}
              className={`p-3 rounded-lg border outline-none transition-all focus:ring-2 focus:ring-blue-400 ${
                errors.guests ? "border-red-500 shadow-sm" : "border-gray-300"
              }`}
            />
            {errors.guests && (
              <span className="text-red-500 text-xs mt-1">
                {errors.guests.message}
              </span>
            )}
          </div>

          {/* Ocasión */}
          <div className="flex flex-col">
            <label
              htmlFor="occasion"
              className="font-semibold text-gray-700 mb-2"
            >
              Occasion
            </label>
            <select
              id="occasion"
              {...register("occasion")}
              className={`p-3 rounded-lg border outline-none transition-all focus:ring-2 focus:ring-blue-400 ${
                errors.occasion ? "border-red-500 shadow-sm" : "border-gray-300"
              }`}
            >
              <option value="">Select an option</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business Dinner">Business Dinner</option>
            </select>
            {errors.occasion && (
              <span className="text-red-500 text-xs mt-1">
                {errors.occasion.message}
              </span>
            )}
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
