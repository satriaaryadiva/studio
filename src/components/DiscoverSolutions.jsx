"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";
import Noise from "./Noise";

export default function DiscoverSolutions() {
  const cards = [
    {
      title: "TENTANG KAMI",
      href: "/about",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "LAYANAN",
      href: "/services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "PROYEK KAMI",
      href: "/work",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }, {
      title: "HUBUNGI KAMI",
      href: "/contact",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="bg-theme py-20 border-t border-theme-md">
      <Container>
         
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-freight text-theme uppercase tracking-tighter mb-6"
          >
            TEMUKAN SOLUSI YANG <span className="text-[#9E8976]">SESUAI.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-theme-2 font-sans text-base md:text-lg leading-relaxed"
          >
            Pelajari lebih lanjut tentang bagaimana UPLIFT membantu Anda mendominasi pasar digital melalui strategi, visual premium, dan kampanye yang terukur.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {cards.map((card, i) => (
            <Link key={i} href={card.href} className="group block relative overflow-hidden aspect-square md:aspect-3/4 cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-full h-full relative"
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Gradient overlay for bottom text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover colored overlay */}
                <div className="absolute inset-0 bg-[#9E8976]/0 group-hover:bg-[#9E8976]/20 transition-colors duration-500" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-2xl font-black font-freight text-white uppercase tracking-widest transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {card.title}
                  </h3>
                  <div className="h-px w-0 bg-white mx-auto mt-4 group-hover:w-12 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
