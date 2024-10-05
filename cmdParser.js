import { messages } from "./messages.js";

export const cmdParser = (cmd) => {
  const cmdArgs = cmd
    .split(" ")
    .map((x) => x.trim())
    .filter((x) => x !== "");
  let cmdStart = cmdArgs[0];

  switch (cmdStart) {
    case "up":
      console.log("up");
      break;

    case "cd":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        console.log("cd");
      }
      break;

    case "ls":
      console.log("ls");
      break;

    case "cat":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        console.log("cat");
      }
      break;

    case "add":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        console.log("add");
      }
      break;

    case "rn":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        console.log("rn");
      }
      break;

    case "cp":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        console.log("cp");
      }
      break;

    case "mv":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        console.log("mv");
      }
      break;

    case "rm":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        console.log("rm");
      }
      break;

    case "os":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        console.log("os");
      }
      break;

    case "hash":
      if (cmdArgs.length !== 2) {
        console.log(messages.invalidInput);
      } else {
        console.log("hash");
      }
      break;

    case "compress":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        console.log("compress");
      }
      break;

    case "decompress":
      if (cmdArgs.length !== 3) {
        console.log(messages.invalidInput);
      } else {
        console.log("decompress");
      }
      break;

    default:
      console.log(messages.invalidInput);
  }
};
