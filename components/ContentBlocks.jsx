// Renders the flat heading/paragraph/list blocks scraped from the original pages.
export default function ContentBlocks({ blocks }) {
  const out = [];
  let list = null;
  blocks.forEach((b, i) => {
    if (b.type === "li") {
      if (!list) {
        list = [];
        out.push({ type: "ul", items: list, key: i });
      }
      list.push(b.text);
      return;
    }
    list = null;
    out.push({ ...b, key: i });
  });

  return (
    <div className="space-y-4 text-[17px] leading-relaxed text-body">
      {out.map((b) => {
        switch (b.type) {
          case "ul":
            return (
              <ul key={b.key} className="list-disc space-y-1.5 pl-6 marker:text-brand">
                {b.items.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            );
          case "h2":
            return <h2 key={b.key} className="pt-4 text-2xl font-bold text-ink md:text-[28px]">{b.text}</h2>;
          case "h3":
            return <h3 key={b.key} className="pt-3 text-xl font-bold text-ink md:text-2xl">{b.text}</h3>;
          case "h4":
          case "h5":
          case "h6":
            return <h4 key={b.key} className="pt-2 text-lg font-bold text-ink md:text-xl">{b.text}</h4>;
          default:
            return <p key={b.key}>{b.text}</p>;
        }
      })}
    </div>
  );
}
