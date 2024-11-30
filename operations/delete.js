import * as fs from "node:fs/promises";
import { messages } from "../messages.js";

export const remove = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    console.log(messages.fail)
  }
};

