import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      title: "Date Difference",
      description:
        "Calculate exact differences between two selected calendar dates.",
      color: "bg-blue-600",
    },
    {
      title: "Future Prediction",
      description:
        "Add or subtract days, months, or years from any date instantly.",
      color: "bg-emerald-600",
    },
    {
      title: "Countdowns",
      description:
        "Track upcoming events and monitor remaining time accurately.",
      color: "bg-violet-600",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 text-center">
        <h2 className="geist-title text-5xl tracking-tight text-zinc-900">
          Powerful Date Features
        </h2>

        <p className="geist-body mt-5 text-lg text-zinc-500">
          Everything needed for modern date and time calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            color={feature.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;