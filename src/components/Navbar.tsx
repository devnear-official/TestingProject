"use client";
import { useState } from "react";
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";
import { featureMenu } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold"><GraduationCap className="text-blue-600" />LearnDesk</a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Main">
          <a href="#">Home</a>
          <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button className="flex items-center gap-1" aria-expanded={dd} onClick={() => setDd(!dd)}>Features <ChevronDown size={14} /></button>
            {dd && <div className="absolute left-0 top-full w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">{featureMenu.map((m) => <a key={m.h} href={m.h} onClick={() => setDd(false)} className="block rounded-lg px-3 py-2 hover:bg-slate-50">{m.l}</a>)}</div>}
          </div>
          <a href="#pricing">Pricing</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a>
        </nav>
        <div className="hidden gap-3 md:flex"><a href="#" className="btn-outline">Login</a><a href="#" className="btn-primary">Register</a></div>
        <button className="md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="space-y-3 border-t border-slate-200 px-4 py-4 md:hidden">
          {["Home", "Pricing", "FAQs", "Contact"].map((l) => <a key={l} href={l === "Home" ? "#" : "#" + l.toLowerCase()} onClick={() => setOpen(false)} className="block font-medium">{l}</a>)}
          <p className="pt-2 text-xs font-semibold uppercase text-slate-400">Features</p>
          {featureMenu.map((m) => <a key={m.h} href={m.h} onClick={() => setOpen(false)} className="block pl-3 text-sm">{m.l}</a>)}
          <a href="#" className="btn-primary w-full">Register</a>
        </div>
      )}
    </header>
  );
}
