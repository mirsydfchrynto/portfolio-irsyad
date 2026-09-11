import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Newsreader } from "next/font/google";
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

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irsyad-architect.surge.sh"),
  verification: {
    google: "44_I-FdL_RTHGcAcZbaD8ozX9ICPPf-uyvKvAHhTLo4",
  },
  title: "M. Irsyad Fachryanto | Mobile & Full-Stack Developer",
  description: "Official Portfolio of M. Irsyad Fachryanto. Mobile and full-stack software developer specializing in Flutter, Kotlin Native, Next.js, and practical AI integrations.",
  alternates: {
    canonical: "https://irsyad-architect.surge.sh",
  },
  openGraph: {
    title: "M. Irsyad Fachryanto | Mobile & Full-Stack Developer",
    description: "Personal portfolio of M. Irsyad Fachryanto. Mobile engineering, native Android integration, and high-performance web systems.",
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
    title: "M. Irsyad Fachryanto | Software Developer",
    description: "Mobile & Full-Stack Developer specializing in Flutter, Kotlin, and Next.js.",
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
    "jobTitle": "Systems & Mobile Craftsman",
    "sameAs": [
      "https://github.com/mirsydfchrynto",
      "https://instagram.com/muhammadirsyadf",
      "https://linkedin.com/in/mirsydfchrynto",
      "https://developers.google.com/profile/u/105716030488150294968"
    ],
    "description": "Muhammad Irsyad Fachryanto is a Systems & Mobile Craftsman specializing in OS-level hardware security, Flutter, Kotlin Native, Edge AI (Jetson/MediaPipe), and Next.js platforms.",
    "knowsAbout": [
      "Mobile Systems Engineering",
      "Android Kiosk Security (startLockTask)",
      "Flutter & BLoC Architecture",
      "Kotlin Native Development",
      "Edge AI & Computer Vision",
      "MediaPipe & PyTorch",
      "Next.js & React Full-Stack",
      "Hardware-Software Lockdown"
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${newsreader.variable} font-sans antialiased bg-[#F7F7F4] text-[#111215] selection:bg-[#111215] selection:text-[#F7F7F4]`}>
        {children}
      </body>
    </html>
  );
}
