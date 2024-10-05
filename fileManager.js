import { messages } from "./messages.js";
import { calculateHash } from "./operations/calcHash.js";
import { cd } from "./operations/cd.js";
import { compress } from "./operations/compress.js";
import { copy } from "./operations/copy.js";
import { create } from "./operations/create.js";
import { decompress } from "./operations/decompress.js";
import { remove } from "./operations/delete.js";
import { list } from "./operations/list.js";
import { move } from "./operations/move.js";
import { systemUtilities } from "./operations/os.js";
import { read } from "./operations/read.js";
import { up } from "./operations/up.js";

export class FileManager {
  constructor(userName, dir) {
    this.user = userName;
    this.currDir = dir;
  }

  welcome() {
    console.log(messages.welcome.replace("Username", this.user));
  }

  showDir() {
    console.log(`${messages.currPath} ${this.currDir}`);
  }

  goodbye() {
    console.log(messages.goodbye.replace("Username", this.user));
  }

  goUp() {
    up();
  }

  chDir(dir) {
    cd(dir);
  }

  ls() {
    list();
  }

  cat(path) {
    read(path);
  }

  add(fileName) {
    create(fileName);
  }

  cp(src, dest) {
    copy(src, dest);
  }

  mv(src, dest) {
    move(src, dest);
  }

  rm(path) {
    remove(path);
  }

  os(param) {
    systemUtilities(param);
  }

  hash(path) {
    calculateHash(path);
  }

  compress(src, dest) {
    compress(src, dest);
  }

  decompress(src, dest) {
    decompress(src, dest);
  }
}
