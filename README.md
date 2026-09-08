# Kartik Rana — Portfolio

Minimal, monospace, chapter-driven portfolio. Next.js 15 (App Router) + TypeScript.

## Run it

Node 18.18+ is required (it is not currently installed on this machine):

```bash
# install Node first, e.g.
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts

npm install
npm run dev        # http://localhost:3000
```

## Edit the content

All copy lives in one file: [`data/resume.ts`](data/resume.ts).
Change text there — no component edits needed.

| Export         | Drives                                    |
| -------------- | ----------------------------------------- |
| `profile`      | Name, role, intro, contact links          |
| `stats`        | The three numbers under the intro         |
| `fulltime`     | Chapter 01 — Career                       |
| `projects`     | Chapter 02 — Projects                     |
| `skills`       | Chapter 03 — Craft                        |
| `education`, `achievements`, `codeProfiles` | Chapter 04 — Groundwork |
| `closing`      | Chapter 05 — Ownership                    |

## Design tokens

Defined at the top of [`app/globals.css`](app/globals.css):

```
dark   bg #080808  text #f0f0f0  mid #aaaaaa  line #252525
light  bg #f2efe9  text #111111  mid #444444  line #c8c5bf
```

The "pixel" look is a 2px border plus two stacked hard shadows
(`2px 2px 0`, `4px 4px 0`) — see `.pixel`.

## Deploy

```bash
npx vercel        # or push to GitHub and import at vercel.com
```

Update `metadataBase` and the `openGraph.url` in [`app/layout.tsx`](app/layout.tsx)
once you have a domain.
