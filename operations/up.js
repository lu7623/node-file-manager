import { chdir } from 'node:process';
import { messages } from '../messages.js';

export const up = () => {
    try {
        chdir('../');
      } catch (err) {
        console.log(messages.fail)
      }
}