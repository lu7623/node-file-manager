import * as fs from "node:fs/promises";
import { messages } from "../messages.js";
import path from "node:path";

export const rename = async (pathToFile, newName) => {
  const fileDir = path.dirname(pathToFile);
  const newPath = path.join(fileDir, newName)

  try {
    await fs.rename(pathToFile, newPath);
  } catch (err) {
    console.log(err)
    console.log(messages.fail)
  }
};
