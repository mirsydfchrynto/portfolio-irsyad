const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const photoSource = '/home/irsyad/Downloads/profile_irsyad.png';
const resumeHtmlPath = path.join(__dirname, 'resume.html');
const publicAvatarPath = path.join(__dirname, '../../public/avatar.jpg');
const pageTsxPath = path.join(__dirname, '../app/page.tsx');

console.log('--- INTEGRASI FOTO CV & PORTFOLIO ---');

try {
  // 1. Validasi keberadaan foto
  if (!fs.existsSync(photoSource)) {
    throw new Error(`File foto tidak ditemukan di: ${photoSource}`);
  }
  console.log('Foto ditemukan.');

  // 2. Salin foto ke public folder Next.js
  fs.copyFileSync(photoSource, publicAvatarPath);
  console.log(`Foto disalin ke public assets: ${publicAvatarPath}`);

  // 3. Konversi ke Base64 untuk embedding resume.html
  const base64Data = fs.readFileSync(photoSource).toString('base64');
  console.log('Foto berhasil dikonversi ke Base64.');

  // 4. Update resume.html with the brand-new executive grid header layout
  let resumeHtml = fs.readFileSync(resumeHtmlPath, 'utf8');
  
  const newHeader = `<header>
      <div class="header-left">
        <div class="name-title">
          <h1>M. IRSYAD FACHRYANTO</h1>
          <div class="title-sub">Mobile Engineer & Full-Stack Developer</div>
        </div>
        <div class="contact-grid">
          <div class="contact-col">
            <div class="contact-item"><strong>Lokasi:</strong> Tegal, Jawa Tengah, ID</div>
            <div class="contact-item"><strong>Fokus:</strong> Software Security & System Architecture</div>
            <div class="contact-item"><strong>Minat:</strong> Mobile Engineering & AI Integration</div>
          </div>
          <div class="contact-col right">
            <div class="contact-item"><strong>WhatsApp:</strong> +62 858 6502 6621</div>
            <div class="contact-item"><strong>Email:</strong> <a href="mailto:irsydfchrynto@gmail.com">irsydfchrynto@gmail.com</a></div>
            <div class="contact-item"><strong>Tautan:</strong> <a href="https://irsyad-architect.surge.sh" target="_blank">irsyad-architect.surge.sh</a></div>
          </div>
        </div>
      </div>
      <div class="header-right">
        <img src="data:image/png;base64,${base64Data}" alt="M. Irsyad Fachryanto">
      </div>
    </header>`;

  const regexHeader = /<header[\s\S]*?<\/header>/;
  if (resumeHtml.match(regexHeader)) {
    console.log('Header terdeteksi di resume.html. Memperbarui layout menjadi Grid Eksekutif...');
    resumeHtml = resumeHtml.replace(regexHeader, newHeader);
    fs.writeFileSync(resumeHtmlPath, resumeHtml, 'utf8');
    console.log('resume.html berhasil diperbarui dengan Grid Eksekutif!');
  } else {
    console.warn('Gagal mendeteksi tag <header> di resume.html. Silakan periksa struktur file.');
  }

  // 5. Update page.tsx (Diabaikan karena sudah diedit manual via replace_file_content)
  console.log('Lewati update page.tsx (sudah diselesaikan secara terpisah).');

  // 6. Jalankan pembuat PDF
  console.log('Menjalankan kembali kompilasi PDF...');
  execSync('node src/config/generate_pdf.js', { stdio: 'inherit', cwd: path.join(__dirname, '../..') });
  console.log('--- PROSES INTEGRASI SELESAI ---');

} catch (error) {
  console.error('Kesalahan:', error.message);
  process.exit(1);
}
