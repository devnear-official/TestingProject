"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Heading } from "./ui";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length, t = testimonials[i];
  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="section">
        <Heading eyebrow="Testimonials" title="What our users say" />
        <figure className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-8 text-center shadow-md" aria-live="polite">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">{t.n[0]}</span>
          <div className="mt-4 flex justify-center gap-1 text-amber-400">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={18} fill="currentColor" />)}</div>
          <blockquote className="mt-4 text-lg text-slate-700">“{t.q}”</blockquote>
          <figcaption className="mt-4 text-sm"><b>{t.n}</b><br />{t.p}</figcaption>
        </figure>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button aria-label="Previous" onClick={() => setI((i + n - 1) % n)} className="rounded-full border border-slate-300 bg-white p-2"><ChevronLeft size={18} /></button>
          <span className="text-sm text-slate-500">{i + 1} / {n}</span>
          <button aria-label="Next" onClick={() => setI((i + 1) % n)} className="rounded-full border border-slate-300 bg-white p-2"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
