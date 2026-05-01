import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Helper para obtener fecha y hora local formateada
const getLocalNow = () => {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().slice(0, 5);
  return { date, time };
};

export const schema = z
  .object({
    date: z.string().min(1, "Selecciona una fecha"),
    time: z.string().min(1, "Selecciona una hora"),
    guests: z.number().min(1, "Mínimo 1 persona").max(20, "Máximo 20 personas"),
    occasion: z.string().min(1, "Selecciona una ocasión"),
  })
  // Validación 1: Fecha
  .refine(
    (data) => {
      if (!data.date) return false;
      const [year, month, day] = data.date.split("-").map(Number);
      const selectedDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    { message: "No puedes seleccionar una fecha pasada", path: ["date"] }
  )
  // Validación 2: Hora
  .refine(
    (data) => {
      if (!data.date || !data.time) return true; // Si faltan datos, no evaluamos aún

      const now = new Date();
      const [year, month, day] = data.date.split("-").map(Number);
      const [hours, minutes] = data.time.split(":").map(Number);
      const selectedDateTime = new Date(year, month - 1, day, hours, minutes);

      // Verificamos si la fecha seleccionada es exactamente hoy
      const isToday = new Date(year, month - 1, day).toDateString() === now.toDateString();

      // Si es hoy, la hora seleccionada debe ser mayor a la hora actual
      if (isToday) {
        return selectedDateTime > now;
      }

      // Si es un día futuro, cualquier hora es válida
      return true;
    },
    { message: "La hora ya pasó", path: ["time"] }
  );

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all", // "all" revisa onChange (al escribir) y onBlur (al salir del input)
  });

  const selectedDate = watch("date");
  const { date: todayStr, time: currentTime } = getLocalNow();



  const onSubmit = (data) => console.log("Reserva exitosa:", data);

  // Lógica del atributo min para el input de tiempo
  const minTime = selectedDate === todayStr ? currentTime : "00:00";

  return (
    <section className="bg-grayLight py-12 px-4 font-sans">
      <div className="max-w-container mx-auto bg-white p-8 shadow-card rounded-lg">
        <h2 className="font-serif text-display text-primary mb-6 text-center">
          Reserve a Table
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Date */}
          <div className="flex flex-col">
            <label className="text-body text-grayDark mb-1">Date</label>
            <input
              type="date"
              min={todayStr}
              {...register("date")}
              className={`p-3 rounded-lg border focus:ring-2 focus:ring-primary ${
                errors.date ? "border-red-500" : "border-grayLight"
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-body text-grayDark mb-1">Time</label>
            <input
              type="time"
              min={minTime}
              {...register("time")}
              className={`p-3 rounded-lg border focus:ring-2 focus:ring-primary ${
                errors.time ? "border-red-500" : "border-grayLight"
              }`}
              onChange: () => trigger(["date", "time"]),
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-body text-grayDark mb-1">
              Number of guests
            </label>
            <input
              type="number"
              {...register("guests", { valueAsNumber: true })}
              className={`p-3 rounded-lg border focus:ring-2 focus:ring-primary ${
                errors.guests ? "border-red-500" : "border-grayLight"
              }`}
            />
            {errors.guests && (
              <p className="text-red-500 text-sm mt-1">
                {errors.guests.message}
              </p>
            )}
          </div>

          {/* Occasion */}
          <div className="flex flex-col">
            <label className="text-body text-grayDark mb-1">Occasion</label>
            <select
              {...register("occasion")}
              className={`p-3 rounded-lg border focus:ring-2 focus:ring-primary ${
                errors.occasion ? "border-red-500" : "border-grayLight"
              }`}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {errors.occasion && (
              <p className="text-red-500 text-sm mt-1">
                {errors.occasion.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-secondary text-black font-bold py-3 rounded-lg hover:bg-accent transition-colors"
            >
              Submit reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}