import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Poppins, Epilogue } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/effects/GrainOverlay";
import Scanlines from "@/components/effects/Scanlines";
import ViewfinderCorners from "@/components/effects/ViewfinderCorners";
import RecIndicator from "@/components/effects/RecIndicator";
import LiveTicker from "@/components/effects/LiveTicker";
import Nav from "@/components/layout/Nav";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const epilogue = Epilogue({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luis E. Betancourt | Sovereign Mission Log",
    template: "%s | Luis E. Betancourt",
  },
  description:
    "La vida es un experimento y hay que documentarlo. Proven shortcuts for Latinos in Europe.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Luis E. Betancourt",
  },
  twitter: {
    card: "summary_large_image",
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
  return (
    <html
      lang="es"
      className={`${anton.variable} ${jetbrainsMono.variable} ${poppins.variable} ${epilogue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface relative">
        {/* Global HUD effects */}
        <GrainOverlay />
        <Scanlines />
        <ViewfinderCorners />
        <RecIndicator />

        <Nav />
        <main className="flex-1 pt-14">
          {children}
        </main>

        <LiveTicker />
      </body>
    </html>
  );
}
