import { open } from 'node:fs/promises';
import path from "node:path";
import { messages } from "../messages.js";

export const copy = async (pathToFile, pathToNewDir) => {
  const fileName = path.basename(pathToFile);
  const dest = path.join(pathToNewDir, fileName);

  try {
    const fdSrc = await open(pathToFile);
    const readable = fdSrc.createReadStream();
    const fdDest = await open(dest, 'wx');
    const writable = fdDest.createWriteStream();
    readable.pipe(writable);
  } catch (err) {
    console.log(messages.fail);
  }
};
