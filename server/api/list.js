import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const filepathway = path.join(process.cwd(), "public", "upload");
  let directoryInfo = fs.readdirSync(filepathway);
  return directoryInfo;
});
