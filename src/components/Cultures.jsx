import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Menyeimbangkan kreativitas dengan hasil yang nyata."
        invert
      >
        <p>
          Kami adalah tim profesional yang berbagi nilai-nilai inti yang sama:
          integritas, inovasi, dan fokus pada pertumbuhan.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Strategi Terukur" invert>
            Kami tidak hanya berkreasi, kami memastikan setiap langkah didukung
            oleh data dan tujuan yang jelas.
          </GridListItem>
          <GridListItem title="Kreativitas Tanpa Batas" invert>
            Mendorong batas-batas visual dan storytelling untuk membuat brand
            Anda menonjol.
          </GridListItem>
          <GridListItem title="Inovasi Data" invert>
            Memanfaatkan teknologi terbaru untuk memberikan insight yang mendalam
            dan hasil yang optimal.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
