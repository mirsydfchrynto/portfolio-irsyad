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
  description: "Senior-level portfolio of M. Irsyad Fachryanto. Specializing in high-integrity Flutter, Kotlin Native, and Next.js digital ecosystems based in Indonesia.",
  keywords: [
    "M. Irsyad Fachryanto",
    "Irsyad Architect",
    "Software Architect Indonesia",
    "Frontend Engineer Indonesia",
    "Flutter Developer Expert",
    "Kotlin Native Specialist",
    "Next.js Expert",
    "Web Performance Engineer",
    "Secure CBT Master Developer"
  ],
  authors: [{ name: "M. Irsyad Fachryanto" }],
  creator: "M. Irsyad Fachryanto",
  publisher: "M. Irsyad Fachryanto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://irsyad-architect.surge.sh",
  },
  openGraph: {
    title: "M. Irsyad Fachryanto | Full-Stack Architect",
    description: "Architecting high-integrity digital experiences with Flutter, Kotlin, and Next.js. Expert Software Engineer from Indonesia.",
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
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Irsyad Fachryanto | Full-Stack Architect",
    description: "Architecting high-integrity digital experiences with Flutter, Kotlin, and Next.js. Specialist in secure and performant applications.",
    images: ["/avatar.jpg"],
    creator: "@mirsydfchrynto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    "alternateName": "Irsyad Architect",
    "jobTitle": "Full-Stack Architect & Mobile Engineer",
    "url": "https://irsyad-architect.surge.sh",
    "image": "https://irsyad-architect.surge.sh/avatar.jpg",
    "sameAs": [
      "https://github.com/mirsydfchrynto",
      "https://instagram.com/muhammadirsyadf",
      "https://www.linkedin.com/in/mirsydfchrynto"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indonesia",
      "addressCountry": "ID"
    },
    "description": "Expert Software Architect specializing in Flutter, Kotlin, and Next.js. Creator of Secure CBT Master and Geges Smart Barber ecosystems.",
    "knowsAbout": [
      "Software Architecture",
      "Mobile Development",
      "Web Performance",
      "Flutter",
      "Next.js",
      "Firebase",
      "Cybersecurity",
      "Cloud Infrastructure"
    ]
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
