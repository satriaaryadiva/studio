import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Amazon Clone", href: "/work/amazonclone" },
      { title: "Bazar App", href: "/work/bazar" },
      { title: "Blog 101", href: "/work/blog101" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "IDR 2.500.000",
    description: "Cocok untuk UMKM yang baru memulai digital presence.",
    features: [
      "Manajemen 1 Media Sosial",
      "8 Konten Desain/Bulan",
      "Caption & Hashtag Strategi",
      "Laporan Performa Bulanan",
    ],
    cta: "Pilih Paket",
    highlight: false,
  },
  {
    name: "Growth",
    price: "IDR 5.000.000",
    description: "Solusi lengkap untuk brand yang ingin berkembang pesat.",
    features: [
      "Manajemen 3 Media Sosial",
      "15 Konten Desain & 4 Reels/Bulan",
      "Ads Management (FB/IG)",
      "Daily Engagement",
      "Detailed Analytics Report",
    ],
    cta: "Pilih Paket",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "Strategi omni-channel khusus untuk bisnis skala besar.",
    features: [
      "Full Omni-Channel Management",
      "Unlimited Konten & Video Produksi",
      "Campaign & Aktivasi Offline",
      "Website Maintenance",
      "Dedicated Creative Director",
    ],
    cta: "Hubungi Kami",
    highlight: false,
  },
];

