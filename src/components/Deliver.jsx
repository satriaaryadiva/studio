import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="4. Optimasi & 5. Scale" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Setelah kampanye diluncurkan, kami terus memantau performa dan
          mengolah data untuk melakukan{" "}
          <strong className="font-semibold text-neutral-950">optimasi</strong>{" "}
          secara berkelanjutan demi hasil yang lebih baik.
        </p>
        <p>
          Kami menyempurnakan setiap aspek pemasaran berdasarkan insight nyata,
          memastikan bahwa brand Anda terus berkembang dan memiliki{" "}
          <strong className="font-semibold text-neutral-950">progres</strong>{" "}
          yang konsisten di semua saluran.
        </p>
        <p>
          Terakhir, kami mengembangkan strategi yang terbukti berhasil untuk{" "}
          <strong className="font-semibold text-neutral-950">pertumbuhan</strong>{" "}
          jangka panjang, membantu brand Anda mencapai skala yang lebih besar
          dan kesuksesan yang berkelanjutan.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Termasuk dalam fase ini
      </h3>
      <List>
        <ListItem title="Analisis Data">
          Laporan performa berkala dan wawasan mendalam untuk pengambilan
          keputusan yang lebih baik.
        </ListItem>
        <ListItem title="Penyempurnaan Konten">
          Optimasi materi kreatif berdasarkan rekaman interaksi audiens.
        </ListItem>
        <ListItem title="Skalabilitas Strategi">
          Memperluas jangkauan strategi yang sukses ke pasar atau saluran baru.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
