import type { Metadata, Viewport } from "next";
import { Homemade_Apple, Jost, Libre_Caslon_Display } from "next/font/google";
import "./globals.css";

const caslon = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caslon",
});

const jost = Jost({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const homemade = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-homemade",
});

const title = "Cindy Baird, REALTOR® | St. Simons Island & Golden Isles Real Estate";
const description =
  "St. Simons Island real estate with a designer's eye. Cindy Baird, REALTOR® with Keller Williams Realty Golden Isles, helps buyers and sellers across St. Simons, Brunswick, Darien and the Golden Isles.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: "Cindy Baird, REALTOR® | Home Sweet Agent",
    description:
      "Golden Isles homes for sale, home valuations and downsizing guidance from a St. Simons Island REALTOR® who sees what a home could become.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caslon.variable} ${jost.variable} ${homemade.variable}`}>
      <body>{children}</body>
    </html>
  );
}
