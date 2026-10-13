function FeatureCard({ title, description, color }) {
  return (
    <div className="rounded-3xl border border-zinc-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
      >
        <div className="h-5 w-5 rounded-full bg-white" />
      </div>

      <h3 className="geist-title text-2xl text-zinc-900">{title}</h3>

      <p className="geist-body mt-3 leading-7 text-zinc-500">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;