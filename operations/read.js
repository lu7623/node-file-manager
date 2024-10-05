import { createReadStream } from "node:fs";
import { messages } from "../messages.js";

export const read = async (pathToFile) => {
  const readStream = createReadStream(pathToFile);

  readStream.on("data", (data) => {
   console.log(data);
  });

  readStream.on("error", (err) => {
    console.log(messages.fail);
  })
};
