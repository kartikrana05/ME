import type { Project } from "@/data/resume";
import Reveal from "./Reveal";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="pixel card">
        <div className="card-head">
          <span className="card-name">{project.name}</span>
          <span className="card-sub">{project.blurb}</span>
          <span className="card-period">{project.period}</span>
        </div>
        <div className="card-meta">{project.stack}</div>
        <ul className="card-lines">
          {project.lines.map((line) => (
            <li key={line}>
              <span className="dot" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="card-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
              {link.label} ↗
            </a>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
