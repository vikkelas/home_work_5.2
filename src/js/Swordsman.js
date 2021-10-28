import character from "./Character.js";

export default class Swordsman extends character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}
