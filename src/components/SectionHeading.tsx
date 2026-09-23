export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <p className="text-xs font-semibold tracking-widest text-brand uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-neutral-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
