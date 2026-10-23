import { createClient } from "@sanity/client";
import * as fs from "fs";
import * as path from "path";

const ROOT_DIR = path.resolve(__dirname, "..");

const projectId = "gkjpvbqe";
const dataset = "production";
const apiVersion = "2026-10-23";

async function verify() {
  console.log("Reading migration snapshot...");
  const snapshotPath = path.join(ROOT_DIR, "backups", "migration-dry-run.json");
  const expectedDocs: any[] = JSON.parse(fs.readFileSync(snapshotPath, "utf-8"));
  console.log(`Expected documents count: ${expectedDocs.length}`);

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });

  console.log("Querying Sanity dataset via GROQ...");
  // Query all non-system documents in Sanity
  const liveDocs: any[] = await client.fetch(`*[_id in $ids]`, {
    ids: expectedDocs.map((d) => d._id),
  });

  console.log(`Retrieved ${liveDocs.length} documents from Sanity in 1 GROQ request.`);

  const liveMap = new Map<string, any>();
  for (const doc of liveDocs) {
    liveMap.set(doc._id, doc);
  }

  let matchCount = 0;
  let mismatchCount = 0;
  let missingCount = 0;
  const parityReport: any[] = [];

  for (const exp of expectedDocs) {
    const live = liveMap.get(exp._id);
    if (!live) {
      missingCount++;
      parityReport.push({ id: exp._id, type: exp._type, status: "MISSING" });
      continue;
    }

    let isMatch = true;
    if (exp.title && live.title !== exp.title) isMatch = false;
    if (exp.heroTitle && live.heroTitle !== exp.heroTitle) isMatch = false;
    if (exp.intro && live.intro !== exp.intro) isMatch = false;

    if (isMatch) {
      matchCount++;
      parityReport.push({ id: exp._id, type: exp._type, status: "MATCH" });
    } else {
      mismatchCount++;
      parityReport.push({ id: exp._id, type: exp._type, status: "MISMATCH" });
    }
  }

  console.log("\n=================================");
  console.log("PARITY VERIFICATION SUMMARY");
  console.log(`Total Expected : ${expectedDocs.length}`);
  console.log(`Total In Sanity: ${liveDocs.length}`);
  console.log(`MATCHES        : ${matchCount}`);
  console.log(`MISMATCHES     : ${mismatchCount}`);
  console.log(`MISSING        : ${missingCount}`);
  console.log("=================================\n");

  const reportPath = path.join(ROOT_DIR, "backups", "parity-report.json");
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        totalExpected: expectedDocs.length,
        totalFound: liveDocs.length,
        matchCount,
        mismatchCount,
        missingCount,
        details: parityReport,
      },
      null,
      2
    )
  );

  console.log(`Report written to: ${reportPath}`);
}

verify().catch((err) => {
  console.error("Verification error:", err);
  process.exit(1);
});
