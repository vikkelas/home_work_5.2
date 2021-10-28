import character from "./Character.js";

export default class Bowerman extends character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }
}
