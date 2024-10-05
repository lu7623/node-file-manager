import * as fs from "node:fs/promises";
import { messages } from "../messages.js";

export const rename = async (pathToFile, newName) => {
  const fileDir = path.dirname(pathToFile);
  const newPath = path.join(fileDir, newName)

  try {
    await fs.rename(filePath, newPath);
  } catch (err) {
    console.log(messages.fail)
  }
};
