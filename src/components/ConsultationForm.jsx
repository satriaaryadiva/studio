"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const serviceOptions = ["Social Media Handling","Website Development","Documentation & Production","E-Commerce Management","Event Activation","Learning Class","Full Omnichannel Package","Not Sure Yet"];
const budgetOptions = ["< Rp 5 Juta","Rp 5 – 15 Juta","Rp 15 – 30 Juta","Rp 30 Juta+"];
const industryOptions = ["F&B","Fashion & Lifestyle","Automotive","Houseware & Home Living","High-End Furniture","Education","Beauty & Wellness","Industrial Equipment","Animal Shelter / Non-Profit","Other"];

function Field({ label, name, type = "text", as = "input", options }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value;

  const base = "w-full bg-transparent border border-white/10 rounded-2xl px-5 text-sm text-white focus:outline-none focus:border-[#9E8976] transition-all duration-300 placeholder:text-transparent";

  if (as === "select") return (
    <div className="relative group">
      <select
        id={name} name={name} value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`${base} pt-7 pb-2.5 appearance-none cursor-pointer`}
      >
        <option value="" disabled hidden />
        {options.map(o => <option key={o} value={o} className="bg-neutral-900 text-white">{o}</option>)}
      </select>
      <label htmlFor={name} className={`absolute left-5 pointer-events-none transition-all duration-300 ${active ? "top-2.5 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#9E8976]" : "top-5 text-white/30 text-sm"}`}>{label}</label>
      <svg className={`absolute right-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-all duration-300 pointer-events-none ${active ? 'text-[#9E8976]' : 'text-white/20'}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clipRule="evenodd" /></svg>
    </div>
  );

  if (as === "textarea") return (
    <div className="relative group">
      <textarea
        id={name} name={name} rows={3} value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`${base} pt-8 pb-4 resize-none`}
        placeholder=" "
      />
      <label htmlFor={name} className={`absolute left-5 pointer-events-none transition-all duration-300 ${active ? "top-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#9E8976]" : "top-6 text-white/30 text-sm"}`}>{label}</label>
    </div>
  );

  return (
    <div className="relative group">
      <input
        id={name} name={name} type={type} value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`${base} pt-7 pb-2.5`}
        placeholder=" "
      />
      <label htmlFor={name} className={`absolute left-5 pointer-events-none transition-all duration-300 ${active ? "top-2.5 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#9E8976]" : "top-5 text-white/30 text-sm"}`}>{label}</label>
    </div>
  );
}

export default function ConsultationForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="consultation" className="bg-neutral-950 py-28 md:py-44 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-10 bg-[#9E8976]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter font-freight uppercase"
            >
              Let's Build the <br />
              <span className="text-[#9E8976]">Right System</span> <br />
              for Your Brand!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 text-base text-white/40 leading-relaxed font-sans max-w-md"
            >
              Ceritakan tantangan bisnis Anda. Tim kami akan membantu memetakan sistem omnichannel yang tepat untuk brand Anda tumbuh lebih cepat dan terukur.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 space-y-6"
            >
              {[
                { label: "Email", value: "upliftcrtv@gmail.com", href: "mailto:upliftcrtv@gmail.com" },
                { label: "Phone", value: "0821 6510 1085", href: "tel:+6282165101085" },
                { label: "Instagram", value: "@upliftcreative.co", href: "https://instagram.com/upliftcreative.co" },
                { label: "Address", value: "Jl. Gatot Subroto No. 19, Medan, Sumatera Utara" },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col gap-1">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#9E8976]/60">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-white hover:text-[#9E8976] transition-colors font-sans text-sm md:text-base">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white/80 font-sans text-sm md:text-base">{item.value}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 md:p-12">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-[#9E8976]/10 flex items-center justify-center text-[#9E8976]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white font-freight uppercase tracking-tight mb-2">Terima Kasih!</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">Kami telah menerima permintaan Anda. Tim kami akan menghubungi dalam waktu 1–2 hari kerja.</p>
                  </div>
                  <button onClick={() => setSent(false)} className="text-[#9E8976] text-xs font-bold uppercase tracking-widest hover:underline mt-4">Kirim formulir baru</button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Nama Lengkap *" name="name" />
                    <Field label="Nama Brand / Bisnis *" name="brand" />
                  </div>
                  <Field label="Industri *" name="industry" as="select" options={industryOptions} />
                  <Field label="Tantangan Saat Ini" name="challenge" as="textarea" />
                  <Field label="Layanan yang Dibutuhkan *" name="service" as="select" options={serviceOptions} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Target Bulanan" name="target" />
                    <Field label="Estimasi Budget" name="budget" as="select" options={budgetOptions} />
                  </div>
                  <Field label="Nomor WhatsApp *" name="phone" type="tel" />
                  
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group relative w-full rounded-2xl bg-[#9E8976] text-white py-5 px-8 text-xs font-sans font-bold uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#9E8976]/30"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Kirim Permintaan Konsultasi
                        <svg viewBox="0 0 16 6" className="h-2 w-4 transition-transform group-hover:translate-x-1.5" fill="currentColor">
                          <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
                    </button>
                  </div>
                  
                  <p className="text-[10px] text-center text-white/20 mt-6 tracking-wide">
                    Konsultasi Gratis · Tanpa Ikatan · Respon dalam 1–2 hari kerja
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
