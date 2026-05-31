import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Irsyad Fachryanto | Full-Stack Architect & Mobile Engineer",
  description: "Senior-level portfolio of M. Irsyad Fachryanto. Specializing in high-integrity Flutter, Kotlin Native, and Next.js digital ecosystems.",
  keywords: ["Software Architect", "Frontend Engineer", "Flutter Developer", "Kotlin Native", "Next.js Expert", "Web Performance"],
  authors: [{ name: "M. Irsyad Fachryanto" }],
  openGraph: {
    title: "M. Irsyad Fachryanto | Full-Stack Architect",
    description: "Architecting high-integrity digital experiences with Flutter, Kotlin, and Next.js.",
    url: "https://irsyad-architect.surge.sh",
    siteName: "Irsyad Architect Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "M. Irsyad Fachryanto Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Irsyad Fachryanto | Full-Stack Architect",
    description: "Architecting high-integrity digital experiences with Flutter, Kotlin, and Next.js.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "M. Irsyad Fachryanto",
    "jobTitle": "Full-Stack Architect & Mobile Engineer",
    "url": "https://irsyad-architect.surge.sh",
    "sameAs": [
      "https://github.com/mirsydfchrynto",
      "https://instagram.com/muhammadirsyadf"
    ],
    "knowsAbout": ["Flutter", "Kotlin", "Next.js", "Software Architecture", "NoSQL Optimization"]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#060608] text-white selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
