import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Lebih sedikit beban, lebih fokus ke bisnis"
      >
        <p>
          Kami memastikan setiap langkah pemasaran Anda berjalan lancar sehingga
          Anda dapat berfokus pada apa yang benar-benar penting: mengembangkan
          bisnis Anda.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Strategi yang jelas">
            Setiap tindakan pemasaran didasarkan pada strategi yang terstruktur
            dan tujuan yang jelas.
          </GridListItem>
          <GridListItem title="Brand presence konsisten">
            Memastikan bahwa suara dan visual brand Anda terus hadir dan relevan
            di semua saluran.
          </GridListItem>
          <GridListItem title="Visual & storytelling kuat">
            Menceritakan kisah brand Anda dengan cara yang menarik secara visual
            dan emosional.
          </GridListItem>
          <GridListItem title="Berbasis data">
            Setiap keputusan strategis tidak hanya dari asumsi, melainkan didukung
            oleh analisis data yang komprehensif.
          </GridListItem>
          <GridListItem title="Partner kreatif andalan">
            Lebih dari sekadar agensi, kami adalah ekstensi dari tim Anda yang
            berdedikasi untuk kesuksesan.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
