import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Poppins } from "next/font/google";

// Poppins — body & UI font (brand guideline)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

// NOTE: Orinoe (headline font) is loaded via @font-face in base.css
// Place Orinoe.woff2 in src/fonts/ to activate it.

export const metadata = {
  title: {
    template: "%s | UPLIFT Agency",
    default: "UPLIFT Agency — Omnichannel Marketing Agency in Medan",
  },
  description:
    "UPLIFT is an omnichannel marketing agency based in Medan. From social media, website development, and content production to e-commerce and event activation.",
  keywords: ["creative agency Medan", "digital marketing Medan", "omnichannel agency", "based in Medan"],
};

export default function Layout({ children }) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden w-full m-0 p-0 max-w-full">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
