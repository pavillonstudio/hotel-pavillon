import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
  "https://www.hotelpavillon.at/wp-content/uploads/2017/08/Header_BG_repeat.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_Aufmacher.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/Line.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/Favicon.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000024.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000046.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000054.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000056.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000072.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000092.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1020940.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1020980.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1210060.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1210115.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1210116.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1210118.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1210119.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1220232.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_BrittaFuchs-1.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_EliasFreiberger.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_Facebook-1.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_Leaf2.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_MapHiRes.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_MarionKamper.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_SimonAssefi.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_Team.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/HotelPavillon_UlrichFuchs-1.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/Pavillon_Neon_Hotel.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2017/09/Pavillon_neonSchriftzug_4.gif",
  "https://www.hotelpavillon.at/wp-content/uploads/2018/09/HotelPavillon_ThomasStrobl-1.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2018/10/HotelPavillon_CeciliaCapri-1.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2018/10/HotelPavillon_MathiasAssefi.jpg",
  "https://www.hotelpavillon.at/wp-content/uploads/2018/11/HotelPavillon-Stoerer-links-tiny.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2019/08/HotelPavillon_LucasMartin.png",
  "https://www.hotelpavillon.at/wp-content/uploads/2019/08/Portraits_KathrinAlexander_v2-2.png"
];

const destDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  for (const url of urls) {
    const filename = path.basename(url);
    const dest = path.join(destDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, dest);
    } catch (e) {
      console.error(`Failed to download ${url}: ${e.message}`);
    }
  }
  console.log('All downloads finished.');
}

main();
