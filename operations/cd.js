import { chdir, cwd } from 'node:process';
import { messages } from '../messages.js';

export const cd = (dirName) => {
    try {
        chdir(dirName);
        return cwd();
      } catch (err) {
        console.log(messages.fail);
        return null;
      }
}