const checkTypeHero = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя не должно быть меньше двух символов и больше 10");
    } else {
      this.name = name;
    }

    if (checkTypeHero.includes(type)) {
      this.type = type;
    } else {
      throw new Error("персонаж не существует");
    }
    this.health = 100;
    this.level = 1;
  }
  levelUp() {
    if (this.health > 0) {
      ++this.level;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else throw new Error("нельзя повысить левел умершего");
  }
  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
