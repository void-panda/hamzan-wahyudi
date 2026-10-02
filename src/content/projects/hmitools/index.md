---
title: "HMITools"
summary: "Platform utilitas digital all-in-one mahasiswa dan kampus yang cepat, gratis, dan 100% diproses di sisi klien (client-side privacy-first)."
date: "2026-10-02"
draft: false
tags:
- Astro
- React
- Tailwind CSS
- TypeScript
- WebAssembly
repoUrl: https://github.com/void-panda/HMITools
image: "./Screenshot (87).png"
---

![HMITools Preview](./Screenshot%20(87).png)

**HMITools** adalah platform utilitas digital terbuka, cepat, bebas biaya, dan 100% diproses di sisi klien (*client-side*) untuk menunjang aktivitas akademik, kepanitiaan acara, dan produktivitas mahasiswa. Diprakarsai di bawah naungan Himpunan Mahasiswa Teknologi Informasi (HMIT).

---

## 📌 Latar Belakang & Keunggulan

Proyek ini dibangun untuk menyelesaikan berbagai kendala produktivitas harian mahasiswa dan panitia organisasi tanpa perlu bergantung pada server pihak ketiga:

- **100% Client-Side Processing (Zero Data Leak):** Seluruh pemrosesan dokumen (PDF, foto identitas, CV, audio) dieksekusi langsung di memori peramban menggunakan WebAssembly dan HTML5 Canvas. Berkas pribadi pengguna tidak pernah dikirim ke internet.
- **Bebas Kuota, Watermark & Iklan:** Tanpa batasan harian tiruan, tanpa watermark paksa pada hasil ekspor, dan antarmuka bersih tanpa iklan yang mengganggu.
- **Biaya Operasional Rp 0:** Berjalan sebagai aplikasi statis murni dengan arsitektur Astro Islands dan React yang hemat sumber daya.

---

## 🛠️ Fitur & Kategori Utilitas

### 1. Kepanitiaan & Event Organisasi
- **Twibbon Campaign Maker:** Generator twibbon dengan kontrol zoom, rotasi, geser interaktif (touch/drag), dan pembuatan tautan kampanye.
- **Bulk E-Sertifikat Generator:** Menghasilkan puluhan hingga ratusan sertifikat panitia/peserta otomatis dari file template dan spreadsheet CSV dalam satu paket ZIP.
- **Instagram Grid Post Maker:** Memotong gambar menjadi format puzzle feed Instagram (3x1, 3x2, 3x3) lengkap dengan penomoran urut unggah.
- **Custom QR Code Generator:** Membuat QR code presensi dan materi dengan kustomisasi warna, sudut border, dan logo di tengah.

### 2. Akademik & Riset
- **CV ATS Builder:** Editor Curriculum Vitae berformat single-column ramah parser ATS dengan pratinjau langsung dan ekspor PDF vektor asli.
- **Kalkulator & Target IPK:** Menghitung IPS semester dan simulasi nilai minimal pada sisa SKS untuk mencapai target kelulusan.
- **Citation & Daftar Pustaka Generator:** Format sitasi ilmiah instan (APA 7th, IEEE, Harvard, BibTeX) sekali klik.
- **OCR Catatan & Slide Kuliah:** Ekstraksi teks dari foto papan tulis atau presentasi menggunakan Tesseract.js WebAssembly (Bahasa Indonesia & Inggris).

### 3. Dokumen & Media
- **PDF Toolkit:** Gabung (*Merge*), pisah (*Split*), dan bubuhkan cap air (*Watermark*) menggunakan `pdf-lib`.
- **Media & Document Compressor:** Kompresi gambar (JPG, PNG, WebP) dan dokumen PDF secara batch dengan kalkulasi penghematan ukuran.
- **In-Browser Media Converter:** Ekstraksi audio rekaman kuliah (MP4 ke WAV via Web Audio API) dan konversi format gambar lokal.
- **Pas Foto Background Remover & Inpainting Watermark Remover:** Manipulasi grafis dan segmentasi warna foto langsung di canvas browser.

---

## 🖼️ Tampilan Aplikasi

![HMITools Dashboard & Tools](./Screenshot%20(88).png)

---

## 🏗️ Stack Teknologi

- **Framework:** [Astro](https://astro.build/) (Static Site Generation & Island Architecture)
- **UI & Komponen:** [React 19](https://react.dev/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Core Libraries:** `pdf-lib`, `tesseract.js` (WASM), `jszip`, `papaparse`, `qrcode`
