import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import Process from "@/components/Process";
import { StatList, StatListItem } from "@/components/StatList";
import Values from "@/components/Values";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" image={'https://images.unsplash.com/photo-1772733694354-3b4a33568ef4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title="Kekuatan kami adalah kolaborasi">
        <p>
          Kami percaya bahwa kekuatan kami terletak pada pendekatan kolaboratif,
          yang menempatkan klien kami sebagai pusat dari setiap langkah yang kami ambil.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            UPLIFT dimulai dengan visi untuk menyederhanakan kompleksitas pemasaran
            dan memberikan hasil yang nyata bagi brand di era digital. Sejak awal,
            kami berkomitmen untuk menjadi partner yang transparan dan andal.
          </p>
          <p>
            Di UPLIFT, kami lebih dari sekadar agensi — kami adalah perpanjangan
            dari tim Anda. Kami bekerja dengan dedikasi tinggi untuk memastikan
            brand Anda tidak hanya tumbuh, tapi juga mendominasi pasar.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Brands Partnered" />
          <StatListItem value="200+" label="Campaigns Launched" />
          <StatListItem value="10M+" label="Reach Generated" />
        </StatList>
        <Process/>
      </Container>
      <Values/>
      <Cultures />
    </>
  );
};

export default AboutPage;
