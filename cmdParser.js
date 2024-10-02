import { messages } from "./messages";

export const cmdParser = (cmd) => {
  let cmdStart = cmd.split(" ")[0];

  switch (cmdStart) {
    case "up":
      console.log("up");
      break;

    case "cd":
      console.log("cd");
      break;

    case "ls":
      console.log("ls");
      break;

    case "cat":
      console.log("cat");
      break;

    case "add":
      console.log("add");
      break;

    case "rn":
      console.log("rn");
      break;

    case "cp":
      console.log("cp");
      break;

    case "mv":
      console.log("mv");
      break;

    case "rm":
      console.log("rm");
      break;

    case "os":
      console.log("os");
      break;

    case "hash":
      console.log("hash");
      break;

    case "compress":
      console.log("compress");
      break;

    case "decompress":
      console.log("up");
      break;

    default:
      console.log(messages.invalidInput);
  }
};
