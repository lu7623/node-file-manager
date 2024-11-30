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
import { rename } from "./operations/rename.js";
import { up } from "./operations/up.js";

export class FileManager {
  constructor(userName, dir) {
    this.user = userName;
    this.currDir = dir;
    cd(this.currDir);
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
    const upDir = up();
    if (upDir) this.currDir = upDir;
    this.showDir();
  }

  chDir(dir) {
    const newDir = cd(dir);
    if (newDir) this.currDir = newDir;
    this.showDir();
  }

  async ls() {
    await list(this.currDir);
    this.showDir();
  }

  async cat(path) {
    await read(path, this.showDir.bind(this));
  }

  async add(fileName) {
    await create(fileName, this.currDir);
    this.showDir();
  }

  async rn(path, newFileName) {
    await rename(path, newFileName);
    this.showDir();
  }

  async cp(src, dest) {
    await copy(src, dest);
    this.showDir();
  }

  async mv(src, dest) {
    await move(src, dest);
    this.showDir();
  }

  async rm(path) {
    await remove(path);
    this.showDir();
  }

  os(param) {
    systemUtilities(param);
    this.showDir();
  }

  async hash(path) {
    await calculateHash(path);
    this.showDir();
  }

  async compress(src, dest) {
    await compress(src, dest);
    this.showDir();
  }

  async decompress(src, dest) {
    await decompress(src, dest);
    this.showDir();
  }
}
