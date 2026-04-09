import React from "react";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import { pricingPlans } from "@/constants";
import clsx from "clsx";
import GridPattern from "./GridPattern";

const Pricing = () => {
    return (
        <div className="relative isolate mt-24 overflow-hidden bg-neutral-950 py-24 sm:mt-32 sm:py-32 lg:mt-40">
            <GridPattern
                className="absolute inset-0 -z-10 h-full w-full fill-neutral-100/5 stroke-white/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                yOffset={-256}
            />
            <Container>
                <FadeIn className="max-w-3xl">
                    <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
                        Pilih Paket yang Sesuai dengan Kebutuhan Brand Anda
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400">
                        Transparansi adalah kunci. Kami menawarkan berbagai paket fleksibel
                        untuk membantu brand Anda tumbuh di setiap tahap.
                    </p>
                </FadeIn>

                <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <FadeIn
                            key={plan.name}
                            className={clsx(
                                "relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]",
                                plan.highlight
                                    ? "bg-white text-neutral-950 ring-4 ring-white/10"
                                    : "bg-white/5 text-white ring-1 ring-white/10"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-white/10">
                                    Most Popular
                                </div>
                            )}
                            <div className="flex-1">
                                <h3 className="font-display text-lg font-semibold uppercase tracking-wider">
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex items-baseline gap-x-2">
                                    <span className="text-4xl font-bold tracking-tight">
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-sm font-semibold leading-6 opacity-70">
                                            /bulan
                                        </span>
                                    )}
                                </div>
                                <p className="mt-6 text-sm leading-7 opacity-70">
                                    {plan.description}
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <svg
                                                className={clsx(
                                                    "h-6 w-5 flex-none",
                                                    plan.highlight ? "text-white" : "text-neutral-950"
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
                                href="/contact"
                                className={clsx(
                                    "mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-200",
                                    plan.highlight
                                        ? "bg-white text-neutral-900 hover:bg-neutral-100"
                                        : "bg-neutral-950 text-white hover:bg-neutral-800"
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
