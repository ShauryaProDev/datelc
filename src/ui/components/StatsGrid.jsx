function StatsGrid({ result }) {
  const stats = [
    {
      title: "Days",
      value: result.totalDays,
      color: "bg-blue-600",
    },
    {
      title: "Weeks",
      value: result.totalWeeks,
      color: "bg-emerald-600",
    },
    {
      title: "Months",
      value: result.totalMonths,
      color: "bg-violet-600",
    },
    {
      title: "Years",
      value: result.totalYears,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="min-w-0 rounded-3xl border border-zinc-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
          >
            <div className="h-5 w-5 rounded-full bg-white" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="geist-title break-all text-2xl leading-tight text-zinc-900 sm:text-3xl">
              {item.value}
            </h3>

            <p className="geist-body text-sm text-zinc-500">
              Total {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;