import * as fs from "node:fs/promises";
import path from "node:path";
import { messages } from "../messages.js";

export const copy = async (pathToFile, pathToNewDir) => {
  const fileName = path.basename(pathToFile);
  const dest = path.join(pathToNewDir, fileName);

  try {
    const readable = fs.createReadStream(pathToFile, { encoding: "utf8" });
    const writable = fs.createWriteStream(dest);
    readable.pipe(writable);
  } catch (err) {
    console.log(messages.fail);
  }
};
