"use client";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { ReactLenis } from "@studio-freight/react-lenis";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import { ThemeProvider } from "./ThemeContext";

import { motion } from "framer-motion";

const WhatsAppFloating = () => {
  return (
    <motion.a
      href="https://wa.me/6282165101085"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, translateY: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
      className="fixed bottom-8 right-8 z-100 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#20ba59] transition-colors duration-300 group"
      aria-label="WhatsApp"
    >
      <div className="absolute -top-12 right-0 hidden group-hover:block whitespace-nowrap rounded-lg bg-theme-surface px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#25D366] border border-[#25D366]/20 shadow-xl">
        Chat with us
      </div>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.115 1.532 5.843L0 23l5.293-1.507A11.933 11.933 0 0 0 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.5c-1.99 0-3.847-.58-5.407-1.578l-.387-.23-4.017 1.143 1.161-3.899-.252-.4A9.45 9.45 0 0 1 2.5 12C2.5 6.201 7.201 1.5 12 1.5S21.5 6.201 21.5 12 16.799 21.5 12 21.5z" />
      </svg>
    </motion.a>
  );
};

const RootLayoutInner = ({ children }) => {
  return (
    <ThemeProvider>
      <ReactLenis root options={{ lerp: 0.12, duration: 1.2, smoothTouch: true, wheelMultiplier: 1.1, touchMultiplier: 1.5 }}>
        <Preloader />
        <CustomCursor />
        <MotionConfig transition={{ type: "spring", damping: 30, stiffness: 200 }}>

          <Navbar />

          <WhatsAppFloating />

          {/* Main Content */}
          <div className="relative flex flex-auto bg-theme">
            <div className="relative isolate flex w-full flex-col">
              <main className="w-full flex-auto">{children}</main>
              <Footer />
            </div>
          </div>

        </MotionConfig>
      </ReactLenis>
    </ThemeProvider>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
