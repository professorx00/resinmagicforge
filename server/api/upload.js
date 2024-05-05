import path from "path";
import fs from "fs";

export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event);
  let uploadPath = "";
  files.forEach((item) => {
    if (item.name == "dFiles") {
      const filepathway = path.join(
        process.cwd(),
        "public",
        "upload",
        item.filename
      );
      fs.writeFileSync(filepathway, item.data);
      uploadPath = `/${item.filename}`;
    }
  });
  return uploadPath;
});
