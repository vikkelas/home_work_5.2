import character from "./Character.js";

export default class Undead extends character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}
