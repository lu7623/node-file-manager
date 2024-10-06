import { messages } from "./messages.js";

export const cmdParser = async (cmd, fileManager) => {
  const cmdArgs = cmd.toString()
    .split(" ")
    .map((x) => x.trim())
    .filter((x) => x !== "");
  let cmdStart = cmdArgs[0];

  switch (cmdStart) {
    case "up":
      fileManager.goUp();
      break;

    case "cd":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        fileManager.chDir(cmdArgs[1]);
      }
      break;

    case "ls":
      await fileManager.ls();
      break;

    case "cat":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
         fileManager.cat(cmdArgs[1]);
      }
      break;

    case "add":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        await fileManager.add(cmdArgs[1]);
      }
      break;

    case "rn":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        await fileManager.rn(cmdArgs[1], cmdArgs[2]);
      }
      break;

    case "cp":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        await fileManager.cp(cmdArgs[1], cmdArgs[2]);
      }
      break;

    case "mv":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
         fileManager.mv(cmdArgs[1], cmdArgs[2]);
      }
      break;

    case "rm":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        await fileManager.rm(cmdArgs[1]);
      }
      break;

    case "os":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        fileManager.os(cmdArgs[1]);
      }
      break;

    case "hash":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        await fileManager.hash(cmdArgs[1]);
      }
      break;

    case "compress":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        await fileManager.compress(cmdArgs[1], cmdArgs[2]);
      }
      break;

    case "decompress":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        await fileManager.decompress(cmdArgs[1], cmdArgs[2]);
      }
      break;

    default:
      console.log(messages.invalidInput);
  }
};
