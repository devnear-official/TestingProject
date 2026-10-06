export function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold text-blue-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-slate-600">{sub}</p>}
    </div>
  );
}
export function Shot({ title }: { title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl" role="img" aria-label={`${title} preview`}>
      <div className="flex gap-1.5 bg-slate-100 px-4 py-2.5">{[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-slate-300" />)}</div>
      <div className="space-y-4 p-5">
        <p className="text-xs font-medium text-slate-500">{title}</p>
        <div className="flex h-24 items-end gap-2">{[50, 80, 40, 90, 65, 75, 55].map((h, i) => <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t bg-blue-500/80" />)}</div>
        <div className="grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <div key={i} className="h-10 rounded-lg bg-slate-100" />)}</div>
      </div>
    </div>
  );
}
