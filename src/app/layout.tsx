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
  metadataBase: new URL("https://irsyad-architect.surge.sh"),
  verification: {
    google: "44_I-FdL_RTHGcAcZbaD8ozX9ICPPf-uyvKvAHhTLo4",
  },
  title: "M. Irsyad Fachryanto | Full-Stack Architect & Mobile Engineer",
  description: "Official Portfolio of M. Irsyad Fachryanto. 6th-semester Computer Science Student at Universitas Harkat Negeri Tegal (GPA 3.92). Specialist in Flutter, Kotlin Native, and Next.js.",
  alternates: {
    canonical: "https://irsyad-architect.surge.sh",
  },
  openGraph: {
    title: "M. Irsyad Fachryanto | Digital Architecture & Engineering",
    description: "Personal archive and portfolio of M. Irsyad Fachryanto. Engineering high-integrity digital ecosystems.",
    url: "https://irsyad-architect.surge.sh",
    siteName: "M. Irsyad Fachryanto Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "M. Irsyad Fachryanto Portfolio",
      },
    ],
    locale: "id_ID",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Irsyad Fachryanto",
    description: "Software Architect & Computer Science Student. Specialist in Secure Systems.",
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
    "givenName": "Irsyad",
    "familyName": "Fachryanto",
    "url": "https://irsyad-architect.surge.sh",
    "image": "https://irsyad-architect.surge.sh/avatar.jpg",
    "jobTitle": "Full-Stack Architect & Mobile Engineer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas Harkat Negeri Tegal",
      "sameAs": "https://harkat.ac.id" 
    },
    "sameAs": [
      "https://github.com/mirsydfchrynto",
      "https://instagram.com/muhammadirsyadf",
      "https://linkedin.com/in/mirsydfchrynto",
      "https://developers.google.com/profile/u/105716030488150294968"
    ],
    "description": "M. Irsyad Fachryanto is a high-achieving Computer Science student (GPA 3.92) and Software Architect specializing in secure mobile and web ecosystems.",
    "knowsAbout": [
      "Software Engineering",
      "Mobile App Development",
      "Flutter",
      "Kotlin",
      "Next.js",
      "Cybersecurity",
      "Full-Stack Development"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://irsyad-architect.surge.sh"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 (GA4) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-44_I-FdL_RTHGcAcZbaD8ozX9ICPPf-uyvKvAHhTLo4`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-44_I-FdL_RTHGcAcZbaD8ozX9ICPPf-uyvKvAHhTLo4', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
