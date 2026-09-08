import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import "./globals.css";

const mono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartikrana.dev"),
  title: "Kartik Rana — Full-Stack Software Engineer",
  description:
    "Full-stack engineer shipping production systems end-to-end — REST APIs, data pipelines, and the databases underneath them. Java/Spring Boot, Node.js, FastAPI, Next.js, PostgreSQL, AWS.",
  openGraph: {
    title: "Kartik Rana — Full-Stack Software Engineer",
    description:
      "Full-stack engineer shipping production systems end-to-end. Java/Spring Boot, Node.js, FastAPI, Next.js, PostgreSQL, AWS.",
    url: "https://kartikrana.dev",
    siteName: "Kartik Rana",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Rana — Full-Stack Software Engineer",
    description: "Full-stack engineer shipping production systems end-to-end.",
  },
};

// Applied before paint so the chosen theme never flashes.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    if (t === 'light') document.documentElement.classList.add('light-pending');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <style>{`html.light-pending body { background: #f2efe9; color: #111; }`}</style>
      </head>
      <body className={mono.className}>{children}</body>
    </html>
  );
}
