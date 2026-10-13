function DateCard({ title, value, color }) {
  return (
    <div
      className="group rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
      >
        <span className="geist-title text-2xl text-white">{value}</span>
      </div>

      <h3 className="geist-title text-2xl text-zinc-900">{title}</h3>

      <p className="geist-body mt-2 text-sm leading-7 text-zinc-500">
        Calculated automatically from the selected dates.
      </p>
    </div>
  );
}

export default DateCard;