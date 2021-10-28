import character from "./Character.js";

export default class Magician extends character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}
