import fs from "fs";
import path from "path";
import sharp from "sharp";
const sourceDir = path.join("src","assests","images");
const files = ["gallery-1.jpg","gallery-2.jpg","gallery-3.jpg","gallery-4.jpg","gallery-5.jpg","gallery-6.jpg","gallery-7.jpg","gallery-8.jpg","gallery-9.jpg","location-map.jpg","amenities-1.jpg","amenities-2.jpg"];
const sizes = [640,1024,1400];
(async()=>{
  for(const file of files){
    const input = path.join(sourceDir,file);
    const base = path.basename(file, path.extname(file));
    const image = sharp(input);
    const meta = await image.metadata();
    for(const w of sizes){
      if(meta.width <= w) continue;
      const webpOut = path.join(sourceDir, `${base}-${w}.webp`);
      await image.resize({ width: w }).webp({ quality: 75, effort: 6 }).toFile(webpOut);
      const jpgOut = path.join(sourceDir, `${base}-${w}.jpg`);
      await image.resize({ width: w }).jpeg({ quality: 80, mozjpeg: true }).toFile(jpgOut);
      console.log(`wrote ${webpOut} and ${jpgOut}`);
    }
  }
})().catch(err=>{ console.error(err); process.exit(1); });
