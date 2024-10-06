import * as fs from "node:fs/promises";
import { messages } from "../messages.js";

export const list = async (path) => {
  try {
    console.log(path)
    const files = await fs.readdir(path);
    for (const file of files) {
      console.log(file)
    }
  } catch (err) {
    console.log(err)
    console.log(messages.fail)
  }
};

