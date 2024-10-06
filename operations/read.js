import { open } from 'node:fs/promises';
import { messages } from "../messages.js";

export const read = async (pathToFile) => {
try {
  const fd = await open(pathToFile);
  const readStream =  fd.createReadStream();

  readStream.on("data", (data) => {
    console.log(data.toString());
  });

  readStream.on("error", (err) => {
    console.log(messages.fail);
  });

} catch (err) {
  console.log(messages.fail);
}
  
};
