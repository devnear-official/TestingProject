import { Shot } from "./ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-semibold text-blue-600">Complete education management system</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Effortless efficiency for your institution</h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600">Seamless. Intelligent. Ready. Built for schools, colleges, madrasahs and universities.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#" className="btn-primary">Get Started</a>
            <span className="btn-outline">Google Play</span><span className="btn-outline">App Store</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">{["bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"].map((c) => <span key={c} className={`h-9 w-9 rounded-full border-2 border-white ${c}`} />)}</div>
            <p className="text-sm font-medium text-slate-600">200+ institutions use our software</p>
          </div>
        </div>
        <div className="relative">
          <Shot title="Attendance, results, payments, accounts" />
          <div className="absolute -left-4 bottom-8 rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-xl">24/7 support, always there</div>
          <div className="absolute -right-2 -top-4 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-xl"><b>100,000</b> families connected</div>
        </div>
      </div>
    </section>
  );
}
