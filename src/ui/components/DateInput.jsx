function DateInput({ label, value, onChange }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <label className="geist-title text-sm tracking-wide text-zinc-700">
        {label}
      </label>

      <input
        type="date"
        value={value}
        onChange={onChange}
        className="geist-body h-14 rounded-2xl border border-zinc-200 bg-white px-5 text-zinc-800 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

export default DateInput;