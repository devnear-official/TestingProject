import { MessageCircle } from "lucide-react";

export default function Footer() {
  const col = (t: string, l: string[]) => <div><h4 className="font-semibold">{t}</h4><ul className="mt-3 space-y-2 text-sm text-slate-400">{l.map((x) => <li key={x}><a href="#" className="hover:text-white">{x}</a></li>)}</ul></div>;
  return (
    <>
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
          <div><p className="text-xl font-bold">LearnDesk</p><p className="mt-3 max-w-sm text-sm text-slate-400">Easy, feature-rich and complete software for guardians, students and admin staff.</p></div>
          {col("Company", ["Contact us", "Terms and conditions", "Privacy policy", "Refund policy", "Careers"])}
          {col("Product", ["Testimonials", "Features", "Pricing", "FAQs", "Status"])}
        </div>
        <p className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} LearnDesk. Learning project with fictional content.</p>
      </footer>
      <a href="#" aria-label="Chat with us" className="fixed bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg"><MessageCircle /></a>
    </>
  );
}
