"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Heading } from "./ui";
import { faqs } from "@/data/content";

export default function Faq() {
  const [o, setO] = useState<number | null>(0);
  return (
    <section id="faqs" className="section">
      <Heading eyebrow="Question & answers" title="Frequently asked questions" />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="rounded-xl border border-slate-200">
            <button className="flex w-full items-center justify-between p-5 text-left font-semibold" aria-expanded={o === i} onClick={() => setO(o === i ? null : i)}>{f.q}{o === i ? <Minus size={18} /> : <Plus size={18} />}</button>
            {o === i && <p className="px-5 pb-5 text-slate-600">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
