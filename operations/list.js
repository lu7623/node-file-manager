import * as fs from "node:fs/promises";
import { messages } from "../messages";

export const list = async (path) => {
  try {
    const files = await fs.readdir(path);
    for (const file of files) {
      console.log(file)
    }
  } catch (err) {
    console.log(messages.fail)
  }
};

