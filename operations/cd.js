import { chdir } from 'node:process';
import { messages } from '../messages.js';

export const cd = (dirName) => {
    try {
        chdir(dirName);
      } catch (err) {
        console.log(messages.fail)
      }
}