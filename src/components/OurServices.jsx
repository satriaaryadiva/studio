"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import { servicesData } from "@/constants";
import {
  HiOutlineHashtag,
  HiOutlineVideoCamera,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineTicket,
  HiOutlineRocketLaunch,
  HiOutlineCodeBracket
} from "react-icons/hi2";

const serviceIcons = {
  "social-media": <HiOutlineHashtag className="w-6 h-6" />,
  "content-production": <HiOutlineVideoCamera className="w-6 h-6" />,
  "branding": <HiOutlineSparkles className="w-6 h-6" />,
  "ads-strategy": <HiOutlineChartBar className="w-6 h-6" />,
  "offline-campaign": <HiOutlineTicket className="w-6 h-6" />,
  "digital-optimization": <HiOutlineRocketLaunch className="w-6 h-6" />,
  "web-development": <HiOutlineCodeBracket className="w-6 h-6" />,
};

export default function OurServices() {
  return (
    <section id="services" className="relative py-32 bg-theme overflow-hidden border-b border-theme-md">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-10 bg-[#9E8976]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#9E8976]">
              Our Expertise
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-theme leading-tight tracking-tight font-freight uppercase"
          >
            Capabilities
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-theme-surface border border-theme-md hover:border-[#9E8976]/50 transition-all duration-300 shadow-sm flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full bg-theme border border-theme-md flex items-center justify-center text-theme-2 mb-8 group-hover:bg-[#9E8976] group-hover:text-white group-hover:border-[#9E8976] transition-all duration-300">
                {serviceIcons[service.id]}
              </div>
              <h3 className="text-xl font-bold text-theme font-freight mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-theme-2 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#9E8976] uppercase tracking-widest group-hover:text-theme transition-colors duration-300"
              >
                Selengkapnya
                <svg viewBox="0 0 16 6" className="h-2 w-4 transition-transform group-hover:translate-x-1" fill="currentColor">
                  <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
