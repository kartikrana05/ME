export const profile = {
  name: "Kartik Rana",
  role: "Full-Stack Software Engineer",
  location: "Delhi NCR",
  tagline: "Backend-leaning. Ships end-to-end.",
  intro:
    "I build production systems end-to-end — REST APIs, business logic, data pipelines, and the databases underneath them. Spent 1.3 years at SalesCode AI owning backend modules for Coca-Cola's APAC markets. Right now I'm between roles on purpose: learning and building. I like small teams, tight release cycles, and features I can follow from requirement to production.",
  email: "kartik33332@gmail.com",
  github: "https://github.com/kartikrana05",
  linkedin: "https://www.linkedin.com/in/kartik-rana-41744b255/",
};

export const stats = [
  { value: "1.3+", label: "years shipping" },
  { value: "500K+", label: "txns / day" },
  { value: "670+", label: "DSA solved" },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  place: string;
  lines: string[];
};

export const fulltime: Job[] = [
  {
    company: "SalesCode AI",
    role: "Software Engineer (Backend)",
    period: "Jul 2025 — Sep 2026",
    place: "Delhi NCR",
    lines: [
      "Owned the backend loyalty rewards module for Coca-Cola Malaysia and Singapore end-to-end in Java and Spring Boot — REST API design, business logic, PostgreSQL integration, and production release.",
      "Tuned high-traffic PostgreSQL order APIs through indexing and query optimization, supporting endpoints handling 100K+ requests daily.",
      "Built Control Hub, a self-service internal tool for requesting, approving, and safely executing production PostgreSQL/MySQL queries with role-based access control and full audit logging.",
      "Designed a real-time Apache Flink → Kafka → Iceberg pipeline on AWS S3, cutting ingestion costs 25x while processing 500K+ transactions daily.",
      "Developed 40+ data transformers in Java for heterogeneous client systems, with field-level validation and quarantine-on-error semantics.",
      "Use Claude Code and Cursor daily to scaffold, debug, and review services — validating AI-generated code against tests and production standards before merge.",
    ],
  },
  {
    company: "Stealth Startup",
    role: "Software Engineer (Part-time)",
    period: "Jan 2025 — May 2025",
    place: "Remote · Digital health",
    lines: [
      "Building a healthcare platform out to change how care actually reaches people — starting in India, built to travel further.",
      "Built the initial prototype the production platform grew out of, taking it from first build to a working product.",
      "Shipping features end-to-end on FastAPI across backend, database, and deployment.",
      "Built and integrated REST APIs with request validation, business logic, and error handling for core application workflows.",
      "Automated database migration jobs through the GitHub Actions API, making schema changes repeatable and reviewable instead of hand-run against the database.",
    ],
  },
];

export const now = {
  label: "Learning, building, figuring it out",
  period: "Sep 2026 — Present",
  lines: [
    "Building — in stealth — a healthcare platform set to change how healthcare is delivered across India, backed by the Sarvam AI Startup Program.",
    "Going deeper on distributed systems and databases, and building things end-to-end — starting with what's in the next chapter.",
    "Between roles by choice, and in no hurry to pick the wrong one.",
  ],
};

export type Project = {
  name: string;
  blurb: string;
  period: string;
  stack: string;
  links: { label: string; href: string }[];
  lines: string[];
};

export const projects: Project[] = [
  {
    name: "SheetGraph",
    blurb: "Spreadsheets → a queryable knowledge graph",
    period: "Aug 2026",
    stack: "Python · FastAPI · Neo4j · React · Groq Llama 3.3 70B · Zerops",
    links: [
      { label: "Live", href: "https://web-2b30.prg1.zerops.app/" },
      { label: "Code", href: "https://github.com/kartikrana05/SheetGraph" },
    ],
    lines: [
      "A FastAPI platform that converts spreadsheets into a Neo4j property graph with no predefined schema, using an LLM to infer labels, keys, and relationships from statistical column profiles.",
      "Natural-language → Cypher query layer with schema-aware generation, read-only validation, allow-listing, and strict parameterisation. Deployed as three services (React SPA, FastAPI, Neo4j over private Bolt).",
    ],
  },
  {
    name: "VedaCure",
    blurb: "Telehealth platform",
    period: "May 2025",
    stack: "Node.js · Express.js · MongoDB · React · JWT",
    links: [{ label: "Code", href: "https://github.com/kartikrana05/VedaCure" }],
    lines: [
      "Backend for a full-stack telehealth platform in Node.js, Express.js, and MongoDB, with JWT auth and encryption for sensitive medical fields.",
    ],
  },
];

export const skills = [
  { label: "Languages", items: "JavaScript · TypeScript · Python · Java · SQL · C++" },
  { label: "Frontend", items: "React.js · Next.js · HTML · CSS" },
  {
    label: "Backend",
    items:
      "Node.js · Express.js · FastAPI · Spring Boot · REST APIs · Microservices · JWT · Auth & RBAC",
  },
  {
    label: "Databases",
    items:
      "PostgreSQL · MySQL · MongoDB · Neo4j — schema design, indexing, query optimization",
  },
  {
    label: "Cloud & Infra",
    items: "AWS (S3, RDS, CloudWatch) · Docker · Vercel · Zerops · Git · Kafka · Flink · Iceberg",
  },
  { label: "AI", items: "Claude Code · Cursor · LLM APIs · RAG" },
];

export const education = {
  school: "ABES Engineering College",
  degree: "B.Tech in Computer Science",
  detail: "CGPA 7.95 / 10",
  period: "Nov 2022 — May 2026",
  place: "Ghaziabad, India",
};

export const achievements = [
  "Selected for the Sarvam AI Startup Program with a stealth startup — 10 of 353 applicants",
  "670+ DSA problems solved across platforms",
  "5-star C++ on HackerRank",
  "Global rank 5681 in TCS CodeVita",
  "ABES Prime Batch — top 60 of the cohort",
];

export const codeProfiles = [
  { label: "LeetCode", href: "https://leetcode.com/u/KARTIK_RANA/" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/CSB_22B0121038" },
  { label: "CodeChef", href: "https://www.codechef.com/users/taindua" },
];

export const motto = ["I'm not giving up today.", "I'll give up tomorrow."];

export const closing = {
  question: "What do you actually own?",
  body: "Not the ticket. The thing behind it — the schema that stops being right at 10x traffic, the pipeline that quietly costs 25x more than it should, the endpoint someone will page you about at 2am. I like work where the answer to \"who owns this?\" is a name, not a team. So far that has meant learning the whole stack rather than a slice of it, and being the person who reads the query plan.",
};
