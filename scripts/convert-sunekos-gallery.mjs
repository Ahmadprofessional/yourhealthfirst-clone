import sharp from "sharp";

const src = [
  "C:/Users/ASIFCO~1/AppData/Local/Temp/claude/D--01-Clients/8e4a9864-d1c4-4396-adad-d887d2740b7e/images/31.jpg",
  "C:/Users/ASIFCO~1/AppData/Local/Temp/claude/D--01-Clients/8e4a9864-d1c4-4396-adad-d887d2740b7e/images/32.jpg",
];
const dst = [
  "public/images/gallery/sunekos/sunekos-4.jpeg",
  "public/images/gallery/sunekos/sunekos-5.jpeg",
];

for (let i = 0; i < src.length; i++) {
  await sharp(src[i]).jpeg({ quality: 90 }).toFile(dst[i]);
  const meta = await sharp(dst[i]).metadata();
  console.log(dst[i], meta.width, meta.height);
}
