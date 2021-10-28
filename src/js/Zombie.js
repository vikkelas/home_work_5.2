import character from "./Character.js";

export default class Zombie extends character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}
