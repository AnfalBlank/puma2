"use client";

import { useState } from "react";
import {
  BookOpen,
  LogIn,
  LayoutDashboard,
  Settings,
  Sparkles,
  Boxes,
  Newspaper,
  HelpCircle,
  Inbox,
  ImageIcon,
  Save,
  Shield,
  Database,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Info,
} from "lucide-react";

type Section = {
  id: string;
  icon: typeof BookOpen;
  title: string;
  content: React.ReactNode;
};

function Callout({
  type,
  children,
}: {
  type: "info" | "warning" | "success";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-brand/40 bg-brand/5 text-zinc-300",
    warning: "border-amber-500/40 bg-amber-500/5 text-amber-200",
    success: "border-emerald-500/40 bg-emerald-500/5 text-emerald-300",
  };
  const icons = {
    info: <Info size={15} className="text-brand shrink-0 mt-0.5" />,
    warning: <AlertTriangle size={15} className="text-amber-400 shrink-0 mt-0.5" />,
    success: <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />,
  };
  return (
    <div className={`flex gap-3 border px-4 py-3 text-sm leading-relaxed my-4 ${styles[type]}`}>
      {icons[type]}
      <div>{children}</div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left text-[10px] font-mono uppercase tracking-widest text-zinc-400 px-3 py-2.5"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2.5 text-zinc-300 font-mono text-xs align-top"
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionCard({
  section,
  isOpen,
  onToggle,
}: {
  section: Section;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = section.icon;
  return (
    <div className="industrial-border bg-zinc-900/60 mb-4 last:mb-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon size={18} className="text-brand shrink-0" />
          <span className="text-base font-black uppercase tracking-tight">{section.title}</span>
        </div>
        {isOpen ? (
          <ChevronDown size={16} className="text-zinc-500 shrink-0" />
        ) : (
          <ChevronRight size={16} className="text-zinc-500 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 prose-manual">{section.content}</div>
      )}
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-black uppercase tracking-widest text-white mt-6 mb-3 first:mt-0">
      {children}
    </h3>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-zinc-400 leading-relaxed mb-3">{children}</p>;
}

function Step({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 mb-3">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 text-brand text-[11px] font-black flex items-center justify-center mt-0.5">
        {num}
      </span>
      <p className="text-sm text-zinc-300 leading-relaxed">{children}</p>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-zinc-800 text-brand px-1.5 py-0.5 text-xs font-mono rounded-sm">
      {children}
    </code>
  );
}

const SECTIONS: Section[] = [
  {
    id: "overview",
    icon: BookOpen,
    title: "1. Gambaran Umum",
    content: (
      <>
        <Para>
          Admin panel adalah pusat kendali konten website PT. Prima Usaha Mitra Abadi (PUMA).
          Semua perubahan yang disimpan di sini <strong className="text-white">langsung terapply</strong> ke
          halaman publik website tanpa perlu deployment ulang.
        </Para>
        <Para>Lewat panel ini Anda bisa mengelola:</Para>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
          {[
            ["Informasi Kontak", "Telepon, WhatsApp, email, alamat — tampil di seluruh halaman"],
            ["Hero Copy", "Teks judul besar tiap halaman (Beranda, Tentang, Produk, Insight, Kontak)"],
            ["Katalog Produk", "Tambah, edit, urutkan, hapus produk di beranda & /products"],
            ["Artikel Insight", "Tulis & kelola artikel di section Insight & halaman /insight"],
            ["FAQ", "Daftar tanya-jawab per halaman website"],
            ["Inbox", "Pesan dari form kontak yang masuk"],
            ["Statistik", "Data kunjungan halaman & sumber trafik"],
            ["Media Library", "Upload & kelola gambar untuk produk & artikel"],
          ].map(([title, desc]) => (
            <div key={title} className="border border-white/10 bg-zinc-950 px-4 py-3">
              <p className="text-xs font-black uppercase tracking-widest text-white mb-1">{title}</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <Callout type="success">
          Klik <strong>Save</strong> setelah melakukan perubahan. Halaman publik otomatis diperbarui
          — pengunjung akan melihat konten terbaru pada kunjungan berikutnya.
        </Callout>
      </>
    ),
  },
  {
    id: "login",
    icon: LogIn,
    title: "2. Login & Keamanan",
    content: (
      <>
        <Heading>Cara Login</Heading>
        <Step num={1}>
          Buka alamat <Code>/admin/login</Code> di browser
          (contoh: <Code>https://www.primausahamitraabadi.com/admin/login</Code>).
        </Step>
        <Step num={2}>Masukkan <strong className="text-white">password admin</strong>.</Step>
        <Step num={3}>Klik <strong className="text-white">Masuk</strong>. Anda akan diarahkan ke dashboard.</Step>
        <Callout type="info">
          Sesi login bertahan <strong>7 hari</strong>. Setelah itu Anda diminta login ulang.
          Semua halaman di bawah <Code>/admin</Code> dilindungi — jika belum login, Anda otomatis
          dialihkan ke halaman login.
        </Callout>
        <Heading>Rate-Limit Login</Heading>
        <Para>
          Sistem membatasi percobaan login untuk mencegah tebakan password paksa:
        </Para>
        <Table
          headers={["Kondisi", "Perilaku"]}
          rows={[
            ["Gagal login", "Sisa percobaan ditampilkan (mis. <em>Sisa 3 percobaan</em>)"],
            ["5× gagal dalam 15 menit", "Login dikunci sementara (<em>Coba lagi dalam 15 menit</em>)"],
            ["Login berhasil", "Hitungan percobaan direset otomatis"],
          ]}
        />
        <Callout type="warning">
          Jika akun terkunci, tunggu 15 menit kemudian coba lagi. Pastikan Caps Lock tidak aktif.
        </Callout>
      </>
    ),
  },
  {
    id: "layout",
    icon: LayoutDashboard,
    title: "3. Tata Letak Panel",
    content: (
      <>
        <Para>Setelah login, tampilan terbagi menjadi tiga area utama:</Para>
        <Table
          headers={["Area", "Fungsi"]}
          rows={[
            ["<strong>Top Bar</strong>", "Logo · Status Synced/Unsaved · tombol Lihat Site, Reset, Save, Logout"],
            ["<strong>Tab Navigasi</strong>", "Dashboard · Site · Hero Copy · Produk · Insight · FAQ · Inbox · <em>Manual</em>"],
            ["<strong>Area Konten</strong>", "Isi editor/viewer sesuai tab yang aktif"],
          ]}
        />
        <Heading>Indikator Status</Heading>
        <div className="flex flex-col sm:flex-row gap-3 my-4">
          <div className="flex items-center gap-3 border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 flex-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-300">Synced</p>
              <p className="text-[11px] text-zinc-400 mt-0.5">Semua perubahan sudah tersimpan.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border border-amber-500/40 bg-amber-500/10 px-4 py-3 flex-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-amber-300">Unsaved</p>
              <p className="text-[11px] text-zinc-400 mt-0.5">Ada perubahan belum disimpan. Klik Save!</p>
            </div>
          </div>
        </div>
        <Callout type="warning">
          Jangan tutup tab browser saat status <strong>Unsaved</strong>. Sistem akan memberi
          peringatan, tapi pastikan klik <strong>Save</strong> terlebih dahulu agar perubahan tidak hilang.
        </Callout>
      </>
    ),
  },
];

const SECTIONS_PART2: Section[] = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "4. Tab Dashboard",
    content: (
      <>
        <Para>
          Tab <strong className="text-white">Dashboard</strong> menampilkan ringkasan statistik
          website secara real-time. Klik <strong className="text-white">Refresh</strong> untuk
          memuat data terbaru.
        </Para>
        <Heading>Kartu Statistik</Heading>
        <Table
          headers={["Kartu", "Keterangan"]}
          rows={[
            ["Total Kunjungan", "Jumlah page view sepanjang waktu + jumlah hari ini"],
            ["Pengunjung Unik", "Perkiraan pengunjung berbeda + jumlah hari ini"],
            ["Total Pesan", "Total pesan masuk dari form kontak + 7 hari terakhir"],
            ["Belum Dibaca", "Pesan inbox yang belum ditandai dibaca"],
          ]}
        />
        <Heading>Grafik & Tabel</Heading>
        <Table
          headers={["Komponen", "Fungsi"]}
          rows={[
            ["Kunjungan 7 Hari", "Grafik batang harian — hover untuk detail views & visitors"],
            ["Halaman Teratas", "Halaman yang paling banyak dikunjungi"],
            ["Sumber Trafik", "Domain pengarah (referrer) pengunjung, mis. google.com"],
          ]}
        />
        <Callout type="info">
          Privasi: pengunjung diidentifikasi via kode acak harian (hash) — bukan IP atau data pribadi.
        </Callout>
      </>
    ),
  },
  {
    id: "site",
    icon: Settings,
    title: "5. Tab Site (Informasi Kontak)",
    content: (
      <>
        <Para>
          Tab <strong className="text-white">Site</strong> mengatur informasi kontak yang dipakai
          di <em>seluruh</em> halaman website: Navbar, Footer, halaman Kontak, tombol WhatsApp
          melayang, dan data SEO (JSON-LD). Cukup ubah sekali di sini, semua halaman ikut diperbarui.
        </Para>
        <Table
          headers={["Field", "Keterangan", "Contoh"]}
          rows={[
            ["Telepon (Display)", "Nomor yang ditampilkan di halaman", "(0264) 8330330"],
            ["Telepon (tel: href)", "Link klik-untuk-telepon, format E.164", "tel:+622648330330"],
            ["Email", "Alamat email kontak", "marketing@primausahamitraabadi.com"],
            ["WhatsApp (Display)", "Nomor WA yang ditampilkan", "+62 857-5463-7579"],
            ["WhatsApp (digits)", "Nomor WA untuk link wa.me — hanya angka, tanpa + atau spasi", "6285754637579"],
            ["Alamat lengkap", "Alamat workshop, tampil di footer & halaman Kontak", "Jl. Raya By Pass Jomin..."],
          ]}
        />
        <Callout type="warning">
          Field <strong>WhatsApp (digits)</strong> harus berisi angka saja tanpa <Code>+</Code>,
          spasi, atau tanda hubung. Contoh benar: <Code>6285754637579</Code>. Ini digunakan untuk
          membuat link <Code>wa.me/6285754637579</Code>.
        </Callout>
        <Step num={1}>Ubah field yang diperlukan.</Step>
        <Step num={2}>Klik <strong className="text-white">Save</strong> di top bar.</Step>
        <Step num={3}>Klik <strong className="text-white">Lihat Site</strong> untuk memverifikasi perubahan di website.</Step>
      </>
    ),
  },
  {
    id: "hero",
    icon: Sparkles,
    title: "6. Tab Hero Copy",
    content: (
      <>
        <Para>
          Tab <strong className="text-white">Hero Copy</strong> mengatur teks header besar di bagian
          atas tiap halaman. Terdapat 5 kartu halaman: <em>Beranda, Tentang, Produk, Insight, Kontak</em>.
        </Para>
        <Table
          headers={["Field", "Keterangan", "Tampil di"]}
          rows={[
            ["Eyebrow", "Teks kecil di atas judul (opsional)", "Di atas Title, biasanya huruf kecil berukuran mungil"],
            ["Title", "Judul utama halaman", "Teks besar di hero section"],
            ["Highlight (orange)", "Kata/frasa dalam Title yang diberi warna oranye", "Bagian dari Title yang ditonjolkan"],
            ["Intro paragraf", "Paragraf pengantar di bawah judul", "Teks deskriptif di bawah Title"],
          ]}
        />
        <Callout type="info">
          Field <strong>Highlight</strong> harus merupakan bagian dari teks <strong>Title</strong>.
          Sistem akan mewarnai kata itu dengan warna oranye brand PUMA di halaman publik.
        </Callout>
        <Step num={1}>Pilih kartu halaman yang ingin diubah (mis. <em>Hero · Beranda</em>).</Step>
        <Step num={2}>Edit field yang diinginkan.</Step>
        <Step num={3}>Klik <strong className="text-white">Save</strong>. Perubahan langsung tampil di halaman tersebut.</Step>
      </>
    ),
  },
];

const SECTIONS_PART3: Section[] = [
  {
    id: "products",
    icon: Boxes,
    title: "7. Tab Produk",
    content: (
      <>
        <Para>
          Tab <strong className="text-white">Produk</strong> mengelola katalog produk yang tampil
          di section Produk beranda dan halaman <Code>/products</Code>. Urutan kartu = urutan tampil
          di website.
        </Para>
        <Heading>Field Per Produk</Heading>
        <Table
          headers={["Field", "Keterangan"]}
          rows={[
            ["ID (urutan)", "Penanda urutan, mis. <code>01</code>, <code>02</code>"],
            ["Icon", "Pilih ikon: Truck, Box, Layers, Container, HardHat, FlaskConical, Fuel"],
            ["Title", "Nama produk utama"],
            ["Sub-title", "Keterangan singkat di bawah nama produk"],
            ["Tag", "Label chip kecil yang tampil di kartu produk"],
            ["Spec highlight", "Sorotan spesifikasi singkat (1 baris)"],
            ["Gambar produk", "Lihat bagian <em>Upload & Galeri Gambar</em>"],
            ["Deskripsi", "Penjelasan lengkap produk"],
            ["Features", "Daftar fitur — <strong>satu per baris</strong>, maks 6 baris"],
          ]}
        />
        <Heading>Aksi</Heading>
        <Table
          headers={["Aksi", "Cara"]}
          rows={[
            ["Tambah produk", "Klik tombol <strong>Tambah Produk</strong> (kanan atas)"],
            ["Ubah urutan", "Tombol ⬆️ / ⬇️ di pojok kartu produk"],
            ["Hapus produk", "Klik ikon 🗑️ lalu konfirmasi"],
          ]}
        />
        <Callout type="success">
          Setelah selesai mengedit, klik <strong>Save</strong>. Urutan dan konten produk di website
          langsung diperbarui.
        </Callout>
      </>
    ),
  },
  {
    id: "articles",
    icon: Newspaper,
    title: "8. Tab Insight (Artikel)",
    content: (
      <>
        <Para>
          Tab <strong className="text-white">Insight</strong> mengelola artikel yang tampil di
          section Insight beranda, halaman <Code>/insight</Code>, dan halaman detail artikel
          <Code>/insight/[slug]</Code>. Artikel baru muncul di <em>paling atas</em> daftar.
        </Para>
        <Heading>Field Per Artikel</Heading>
        <Table
          headers={["Field", "Keterangan"]}
          rows={[
            ["Title", "Judul artikel"],
            ["Slug URL", "Alamat artikel (URL-friendly). Boleh kosong — otomatis dari title saat disimpan"],
            ["Category", "Kategori artikel, mis. <code>Engineering Insights</code>"],
            ["Author", "Nama penulis"],
            ["Tanggal", "Tanggal tampil, mis. <code>12 Okt 2024</code>"],
            ["Gambar artikel", "Lihat bagian <em>Upload & Galeri Gambar</em>"],
            ["Excerpt", "Ringkasan singkat — tampil di daftar artikel & kartu Insight"],
            ["Isi Artikel", "Badan artikel dengan format Markdown ringan"],
          ]}
        />
        <Heading>Format Penulisan Isi Artikel (Markdown Ringan)</Heading>
        <div className="bg-zinc-950 border border-white/10 p-4 my-3 font-mono text-xs text-zinc-300 space-y-1">
          <p><span className="text-brand">## Judul Bagian</span> → subjudul</p>
          <p><span className="text-brand">### Sub-bagian</span> → sub-subjudul</p>
          <p><span className="text-brand">- teks</span> → poin bullet list</p>
          <p className="text-zinc-500">(baris kosong untuk memisahkan paragraf)</p>
        </div>
        <Callout type="info">
          Jika dua artikel punya judul mirip, sistem menambahkan akhiran acak agar URL tetap unik.
          Sebaiknya isi slug manual agar rapi dan SEO-friendly. Contoh: <Code>tren-karoseri-2024</Code>
        </Callout>
        <Heading>Aksi</Heading>
        <Table
          headers={["Aksi", "Cara"]}
          rows={[
            ["Tambah artikel", "Klik <strong>Tambah Artikel</strong> — kartu baru muncul di atas"],
            ["Ubah urutan", "Tombol ⬆️ / ⬇️ di pojok kartu"],
            ["Hapus artikel", "Klik ikon 🗑️ lalu konfirmasi"],
          ]}
        />
      </>
    ),
  },
  {
    id: "faqs",
    icon: HelpCircle,
    title: "9. Tab FAQ",
    content: (
      <>
        <Para>
          Tab <strong className="text-white">FAQ</strong> mengatur daftar tanya-jawab yang tampil
          di bagian bawah tiap halaman website. Terdapat 5 grup: <em>Beranda, Tentang, Produk,
          Insight, Kontak</em>.
        </Para>
        <Table
          headers={["Field", "Keterangan"]}
          rows={[
            ["Pertanyaan", "Teks pertanyaan yang tampil sebagai judul accordion"],
            ["Jawaban", "Teks jawaban yang muncul saat accordion dibuka"],
          ]}
        />
        <Heading>Aksi</Heading>
        <Table
          headers={["Aksi", "Cara"]}
          rows={[
            ["Tambah item FAQ", "Klik <strong>Tambah Item</strong> di kartu grup halaman yang sesuai"],
            ["Ubah urutan", "Tombol ⬆️ / ⬇️ pada tiap item"],
            ["Hapus item", "Klik ikon 🗑️ pada item yang ingin dihapus"],
          ]}
        />
        <Callout type="success">
          FAQ per halaman benar-benar terpisah. Perubahan di FAQ Beranda tidak mempengaruhi FAQ
          halaman Produk, dan sebaliknya. Klik <strong>Save</strong> untuk menerapkan.
        </Callout>
      </>
    ),
  },
];

const SECTIONS_PART4: Section[] = [
  {
    id: "inbox",
    icon: Inbox,
    title: "10. Tab Inbox (Pesan Masuk)",
    content: (
      <>
        <Para>
          Tab <strong className="text-white">Inbox</strong> menampung semua pesan dari form kontak
          website — dari form <em>Minta Penawaran</em> di beranda maupun form di halaman Kontak.
          Pesan belum dibaca ditandai label <strong className="text-brand">New</strong> dan border
          oranye.
        </Para>
        <Heading>Informasi Per Pesan</Heading>
        <Para>
          Tanggal masuk · Halaman asal · Nama · Email · Telepon · Perusahaan · Subjek · Isi pesan.
        </Para>
        <Heading>Aksi Per Pesan</Heading>
        <Table
          headers={["Ikon", "Aksi"]}
          rows={[
            ["👁️ / 🙈", "Tandai dibaca / belum dibaca (toggle)"],
            ["✉️", "Buka aplikasi email dengan subjek balasan terisi otomatis"],
            ["🗑️", "Hapus pesan permanen (perlu konfirmasi)"],
          ]}
        />
        <Heading>Filter & Alat</Heading>
        <Table
          headers={["Tombol", "Fungsi"]}
          rows={[
            ["Semua", "Tampilkan semua pesan"],
            ["Belum Dibaca", "Tampilkan hanya pesan yang belum ditandai dibaca"],
            ["Refresh", "Muat pesan terbaru tanpa reload halaman"],
          ]}
        />
        <Callout type="success">
          Pesan di Inbox <strong>tidak terpengaruh</strong> tombol Reset. Data Inbox aman meskipun
          Anda mereset konten website ke default.
        </Callout>
        <Callout type="info">
          Badge angka di tab Inbox menunjukkan jumlah pesan belum dibaca secara real-time.
        </Callout>
      </>
    ),
  },
  {
    id: "media",
    icon: ImageIcon,
    title: "11. Upload & Galeri Gambar",
    content: (
      <>
        <Para>
          Setiap field gambar di modul <strong className="text-white">Produk</strong> dan{" "}
          <strong className="text-white">Insight</strong> memiliki tiga cara mengisi gambar:
        </Para>
        <Table
          headers={["Cara", "Deskripsi"]}
          rows={[
            ["Ketik path manual", "Isi kolom teks langsung, mis. <code>/uploads/foto.jpg</code>"],
            ["Tombol ⬆️ Upload", "Pilih file dari komputer — langsung terunggah & terpasang otomatis"],
            ["Tombol 🖼️ Galeri", "Buka Media Library: pilih gambar yang sudah ada atau upload baru"],
          ]}
        />
        <Heading>Ketentuan File</Heading>
        <div className="flex flex-wrap gap-2 my-3">
          {["JPG", "PNG", "WebP", "GIF", "AVIF", "SVG"].map((f) => (
            <span key={f} className="text-[10px] font-mono uppercase tracking-widest bg-zinc-800 text-zinc-300 px-2.5 py-1 border border-white/10">
              {f}
            </span>
          ))}
          <span className="text-[10px] font-mono uppercase tracking-widest bg-zinc-800 text-brand px-2.5 py-1 border border-brand/30">
            Maks 8 MB
          </span>
        </div>
        <Para>
          Setelah memilih gambar, <strong className="text-white">preview</strong> muncul di bawah field.
          File yang diunggah tersimpan di folder <Code>public/uploads/</Code> server.
        </Para>
        <Callout type="warning">
          Menghapus gambar dari Media Library <strong>menghapus file secara permanen</strong> dari
          server. Pastikan gambar tersebut tidak sedang digunakan di produk atau artikel lain
          sebelum dihapus.
        </Callout>
      </>
    ),
  },
  {
    id: "save-reset",
    icon: Save,
    title: "12. Simpan, Reset & Logout",
    content: (
      <>
        <Table
          headers={["Tombol", "Fungsi", "Catatan"]}
          rows={[
            ["<strong>Save</strong>", "Simpan semua perubahan konten ke database & perbarui halaman publik", "Aktif hanya saat ada perubahan (status Unsaved)"],
            ["<strong>Reset</strong>", "Kembalikan seluruh konten ke nilai bawaan (default)", "Inbox & gambar tidak ikut terhapus. Perlu konfirmasi."],
            ["<strong>Lihat Site</strong>", "Buka website publik di tab baru untuk verifikasi perubahan", "Selalu lakukan ini setelah Save"],
            ["<strong>Logout</strong>", "Keluar dari sesi admin", "Sesi otomatis berakhir setelah 7 hari"],
          ]}
        />
        <Callout type="info">
          Perubahan di <strong>Inbox</strong> (tandai baca, hapus) dan <strong>Upload gambar</strong>{" "}
          langsung disimpan saat aksi dilakukan — <em>tidak</em> perlu klik Save.
          Tombol Save khusus untuk modul konten (Site, Hero, Produk, Insight, FAQ).
        </Callout>
      </>
    ),
  },
];

const SECTIONS_PART5: Section[] = [
  {
    id: "email",
    icon: Shield,
    title: "13. Notifikasi Email",
    content: (
      <>
        <Para>
          Saat ada pesan baru dari form kontak, sistem dapat mengirim{" "}
          <strong className="text-white">notifikasi email otomatis</strong> ke alamat yang
          dikonfigurasi.
        </Para>
        <Table
          headers={["Kondisi SMTP", "Perilaku"]}
          rows={[
            ["Sudah dikonfigurasi", "Email notifikasi terkirim otomatis dengan detail pengirim & tombol balas"],
            ["Belum dikonfigurasi", "Pesan tetap tersimpan di Inbox — notifikasi email saja yang dilewati (tidak error)"],
          ]}
        />
        <Callout type="info">
          Konfigurasi SMTP dilakukan di file <Code>.env</Code> di server oleh teknisi.
          Hubungi tim teknis jika notifikasi email belum berfungsi.
        </Callout>
      </>
    ),
  },
  {
    id: "database",
    icon: Database,
    title: "14. Penyimpanan Data",
    content: (
      <>
        <Para>
          Semua data admin tersimpan dalam <strong className="text-white">database SQLite</strong>{" "}
          di server (file <Code>data/puma.db</Code>):
        </Para>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
          {[
            ["Konten", "Site, Hero, Produk, Insight, FAQ"],
            ["Inbox", "Semua pesan dari form kontak"],
            ["Statistik", "Data kunjungan halaman"],
            ["Login Security", "Catatan percobaan login untuk rate-limit"],
          ].map(([label, desc]) => (
            <div key={label} className="flex items-start gap-3 border border-white/5 bg-zinc-950 px-4 py-3">
              <Database size={14} className="text-brand mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">{label}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout type="warning">
          <strong>Penting untuk hosting:</strong> Pastikan folder <Code>data/</Code> dan{" "}
          <Code>public/uploads/</Code> berada di penyimpanan permanen. Di platform serverless
          (mis. Vercel) filesystem-nya bersifat sementara — gunakan volume persisten atau host di
          VPS dengan disk tetap.
        </Callout>
      </>
    ),
  },
  {
    id: "troubleshoot",
    icon: AlertTriangle,
    title: "15. Troubleshooting",
    content: (
      <>
        <Table
          headers={["Masalah", "Penyebab / Solusi"]}
          rows={[
            ["Tidak bisa login: <em>Terlalu banyak percobaan</em>", "Rate-limit aktif. Tunggu 15 menit lalu coba lagi dengan password benar."],
            ["Tombol Save tidak bisa diklik", "Tidak ada perubahan (status <strong>Synced</strong>). Save hanya aktif saat ada perubahan."],
            ["Perubahan tidak muncul di website", "Pastikan sudah klik <strong>Save</strong>. Lalu refresh halaman publik (Ctrl/Cmd+R). Tunggu beberapa detik."],
            ["Pesan dari form kontak tidak masuk Inbox", "Klik <strong>Refresh</strong> di Inbox. Cek koneksi internet. Pastikan field wajib (nama, email, pesan) terisi."],
            ["Email notifikasi tidak terkirim", "Konfigurasi SMTP belum/salah diisi di <code>.env</code>. Pesan tetap tersimpan di Inbox."],
            ["Gambar gagal diunggah", "Cek format (JPG/PNG/WebP/GIF/AVIF/SVG) dan ukuran (maks 8 MB)."],
            ["Gambar tidak tampil di website", "Pastikan path benar (mis. <code>/uploads/nama.jpg</code>) dan file belum dihapus dari galeri."],
            ["Data hilang setelah deploy ulang", "Folder <code>data/</code> & <code>public/uploads/</code> tidak permanen. Gunakan <code>DATA_DIR</code> ke volume persisten."],
            ["Artikel tidak muncul di /insight", "Pastikan artikel memiliki slug (boleh otomatis). Klik Save setelah menambah/mengedit."],
            ["FAQ tidak berubah di halaman publik", "Pastikan klik Save. Refresh halaman publik. Periksa kartu FAQ grup yang sesuai (mis. FAQ Beranda ≠ FAQ Produk)."],
          ]}
        />
      </>
    ),
  },
];

const ALL_SECTIONS = [
  ...SECTIONS,
  ...SECTIONS_PART2,
  ...SECTIONS_PART3,
  ...SECTIONS_PART4,
  ...SECTIONS_PART5,
];

export function ManualBook() {
  const [openId, setOpenId] = useState<string | null>("overview");
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? ALL_SECTIONS.filter((s) =>
        s.title.toLowerCase().includes(search.toLowerCase()),
      )
    : ALL_SECTIONS;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen size={18} className="text-brand" />
            <h2 className="text-lg font-black uppercase tracking-tight">Manual Book</h2>
          </div>
          <p className="text-zinc-500 text-xs font-mono">
            Panduan lengkap penggunaan PUMA Admin Panel
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-brand/50 hover:text-brand text-zinc-300 text-[11px] font-bold uppercase tracking-widest transition-colors"
          >
            <ExternalLink size={14} />
            Lihat Website
          </a>
        </div>
      </div>

      {/* Quick nav pills */}
      <div className="flex flex-wrap gap-2">
        {ALL_SECTIONS.map((s) => {
          const Icon = s.icon;
          const isOpen = openId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setOpenId(isOpen ? null : s.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                isOpen
                  ? "border-brand bg-brand/10 text-white"
                  : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
              }`}
            >
              <Icon size={11} />
              {s.title.replace(/^\d+\.\s/, "")}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Cari bagian manual..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-950 border border-white/10 focus:border-brand focus:outline-none text-white pl-4 pr-10 py-2.5 rounded-none placeholder:text-zinc-600 text-sm"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
          >
            ×
          </button>
        )}
      </div>

      {/* Sections */}
      {filtered.length === 0 ? (
        <div className="text-zinc-500 text-sm font-mono uppercase tracking-widest text-center py-12 border border-dashed border-white/10">
          Tidak ditemukan — coba kata kunci lain
        </div>
      ) : (
        filtered.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            isOpen={openId === section.id}
            onToggle={() => setOpenId(openId === section.id ? null : section.id)}
          />
        ))
      )}

      {/* Footer */}
      <div className="border-t border-white/5 pt-6 flex items-center justify-between gap-4">
        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
          PUMA Admin Panel · Manual Book
        </p>
        <button
          type="button"
          onClick={() => setOpenId(null)}
          className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          Tutup Semua ↑
        </button>
      </div>
    </div>
  );
}
