import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const assets = [
  // Logo
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/download-e1781892094692.png",
    dest: "images/logo.png",
  },
  // Hero background
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/img-.jpeg",
    dest: "images/hero-bg.jpeg",
  },
  // About collage (base photo + copies used across the collage)
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/group-of-smiling-people-in-studio-portraits-2026-01-08-23-13-58-utc.jpg",
    dest: "images/about/collage-1.jpg",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/group-of-smiling-people-in-studio-portraits-2026-01-08-23-13-58-utc-Copy.jpg",
    dest: "images/about/collage-2.jpg",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/group-of-smiling-people-in-studio-portraits-2026-01-08-23-13-58-utc-Copy-3.jpg",
    dest: "images/about/collage-3.jpg",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/group-of-smiling-people-in-studio-portraits-2026-01-08-23-13-58-utc-Copy-4.jpg",
    dest: "images/about/collage-4.jpg",
  },
  // Testimonial avatars (reuse the same collage photos per DOM inspection)
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/group-of-smiling-people-in-studio-portraits-2026-01-08-23-13-58-utc.jpg",
    dest: "images/testimonials/patient-1.jpg",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/group-of-smiling-people-in-studio-portraits-2026-01-08-23-13-58-utc-Copy-4.jpg",
    dest: "images/testimonials/patient-2.jpg",
  },
  // Service card images (unique ones)
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/14953-Seborrheic-Dermatitis-1-1024x1024.png",
    dest: "images/services/anti-wrinkles.png",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/14915-Acne-1-1024x1024.png",
    dest: "images/services/cryolipolysis.png",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/14964-Wrinkles-1-1024x1024.png",
    dest: "images/services/sunekos.png",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/14954-Serum-1-1024x1024.png",
    dest: "images/services/emsculpt-neo.png",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/14940-Laser-1-1024x1024.png",
    dest: "images/services/phlebotomy.png",
  },
  // Reused placeholder image (used by the remaining 10 service cards on the live site)
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/14933-Guasha-Massager-1-1024x1024.png",
    dest: "images/services/placeholder.png",
  },
  // Background images used elsewhere on the page (why-choose-us / promise / misc sections)
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-19-at-9.32.28-PM.jpeg",
    dest: "images/misc/promise-1.jpeg",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/f3210b4c79.jpg",
    dest: "images/misc/promise-2.jpg",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-09-at-11.32.11-AM.jpeg",
    dest: "images/misc/why-choose-us.jpeg",
  },
  {
    url: "https://nweb.yourhealthfirst.uk/wp-content/uploads/2026/06/plantadea-T7uYDZTVcu0-unsplash.jpg",
    dest: "images/misc/faq-bg.jpg",
  },
];

async function downloadOne({ url, dest }) {
  const target = join(publicDir, dest);
  await mkdir(dirname(target), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`FAILED (${res.status}) ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(target, buf);
    console.log(`OK  ${dest}  (${buf.length} bytes)`);
  } catch (err) {
    console.error(`ERROR ${url}:`, err.message);
  }
}

async function main() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
  console.log("Done.");
}

main();
