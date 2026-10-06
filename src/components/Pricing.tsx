import { Check } from "lucide-react";
import { Heading } from "./ui";
import { plans } from "@/data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50">
      <div className="section">
        <Heading eyebrow="Pricing plans" title="Affordable plans for every institution" sub="Example prices in USD. Taxes extra." />
        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((x) => (
            <div key={x.n} className={`rounded-2xl border bg-white p-6 ${x.pop ? "border-blue-600 shadow-xl ring-2 ring-blue-600" : "border-slate-200"}`}>
              {x.pop && <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>}
              <h3 className="mt-2 text-xl font-bold">{x.n}</h3><p className="text-sm text-slate-500">{x.tag}</p>
              <p className="mt-4 text-4xl font-extrabold">{x.p || "Custom"}{x.p && <span className="text-sm font-medium text-slate-500"> /student/month</span>}</p>
              {x.min && <p className="text-xs text-slate-500">Minimum monthly fee: {x.min}</p>}
              <a href="#contact" className={`mt-5 w-full ${x.pop ? "btn-primary" : "btn-outline"}`}>{x.p ? "Get started now" : "Let’s talk"}</a>
              <ul className="mt-5 space-y-2 text-sm">
                {x.inc && <li className="font-semibold">All in {x.inc}, plus</li>}
                {x.f.map((f) => <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-blue-600" />{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
