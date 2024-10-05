import { messages } from "./messages.js";

export class FileManager {
    constructor (userName, dir) {
        this.user = userName;
        this.currDir = dir;
    }

    welcome() {
        console.log(messages.welcome)
    }

    showDir() {
        console.log(`${messages.currPath} ${this.currDir}`)
    }

    goodbye() {
        console.log(messages.goodbye)
    }
}