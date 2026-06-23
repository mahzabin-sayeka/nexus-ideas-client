export default function CommunityHighlights() {
  const stats = [
    { label: "Active Ideas", value: "1,200+" },
    { label: "Community Members", value: "8,500+" },
    { label: "Validated Concepts", value: "450+" }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
