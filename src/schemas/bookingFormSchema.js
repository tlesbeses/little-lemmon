import {z} from "zod";

export const bookingFormSchema = z
  .object({
    date: z.string().min(1, "Selecciona una fecha"),
    time: z.string().min(1, "Selecciona una hora"),
    guests: z.number().min(1, "Mínimo 1 persona").max(20, "Máximo 20 personas"),
    occasion: z.string().min(1, "Selecciona una ocasión"),
  })
  // Mantenemos solo la validación de la fecha (No días pasados)
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
  );