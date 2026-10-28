export default function FaqList({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0} className="group border border-gray-200 bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink">
            {i + 1}. {f.q}
            <span className="text-2xl leading-none text-brand transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="px-5 pb-5 text-[17px] leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
