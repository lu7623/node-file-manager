import { cmdParser } from "./cmdParser.js";
import { FileManager } from "./fileManager.js";
import { homedir } from "os";

const userDir = homedir();

const userName = process.env.npm_config_username || "Anonymous user";

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
