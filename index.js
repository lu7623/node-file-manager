import { cmdParser } from "./cmdParser.js";
import { FileManager } from "./fileManager.js";
import { homedir } from "os";

const userDir = homedir();
const args = process.argv.slice(2);
const userName =
  args.find((arg) => arg.startsWith("--username=")).split("=")[1] ||
  "Anonymous user";

const startFileManager = async () => {
  const fileManager = new FileManager(userName, userDir);

  fileManager.welcome();
  fileManager.showDir();

  process.on("SIGINT", () => {
    fileManager.goodbye();
    process.exit(0);
  });

  process.stdin.on("data", async (data) => cmdParser(data, fileManager));
};

startFileManager();
