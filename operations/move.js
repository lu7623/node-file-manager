import * as fs from "node:fs/promises";
import path from "node:path";
import { messages } from "../messages.js";

export const move = async (pathToFile, pathToNewDir) => {
  const fileName = path.basename(pathToFile);
  const dest = path.join(pathToNewDir, fileName);

  try {
    const readable = fs.createReadStream(pathToFile, { encoding: "utf8" });
    const writable = fs.createWriteStream(dest);
    await readable.pipe(writable);
    await fs.unlink(pathToFile);
  } catch (err) {
    console.log(messages.fail);
  }
};
