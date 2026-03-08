import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="5 Langkah Menuju Pertumbuhan Brand">
        <p>
          Proses kami dirancang untuk memastikan transparansi, efisiensi, dan
          hasil yang dapat diukur di setiap tahap perjalanan brand Anda.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
    </>
  );
};

export default ProcessPage;
