import { cmdParser } from "./cmdParser.js";
import { FileManager } from "./fileManager.js";
import { homedir } from "os";
const userDir = homedir();
const userArg = argv.slice(2).find((arg) => arg.startsWith("--username="));
const userName = userArg
  ? userArg.replace("--username=", "")
  : "Anonymous user";

const runFileManager = async () => {
  const fileManager = new FileManager(userName, userDir);

  stdout.write(fileManager.welcome());
  stdout.write(fileManager.showDir());
  stdin.resume();
  process.on("SIGINT", () => {
    stdout.write(fileManager.goodbye());
    process.exit(0);
  });

  stdin.on("data", async (data) => cmdParser(data, fileManager));
};

runFileManager();