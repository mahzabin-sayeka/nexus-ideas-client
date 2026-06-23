export default function IdeaSubmissionCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl my-16 mx-6">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Have a Revolutionary Idea?</h2>
        <p className="text-lg opacity-90 mb-10 leading-relaxed">
          Don't let your innovation stay in your head. Share it with our community, get valid feedback, and refine your startup concept today.
        </p>
        <button className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl text-lg hover:bg-slate-100 transition-all shadow-xl">
          Submit Your Idea Now
        </button>
      </div>
    </section>
  );
}