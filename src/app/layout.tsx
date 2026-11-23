import type { Metadata, Viewport } from "next";
import { Homemade_Apple, Jost, Libre_Caslon_Display } from "next/font/google";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/ui/Motion";
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

const description =
  "Cindy Baird, REALTOR® with Keller Williams Realty Golden Isles — a St. Simons Island neighbor since 2000 helping buyers and sellers across St. Simons, Sea Island, Jekyll Island, Brunswick and Darien with care, creativity and coastal insight.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cindysupdate.vercel.app"),
  title: {
    default: "Cindy Baird, REALTOR® | St. Simons Island & Golden Isles Real Estate",
    template: "%s | Cindy Baird, REALTOR®",
  },
  description,
  openGraph: {
    title: "Cindy Baird, REALTOR® | Home Sweet Agent",
    description,
    type: "website",
    siteName: "Cindy Baird, REALTOR®",
    images: [{ url: "/og-st-simons-pier.jpg", width: 1200, height: 630, alt: "The St. Simons Island pier" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fbfb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${caslon.variable} ${jost.variable} ${homemade.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
        <div className="overflow-x-clip bg-salt text-ink">
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <MobileActionBar />
        </div>
        </MotionProvider>
      </body>
    </html>
  );
}
