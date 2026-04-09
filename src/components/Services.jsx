import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="WHAT Uplift DO?"
        title="Menyediakan solusi pemasaran omni-channel untuk pertumbuhan brand Anda."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Kami hadir untuk menyederhanakan kompleksitas, memberikan strategi
          yang tepat sasaran, dan eksekusi kreatif kelas atas.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Manajemen Media Sosial">
              Mengelola dan mengoptimalkan kehadiran brand Anda di berbagai
              platform untuk membangun audiens yang setia.
            </ListItem>
            <ListItem title="Produksi Konten (Foto & Video)">
              Menciptakan konten visual berkualitas tinggi yang menarik perhatian
              dan menceritakan kisah brand Anda.
            </ListItem>
            <ListItem title="Branding & Arahan Kreatif">
              Membangun identitas visual dan pesan brand yang kuat agar menonjol
              di pasar.
            </ListItem>
            <ListItem title="Strategi Iklan & Analisis Data">
              Merancang kampanye iklan yang tertarget dan berbasis data untuk
              memaksimalkan ROI.
            </ListItem>
            <ListItem title="Campaign & Aktivasi Offline">
              Menciptakan pengalaman tak terlupakan melalui aktivasi langsung
              yang mendekatkan audiens dengan brand.
            </ListItem>
            <ListItem title="Optimalisasi Digital & E-Commerce">
              Meningkatkan konversi dan performa penjualan melalui optimasi
              pengalaman pengguna di platform digital.
            </ListItem>
            <ListItem title="Pengembangan Website">
              Membangun website yang responsif, cepat, dan dioptimalkan (seperti
              situs yang sedang Anda lihat ini) untuk mendukung objektif bisnis.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
