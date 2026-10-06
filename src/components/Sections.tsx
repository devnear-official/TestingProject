import { Check } from "lucide-react";
import { Heading, Shot } from "./ui";
import { keyFeatures, whyStats, whyGrid, glance, integrations, clients } from "@/data/content";

export function LogoStrip() {
  const items = Array.from({ length: 10 }, (_, i) => `Institute ${i + 1}`);
  return (
    <section className="border-y border-slate-200 py-8" aria-label="Trusted institutions">
      <p className="mb-5 text-center text-sm font-medium text-slate-500">Trusted by the most prestigious institutions</p>
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-4">{[...items, ...items].map((x, i) => <span key={i} className="rounded-lg bg-slate-100 px-6 py-3 font-semibold text-slate-500">{x}</span>)}</div>
      </div>
    </section>
  );
}

export function KeyFeatures() {
  return (
    <section id="key-features" className="section">
      <Heading eyebrow="Key Features" title="The ultimate toolkit for education management" sub="Designed to simplify administration, improve engagement and support learning." />
      <div className="mt-16 space-y-20">
        {keyFeatures.map((f, i) => (
          <div key={f.t} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <h3 className="text-2xl font-bold">{f.t}</h3>
              <p className="mt-3 text-slate-600">{f.d}</p>
              <ul className="mt-5 space-y-2">{f.b.map((x) => <li key={x} className="flex gap-2 text-sm"><Check size={18} className="text-blue-600" />{x}</li>)}</ul>
            </div>
            <Shot title={f.t} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhyStats() {
  return (
    <section id="why-choose-us" className="bg-blue-600 text-white">
      <div className="section">
        <Heading eyebrow="Why choose us" title="Trusted by happy users" />
        <div className="mt-12 grid gap-8 text-center md:grid-cols-3">
          {whyStats.map(([n, l]) => <div key={n}><p className="text-5xl font-extrabold">{n}</p><p className="mt-2 text-blue-100">{l}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function WhyGrid() {
  return (
    <section className="section">
      <Heading eyebrow="Light years ahead" title="Why choose LearnDesk?" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyGrid.map(([t, d]) => <div key={t} className="card"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-slate-600">{d}</p></div>)}
      </div>
    </section>
  );
}

export function Glance() {
  return (
    <section id="features" className="bg-slate-50">
      <div className="section">
        <Heading eyebrow="Features at a glance" title="All-in-one features, all for you" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {glance.map(([t, d]) => <div key={t} className="card"><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-slate-600">{d}</p></div>)}
        </div>
        <div className="mt-10 text-center"><a href="#" className="btn-primary">Get Started Now</a></div>
      </div>
    </section>
  );
}

export function Brochure() {
  return (
    <section id="e-catalog" className="section">
      <div className="grid items-center gap-10 rounded-3xl bg-slate-900 p-10 text-white md:grid-cols-2 md:p-14">
        <div><h2 className="text-3xl font-bold">Explore our e-catalog brochure</h2><p className="mt-3 text-slate-300">See every feature in detail.</p><a href="#" className="btn-primary mt-6">Download PDF</a></div>
        <div className="mx-auto h-48 w-36 rotate-3 rounded-lg bg-white p-4 text-slate-900 shadow-2xl"><div className="h-3 w-20 rounded bg-blue-600" /><div className="mt-3 space-y-2">{[0, 1, 2, 3, 4].map((i) => <div key={i} className="h-2 rounded bg-slate-200" />)}</div></div>
      </div>
    </section>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="section pt-0">
      <Heading eyebrow="Integrations" title="Built-in, ready-to-use integrations" sub="50+ connections to SMS, payments, devices and more." />
      <div className="mt-10 flex flex-wrap justify-center gap-3">{integrations.map((x) => <span key={x} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm">{x}</span>)}</div>
    </section>
  );
}

export function Reliability() {
  return (
    <section id="reliability" className="bg-slate-50">
      <div className="section">
        <Heading eyebrow="Reliability redefined" title="Always on, always secure" sub="Cloud hosted, with frequent database backups and auto-scaling." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Highly reliable", "Safe and secure", "Smooth performance"].map((t) => <div key={t} className="card text-center"><div className="mx-auto h-12 w-12 rounded-full bg-blue-100" /><h3 className="mt-4 font-semibold">{t}</h3></div>)}
        </div>
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section id="clients" className="section">
      <Heading eyebrow="Clients" title="Trusted by 200+ leading institutions" sub="Join our satisfied clients." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {clients.map((c) => (
          <div key={c.n} className="card">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-100 font-bold text-blue-700">{c.n[0]}</span>
            <h3 className="mt-3 font-semibold">{c.n}</h3><p className="text-sm text-slate-500">{c.c}</p><p className="mt-2 text-sm font-semibold text-blue-600">{c.s} students</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="section pt-0 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">Get started with LearnDesk</h2>
      <p className="mt-3 text-slate-600">Transform your institution. Start now.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3"><a href="#" className="btn-primary">Start your trial</a><a href="#" className="btn-outline">Request a demo</a><a href="#" className="btn-outline">Get in touch</a></div>
    </section>
  );
}

export function AppDownload() {
  return (
    <section className="section pt-0">
      <div className="grid items-center gap-8 rounded-3xl bg-blue-50 p-10 md:grid-cols-2">
        <div><h2 className="text-3xl font-bold">Download the app</h2><p className="mt-3 text-slate-600">All features, anytime, anywhere.</p><div className="mt-6 flex gap-3"><span className="btn-outline">Google Play</span><span className="btn-outline">App Store</span></div></div>
        <div className="mx-auto h-64 w-32 rounded-[1.5rem] border-4 border-slate-900 bg-white p-3"><div className="h-6 rounded bg-blue-600" /><div className="mt-3 space-y-2">{[0, 1, 2, 3, 4].map((i) => <div key={i} className="h-8 rounded bg-slate-100" />)}</div></div>
      </div>
    </section>
  );
}
