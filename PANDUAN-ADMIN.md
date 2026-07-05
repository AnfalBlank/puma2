# Panduan Admin Panel — Website PUMA

Manual penggunaan panel admin website **PT. Prima Usaha Mitra Abadi (PUMA)**.
Dokumen ini menjelaskan semua modul yang tersedia di admin, fungsinya, dan cara
menggunakannya. Ditujukan untuk admin/marketing yang mengelola konten website
tanpa perlu menyentuh kode.

---

## Daftar Isi

1. [Gambaran Umum](#1-gambaran-umum)
2. [Masuk ke Admin (Login)](#2-masuk-ke-admin-login)
3. [Tata Letak Panel](#3-tata-letak-panel)
4. [Modul Dashboard](#4-modul-dashboard)
5. [Modul Site (Informasi Kontak)](#5-modul-site-informasi-kontak)
6. [Modul Hero Copy](#6-modul-hero-copy)
7. [Modul Produk](#7-modul-produk)
8. [Modul Insight (Artikel)](#8-modul-insight-artikel)
9. [Modul FAQ](#9-modul-faq)
10. [Modul Inbox (Pesan Masuk)](#10-modul-inbox-pesan-masuk)
11. [Upload & Galeri Gambar](#11-upload--galeri-gambar)
12. [Menyimpan, Reset, & Logout](#12-menyimpan-reset--logout)
13. [Notifikasi Email](#13-notifikasi-email)
14. [Keamanan & Rate-Limit Login](#14-keamanan--rate-limit-login)
15. [Penyimpanan Data (Database)](#15-penyimpanan-data-database)
16. [Konfigurasi Awal (untuk Teknis)](#16-konfigurasi-awal-untuk-teknis)
17. [Troubleshooting](#17-troubleshooting)

---

## 1. Gambaran Umum

Admin panel adalah pusat kendali konten website. Lewat panel ini Anda bisa:

- Mengubah informasi kontak (telepon, WhatsApp, email, alamat) yang tampil di
  seluruh halaman.
- Menyunting teks hero (judul besar) tiap halaman.
- Mengelola katalog produk (tambah, ubah, urutkan, hapus).
- Menulis & mengelola artikel Insight.
- Mengatur daftar FAQ per halaman.
- Membaca dan mengelola pesan yang masuk dari form kontak.
- Mengunggah dan memilih gambar lewat galeri.
- Memantau statistik kunjungan lewat Dashboard.

Setiap perubahan konten **disimpan ke database** dan halaman publik otomatis
diperbarui setelah Anda menekan **Save**.

---

## 2. Masuk ke Admin (Login)

1. Buka alamat: **`/admin/login`** (contoh: `https://www.primausahamitraabadi.com/admin/login`).
2. Masukkan **password admin**.
3. Klik **Masuk**.

Setelah berhasil, Anda diarahkan ke dashboard admin. Sesi login bertahan
**7 hari** sebelum diminta login ulang.

> **Penting:** Semua halaman di bawah `/admin` dilindungi. Jika belum login dan
> mencoba membuka `/admin`, Anda otomatis dialihkan ke halaman login.

---

## 3. Tata Letak Panel

Setelah login, tampilan terbagi menjadi:

- **Top bar (atas):** logo, indikator status (`Synced` / `Unsaved`), tombol
  **Lihat Site**, **Reset**, **Save**, dan **Logout**.
- **Tab navigasi:** Dashboard · Site · Hero Copy · Produk · Insight · FAQ · Inbox.
  Tab **Inbox** menampilkan badge angka jumlah pesan yang belum dibaca.
- **Area konten:** isi modul sesuai tab yang dipilih.

**Indikator status** (kanan atas):
- 🟢 **Synced** — semua perubahan sudah tersimpan.
- 🟠 **Unsaved** — ada perubahan yang belum disimpan. Jangan tutup tab sebelum
  klik **Save** (sistem akan memperingatkan jika Anda mencoba keluar).

---

## 4. Modul Dashboard

Tab **Dashboard** menampilkan ringkasan statistik website.

**Kartu ringkasan:**
- **Total Kunjungan** — total page view sepanjang waktu + jumlah hari ini.
- **Pengunjung Unik** — perkiraan jumlah pengunjung berbeda + jumlah hari ini.
- **Total Pesan** — total pesan masuk + jumlah dalam 7 hari terakhir.
- **Belum Dibaca** — jumlah pesan inbox yang belum dibaca.

**Grafik & daftar:**
- **Kunjungan 7 Hari Terakhir** — grafik batang harian. Arahkan kursor ke batang
  untuk melihat jumlah view & visitor per hari.
- **Halaman Teratas** — halaman yang paling banyak dikunjungi.
- **Sumber Trafik** — domain pengarah (referrer) pengunjung, mis. google.com.

Klik **Refresh** untuk memuat data terbaru. Data diperbarui otomatis saat
dashboard dibuka.

> Catatan privasi: pengunjung diidentifikasi lewat kode acak harian (hash),
> bukan menyimpan IP atau identitas pribadi.

---

## 5. Modul Site (Informasi Kontak)

Tab **Site** mengatur informasi kontak yang dipakai di **Navbar, Footer, halaman
Kontak, tombol WhatsApp melayang, dan data SEO (JSON-LD)**.

Field yang tersedia:

| Field | Keterangan | Contoh |
|---|---|---|
| **Telepon (Display)** | Nomor telepon yang ditampilkan | `(0264) 8330330` |
| **Telepon (tel: href)** | Link telepon, format E.164 | `tel:+622648330330` |
| **Email** | Email kontak | `marketing@primausahamitraabadi.com` |
| **WhatsApp (Display)** | Nomor WA yang ditampilkan | `+62 857-5463-7579` |
| **WhatsApp (digits)** | Nomor WA hanya angka (untuk link wa.me) | `6285754637579` |
| **Alamat lengkap** | Alamat workshop | `Jl. Raya By Pass Jomin No. 88 ...` |

**Cara pakai:**
1. Ubah field yang diperlukan.
2. Klik **Save** di top bar.
3. Perubahan langsung tampil di seluruh halaman.

> Tips WhatsApp: **digits** harus tanpa `+`, spasi, atau tanda hubung. Contoh
> benar: `6285754637579`. Ini dipakai untuk membuat link `wa.me`.

---

## 6. Modul Hero Copy

Tab **Hero Copy** mengatur teks header besar di tiap halaman: **Beranda,
Tentang, Produk, Insight, Kontak**.

Untuk tiap halaman tersedia field:
- **Eyebrow** (opsional) — teks kecil di atas judul.
- **Title** — judul utama.
- **Highlight (orange)** — bagian judul yang diberi warna oranye.
- **Intro paragraf** — paragraf pengantar di bawah judul.

**Cara pakai:**
1. Cari kartu halaman yang ingin diubah (mis. "Hero · Beranda").
2. Sunting teksnya.
3. Klik **Save**.

---

## 7. Modul Produk

Tab **Produk** mengelola katalog produk yang tampil di beranda dan halaman
`/products`. Urutan kartu = urutan tampil di website.

**Menambah produk:** klik **Tambah Produk** (kanan atas). Kartu baru muncul di
bawah, lalu isi datanya.

**Field per produk:**
- **ID (urutan)** — penanda urutan, mis. `01`, `02`.
- **Icon** — pilih ikon: Truck, Box, Layers, Container, HardHat, FlaskConical, Fuel.
- **Title** — nama produk.
- **Sub-title** — keterangan singkat di bawah judul.
- **Tag** — label kecil (chip).
- **Spec highlight** — sorotan spesifikasi singkat.
- **Gambar produk** — lihat [Upload & Galeri Gambar](#11-upload--galeri-gambar).
- **Deskripsi** — penjelasan produk.
- **Features** — daftar fitur, **satu per baris**, maksimal 6 baris.

**Mengatur urutan:** gunakan tombol panah ⬆️ / ⬇️ di pojok kartu.

**Menghapus produk:** klik ikon 🗑️ di kartu, lalu konfirmasi.

Setelah selesai, klik **Save**.

---

## 8. Modul Insight (Artikel)

Tab **Insight** mengelola artikel yang tampil di section Insight beranda dan
halaman `/insight`, serta halaman detail tiap artikel (`/insight/<slug>`).

**Menambah artikel:** klik **Tambah Artikel**. Artikel baru muncul di **paling
atas** daftar.

**Field per artikel:**
- **Title** — judul artikel.
- **Slug URL** — alamat artikel. **Boleh dikosongkan** — sistem akan membuat slug
  otomatis dari judul saat disimpan. Contoh: `tren-karoseri-2024`.
- **Category** — kategori, mis. `Engineering Insights`.
- **Author** — penulis.
- **Tanggal** — tanggal tampil, mis. `12 Okt 2024`.
- **Gambar artikel** — lihat [Upload & Galeri Gambar](#11-upload--galeri-gambar).
- **Excerpt** — ringkasan singkat (tampil di daftar artikel).
- **Isi Artikel** — badan artikel dengan format Markdown ringan.

**Format penulisan Isi Artikel (Markdown ringan):**
- `## Judul Bagian` → subjudul.
- `### Sub-bagian` → sub-subjudul.
- `- teks` → poin bullet list.
- Pisahkan paragraf dengan **baris kosong**.

**Mengatur urutan:** tombol panah ⬆️ / ⬇️.
**Menghapus:** ikon 🗑️ lalu konfirmasi.

Klik **Save** untuk menyimpan. URL artikel langsung aktif.

> Tips slug: jika dua artikel punya judul mirip, sistem menambah akhiran acak
> agar URL tetap unik. Sebaiknya isi slug manual agar rapi dan SEO-friendly.

---

## 9. Modul FAQ

Tab **FAQ** mengatur daftar tanya-jawab per halaman: **Beranda, Tentang, Produk,
Insight, Kontak**.

**Menambah item:** pada kartu halaman yang dituju, klik **Tambah Item**. Isi:
- **Pertanyaan**
- **Jawaban**

**Mengatur urutan:** tombol panah ⬆️ / ⬇️ pada tiap item.
**Menghapus item:** ikon 🗑️ pada item.

Klik **Save** untuk menerapkan.

---

## 10. Modul Inbox (Pesan Masuk)

Tab **Inbox** menampung semua pesan dari form kontak website — baik dari form
**"Minta Penawaran"** di beranda maupun form di halaman **Kontak**.

**Tiap pesan menampilkan:** tanggal masuk, halaman asal, nama, email, telepon,
perusahaan, subjek, dan isi pesan. Pesan **belum dibaca** ditandai label **New**
dan border oranye.

**Aksi per pesan:**
- 👁️ **Tandai dibaca / belum dibaca** — toggle status baca.
- ✉️ **Balas via email** — membuka aplikasi email dengan subjek balasan terisi.
- 🗑️ **Hapus** — menghapus pesan (perlu konfirmasi).

**Filter & alat:**
- **Semua** / **Belum Dibaca** — menyaring daftar.
- **Refresh** — memuat pesan terbaru tanpa reload halaman.

> Pesan di Inbox **tidak terpengaruh** tombol Reset konten. Inbox aman.

---

## 11. Upload & Galeri Gambar

Tersedia di field gambar pada modul **Produk** dan **Insight**. Tiap field punya
tiga cara mengisi gambar:

1. **Ketik path manual** di kolom teks (mis. `/uploads/foto.jpg` atau gambar
   bawaan `/PHOTO-...jpg`).
2. **Tombol Upload (⬆️)** — pilih file dari komputer, langsung terunggah dan
   otomatis terpasang ke field.
3. **Tombol Galeri (🖼️)** — buka **Media Library**: pilih gambar yang sudah
   diunggah, atau unggah baru, atau hapus gambar dari server.

**Ketentuan file:**
- Format: **JPG, PNG, WebP, GIF, AVIF, SVG**.
- Ukuran maksimal: **8 MB** per file.

Di bawah field akan muncul **preview** gambar yang dipilih.

> File yang diunggah disimpan di server pada folder `public/uploads/`. Menghapus
> gambar dari Media Library menghapus file secara permanen — pastikan tidak
> sedang dipakai produk/artikel lain.

---

## 12. Menyimpan, Reset, & Logout

Tombol-tombol di **top bar**:

- **Save** — menyimpan semua perubahan modul konten (Site, Hero, Produk, Insight,
  FAQ). Aktif hanya saat ada perubahan (status **Unsaved**). Setelah disimpan,
  halaman publik otomatis diperbarui.
- **Reset** — mengembalikan **seluruh konten** ke nilai bawaan (default). Berguna
  jika ingin membatalkan banyak perubahan. **Tidak menghapus** pesan Inbox.
  Perlu konfirmasi.
- **Lihat Site** — membuka website publik di tab baru untuk mengecek hasil.
- **Logout** — keluar dari sesi admin.

> Inbox dan upload gambar disimpan langsung saat aksi dilakukan, **tidak**
> menunggu tombol Save. Tombol Save khusus untuk modul konten.

---

## 13. Notifikasi Email

Saat ada pesan masuk lewat form kontak, sistem dapat mengirim **notifikasi email**
ke alamat yang ditentukan.

- Jika konfigurasi email (SMTP) **sudah diisi** di server → email notifikasi
  otomatis terkirim setiap ada pesan baru, lengkap dengan detail pengirim dan
  tombol balas.
- Jika **belum dikonfigurasi** → pesan tetap tersimpan dan muncul di Inbox; hanya
  notifikasi emailnya yang dilewati (tidak error).

Pengaturan SMTP dilakukan oleh teknis — lihat
[Konfigurasi Awal](#16-konfigurasi-awal-untuk-teknis).

---

## 14. Keamanan & Rate-Limit Login

Untuk mencegah percobaan tebak password:

- Maksimal **5 percobaan gagal** per alamat (IP) dalam **15 menit**.
- Saat gagal, sistem menampilkan sisa percobaan (mis. "Sisa 3 percobaan").
- Setelah melewati batas, login **dikunci sementara** dengan pesan "Terlalu
  banyak percobaan. Coba lagi dalam 15 menit."
- Login berhasil otomatis mereset hitungan percobaan.

Cookie sesi admin ditandatangani secara kriptografis dan kedaluwarsa setelah
7 hari.

---

## 15. Penyimpanan Data (Database)

Semua data admin tersimpan dalam **database SQLite** di server (file `data/puma.db`):

- **Konten** (Site, Hero, Produk, Insight, FAQ).
- **Inbox** (pesan masuk).
- **Statistik** kunjungan.
- **Catatan percobaan login** (untuk rate-limit).

Data lama dari versi sebelumnya (file `content.json` / `inbox.json`) **otomatis
dipindahkan** ke database sekali jalan saat sistem pertama kali memuatnya — tidak
ada data yang hilang.

> Untuk hosting (penting bagi teknis): pastikan folder `data/` dan
> `public/uploads/` berada di **penyimpanan permanen**. Di platform serverless
> (mis. Vercel) yang filesystem-nya sementara, gunakan volume persisten via
> variabel `DATA_DIR`, atau host di server dengan disk tetap (VPS).

---

## 16. Konfigurasi Awal (untuk Teknis)

Konfigurasi lewat berkas `.env` (lihat contoh di `.env.example`):

```dotenv
# Password untuk login admin
ADMIN_PASSWORD=ganti-password-kuat

# Kunci rahasia untuk menandatangani cookie sesi (string acak panjang)
ADMIN_SECRET=ganti-ke-string-acak-panjang

# (Opsional) Lokasi database & upload — default: <project>/data
# DATA_DIR=/var/data/puma

# Notifikasi email (SMTP). Kosongkan jika belum dipakai.
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
# Alamat penerima notifikasi (default: SMTP_USER bila kosong)
NOTIFY_EMAIL=
# Header pengirim email
SMTP_FROM=PUMA Website <no-reply@primausahamitraabadi.com>
```

**Menjalankan aplikasi:**
- Mode pengembangan: `npm run dev`
- Build produksi: `npm run build` lalu `npm start`

**Langkah keamanan wajib sebelum live:**
1. Ganti `ADMIN_PASSWORD` dengan password kuat.
2. Isi `ADMIN_SECRET` dengan string acak panjang & unik.
3. Pastikan situs berjalan di **HTTPS** (cookie sesi aman aktif di produksi).

---

## 17. Troubleshooting

| Masalah | Penyebab / Solusi |
|---|---|
| Tidak bisa login, muncul "Terlalu banyak percobaan" | Rate-limit aktif. Tunggu 15 menit lalu coba lagi dengan password benar. |
| Tombol **Save** tidak bisa diklik | Tidak ada perubahan (status **Synced**). Save hanya aktif saat ada perubahan. |
| Perubahan tidak muncul di website | Pastikan sudah klik **Save**. Lalu refresh halaman publik (Ctrl/Cmd+R). |
| Pesan dari form kontak tidak masuk Inbox | Cek koneksi & klik **Refresh** di Inbox. Pastikan field wajib (nama, email, pesan) terisi saat mengirim. |
| Email notifikasi tidak terkirim | Konfigurasi SMTP belum/ salah diisi di `.env`. Pesan tetap tersimpan di Inbox. |
| Gambar gagal diunggah | Cek format (JPG/PNG/WebP/GIF/AVIF/SVG) dan ukuran (maks 8 MB). |
| Gambar tidak tampil di website | Pastikan path benar (mis. `/uploads/nama.jpg`) dan file belum dihapus dari galeri. |
| Data hilang setelah deploy ulang | Folder `data/` & `public/uploads/` tidak permanen di host. Gunakan `DATA_DIR` ke volume persisten atau host dengan disk tetap. |

---

*Dokumen ini mengikuti modul yang tersedia di admin panel website PUMA. Jika ada
modul baru ditambahkan, perbarui panduan ini agar tetap sesuai.*
