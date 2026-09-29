import sharp from "sharp";

const src = [
  "C:/Users/ASIFCO~1/AppData/Local/Temp/claude/D--01-Clients/8e4a9864-d1c4-4396-adad-d887d2740b7e/images/24.webp",
  "C:/Users/ASIFCO~1/AppData/Local/Temp/claude/D--01-Clients/8e4a9864-d1c4-4396-adad-d887d2740b7e/images/25.webp",
  "C:/Users/ASIFCO~1/AppData/Local/Temp/claude/D--01-Clients/8e4a9864-d1c4-4396-adad-d887d2740b7e/images/26.webp",
];
const dst = [
  "public/images/gallery/profhilo/profhilo-2.jpeg",
  "public/images/gallery/profhilo/profhilo-3.jpeg",
  "public/images/gallery/profhilo/profhilo-4.jpeg",
];

for (let i = 0; i < src.length; i++) {
  await sharp(src[i]).jpeg({ quality: 90 }).toFile(dst[i]);
  const meta = await sharp(dst[i]).metadata();
  console.log(dst[i], meta.width, meta.height);
}
