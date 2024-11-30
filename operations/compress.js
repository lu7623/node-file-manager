import { promisify } from "node:util";
import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { messages } from "../messages.js";

export const compress = async (srcFile, destFile) => {
  try {
    const pipe = promisify(pipeline);
    const brotliCompress = createBrotliCompress();
    const source = createReadStream(srcFile);
    const destination = createWriteStream(destFile);
    await pipe(source, brotliCompress, destination);
  } catch (err) {
    console.log(messages.fail);
  }
};

