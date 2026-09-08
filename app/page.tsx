import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import Chapter from "@/components/Chapter";
import CareerCard from "@/components/CareerCard";
import ProjectCard from "@/components/ProjectCard";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import {
  profile,
  stats,
  fulltime,
  now,
  projects,
  skills,
  education,
  achievements,
  codeProfiles,
  motto,
  closing,
} from "@/data/resume";

export default function Home() {
  return (
    <>
      <ThemeToggle />

      <main className="wrap">
        {/* ── Hero ───────────────────────────────── */}
        <header className="hero">
          <Reveal>
            <h1 className="hero-name">{profile.name}</h1>
            <div className="hero-role">
              {profile.role} · {profile.location}
            </div>
            <p className="hero-intro">{profile.intro}</p>
          </Reveal>

          <Reveal delay={80}>
            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <nav className="hero-links">
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={profile.github} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
            </nav>
            <nav className="hero-profiles" aria-label="Competitive programming profiles">
              <span className="hero-profiles-label">DSA</span>
              {codeProfiles.map((p) => (
                <a key={p.href} href={p.href} target="_blank" rel="noreferrer noopener">
                  {p.label}
                </a>
              ))}
            </nav>
            <div className="scroll-hint">
              <span className="arrow">↓</span> Scroll
            </div>
          </Reveal>
        </header>

        {/* ── 01 Career ──────────────────────────── */}
        <Chapter num="01" title="Career" id="career">
          <Reveal>
            <div className="group-label">Now</div>
            <article className="pixel card now-card">
              <div className="card-head">
                <span className="card-name">
                  <span className="now-pulse" aria-hidden="true" />
                  {now.label}
                </span>
                <span className="card-period">{now.period}</span>
              </div>
              <ul className="card-lines">
                {now.lines.map((line) => (
                  <li key={line}>
                    <span className="dot" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal>
            <div className="group-label">Full-time</div>
          </Reveal>
          {fulltime.map((job) => (
            <CareerCard key={job.company} job={job} />
          ))}
        </Chapter>

        {/* ── 02 Projects ────────────────────────── */}
        <Chapter num="02" title="Projects" id="projects">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Chapter>

        {/* ── 03 Craft ───────────────────────────── */}
        <Chapter num="03" title="Craft" id="craft">
          <Reveal>
            <div className="pixel">
              {skills.map((group) => (
                <div className="skill-row" key={group.label}>
                  <div className="skill-label">{group.label}</div>
                  <div className="skill-items">{group.items}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Chapter>

        {/* ── 04 Groundwork ──────────────────────── */}
        <Chapter num="04" title="Groundwork" id="groundwork">
          <Reveal>
            <article className="pixel card">
              <div className="card-head">
                <span className="card-name">{education.school}</span>
                <span className="card-sub">{education.degree}</span>
                <span className="card-period">{education.period}</span>
              </div>
              <div className="card-meta">
                {education.detail} · {education.place}
              </div>
            </article>
          </Reveal>

          <Reveal>
            <ul className="ach-list">
              {achievements.map((item) => (
                <li key={item}>
                  <span className="dot" aria-hidden="true" style={{ marginTop: 8 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Chapter>

        {/* ── Closing ────────────────────────────── */}
        <Chapter num="05" title="Ownership" id="ownership">
          <Reveal>
            <div className="pixel">
              <p className="closing-q">{closing.question}</p>
              <p className="closing-body">{closing.body}</p>
            </div>
          </Reveal>
        </Chapter>

        {/* ── Motto ──────────────────────────────── */}
        <Reveal className="motto">
          <div className="rule" />
          {motto.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </Reveal>

        {/* ── Footer ─────────────────────────────── */}
        <footer className="footer">
          <div className="footer-links">
            <a
              className="icon-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              className="icon-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
