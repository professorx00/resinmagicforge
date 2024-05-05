import fs from "fs";
import path from "path";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const filepathway = path.join(process.cwd(), "public", "upload", body);
  fs.stat(filepathway, async (error, stats) => {
    if (error) {
      return {
        status: 500,
      };
    }
    if (stats.isFile()) {
      fs.rmSync(filepathway);
      const filedirectory = path.join(process.cwd(), "public", "upload");
      let directoryInfo = fs.readdirSync(filedirectory);
      return {
        status: 200,
        data: directoryInfo,
      };
    }
  });
});
