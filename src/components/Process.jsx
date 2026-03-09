import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import GridPattern from "./GridPattern";

const Process = () => {
    return (
        <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
            <SectionIntro
                eyebrow="HOW Uplift WORK"
                title="Proses kerja kami yang terstruktur untuk hasil maksimal."
            >
                <p>
                    Kami memadukan data, strategi, dan kreativitas dalam setiap langkah
                    untuk memastikan brand Anda mencapai target audiens yang tepat.
                </p>
            </SectionIntro>
            <Container className="mt-24">
                <GridList>
                    <GridListItem title="1. Diagnosa">
                        Menganalisis brand, audiens, dan performa saat ini.
                    </GridListItem>
                    <GridListItem title="2. Strategi">
                        Menyusun arah pemasaran yang jelas, relevan, dan dapat diukur.
                    </GridListItem>
                    <GridListItem title="3. Eksekusi">
                        Produksi konten, visual, iklan, dan campaign secara terarah.
                    </GridListItem>
                    <GridListItem title="4. Optimasi">
                        Mengolah data dan menyempurnakan performa.
                    </GridListItem>
                    <GridListItem title="5. Scale">
                        Mengembangkan strategi yang terbukti berhasil untuk pertumbuhan
                        jangka panjang.
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    );
};

export default Process;