export const servicesData = [
  {
    id: "social-media",
    title: "Manajemen Media Sosial",
    description: "Membangun kehadiran digital yang kuat, konsisten, dan bermakna.",
    details: "Di era digital saat ini, media sosial bukan hanya tentang 'ada', tapi tentang membangun koneksi. Kami mengelola akun media sosial Anda (Instagram, TikTok, Facebook) dengan pendekatan strategis yang berfokus pada hasil.",
    whyItMatters: "80% keputusan pembelian saat ini dipengaruhi oleh apa yang audiens lihat di media sosial. Tanpa manajemen yang tepat, brand Anda kehilangan potensi pertumbuhan yang masif.",
    features: [
      "Pengembangan Strategy & Brand Voice khusus Media Sosial.",
      "Monthly Content Planning & Creative Storyboarding.",
      "Professional Graphic Design & Motion Asset.",
      "High-Engaging Copywriting (Indonesian & English).",
      "Community Management: Membalas komentar & DM secara proaktif.",
      "Social Media Advertising (Meta Ads) untuk jangkauan lebih luas.",
      "In-depth Monthly Analytics: Mengevaluasi performa & menyesuaikan strategi.",
    ],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1074",
    mission: "Membangun ekosistem digital yang organik dan berkelanjutan bagi brand Anda.",
    challenge: "Algoritma yang terus berubah dan persaingan perhatian audiens yang sangat ketat.",
    secondaryImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1170",
    whyItMattersList: [
      {
        title: "Peningkatan Brand Awareness",
        description: "Menjangkau ribuan calon pelanggan baru setiap harinya secara konsisten."
      },
      {
        title: "Membangun Loyalitas Komunitas",
        description: "Mengubah followers menjadi pendukung setia brand (brand advocates)."
      },
      {
        title: "Data-Driven Insights",
        description: "Memahami perilaku konsumen secara real-time melalui analisis data media sosial."
      },
      {
        title: "Integrasi Omni-Channel",
        description: "Memastikan pesan brand seragam di seluruh platform digital."
      }
    ],
  },
  {
    id: "content-production",
    title: "Produksi Konten (Foto & Video)",
    description: "Visual premium yang tidak hanya cantik, tapi juga menjual.",
    details: "Konten adalah 'wajah' dari brand Anda. Kami memproduksi aset visual berkualitas tinggi yang dirancang khusus untuk menarik perhatian dalam hitungan detik dan menceritakan nilai brand secara mendalam.",
    whyItMatters: "Otak manusia memproses konten visual 60.000 kali lebih cepat daripada teks. Visual yang lemah berarti pesan brand Anda akan terabaikan.",
    features: [
      "Product Photography: Foto katalog, lifestyle, hingga high-end editorial.",
      "Video Reels & TikTok Production: Viral-oriented & trend-aware content.",
      "Video Profil Perusahaan & Storytelling Brand.",
      "Food & Beverage Styling & Photography.",
      "Post-Production: Professional Color Grading & Sound Engineering.",
      "Motion Graphics & 2D/3D Animation.",
      "Talent Scouting & Location Scouting.",
    ],
    image: "https://images.unsplash.com/photo-1492691523567-307300458bb9?auto=format&fit=crop&q=80&w=1170",
    mission: "Mengubah ide menjadi mahakarya visual yang menggerakkan audiens.",
    challenge: "Overload informasi visual yang membuat audiens cepat bosan.",
    secondaryImage: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1171",
    whyItMattersList: [
      {
        title: "Daya Tarik Instant",
        description: "Menangkap perhatian audiens dalam 3 detik pertama."
      },
      {
        title: "Kredibilitas Brand",
        description: "Visual premium membangun kepercayaan seketika."
      },
      {
        title: "Storytelling Emosional",
        description: "Menyampaikan pesan yang sulit diungkapkan dengan kata-kata."
      }
    ],
  },
  {
    id: "branding",
    title: "Branding & Arahan Kreatif",
    description: "Menciptakan identitas yang membekas dan sulit dilupakan.",
    details: "Logo hanyalah sebagian kecil dari branding. Kami membantu Anda merumuskan fondasi brand, mulai dari visi, misi, persona, hingga identitas visual yang koheren di setiap titik sentuh konsumen.",
    mission: "Mendefinisikan esensi unik dari brand Anda agar stand out di pasar.",
    challenge: "Pasar yang jenuh dengan brand yang terlihat serupa.",
    secondaryImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1064",
    features: [
      "Brand Core Strategy: Visi, Misi, & Brand DNA.",
      "Visual Identity Systems: Logo, Tipografi, & Palet Warna.",
      "Graphic Standard Manual (GSM) sebagai panduan penggunaan brand.",
      "Brand Tone of Voice & Messaging Strategy.",
      "Packaging Design: Desain kemasan yang fungsional & estetik.",
      "Collateral Design: Kartu nama, menu, invoice, hingga merchandise.",
      "Re-branding Strategy untuk brand yang ingin melakukan penyegaran.",
    ],
    whyItMattersList: [
      {
        title: "Diferensiasi Pasar",
        description: "Membedakan brand Anda dari pesaing secara tajam."
      },
      {
        title: "Koneksi Emosional",
        description: "Membangun ikatan batin dengan audiens target."
      },
      {
        title: "Nilai Jual Lebih Tinggi",
        description: "Brand yang kuat memungkinkan penetapan harga premium."
      }
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1064",
  },
  {
    id: "ads-strategy",
    title: "Strategi Iklan & Analisis Data",
    description: "Meningkatkan ROI dengan iklan yang presisi dan berbasis data.",
    details: "Iklan bukan tentang menghabiskan budget, tapi tentang investasi yang menghasilkan. Kami merancang kampanye iklan digital yang tertarget secara presisi untuk menjangkau audiens ideal Anda.",
    whyItMatters: "Tanpa strategi yang tepat, iklan digital hanya akan menjadi pemborosan biaya. Analisis data memastikan setiap Rupiah yang Anda keluarkan memberikan dampak nyata.",
    features: [
      "Audience Persona Research & Segmentation.",
      "Meta Ads (FB/IG) & Google Ads Management.",
      "TikTok Ads & Marketplace Ads Execution.",
      "Funnel Marketing Strategy: Awareness, Consideration, Conversion.",
      "A/B Testing: Menguji konten & audiens terbaik.",
      "Remarketing Campaign: Menjangkau kembali calon pembeli yang ragu.",
      "Conversion Tracking & Attribution Modeling.",
    ],
    mission: "Memastikan investasi iklan Anda menghasilkan konversi maksimal.",
    challenge: "Biaya per klik yang semakin tinggi dan targeting yang kurang akurat.",
    secondaryImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1170",
    whyItMattersList: [
      {
        title: "Efisiensi Budget",
        description: "Mengurangi pemborosan biaya pada audiens yang tidak relevan."
      },
      {
        title: "Skalabilitas Bisnis",
        description: "Iklan yang sukses adalah mesin pertumbuhan yang bisa ditingkatkan (scaled)."
      },
      {
        title: "Keputusan Berbasis Data",
        description: "Bukan menebak-nebak, tapi beraksi berdasarkan fakta angka."
      }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1115",
  },
  {
    id: "offline-campaign",
    title: "Campaign & Aktivasi Offline",
    description: "Mendekatkan brand dengan audiens melalui pengalaman nyata.",
    details: "Di tengah gempuran digital, interaksi fisik memberikan kedekatan emosional yang tak tergantikan. Kami membantu merancang aktivasi offline yang inovatif dan terintegrasi dengan strategi digital Anda.",
    mission: "Menciptakan momen 'wow' yang berkesan di hati konsumen.",
    challenge: "Kesulitan mengukur dampak nyata dari aktivitas offline.",
    secondaryImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1112",
    features: [
      "Concept Development untuk Event & Pop-up Store.",
      "On-ground Activation & Brand Experience Design.",
      "KOL/Influencer Management untuk aktivasi offline.",
      "Sponsorship & Partnership Strategy.",
      "Creative Installations & Photo Spots.",
      "Merchandise & Giveaway Strategy.",
      "Digital-to-Offline Funnel Tracking.",
    ],
    whyItMattersList: [
      {
        title: "Kedekatan Emosional",
        description: "Membangun kepercayaan melalui interaksi tatap muka."
      },
      {
        title: "Konten User-Generated",
        description: "Aktivasi menarik mendorong audiens berfoto dan share ke media sosial."
      },
      {
        title: "Loyalitas Jangka Panjang",
        description: "Pengalaman nyata menciptakan ikatan yang lebih kuat daripada sekadar iklan."
      }
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: "digital-optimization",
    title: "Optimalisasi Digital & E-Commerce",
    description: "Memaksimalkan performa toko online dan pengalaman pengguna.",
    details: "Traffic yang tinggi tidak berarti jika konversi rendah. Kami menganalisis dan mengoptimalkan setiap langkah perjalanan pelanggan di platform digital Anda untuk memastikan proses pembelian yang semulus mungkin.",
    mission: "Menghapus setiap hambatan yang menghalangi calon pembeli untuk bertransaksi.",
    challenge: "User experience yang rumit menyebabkan 'cart abandonment'.",
    secondaryImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1171",
    features: [
      "Marketplace Shop Optimization (Shopee, Tokopedia, TikTok Shop).",
      "UX/UI Audit: Mengevaluasi hambatan pembelian di website/app.",
      "Landing Page Optimization (LPO) untuk kampanye spesifik.",
      "Conversion Rate Optimization (CRO) Strategy.",
      "Customer Journey Mapping & Analysis.",
      "SEO Audit & Strategy untuk visibilitas organik.",
      "E-commerce Operational Consulting.",
    ],
    whyItMattersList: [
      {
        title: "Peningkatan Konversi",
        description: "Meningkatkan penjualan dari jumlah traffic yang sama."
      },
      {
        title: "Efisiensi Operasional",
        description: "Proses yang mulus mengurangi beban customer service."
      },
      {
        title: "Keunggulan Kompetitif",
        description: "Toko online yang user-friendly akan selalu menang dari yang lambat."
      }
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: "web-development",
    title: "Pengembangan Website",
    description: "Rumah digital berperforma tinggi untuk bisnis modern.",
    details: "Website Anda adalah aset digital terpenting. Kami membangun website yang cepat, aman, responsif, dan dirancang khusus untuk mendukung tujuan bisnis Anda, baik itu untuk branding maupun penjualan.",
    mission: "Menciptakan standar baru website bisnis yang elegan dan fungsional.",
    challenge: "Website lambat dan tidak mobile-friendly membuat pengunjung pergi cepat.",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1115",
    features: [
      "Custom Company Profile & Landing Page Development.",
      "E-commerce Website (Shopify, Custom CMS) Integration.",
      "Performance Optimization: Load time di bawah 2 detik.",
      "Responsive Design: Tampilan sempurna di semua perangkat.",
      "SEO-Ready Architecture & Metadata Setup.",
      "Maintenance & Security Update berkala.",
      "Data Analytics & Hotjar Integration.",
    ],
    whyItMattersList: [
      {
        title: "Kredibilitas Profesional",
        description: "Website modern mencerminkan kualitas bisnis Anda."
      },
      {
        title: "Otoritas Digital",
        description: "Memiliki tempat kontrol penuh atas data dan pesan brand Anda."
      },
      {
        title: "Optimasi SEO",
        description: "Muncul di halaman pertama Google untuk kata kunci relevan."
      }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1172",
  },
];
