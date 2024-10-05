import * as fs from "node:fs/promises";
import { messages } from "../messages.js";
import path from "node:path";

export const create = async (newFileName, dir) => {
  const filePath = path.join(dir, newFileName);

await fs.open(filePath, "wx", function (err, fd) {
    if (err) {
      console.log(messages.fail);
    }
    fs.close(fd, function (err) {
      if (err) {
        console.log(messages.fail);
      }
    });
  });
};
