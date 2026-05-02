export default function ConfirmedBooking() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Booking Confirmed 🎉
        </h1>
        <p className="text-gray-600">
          Your reservation has been successfully completed. We look forward to
          serving you!
        </p>
      </div>
    </section>
  );
}