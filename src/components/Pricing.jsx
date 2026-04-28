import React from "react";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import { pricingPlans } from "@/constants";
import clsx from "clsx";
import GridPattern from "./GridPattern";

const Pricing = () => {
    return (
        <div className="relative isolate mt-0 overflow-hidden bg-theme-muted py-24   border-y border-theme-md">
            <GridPattern
                className="absolute inset-0 -z-10 h-full w-full fill-[#9E8976]/3 stroke-theme-md [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                yOffset={-256}
            />
            <Container>
                <FadeIn className="max-w-3xl">
                    <h2 className="font-freight text-4xl font-black tracking-tighter text-theme uppercase sm:text-5xl">
                        Pilih Paket yang Sesuai dengan Kebutuhan Brand Anda
                    </h2>
                    <p className="mt-6 text-lg text-theme-2 font-sans leading-relaxed">
                        Transparansi adalah kunci. Kami menawarkan berbagai paket fleksibel
                        untuk membantu brand Anda tumbuh di setiap tahap.
                    </p>
                </FadeIn>

                <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <FadeIn
                            key={plan.name}
                            className={clsx(
                                "relative flex flex-col rounded-3xl p-8 transition-all duration-300",
                                plan.highlight
                                    ? "bg-[#9E8976] text-white ring-4 ring-[#9E8976]/20 shadow-2xl shadow-[#9E8976]/20"
                                    : "bg-theme-surface text-theme ring-1 ring-theme-md hover:ring-[#9E8976]/30"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-theme px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#9E8976] border border-theme-md">
                                    Most Popular
                                </div>
                            )}
                            <div className="flex-1">
                                <h3 className="font-freight text-lg font-black uppercase tracking-wider">
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex items-baseline gap-x-2">
                                    <span className="text-4xl font-black font-freight tracking-tight">
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-sm font-sans font-semibold leading-6 opacity-60">
                                            /bulan
                                        </span>
                                    )}
                                </div>
                                <p className="mt-6 text-sm leading-7 opacity-60 font-sans">
                                    {plan.description}
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 font-sans">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <svg
                                                className={clsx(
                                                    "h-6 w-5 flex-none",
                                                    plan.highlight ? "text-white" : "text-[#9E8976]"
                                                )}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={`https://wa.me/6282165101085?text=Halo UPLIFT! Saya tertarik dengan Paket ${plan.name}. Bisa bantu jelaskan lebih lanjut?`}
                                target="_blank"
                                rel="noreferrer"
                                className={clsx(
                                    "mt-8 block rounded-full px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest transition-all duration-500",
                                    plan.highlight
                                        ? "bg-white text-[#9E8976] hover:bg-theme-muted hover:scale-[1.02]"
                                        : "bg-[#9E8976] text-white hover:bg-[#827163] hover:scale-[1.02] shadow-lg shadow-[#9E8976]/20"
                                )}
                            >
                                {plan.cta}
                            </a>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </Container>
        </div>
    );
};

export default Pricing;
