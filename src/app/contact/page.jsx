"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const services = [
  "Social Media Handling",
  "Website Development",
  "Documentation & Production",
  "E-Commerce Management",
  "Event Activation",
  "Learning Class",
  "Full Omnichannel Package",
  "Not Sure Yet",
];

const budgets = [
  "< Rp 5 Juta",
  "Rp 5 – 15 Juta",
  "Rp 15 – 30 Juta",
  "Rp 30 Juta+",
];

const industries = [
  "F&B", "Fashion & Lifestyle", "Automotive",
  "Houseware & Home Living", "High-End Furniture",
  "Education", "Beauty & Wellness",
  "Industrial Equipment", "Animal Shelter / Non-Profit", "Other",
];

function FloatingField({ label, name, type = "text", as = "input", options, required }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value;

  const baseClass = "w-full bg-transparent border-b-2 border-neutral-200 pt-6 pb-2 text-sm text-neutral-900 focus:outline-none focus:border-[#9E8976] transition-colors duration-200 peer";

  if (as === "select") return (
    <div className="relative">
      <select
        id={name} name={name} required={required} value={value}
        onChange={e => setValue(e.target.value)}
        className={`${baseClass} appearance-none bg-transparent`}
      >
        <option value="" disabled hidden />
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <label htmlFor={name} className={`absolute left-0 pointer-events-none transition-all duration-200 ${active ? "top-0 text-[10px] font-bold uppercase tracking-widest text-[#9E8976]" : "top-5 text-sm text-neutral-400"}`}>{label}</label>
      <svg className="absolute right-0 top-1/2 w-4 h-4 text-neutral-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clipRule="evenodd" /></svg>
    </div>
  );

  if (as === "textarea") return (
    <div className="relative">
      <textarea
        id={name} name={name} rows={3} required={required} value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`${baseClass} resize-none`}
      />
      <label htmlFor={name} className={`absolute left-0 pointer-events-none transition-all duration-200 ${active ? "top-0 text-[10px] font-bold uppercase tracking-widest text-[#9E8976]" : "top-5 text-sm text-neutral-400"}`}>{label}</label>
    </div>
  );

  return (
    <div className="relative">
      <input
        id={name} type={type} name={name} required={required} value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={baseClass}
      />
      <label htmlFor={name} className={`absolute left-0 pointer-events-none transition-all duration-200 ${active ? "top-0 text-[10px] font-bold uppercase tracking-widest text-[#9E8976]" : "top-5 text-sm text-neutral-400"}`}>{label}</label>
    </div>
  );
}

