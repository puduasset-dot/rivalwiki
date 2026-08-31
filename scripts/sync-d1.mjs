// Pulls the current contents of the D1 database into src/data/generated/*.json.
// D1 is the source of truth; these JSON files are a committed snapshot so
// `next build` never needs live DB access. Run `npm run sync-d1` after
// editing data in D1, then commit the regenerated JSON.
import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "data", "generated");
mkdirSync(outDir, { recursive: true });

const TABLES = {
  weapons: "SELECT * FROM weapons",
  codes: "SELECT * FROM codes",
  tier_list: "SELECT * FROM tier_list",
  maps: "SELECT * FROM maps",
  rank_tiers: "SELECT * FROM rank_tiers ORDER BY sort_order",
};

for (const [table, query] of Object.entries(TABLES)) {
  const cmd = `npx wrangler d1 execute rivalwiki-db --remote --json --command "${query}"`;
  const raw = execSync(cmd, { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 });
  const parsed = JSON.parse(raw);
  const rows = parsed[0]?.results ?? [];
  writeFileSync(path.join(outDir, `${table}.json`), JSON.stringify(rows, null, 2) + "\n");
  console.log(`${table}: ${rows.length} rows`);
}
