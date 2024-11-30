import * as fs from "node:fs/promises";
import { messages } from "../messages.js";
import path from "node:path";

export const create = async (newFileName, dir) => {
  const filePath = path.join(dir, newFileName);
  try {
    await fs.writeFile(filePath, '', { flag: "wx" });
  } catch (err) {
    console.log(messages.fail);
  }
};
