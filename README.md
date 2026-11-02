# Money Journal

Webapp budgeting pribadi dengan metode **50/30/20**: saldo awal tiap periode dibagi 50% Needs, 30% Wants, dan 20% Savings, lalu setiap transaksi dicatat terhadap porsinya. Desainnya mengikuti template spreadsheet budgeting dan sistem visual Habit Builder (kertas terang, tinta hitam, komponen membulat).

## Fitur

- **Dashboard**: sisa uang, budget harian, status tiap pos, ring budget terpakai, dan progres per kategori.
- **Transaksi**: catat cepat (Income, Needs, Wants, Savings, Debt), kategori dengan ikon dan warna, nominal cepat kelipatan 50 ribu, geser untuk hapus.
- **Atur Budget**: tanggal gajian sebagai awal periode, alokasi 50/30/20 yang bisa diubah, kelola kategori.
- **Goals**: goal tabungan dengan 3 tingkat prioritas yang bisa diganti namanya, cek kelayakan terhadap budget Savings, grafik terkumpul vs rencana.
  - Goal yang belum tercapai di tenggatnya otomatis diperpanjang (1, 3, 6, atau 12 bulan) dan sisanya dibagi rata ke bulan-bulan perpanjangan.
  - Halaman **Goals tercapai** mencatat bulan tercapai, lama waktu, dan perbandingan dengan tenggat.
- **Sinkronisasi**: data tersimpan di cache lokal perangkat dan di cloud akun Claude (saat dibuka sebagai artifact). Tombol Simpan dan Load, plus sinkron otomatis saat aplikasi dibuka kembali.
- **Unduh laporan**: PDF (ringkasan, kategori, transaksi, goals) atau CSV.
- **Lainnya**: mode gelap, bahasa Indonesia dan Inggris, nominal ringkas (3,5jt / 3.5m), tutorial singkat, pemilih bulan dan tahun, pintasan keyboard di desktop.

## Menjalankan secara lokal

Perlu [Node.js](https://nodejs.org) (tanpa dependensi tambahan).

```bash
npm start
```

Lalu buka http://localhost:4173. Saat dijalankan lokal, data tersimpan di browser (localStorage). Sinkronisasi cloud hanya aktif saat aplikasi dibuka sebagai artifact di claude.ai.

## Struktur

```
money-journal.html   seluruh aplikasi: HTML, CSS, dan JavaScript dalam satu file
fonts/               Open Sauce Sans (400, 500, 700)
scripts/serve.js     server pratinjau lokal
```

`money-journal.html` sengaja berupa fragmen HTML tanpa `<!doctype>`, `<html>`, dan `<head>`, karena platform artifact menambahkan kerangka dokumen saat publish. `scripts/serve.js` melakukan hal yang sama secara lokal.

## Teknologi

- HTML, CSS, dan JavaScript murni, tanpa build step.
- Token desain (tipografi, spasi, radius, motion) sebagai CSS custom properties, dengan palet terang dan gelap.
- View Transitions API untuk perpindahan halaman dan pergantian tema, dengan fallback CSS.
- jsPDF dan jspdf-autotable dimuat saat dibutuhkan dari cdnjs untuk ekspor PDF.
- Font: Open Sauce Sans (SIL Open Font License 1.1) dan IBM Plex Mono dari Google Fonts.

## Tautan

- Prototipe (artifact claude.ai, privat): https://claude.ai/artifact/6Ygt7mPudrF3ucmWrKNB9Z
- PRD (Claude Docs, privat): https://claude.ai/artifact/5ng12Mc4ND7erL7SmsRJ4m
