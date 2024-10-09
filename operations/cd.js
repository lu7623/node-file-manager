import { chdir } from 'node:process';
import { messages } from '../messages.js';

export const cd = (dirName) => {
    try {
        chdir(dirName);
        return dirName;
      } catch (err) {
        console.log(err)
        console.log(messages.fail)
      }
}