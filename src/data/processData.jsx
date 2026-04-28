"use client";

import React from "react";

export const processData = [
    {
        title: "Discovery & Research",
        content: (
            <div className="space-y-6">
                <p className="text-neutral-500 text-base leading-relaxed">
                    Kami memulai setiap proyek dengan mendalami bisnis, pasar, dan audiens Anda.
                    Fase ini memastikan kami memahami tantangan unik dan peluang pertumbuhan brand Anda.
                </p>

                {/* Stats */}
                <div className="flex gap-3 flex-wrap">
                    <div className="rounded-full bg-linear-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 px-4 py-2">
                        <span className="text-cyan-600 text-xs font-bold">50+ Brand Audits</span>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 px-4 py-2">
                        <span className="text-cyan-600 text-xs font-bold">Deep Research</span>
                    </div>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { icon: "🔍", label: "Brand Audit", desc: "Analisis kekuatan & kelemahan" },
                        { icon: "📊", label: "Market Research", desc: "Riset pasar & tren industri" },
                        { icon: "⚔️", label: "Competitor Analysis", desc: "Pemetaan kompetitor" },
                        { icon: "👥", label: "Audience Mapping", desc: "Profiling target audiens" },
                    ].map((item) => (
                        <div key={item.label} className="rounded-2xl bg-neutral-50 border border-neutral-100 p-4 hover:border-neutral-200 transition-colors">
                            <span className="text-xl mb-2 block">{item.icon}</span>
                            <p className="text-neutral-950 text-sm font-bold">{item.label}</p>
                            <p className="text-neutral-400 text-xs mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Strategy & Planning",
        content: (
            <div className="space-y-6">
                <p className="text-neutral-500 text-base leading-relaxed">
                    Berdasarkan insight dari Discovery, kami merancang strategi komprehensif
                    yang menyelaraskan tujuan bisnis dengan kebutuhan audiens.
                </p>

                {/* Stats */}
                <div className="flex gap-3 flex-wrap">
                    <div className="rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 px-4 py-2">
                        <span className="text-violet-600 text-xs font-bold">200+ Campaigns</span>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 px-4 py-2">
                        <span className="text-violet-600 text-xs font-bold">Multi-Channel</span>
                    </div>
                </div>

                {/* Checklist */}
                <div className="space-y-3">
                    {[
                        "Penentuan channel digital yang optimal",
                        "Perencanaan konten 3-6 bulan ke depan",
                        "Alokasi budget berbasis data historis",
                        "KPI & milestone yang terukur",
                    ].map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-xl bg-neutral-50 border border-neutral-100 p-4">
                            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-none mt-0.5">
                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-neutral-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Creative Execution",
        content: (
            <div className="space-y-6">
                <p className="text-neutral-500 text-base leading-relaxed">
                    Tim kreatif dan teknis kami mengeksekusi strategi dengan presisi tinggi.
                    Dari desain hingga development, setiap detail diperhatikan.
                </p>

                {/* Stats */}
                <div className="flex gap-3 flex-wrap">
                    <div className="rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 px-4 py-2">
                        <span className="text-orange-600 text-xs font-bold">Pixel Perfect</span>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 px-4 py-2">
                        <span className="text-orange-600 text-xs font-bold">Premium Output</span>
                    </div>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { icon: "🎨", label: "Creative Design", desc: "Visual yang memukau" },
                        { icon: "📹", label: "Content Production", desc: "Video, foto & copywriting" },
                        { icon: "🚀", label: "Campaign Launch", desc: "Launch yang terkoordinasi" },
                        { icon: "💻", label: "Tech Development", desc: "Web & app development" },
                    ].map((item) => (
                        <div key={item.label} className="rounded-2xl bg-neutral-50 border border-neutral-100 p-4 hover:border-neutral-200 transition-colors">
                            <span className="text-xl mb-2 block">{item.icon}</span>
                            <p className="text-neutral-950 text-sm font-bold">{item.label}</p>
                            <p className="text-neutral-400 text-xs mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Optimize & Scale",
        content: (
            <div className="space-y-6">
                <p className="text-neutral-500 text-base leading-relaxed font-medium">
                    Kami tidak berhenti di eksekusi. Setiap kampanye dimonitor secara real-time,
                    dianalisis, dan dioptimalkan untuk pertumbuhan jangka panjang.
                </p>

                {/* Stats */}
                <div className="flex gap-3 flex-wrap">
                    <div className="rounded-full bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border border-emerald-500/20 px-4 py-2">
                        <span className="text-emerald-600 text-xs font-bold">10M+ Reach</span>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border border-emerald-500/20 px-4 py-2">
                        <span className="text-emerald-600 text-xs font-bold">Real-Time Data</span>
                    </div>
                </div>

                {/* Checklist */}
                <div className="space-y-3">
                    {[
                        "A/B testing untuk optimasi konversi",
                        "Laporan performa mingguan & bulanan",
                        "Analisis ROI per channel & campaign",
                        "Iterasi strategi berdasarkan data",
                    ].map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-xl bg-neutral-50 border border-neutral-100 p-4 hover:border-neutral-200 transition-colors">
                            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center flex-none mt-0.5">
                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-neutral-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];
