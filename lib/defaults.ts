import type { ContentDoc } from "./types";
import { PHOTOS } from "./media";

export const defaultContent: ContentDoc = {
  site: {
    phoneDisplay: "(0264) 8330330",
    phoneHref: "tel:+622648330330",
    email: "marketing@primausahamitraabadi.com",
    whatsappDisplay: "+62 857-5463-7579",
    whatsappDigits: "6285754637579",
    address:
      "Jl. Raya By Pass Jomin No. 88, RT 001/002, Kel. Jomin, Karawang — Jawa Barat",
  },
  hero: {
    home: {
      eyebrow: "Strive For Excellence · Member of UJB Group",
      title: "Karoseri & Fabrikasi",
      highlight: "Tangki BBM",
      intro:
        "Vendor resmi Pertamina untuk Mobil Tangki BBM, UGT / Tangki Pendam UL 1746, AST (Above Ground Storage Tank) Modular, Tangki Kimia, dan support unit pertambangan sejak 2001.",
    },
    about: {
      title: "Mengenal",
      highlight: "PUMA Engineering",
      intro:
        "Vendor resmi Pertamina untuk Mobil Tangki BBM, UGT UL 1746, AST Modular, Tangki Kimia, dan support unit pertambangan sejak 2001.",
    },
    products: {
      title: "Katalog Produk",
      highlight: "Karoseri & Tangki",
      intro:
        "Mobil Tangki BBM Pertamina, UGT UL 1746, AST Modular, Tangki Kimia, support unit pertambangan, serta karoseri niaga Wingbox, Semi Trailer, dan Losbak.",
    },
    insight: {
      title: "Insight &",
      highlight: "Industry Notes",
      intro:
        "Artikel teknis seputar fabrikasi tangki BBM Pertamina, UGT UL 1746, AST Modular, tangki kimia, dan support unit pertambangan.",
    },
    contact: {
      title: "Konsultasi",
      highlight: "Engineer Kami.",
      intro:
        "Tim engineer PUMA siap memberikan solusi terbaik untuk kebutuhan tangki BBM, UGT UL 1746, AST Modular, dan support unit pertambangan Anda.",
    },
  },
  products: [
    {
      id: "01",
      title: "Mobil Tangki BBM Pertamina",
      subTitle: "Pertamina Vendor List",
      tag: "Pertamina Standard",
      description:
        "Fabrikasi mobil tangki Bahan Bakar Minyak (BBM) sesuai standar vendor list Pertamina. Cocok untuk distribusi dari TBBM, depo, hingga SPBU di seluruh Indonesia.",
      iconKey: "Truck",
      spec: "Static Grounding · Vapor Recovery",
      image: PHOTOS.tankBBMWarm,
      features: [
        "Pertamina Spec Compliance",
        "Static Grounding System",
        "Vapor Recovery System",
        "High-Safety Valves",
      ],
    },
    {
      id: "02",
      title: "UGT / Tangki Pendam UL 1746",
      subTitle: "Underground Storage Tank · Double Wall",
      tag: "Underground Storage Tank",
      description:
        "Underground tank double wall bersertifikasi UL 1746 untuk SPBU, kilang, dan fasilitas penyimpanan BBM bawah tanah. Anti-korosi dan dilengkapi leak detection.",
      iconKey: "Layers",
      spec: "Double Wall · UL 1746 Certified",
      image: PHOTOS.ugtTank,
      features: [
        "Double Wall Technology",
        "UL 1746 Certified",
        "Anti-Corrosion Coating",
        "Leak Detection Sensor",
      ],
    },
    {
      id: "03",
      title: "AST / Modular Tank Storage",
      subTitle: "Above Ground Storage Tank",
      tag: "Above Ground Storage Tank",
      description:
        "Tangki penyimpanan di atas tanah dengan desain modular yang fleksibel. Solusi untuk SPBU mini, depo BBM, dan fasilitas industri di lokasi terpencil.",
      iconKey: "Container",
      spec: "Modular Build · Quick Install",
      image: PHOTOS.astModular,
      features: [
        "Modular Build",
        "Quick Installation",
        "Customizable Capacity",
        "Multi-Site Deployment",
      ],
    },
    {
      id: "04",
      title: "Tangki Kimia",
      subTitle: "Chemical Tank",
      tag: "Chemical Tank",
      description:
        "Tangki angkutan dan storage untuk bahan kimia industri. Material dan lining disesuaikan dengan karakteristik fluida — tahan korosi, reaktif, atau temperatur tinggi.",
      iconKey: "FlaskConical",
      spec: "Anti-Corrosion · Custom Lining",
      image: PHOTOS.chemicalTank,
      features: [
        "Custom Material Selection",
        "Anti-Corrosion Lining",
        "Pressure Rated Design",
        "Compliant Loading System",
      ],
    },
    {
      id: "05",
      title: "Support Mining",
      subTitle: "Fuel · Lube · Water · Dump Truck",
      tag: "Fuel · Lube · Water · Dump Truck",
      description:
        "Unit support pertambangan: Fuel Truck, Lube Truck, Water Truck, dan Dump Truck dengan chassis dan body diperkuat untuk medan tambang ekstrem.",
      iconKey: "HardHat",
      spec: "Heavy-Duty · High-Tensile Steel",
      image: PHOTOS.miningSupport,
      features: [
        "Hardox / High-Tensile Steel",
        "Reinforced Chassis",
        "Heavy-Duty Hydraulic",
        "Mining-Spec Build",
      ],
    },
    {
      id: "06",
      title: "Karoseri Niaga",
      subTitle: "Wingbox · Semi Trailer · Losbak",
      tag: "Wingbox · Semi Trailer · Losbak",
      description:
        "Solusi karoseri niaga: Wingbox dengan sistem hidrolik presisi, Semi Trailer hingga 40ft, dan Losbak untuk kebutuhan logistik dan distribusi nasional.",
      iconKey: "Box",
      spec: "Hydraulic Wing · 3-Axle Trailer",
      image: PHOTOS.niagaWingbox,
      features: [
        "Precision Hydraulic Wing",
        "Lightweight Aluminum Body",
        "3-Axle Semi Trailer 40ft",
        "Custom Losbak Build",
      ],
    },
    {
      id: "07",
      title: "Pertashop Unit",
      subTitle: "Modular Fuel Station with ATG",
      tag: "Modular Fuel Station",
      description:
        "Fabrikator resmi Pertashop — lebih dari 800 unit terdistribusi, dilengkapi sistem ATG (Automatic Tank Gauge) untuk monitoring stok BBM real-time.",
      iconKey: "Fuel",
      spec: "ATG System · 800+ Units",
      image: PHOTOS.workshopWide,
      features: [
        "ATG System Integrated",
        "Compact Modular Design",
        "Pertamina Safety Standard",
        "Quick Site Installation",
      ],
    },
  ],
  articles: [
    {
      id: "1",
      slug: "tren-karoseri-2024-high-tensile-steel",
      title: "Tren Karoseri 2024: Inovasi Material High-Tensile Steel",
      category: "Engineering Insights",
      excerpt:
        "Bagaimana High-Tensile Steel meningkatkan daya tahan dan efisiensi berat bodi kendaraan untuk Fuel Truck, Lube Truck, dan Dump Truck di industri pertambangan.",
      author: "Tim Manufacturing",
      date: "12 Okt 2024",
      image: PHOTOS.miningSupport,
      body: `Industri karoseri Indonesia mengalami transformasi material dalam lima tahun terakhir. High-Tensile Steel (HTS), seperti varian Hardox dan domex, kini menjadi pilihan utama untuk unit support pertambangan yang dituntut bekerja di medan ekstrem.

## Mengapa High-Tensile Steel?

Berbeda dengan plat baja konvensional, HTS memiliki yield strength dua hingga tiga kali lipat dengan ketebalan yang lebih tipis. Hasilnya, bobot bodi turun signifikan tanpa mengorbankan kekuatan struktural.

- Bobot bodi lebih ringan 15–25%
- Payload efektif meningkat hingga 12%
- Umur pakai bertambah karena ketahanan abrasi lebih tinggi
- Risiko deformasi pada body Dump Truck berkurang

## Penerapan di Lini PUMA

Pada Dump Truck dan Fuel Truck mining, kami menggunakan kombinasi HTS untuk floor dan sidewall, dengan reinforcement lokal di area benturan. Untuk Lube Truck dan Water Truck, HTS dipakai pada chassis subframe dan tank saddle.

## Trade-off yang Perlu Diperhitungkan

HTS memiliki harga material 30–50% lebih tinggi dari mild steel. Namun TCO (Total Cost of Ownership) selama 5–7 tahun operasional umumnya lebih rendah karena:

- Frekuensi pengelasan ulang dan reparasi turun
- Konsumsi BBM kendaraan lebih efisien
- Downtime untuk maintenance terkurangi

Untuk konsultasi spesifikasi material yang tepat untuk site tambang Anda, hubungi tim engineering kami.`,
    },
    {
      id: "2",
      slug: "standar-ul-1746-ugt-tangki-pendam",
      title: "Standar UL 1746: Mengapa Penting untuk UGT / Tangki Pendam?",
      category: "Safety Standards",
      excerpt:
        "Memahami regulasi keamanan penyimpanan BBM bawah tanah dan bagaimana PUMA menerapkannya pada setiap unit Underground Storage Tank.",
      author: "Tim Safety",
      date: "05 Okt 2024",
      image: PHOTOS.ugtTank,
      body: `UL 1746 adalah standar internasional yang diterbitkan oleh Underwriters Laboratories untuk underground tank yang menyimpan bahan bakar cair. Standar ini menetapkan persyaratan untuk konstruksi double wall, perlindungan korosi, dan sistem deteksi kebocoran.

## Tiga Pilar Utama UL 1746

### 1. Konstruksi Double Wall

Tangki memiliki dinding ganda dengan ruang interstitial di antaranya. Jika dinding luar bocor, dinding dalam tetap menahan fluida — dan sebaliknya. Ruang interstitial inilah yang dimonitor untuk deteksi dini.

### 2. Anti-Corrosion Coating

Lapisan pelindung pada permukaan luar mencegah korosi akibat kontak dengan tanah, air tanah, dan kondisi lingkungan agresif lainnya. Kami menggunakan FRP (Fiber Reinforced Plastic) atau coal-tar epoxy sesuai spesifikasi proyek.

### 3. Leak Detection Sensor

Sensor di ruang interstitial mendeteksi keberadaan cairan atau perubahan tekanan. Operator SPBU langsung mendapat notifikasi sebelum kebocoran membesar dan mengontaminasi tanah.

## Proses Sertifikasi di PUMA

- Material baja melalui inspeksi mill certificate
- Welding dilakukan oleh juru las bersertifikat dengan WPS (Welding Procedure Specification) yang divalidasi
- Hydrotest dan pneumatic test untuk verifikasi integritas
- Coating thickness dimonitor di setiap titik
- Final FAT bersama klien sebelum delivery

## Implikasi untuk Operator SPBU

Memilih UGT bersertifikat UL 1746 berarti meminimalkan risiko denda lingkungan, mengurangi biaya remediasi tanah, dan memperpanjang life cycle aset hingga 30 tahun atau lebih.`,
    },
    {
      id: "3",
      slug: "optimasi-logistik-wingbox-hidrolik",
      title: "Optimasi Logistik dengan Wingbox Hidrolik Presisi",
      category: "Logistics",
      excerpt:
        "Studi efisiensi waktu bongkar muat menggunakan sistem Wingbox generasi terbaru — dilengkapi semi trailer dan losbak custom.",
      author: "Tim Logistics",
      date: "28 Sep 2024",
      image: PHOTOS.niagaWingbox,
      body: `Wingbox hidrolik mengubah lanskap distribusi logistik nasional. Akses bongkar muat dari kedua sisi kendaraan mempersingkat waktu dock-to-dock secara drastis dibanding box konvensional.

## Studi Kasus: Distribusi FMCG Lintas Pulau

Sebuah operator logistik FMCG Indonesia melakukan benchmark armada Wingbox vs Box Standard pada rute Jakarta–Surabaya. Hasil:

- Bongkar muat per stop: rata-rata 18 menit (vs 42 menit box standard)
- Total waktu siklus armada turun 22%
- Damage rate produk turun 40% karena akses langsung ke palet
- Pemanfaatan ruang container meningkat 8%

## Komponen Kunci Sistem Hidrolik

### Pompa & Selang Hidrolik
Tekanan kerja 180–220 bar dengan pressure relief valve. Selang berlapis steel-braided untuk mencegah kebocoran.

### Aktuator Wing
Dua aktuator simetris kiri-kanan dengan limit switch untuk mencegah over-extension.

### Locking Mechanism
Mechanical lock + hydraulic lock untuk redundansi keamanan saat tutup terbuka penuh.

## Integrasi dengan Semi Trailer dan Losbak

Untuk volume tinggi, Wingbox dipadukan dengan semi trailer 40ft 3-axle skeletal. Untuk barang non-standar (pipa, kayu, alat berat), Losbak dengan platform kustom menjadi alternatif.

Konsultasikan kombinasi yang optimal untuk SOP gudang Anda dengan tim engineering kami.`,
    },
  ],
  faqs: {
    home: [
      {
        q: "Apa saja produk yang difabrikasi PUMA?",
        a: "Mobil Tangki BBM Pertamina, UGT / Tangki Pendam UL 1746, AST (Above Ground Storage Tank) Modular, Tangki Kimia, support unit pertambangan (Fuel Truck, Lube Truck, Water Truck, Dump Truck), serta karoseri niaga Wingbox, Semi Trailer, dan Losbak.",
      },
      {
        q: "Apakah produk tangki memiliki sertifikasi resmi?",
        a: "Ya. Seluruh produk tangki dan karoseri kami diproduksi dengan ISO 9001:2015, ISO 45001:2018, dan UGT bersertifikasi UL 1746. PUMA juga merupakan vendor resmi Pertamina untuk fabrikasi tangki BBM.",
      },
      {
        q: "Berapa lama waktu pengerjaan satu unit tangki?",
        a: "Bervariasi tergantung spesifikasi dan kapasitas. Rata-rata 30 sampai 45 hari kerja sejak desain disetujui.",
      },
      {
        q: "Apakah tersedia layanan perbaikan dan rekondisi?",
        a: "Tersedia: rekondisi karoseri, modifikasi kapasitas tangki, powder coating, bending dan roll plate hingga 10 mm, serta pembuatan aksesoris (sparkboard, perisai kolong, bumper belakang).",
      },
      {
        q: "Bisa kustomisasi desain sesuai kebutuhan operasional?",
        a: "Bisa. Tim engineering internal kami siap merancang dan merekayasa karoseri atau tangki kustom sesuai spesifikasi industri Anda — termasuk mining support dan tangki kimia khusus.",
      },
    ],
    about: [
      {
        q: "Apa fokus utama PT. Prima Usaha Mitra Abadi (PUMA)?",
        a: "PUMA bergerak di bidang karoseri dan rekayasa teknik (engineering) sejak 2001, dengan fokus pada fabrikasi tangki dan kendaraan khusus untuk sektor oil & gas, niaga, dan pertambangan.",
      },
      {
        q: "Sertifikasi apa saja yang dimiliki PUMA?",
        a: "Kami bersertifikasi ISO 9001:2015, ISO 45001:2018, UL 1746 untuk Underground Storage Tank, sertifikat bengkel karoseri tertunjuk dari Dishub Jawa Barat, dan terdaftar dalam Vendor List Pabrikan Tangki Pertamina.",
      },
      {
        q: "Sejak kapan PUMA berdiri?",
        a: "PT. Prima Usaha Mitra Abadi berdiri pada 29 Januari 2001 di Karawang sebagai bagian dari UJB Group.",
      },
      {
        q: "Di mana lokasi workshop PUMA saat ini?",
        a: "Workshop saat ini berada di Jl. Raya By Pass Jomin No. 88, Kel. Jomin Barat, Karawang — Jawa Barat.",
      },
      {
        q: "Apa rencana pengembangan kapasitas PUMA?",
        a: "Tahun 2026 kami akan relokasi ke fasilitas baru di Jl. Raya Cikopo No. 15, Purwakarta seluas 12.130 m² dengan 3 gedung produksi. Kapasitas produksi akan meningkat hingga 3× lipat.",
      },
    ],
    products: [
      {
        q: "Apa saja kapasitas Mobil Tangki BBM Pertamina yang bisa dibuat?",
        a: "Kami memproduksi mobil tangki BBM dari kapasitas 5.000 L hingga 32.000 L (single/multi-compartment), termasuk tangki semitrailer FBL.",
      },
      {
        q: "Apa keunggulan UGT / Tangki Pendam UL 1746 dibanding single wall?",
        a: "Tangki pendam UL 1746 menggunakan konstruksi double wall, anti-corrosion coating, dan leak detection sensor. Standar ini diakui internasional sebagai jaminan keamanan jangka panjang.",
      },
      {
        q: "Apakah AST / Modular Tank Storage bisa dipasang di lokasi terpencil?",
        a: "Ya. AST modular kami didesain untuk mobilitas dan instalasi cepat — cocok untuk SPBU mini, depo BBM remote, fasilitas tambang, dan industri di lokasi terpencil.",
      },
      {
        q: "Untuk Tangki Kimia, apakah material bisa dikustomisasi?",
        a: "Tentu. Material body dan lining disesuaikan dengan karakteristik fluida (asam, basa, korosif, atau temperatur tinggi).",
      },
      {
        q: "Unit support mining apa saja yang tersedia?",
        a: "Lini support mining mencakup Fuel Truck, Lube Truck, Water Truck, dan Dump Truck. Semua dirancang dengan reinforced chassis dan komponen heavy-duty.",
      },
      {
        q: "Berapa lama waktu produksi satu unit?",
        a: "Rata-rata 30–45 hari kerja sejak desain disetujui.",
      },
    ],
    insight: [
      {
        q: "Topik apa saja yang dibahas di Insight PUMA?",
        a: "Engineering notes, standar keamanan (UL 1746, ISO, regulasi Pertamina), tren material high-tensile, optimasi logistik wingbox, hingga studi kasus implementasi tangki.",
      },
      {
        q: "Siapa yang menulis artikel di Insight?",
        a: "Tim engineering, fabrikasi, dan safety internal PUMA — para praktisi yang langsung menangani desain, produksi, dan QC.",
      },
      {
        q: "Seberapa sering Insight diperbarui?",
        a: "Kami merilis artikel baru setiap 2–4 minggu, mencakup update tren industri, regulasi baru, dan studi kasus proyek.",
      },
      {
        q: "Bisakah saya request topik atau studi kasus tertentu?",
        a: "Bisa. Kirim request topik via WhatsApp atau email — kami akan jadwalkan publikasinya dengan tim engineering yang sesuai.",
      },
    ],
    contact: [
      {
        q: "Berapa lama waktu respons setelah saya kirim form atau email?",
        a: "Maksimal 1×24 jam pada hari kerja. Untuk komunikasi cepat, gunakan WhatsApp di +62 857-5463-7579 — biasanya dijawab dalam menit selama jam kerja.",
      },
      {
        q: "Channel mana yang paling cepat untuk konsultasi awal?",
        a: "WhatsApp paling responsif untuk konsultasi awal. Untuk RFQ formal, gunakan email marketing@primausahamitraabadi.com.",
      },
      {
        q: "Informasi apa yang perlu saya siapkan saat menghubungi sales?",
        a: "Sebutkan jenis produk, kapasitas, jumlah unit, lokasi pengiriman, dan timeline yang diharapkan.",
      },
      {
        q: "Apakah bisa kunjungan langsung ke workshop?",
        a: "Bisa, dengan janji temu sebelumnya. Workshop di Karawang terbuka untuk inspeksi proyek dan FAT.",
      },
      {
        q: "Apakah PUMA melayani proyek di luar Pulau Jawa?",
        a: "Ya. Kami sudah melayani mitra di Sumatera, Kalimantan, Sulawesi, dan Maluku.",
      },
    ],
  },
};
