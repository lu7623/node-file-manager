import { promisify } from "node:util";
import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { messages } from "../messages.js";

export const decompress = async (srcFile, destFile) => {
  try {
    const pipe = promisify(pipeline);
    const brotliDecompress = createBrotliDecompress();
    const source = createReadStream(srcFile);
    const destination = createWriteStream(destFile);
    await pipe(source, brotliDecompress, destination);
  } catch (err) {
    console.log(messages.fail);
  }
};
