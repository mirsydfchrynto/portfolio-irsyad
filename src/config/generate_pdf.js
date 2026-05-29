const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const sourceHtml = path.join(__dirname, 'resume.html');
const tempPdf = path.join(__dirname, 'temp_resume.pdf');

// Target destinations
const targets = [
  '/home/irsyad/Downloads/muhammad-irsyad-fachryanto-resume.pdf',
  path.join(__dirname, '../../public/resume/muhammad-irsyad-fachryanto-resume.pdf'),
  path.join(__dirname, '../../public/resume/muhammad-irsyad-fachryanto-resume.txt'),
  '/home/irsyad/Gudang/mydevelopment/muhammad_irsyadF-1772222539127.pdf'
];

console.log('--- RESUME GENERATION SYSTEM ---');
console.log('HTML Source:', sourceHtml);

try {
  // Execute headless Google Chrome to print HTML to PDF
  console.log('Mengompilasi HTML ke PDF menggunakan Headless Google Chrome...');
  const cmd = `google-chrome --headless --disable-gpu --no-sandbox --print-to-pdf="${tempPdf}" "${sourceHtml}"`;
  execSync(cmd, { stdio: 'inherit' });
  
  if (fs.existsSync(tempPdf)) {
    console.log('PDF berhasil dikompilasi ke temporary file.');
    
    // Distribute to all target directories
    targets.forEach(target => {
      // Ensure target directory exists
      const dir = path.dirname(target);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.copyFileSync(tempPdf, target);
      console.log(`Disalin ke: ${target}`);
    });

    // Generate Base64 TS file for in-memory embedded PDF delivery (Surge CDN bypass)
    const base64Data = fs.readFileSync(tempPdf).toString('base64');
    const tsFileContent = `// File ini dihasilkan secara otomatis oleh generate_pdf.js. Jangan edit manual.
export const pdfBase64 = "${base64Data}";
`;
    const tsPath = path.join(__dirname, 'pdfBase64.ts');
    fs.writeFileSync(tsPath, tsFileContent);
    console.log(`Base64 TS File berhasil dibuat di: ${tsPath}`);
    
    // Clean up temp file
    fs.unlinkSync(tempPdf);
    console.log('Berhasil membersihkan temporary file.');
    console.log('--- PROSES SUKSES SEPENUHNYA ---');
  } else {
    throw new Error('Gagal menemukan berkas PDF hasil cetak.');
  }
} catch (error) {
  console.error('Terjadi kesalahan saat memproses PDF:', error.message);
  process.exit(1);
}
