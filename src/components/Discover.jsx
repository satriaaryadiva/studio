import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="1. Diagnosa & 2. Strategi" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Kami bekerja sama erat dengan klien kami untuk memahami{" "}
          <strong className="font-semibold text-neutral-950">kebutuhan</strong> dan
          tujuan mereka, menganalisis audiens, dan performa brand saat ini.
        </p>
        <p>
          Tim ahli kami melakukan riset mendalam untuk menemukan peluang yang
          terlewatkan dan menyusun arah pemasaran yang{" "}
          <strong className="font-semibold text-neutral-950">jelas</strong>,
          relevan, dan dapat diukur untuk pertumbuhan jangka panjang.
        </p>
        <p>
          Setelah audit penuh selesai, kami kembali dengan sebuah{" "}
          <strong className="font-semibold text-neutral-950">rencana</strong> komprehensif
          yang mencakup strategi konten, periklanan, dan aktivasi.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Termasuk dalam fase ini
      </h3>
      <TagList className="mt-4">
        <TagListItem>Analisis Brand & Audiens</TagListItem>
        <TagListItem>Studi Kelayakan & Riset Pasar</TagListItem>
        <TagListItem>Penyusunan Roadmap Strategis</TagListItem>
        <TagListItem>Penentuan KPI & Target</TagListItem>
        <TagListItem>Audit Performa Digital</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
