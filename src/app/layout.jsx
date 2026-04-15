import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";

// Poppins — body & UI font (brand guideline)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

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
      className={`${poppins.variable} h-full antialiased overflow-x-hidden bg-neutral-50 dark:bg-black`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-hidden w-full m-0 p-0 max-w-full mx-2 sm:mx-6 md:mx-10 lg:mx-14 bg-theme">
        {/*
          Anti-flash script: reads saved theme from localStorage and
          applies data-theme to <html> BEFORE the first paint so users
          never see a flash of the wrong theme.
          strategy="beforeInteractive" runs it during SSR/hydration.
        */}
        <Script
          id="uplift-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('uplift-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
