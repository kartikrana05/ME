import Reveal from "./Reveal";

export default function Chapter({
  num,
  title,
  children,
  id,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="chapter" id={id}>
      <Reveal>
        <div className="chapter-num">Chapter {num}</div>
        <h2 className="chapter-title">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
