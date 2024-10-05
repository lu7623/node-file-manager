import os from "node:os";
import { messages } from "../messages.js";

export const systemUtilities = (param) => {
  switch (param) {
    case "--EOL": {
      try {
        console.log(os.EOL);
      } catch (e) {
        console.log(messages.fail);
      }
      break;
    }

    case "--architecture": {
      try {
        console.log(os.arch());
      } catch (e) {
        console.log(messages.fail);
      }
      break;
    }

    case "--cpus": {
      try {
        const cpus = os.cpus();
        console.log("Overall amount of CPUS " + cpus.length);
        console.log(cpus.map((x) => x.model));
      } catch (e) {
        console.log(messages.fail);
      }
      break;
    }

    case "--homedir": {
      try {
        console.log(os.homedir());
      } catch (e) {
        console.log(messages.fail);
      }
      break;
    }

    case "--username": {
      try {
        const info = os.userInfo();
        console.log(info.username);
      } catch (e) {
        console.log(messages.fail);
      }
      break;
    }

    default:
      console.log(messages.invalidInput);
      return;
  }
};
