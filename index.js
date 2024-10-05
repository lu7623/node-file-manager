import { cmdParser } from "./cmdParser.js";
import { FileManager } from "./fileManager.js";
import { homedir } from "os";
const userDir = homedir();
const userArg = argv.slice(2).find((arg) => arg.startsWith("--username="));
const userName = userArg
  ? userArg.replace("--username=", "")
  : "Anonymous user";

const runFileManager = async () => {
  const fm = new FileManager(userName, userDir);

  stdout.write(fm.welcome());
  stdout.write(fm.showDir());
  stdin.resume();
  process.on("SIGINT", () => {
    stdout.write(fm.bye());
    process.exit(0);
  });

  stdin.on("data", async (data) => cmdParser(data, fm));
};

runFileManager();