const contacts = [
  { icon: "✉", label: "Email", value: "upliftcrtv@gmail.com", href: "mailto:upliftcrtv@gmail.com" },
  { icon: "📞", label: "WhatsApp", value: "0821 6510 1085", href: "https://wa.me/6282165101085" },
  { icon: "📍", label: "Office", value: "Jl. Gatot Subroto No. 19, Medan Petisah, Sumatera Utara", href: "https://maps.google.com/?q=Jl+Gatot+Subroto+No+19+Medan+Petisah" },
  { icon: "📷", label: "Instagram", value: "@upliftcreative.co", href: "https://instagram.com/upliftcreative.co" },
  { icon: "🎵", label: "TikTok", value: "@uplift.creative", href: "https://tiktok.com/@uplift.creative" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-theme text-theme">

      {/* ── HERO HEADER ── */}
      <PageHero
        label="Mulai Konsultasi Gratis"
        title={<>Let's Build the<br /><span className="text-[#9E8976]">Right System</span><br />for Your Brand</>}
        description="Ceritakan tantangan bisnis Anda. Tim kami akan membantu merancang ekosistem omnichannel yang tepat untuk brand Anda — baik di Medan maupun seluruh Indonesia."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
        imageAlt="UPLIFT Digital Strategy Meeting"
        badge={{ value: "24h", label: "Response Time" }}
        watermark="CONTACT"
      />

      {/* ── MAIN CONTENT ── */}
      <Container className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-10"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#505F62] mb-5">Hubungi Kami</p>
              <div className="space-y-6">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-none text-base shadow-sm">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                          className="text-sm text-neutral-800 hover:text-[#9E8976] transition-colors font-medium">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-neutral-800 font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="border-t border-neutral-300 pt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#505F62] mb-5">Jam Operasional</p>
              <div className="space-y-2 text-sm text-neutral-600">
                <div className="flex justify-between"><span>Senin – Jumat</span><span className="font-semibold text-neutral-900">09.00 – 18.00</span></div>
                <div className="flex justify-between"><span>Sabtu</span><span className="font-semibold text-neutral-900">09.00 – 14.00</span></div>
                <div className="flex justify-between"><span>Minggu</span><span className="font-semibold text-neutral-400">Tutup</span></div>
              </div>
            </div>

            {/* Response info */}
            <div className="rounded-2xl bg-[#9E8976]/10 border border-[#9E8976]/20 p-6">
              <p className="text-sm font-bold text-[#9E8976] mb-1">⚡ Respon Cepat</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Kami biasanya membalas dalam 1–2 hari kerja. Untuk kebutuhan mendesak,
                hubungi langsung via WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-neutral-200/60 p-8 md:p-12">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#9E8976]/10 flex items-center justify-center">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#9E8976]">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-black uppercase text-neutral-900 tracking-tight">Terima kasih!</h3>
                    <p className="mt-2 text-neutral-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Pesan Anda berhasil terkirim. Tim UPLIFT akan menghubungi Anda dalam 1–2 hari kerja.
                    </p>
                  </div>
                  <button onClick={() => setSent(false)} className="text-xs font-bold uppercase tracking-widest text-[#9E8976] hover:text-neutral-900 transition-colors">
                    Kirim pesan lain →
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#9E8976] mb-3">Formulir Konsultasi</p>
                    <h2 className="text-2xl md:text-3xl font-headline font-black uppercase text-neutral-900 tracking-tight leading-tight">
                      Ceritakan Kebutuhan Brand Anda
                    </h2>
                  </div>

                  <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-8">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FloatingField label="Nama Lengkap *" name="name" required />
                      <FloatingField label="Brand / Bisnis *" name="brand" required />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FloatingField label="Industri *" name="industry" as="select" required options={industries} />
                      <FloatingField label="Nomor WhatsApp *" name="phone" type="tel" required />
                    </div>

                    {/* Challenge */}
                    <FloatingField label="Tantangan / Kebutuhan Saat Ini" name="challenge" as="textarea" />

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FloatingField label="Layanan yang Dibutuhkan *" name="service" as="select" required options={services} />
                      <FloatingField label="Estimasi Budget" name="budget" as="select" options={budgets} />
                    </div>

                    {/* Target */}
                    <FloatingField label="Target Bulanan (opsional)" name="target" />

                    {/* Divider */}
                    <div className="border-t border-neutral-100 pt-8">
                      <button
                        type="submit"
                        className="w-full rounded-full bg-neutral-950 text-white py-4 px-8 text-sm font-bold uppercase tracking-widest hover:bg-[#9E8976] transition-colors duration-300 flex items-center justify-center gap-3"
                      >
                        Kirim Permintaan Konsultasi
                        <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2">
                          <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                        </svg>
                      </button>
                      <p className="text-[11px] text-center text-neutral-400 mt-4">
                        Gratis & tanpa kewajiban · Kami membalas dalam 1–2 hari kerja
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* ── MAP / LOCATION STRIP ── */}
      <div className="bg-neutral-950 py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#9E8976] mb-3">Kunjungi Kantor Kami</p>
              <p className="text-white font-bold text-lg leading-tight">Jl. Gatot Subroto No. 19</p>
              <p className="text-neutral-400 text-sm">Medan Petisah, Sumatera Utara — Indonesia</p>
            </div>
            <a
              href="https://maps.google.com/?q=Jl+Gatot+Subroto+No+19+Medan+Petisah"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-neutral-950 transition-colors duration-300 flex-none"
            >
              Buka di Google Maps
              <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2">
                <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
              </svg>
            </a>
          </div>
        </Container>
      </div>

    </main>
  );
}
