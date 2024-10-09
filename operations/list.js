import * as fs from "node:fs/promises";
import { messages } from "../messages.js";

function compareFn(a, b) {
  if (a.Type < b.Type || a.name < b.name) {
    return -1;
  } else if (a.Type > b.Type || a.name > b.name) {
    return 1;
  }
  return 0;
}

export const list = async (path) => {
  try {
    const files = await fs.readdir(path, { withFileTypes: true });
    const data = files
      .map((file) => {
        return {
          Name: file.name,
          Type: file.isDirectory() ? "directory" : "file",
        };
      })
      .sort(compareFn);
    console.table(data);
  } catch (err) {
    console.log(err);
    console.log(messages.fail);
  }
};
