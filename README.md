# Nur Rafid Aditya - Engineering Portfolio Website

Website portofolio profesional untuk **Nur Rafid Aditya**, dibangun dengan arsitektur modern **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS**.

Situs ini dirancang secara **Data-Driven**, sehingga sangat ramah pemula: kamu tidak perlu mengutak-atik kode tampilan (HTML/CSS) ketika ingin memperbarui data diri, menambah sertifikat baru, atau menambah proyek baru. Cukup perbarui satu file data!

---

## 🚀 Cara Menjalankan Website di Komputer Kamu

Buka terminal di folder ini (`f:\Website Porto\LINK CODE`), lalu jalankan perintah berikut:

```bash
npm run dev
```

Setelah itu, buka browser kamu dan kunjungi:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Panduan Struktur File & Folder

```text
LINK CODE/
├── public/                                # Tempat menyimpan file gambar/dokumen statis
│   └── images/
│       ├── certificates/                  # Simpan foto/scan sertifikat di sini
│       └── projects/                      # Simpan foto galeri proyek di sini
│
├── src/
│   ├── app/                               # Halaman & Konfigurasi Next.js App Router
│   │   ├── layout.tsx                     # Metadata SEO, font, dan kerangka global
│   │   ├── page.tsx                       # Halaman utama penggabung semua section
│   │   └── globals.css                    # Pengaturan style global & Tailwind CSS
│   │
│   ├── components/                        # Komponen Tampilan (UI)
│   │   ├── Navbar.tsx                     # Menu navigasi atas sticky dengan efek blur
│   │   ├── Hero.tsx                       # Header nama, headline profesi BNSP, & tombol CTA
│   │   ├── About.tsx                      # Profil latar belakang MIPA & keahlian teknik
│   │   ├── SkillsSection.tsx              # Daftar kompetensi teknik (Electrical, IoT, Tools)
│   │   ├── Certifications.tsx             # Grid sertifikat interaktif dengan filter kategori
│   │   ├── CertificateModal.tsx           # Pop-up preview detail sertifikat saat di-klik
│   │   ├── PortfolioSection.tsx           # Kontainer daftar proyek
│   │   ├── ProjectCard.tsx                # Card detail proyek + galeri foto dokumentasi
│   │   ├── TimelineUpdates.tsx            # Linimasa kegiatan & pencapaian terbaru
│   │   ├── Footer.tsx                     # Bagian bawah website & kontak langsung
│   │   └── Icons.tsx                      # Icon SVG resmi (GitHub, LinkedIn)
│   │
│   └── data/                              # ⭐️ TEMPAT KAMU MENGEDIT KONTEN (PENTING!)
│       ├── portfolio-data.ts              # Semua teks sertifikat, proyek, bio, & kontak
│       └── types.ts                       # Format standar tipe data TypeScript
│
├── package.json                           # Konfigurasi dependensi project
└── tsconfig.json                          # Konfigurasi TypeScript
```

---

## 🛠️ Cara Menambah Proyek Baru (Sangat Mudah!)

Buka file `src/data/portfolio-data.ts`. Cari bagian `export const projects = [...]`, lalu tambahkan objek baru seperti contoh berikut:

```typescript
{
  id: "proyek-baru-2026",
  title: "Nama Proyek Baru Kamu",
  role: "Posisi Kamu di Proyek (Misal: Project Lead)",
  company: "Nama Perusahaan / Organisasi",
  location: "Bandung, Indonesia",
  year: 2026,
  summary: "Penjelasan ringkas proyek dalam 1-2 kalimat berbahasa Inggris.",
  highlights: [
    "Pencapaian atau tanggung jawab pertama...",
    "Pencapaian atau tanggung jawab kedua...",
  ],
  techStack: ["IoT", "Automation", "Wiring"],
  images: [
    {
      src: "/images/projects/foto-proyek.jpg",
      alt: "Deskripsi foto",
      caption: "Keterangan foto yang muncul di galeri"
    }
  ]
}
```

Website akan **secara otomatis membuatkan Card baru lengkap dengan galeri foto dan pop-up lightbox** tanpa kamu perlu mengetik kode HTML sama sekali!

---

## 📜 Cara Menambah Sertifikat Baru

Buka file `src/data/portfolio-data.ts`. Cari bagian `export const certificates = [...]`, lalu tambahkan:

```typescript
{
  id: "cert-baru",
  title: "Nama Sertifikat",
  issuer: "Lembaga Penerbit (Misal: BNSP / Huawei)",
  year: 2026,
  category: "BNSP", // Pilihan: "BNSP" | "Industry" | "Government"
  description: "Penjelasan singkat kompetensi yang disertifikasi dalam bahasa Inggris.",
  image: "/images/certificates/cert-nama-file.jpg"
}
```

---

## 📷 Cara Memasang Foto Asli Sertifikat & Galeri

1. Masukkan file gambar sertifikat kamu ke dalam folder:  
   `public/images/certificates/`
2. Masukkan foto-foto kegiatan/proyek kamu ke dalam folder:  
   `public/images/projects/`
3. Sesuaikan nama filenya dengan yang tertera di `src/data/portfolio-data.ts`.

*Catatan: Jika file gambar belum kamu masukkan, website sudah memiliki sistem fallback otomatis berupa lencana grafis elegan, sehingga website tetap terlihat rapi dan tidak akan rusak!*
