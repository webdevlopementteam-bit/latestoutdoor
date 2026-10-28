// Centered uppercase title with the red underline bar used across the site.
export default function SectionHeading({ children, lineWidth = 150, as: Tag = "h2", className = "", light = false }) {
  return (
    <div className={`mb-10 text-center ${className}`}>
      <Tag className={`text-[28px] font-bold uppercase tracking-wide md:text-[32px] ${light ? "text-white" : "text-ink"}`}>
        {children}
      </Tag>
      <span className="mx-auto mt-3 block h-[3px] bg-brand" style={{ width: lineWidth }} />
    </div>
  );
}
