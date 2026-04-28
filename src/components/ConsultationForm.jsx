"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const serviceOptions = [
  "Pemilik Brand / Bisnis",
  "Marketing Manager",
  "E-Commerce Seller",
  "Startup Founder",
  "Content Creator",
  "Lainnya",
];

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.115 1.532 5.843L0 23l5.293-1.507A11.933 11.933 0 0 0 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.5c-1.99 0-3.847-.58-5.407-1.578l-.387-.23-4.017 1.143 1.161-3.899-.252-.4A9.45 9.45 0 0 1 2.5 12C2.5 6.201 7.201 1.5 12 1.5S21.5 6.201 21.5 12 16.799 21.5 12 21.5z" />
      </svg>
    ),
    color: "bg-[#25D366]",
    label: "TELEPON / WHATSAPP",
    value: "0821 6510 1085",
    href: "https://wa.me/6282165101085",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: "bg-[#9E8976]",
    label: "INSTAGRAM",
    value: "@upliftcreative.co",
    href: "https://instagram.com/upliftcreative.co",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
    color: "bg-[#505F62]",
    label: "ALAMAT KANTOR",
    value: "Jalan Gatot Subroto No. 19, Medan Petisah, Sumatera Utara",
    href: null,
  },
];

function InputField({ label, name, type = "text", placeholder = "" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-theme-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-theme-md rounded-lg px-4 py-3 text-sm text-theme placeholder:text-theme-3 focus:outline-none focus:border-[#9E8976] focus:ring-1 focus:ring-[#9E8976]/20 transition-all bg-theme-input"
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-theme-3">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          defaultValue=""
          className="w-full appearance-none border border-theme-md rounded-lg px-4 py-3 text-sm text-theme bg-theme-input focus:outline-none focus:border-[#9E8976] focus:ring-1 focus:ring-[#9E8976]/20 transition-all cursor-pointer"
        >
          <option value="" disabled>Pilih satu...</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-3 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function TextareaField({ label, name, placeholder = "", rows = 3 }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-theme-3">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full border border-theme-md rounded-lg px-4 py-3 text-sm text-theme placeholder:text-theme-3 focus:outline-none focus:border-[#9E8976] focus:ring-1 focus:ring-[#9E8976]/20 transition-all bg-theme-input resize-none"
      />
    </div>
  );
}

export default function ConsultationForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="consultation" className="relative bg-theme py-24 md:py-36 overflow-hidden border-t border-theme-md">
      {/* Visual background elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#9E8976]/6 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Contact Info ── */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="inline-block text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976] mb-6"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-freight font-black uppercase tracking-tighter text-theme leading-[0.9] mb-6"
            >
              Ready to<br /><span className="text-[#9E8976]">UPLIFT</span><br />Your Brand?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-base text-theme-2 font-sans font-medium mb-12 max-w-md"
            >
              Baik Anda brand yang ingin tumbuh omnichannel atau bisnis yang butuh sistem digital terintegrasi — UPLIFT adalah mitra yang tepat.
            </motion.p>

            {/* Contact Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`${item.color} w-10 h-10 rounded-xl flex-none flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-theme-3 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-sans font-semibold text-theme hover:text-[#9E8976] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-sans font-semibold text-theme">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative lg:col-span-7 bg-theme-surface p-8 md:p-12 rounded-4xl border border-theme-md shadow-sm"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#9E8976]/10 flex items-center justify-center text-[#9E8976]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black font-freight uppercase tracking-tight text-theme mb-2">Pesan Terkirim!</h3>
                  <p className="text-sm font-sans text-theme-3 max-w-xs mx-auto">
                    Tim kami akan segera menghubungi Anda melalui kontak yang dilampirkan.
                  </p>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#9E8976] text-xs font-bold uppercase tracking-widest hover:underline mt-2"
                >
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-theme mb-1 font-freight uppercase tracking-tight">
                  Konsultasi Gratis
                </h3>
                <p className="text-sm text-theme-2 mb-8 font-sans">
                  Isi formulir dan tim kami akan menghubungi Anda via WhatsApp.
                </p>

                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get("name");
                      const brand = formData.get("brand");
                      const role = formData.get("role");
                      const message = formData.get("message");
                      
                      const text = `Halo UPLIFT! Saya ${name} dari ${brand} (${role}). %0A%0APesan: ${message}`;
                      window.open(`https://wa.me/6282165101085?text=${text}`, "_blank");
                      setSent(true);
                    }}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField label="Nama Lengkap" name="name" placeholder="Nama Anda" required />
                      <InputField label="Nama Brand / Bisnis" name="brand" placeholder="Brand Anda" required />
                    </div>

                    <InputField label="Alamat Email" name="email" type="email" placeholder="nama@company.com" required />

                    <SelectField label="Saya adalah..." name="role" options={serviceOptions} required />

                    <TextareaField
                      label="Pesan / Tujuan"
                      name="message"
                      placeholder="Ceritakan tantangan atau kebutuhan Anda..."
                      rows={4}
                      required
                    />

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group w-full flex items-center justify-center gap-4 bg-[#9E8976] hover:bg-theme text-white hover:text-[#9E8976] rounded-2xl py-5 px-8 text-sm font-sans font-black uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-[#9E8976]/30 border border-transparent hover:border-theme-md"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-none transition-transform group-hover:scale-110">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.115 1.532 5.843L0 23l5.293-1.507A11.933 11.933 0 0 0 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.5c-1.99 0-3.847-.58-5.407-1.578l-.387-.23-4.017 1.143 1.161-3.899-.252-.4A9.45 9.45 0 0 1 2.5 12C2.5 6.201 7.201 1.5 12 1.5S21.5 6.201 21.5 12 16.799 21.5 12 21.5z" />
                        </svg>
                        Kirim Pesan via WhatsApp
                        <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2 ml-auto transition-transform group-hover:translate-x-2">
                          <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                        </svg>
                      </button>
                    </div>

                  <p className="text-[10px] text-center text-theme-3 tracking-wide mt-1">
                    Konsultasi Gratis · Tanpa Ikatan · Respon 1–2 Hari Kerja
                  </p>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
