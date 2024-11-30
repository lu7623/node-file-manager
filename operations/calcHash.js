import { open } from "node:fs/promises";
import { createHash } from "node:crypto";
import { messages } from "../messages.js";

export const calculateHash = async (pathToFile) => {
  const hash = createHash("sha256");
  try {
    const fd = await open(pathToFile);
    const readStream = fd.createReadStream(pathToFile);

    readStream.on("data", (data) => {
      hash.update(data);
    });

    readStream.on("end", () => {
      const hashValue = hash.digest("hex");
      console.log(hashValue);
    });

    readStream.on("error", (err) => {
      console.log(messages.fail);
    });
  } catch (err) {
    console.log(messages.fail);
  }
};
