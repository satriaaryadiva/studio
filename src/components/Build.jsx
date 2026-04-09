import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="3. Eksekusi" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Berdasarkan fase strategi, kami mulai memproduksi konten, visual,
          iklan, dan campaign secara terarah untuk menghidupkan visi brand Anda.
        </p>
        <p>
          Setiap klien didampingi oleh manajer akun khusus untuk menjaga jalur
          komunikasi tetap terbuka dan memastikan setiap detail eksekusi
          berjalan sesuai dengan standar kualitas Uplift.
        </p>
        <p>
          Kami fokus pada penciptaan aset kreatif yang tidak hanya indah secara
          visual, tetapi juga efektif dalam mendorong interaksi dan konversi
          dari target audiens Anda.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Studio_clone were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;
