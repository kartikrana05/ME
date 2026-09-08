import type { Job } from "@/data/resume";
import Reveal from "./Reveal";

export default function CareerCard({ job }: { job: Job }) {
  return (
    <Reveal>
      <article className="pixel card">
        <div className="card-head">
          <span className="card-name">{job.company}</span>
          <span className="card-sub">{job.role}</span>
          <span className="card-period">{job.period}</span>
        </div>
        <div className="card-meta">{job.place}</div>
        <ul className="card-lines">
          {job.lines.map((line) => (
            <li key={line}>
              <span className="dot" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
