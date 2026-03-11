"use client";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { ReactLenis } from "@studio-freight/react-lenis";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";

const RootLayoutInner = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.12, duration: 1.2, smoothTouch: true, wheelMultiplier: 1.1, touchMultiplier: 1.5 }}>
      <Preloader />
      <CustomCursor />
      <MotionConfig transition={{ type: "spring", damping: 30, stiffness: 200 }}>

        <Navbar />

        {/* Main Content */}
        <div className="relative flex flex-auto bg-neutral-100">
          <div className="relative isolate flex w-full flex-col">
            <main className="w-full flex-auto">{children}</main>
            <Footer />
          </div>
        </div>

      </MotionConfig>
    </ReactLenis>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
