import character from "./Character.js";

export default class Daemon extends character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}
