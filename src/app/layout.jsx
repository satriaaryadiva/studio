import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Instrument_Sans, Instrument_Serif, DM_Serif_Display } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-freight",
});

export const metadata = {
  title: {
    template: "Uplift",
    default: "Uplift",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${dmSerifDisplay.variable} h-full bg-neutral-950 text-base antialiased text-neutral-100`}
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
