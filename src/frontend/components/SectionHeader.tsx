type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  dark?: boolean;
};

export function SectionHeader({ eyebrow, title, copy, dark = false }: SectionHeaderProps) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
      <div>
        {eyebrow ? (
          <p className={`eyebrow mb-4 ${dark ? "text-white/55" : "text-black/50"}`}>
            {eyebrow}
          </p>
        ) : null}
        <h2 className="section-title">{title}</h2>
      </div>
      {copy ? (
        <p className={`max-w-xl text-lg leading-relaxed ${dark ? "text-white/68" : "text-[#706b63]"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
