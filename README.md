# Jason Martin Portfolio Website

Website portofolio modern untuk Jason Martin - Graphic Designer, dibuat dengan React.js berdasarkan desain yang diberikan.

## Fitur

- **Responsive Design** - Tampil sempurna di desktop dan mobile
- **Modern UI/UX** - Desain gelap dengan aksen biru cyan
- **Single Page Application** - Navigasi smooth antar section
- **4 Halaman Utama:**
  - Home - Hero section dengan workspace image
  - About - Profil dan deskripsi singkat
  - Resume - Skills, experience, education, dan hobbies
  - Portfolio - Galeri project terbaru

## Teknologi

- React.js 18
- CSS3 dengan Flexbox & Grid
- Responsive Design
- Modern JavaScript (ES6+)

## Cara Menjalankan

1. Install dependencies:

```bash
npm install
```

2. Jalankan development server:

```bash
npm start
```

3. Buka browser di `http://localhost:3000`

## Struktur Project

```
src/
├── components/
│   ├── Navbar.js      # Navigation component
│   ├── Home.js        # Hero/landing page
│   ├── About.js       # About section
│   ├── Resume.js      # Skills & experience
│   └── Portfolio.js   # Project gallery
├── App.js             # Main app component
├── App.css            # Global styles
└── index.js           # Entry point
```

## Customization

- Ganti gambar di komponen dengan URL gambar Anda sendiri
- Update informasi personal di setiap komponen
- Sesuaikan warna tema di `App.css`
- Tambah/edit skills dan experience di `Resume.js`
- Update portfolio items di `Portfolio.js`

## Build untuk Production

```bash
npm run build
```

File production akan tersedia di folder `build/`.

## Fitur Download CV

Website ini dilengkapi dengan fitur download CV dalam format PDF yang dapat diakses melalui tombol "RESUME" di halaman utama.

### Cara Kerja:

1. Klik tombol "RESUME" di halaman Home
2. PDF akan otomatis ter-generate dan ter-download
3. File PDF berisi informasi lengkap:
   - Header dengan nama dan profesi
   - Informasi kontak
   - About/deskripsi singkat
   - Pengalaman kerja (5 perusahaan)
   - Skills software design
   - Pendidikan
   - Bahasa yang dikuasai

### Teknologi:

- jsPDF library untuk generate PDF
- Custom styling dengan background gelap dan aksen biru
- Layout 2 kolom yang rapi dan profesional

### Customization:

- Edit file `src/utils/pdfGenerator.js` untuk mengubah konten CV
- Sesuaikan warna, font, dan layout sesuai kebutuhan
- Tambah section baru seperti sertifikasi atau project
