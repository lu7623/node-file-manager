import { chdir, cwd } from 'node:process';
import { messages } from '../messages.js';

export const up = () => {
    try {
        chdir('../');
        return cwd();
      } catch (err) {
        console.log(messages.fail);
        return null;
      }
}