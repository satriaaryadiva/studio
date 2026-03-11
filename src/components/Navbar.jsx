"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import clsx from "clsx";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import { useLenis } from "@studio-freight/react-lenis";
import { MagneticButton } from "./Hero";

const Header = ({
    panelId,
    invert = false,
    icon: Icon,
    expanded,
    onToggle,
    toggleRef,
    isFloating = false
}) => {
    const content = (
        <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={"/"} aria-label="Home" className="z-50" onClick={() => expanded && onToggle()}>
                <Logo invert={invert}>Uplift Agency</Logo>
            </Link>
            <div className="flex items-center gap-x-6 md:gap-x-8 z-50">
                <MagneticButton href={"/contact"} invert={invert} className="hidden md:inline-flex py-2.5 px-6 border-white/20 hover:bg-white hover:text-black transition-colors" onClick={() => expanded && onToggle()}>
                    Contact us
                </MagneticButton>
                <button
                    ref={toggleRef}
                    type="button"
                    onClick={onToggle}
                    aria-expanded={expanded.toString()}
                    aria-controls={panelId}
                    className={clsx(
                        "group -m-2.5 rounded-full p-3 transition-colors duration-300",
                        invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
                    )}
                    aria-label="Toggle navigation"
                >
                    <Icon
                        className={clsx(
                            "h-7 w-7 transition-all duration-300 group-hover:scale-110",
                            invert
                                ? "fill-white group-hover:fill-yellow-500"
                                : "fill-neutral-950 group-hover:fill-yellow-600"
                        )}
                    />
                </button>
            </div>
        </div>
    );

    if (isFloating) {
        return (
            <div className="w-full bg-neutral-950/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-colors duration-500">
                <Container className="py-5">{content}</Container>
            </div>
        );
    }

    return <Container className="py-5">{content}</Container>;
};

const NavigationItem = ({ href, children, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
            <Link
                href={href}
                onClick={onClick}
                className="group relative inline-block text-5xl md:text-8xl font-black tracking-tighter text-white uppercase overflow-hidden"
            >
                <motion.span
                    className="inline-block transition-transform duration-500 group-hover:translate-x-6"
                >
                    {children}
                </motion.span>
                <span className="absolute left-0 bottom-2 md:bottom-4 w-full h-[2px] md:h-2 bg-yellow-600 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
        </motion.div>
    );
};

const Navigation = ({ onClick }) => {
    const links = [
        { href: "/work", label: "Our Work" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About Us" },
        { href: "/blog", label: "Blog" }
    ];

    return (
        <nav className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-24">
            {links.map((link, index) => (
                <NavigationItem key={link.href} href={link.href} index={index} onClick={onClick}>
                    {link.label}
                </NavigationItem>
            ))}
        </nav>
    );
};

const FullScreenMenu = ({ expanded, setExpanded, panelId, closeRef }) => {
    return (
        <AnimatePresence>
            {expanded && (
                <motion.div
                    id={panelId}
                    initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                    animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] bg-neutral-950 overflow-hidden flex flex-col pointer-events-auto"
                >
                    <div className="absolute inset-x-0 top-0 z-[110]">
                        <Header
                            invert={true}
                            panelId={panelId}
                            icon={IoMdClose}
                            toggleRef={closeRef}
                            expanded={expanded}
                            isFloating={true}
                            onToggle={() => setExpanded(false)}
                        />
                    </div>

                    <Container
                        className="flex-1 flex flex-col md:flex-row justify-between pt-32 pb-16 md:pb-4 overflow-y-auto overflow-x-hidden   relative z-40"
                        data-lenis-prevent="true"
                    >
                        <div className="flex-1 flex flex-col justify-center relative z-10">
                            <Navigation onClick={() => setExpanded(false)} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-24 md:mt-0 flex flex-col justify-end relative z-10"
                        >
                            <div className="mb-12">
                                <h2 className="font-display text-base font-semibold text-white/50 uppercase tracking-widest mb-6">
                                    Our offices
                                </h2>
                                <Offices
                                    invert
                                    className="grid grid-cols-1 gap-8 sm:grid-cols-2"
                                />
                            </div>
                            <div>
                                <h2 className="font-display text-base font-semibold text-white/50 uppercase tracking-widest mb-6">
                                    Follow us
                                </h2>
                                <SocialMedia className="" invert />
                            </div>
                        </motion.div>

                        {/* Decorative background element for the menu */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute -bottom-1/2 -right-1/4 w-[120vw] md:w-[60vw] h-[120vw] md:h-[60vw] rounded-full border border-yellow-600/10 pointer-events-none"
                        />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            className="absolute -bottom-1/2 -right-1/4 w-[100vw] md:w-[50vw] h-[100vw] md:h-[50vw] rounded-full border border-yellow-600/20 pointer-events-none bg-yellow-600/5 blur-3xl"
                        />

                        {/* Huge watermark */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 0.02, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden flex justify-center z-0"
                        >
                            <span className="text-[25vw] font-black uppercase tracking-tighter text-white leading-none">
                                UPLIFT
                            </span>
                        </motion.div>

                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Navbar() {
    const panelId = useId();
    const [expanded, setExpanded] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const openRef = useRef();
    const closeRef = useRef();
    const pathname = usePathname();
    const lenis = useLenis();
    const { scrollY } = useScroll();

    // Preserve initial entrance delay, but switch to snappy animation afterward
    useEffect(() => {
        const timer = setTimeout(() => setIsInitialLoad(false), 3500);
        return () => clearTimeout(timer);
    }, []);

    // Track scroll direction
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true); // Scrolling down - hide it
        } else {
            setHidden(false); // Scrolling up or near top - show it
        }
    });

    // Close menu on route change
    useEffect(() => {
        setExpanded(false);
    }, [pathname]);

    // Prevent scrolling when menu is open, handle Lenis properly
    useEffect(() => {
        if (expanded) {
            document.body.style.overflow = "hidden";
            if (lenis) lenis.stop();
        } else {
            document.body.style.overflow = "unset";
            if (lenis) lenis.start();
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "unset";
            if (lenis) lenis.start();
        };
    }, [expanded, lenis]);

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-[90] pointer-events-none">
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: hidden && !expanded ? "-100%" : "0%" }}
                    transition={isInitialLoad ? { duration: 1.2, delay: 2.2, ease: [0.76, 0, 0.24, 1] } : { duration: 0.4, ease: "easeInOut" }}
                    className="w-full pointer-events-auto"
                    aria-hidden={expanded ? "true" : undefined}
                    inert={expanded ? true : undefined}
                >
                    <Header
                        isFloating={true}
                        invert={true}
                        panelId={panelId}
                        icon={HiMenuAlt4}
                        toggleRef={openRef}
                        expanded={expanded}
                        onToggle={() => {
                            setExpanded((expanded) => !expanded);
                            window.setTimeout(() =>
                                closeRef.current?.focus({ preventScroll: true })
                            );
                        }}
                    />
                </motion.div>
            </header>

            <FullScreenMenu
                expanded={expanded}
                setExpanded={setExpanded}
                panelId={panelId}
                closeRef={closeRef}
            />
        </>
    );
}
