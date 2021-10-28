import Bowman from "../Bowerman.js";
import Daemon from "../Daemon.js";
import Magician from "../Magician.js";
import Zombie from "../Zombie.js";
import Undead from "../Undead.js";
import Swordsman from "../Swordsman.js";
import Character from "../Character.js";

test.each([
  [
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: "Bugaga",
      type: "Bowman",
    },
    new Bowman("Bugaga"),
  ],
  [
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: "Rudi",
      type: "Daemon",
    },
    new Daemon("Rudi"),
  ],
  [
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: "Alex",
      type: "Magician",
    },
    new Magician("Alex"),
  ],
  [
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: "Peter",
      type: "Swordsman",
    },
    new Swordsman("Peter"),
  ],
  [
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: "Zina",
      type: "Zombie",
    },
    new Zombie("Zina"),
  ],
  [
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: "Dan",
      type: "Undead",
    },
    new Undead("Dan"),
  ],
])("check hero", (hero, heroModule) => {
  const result = heroModule;
  expect(result).toEqual(hero);
});

test("check error name", () => {
  expect(() => new Character("D")).toThrowError();
});

test("check error type", () => {
  expect(() => new Character("Dan")).toThrowError();
});

// вторая часть задания

test("check levelUp", () => {
  const desired = {
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: "Dan",
    type: "Undead",
  };
  const Hero = new Undead("Dan");
  Hero.levelUp();
  expect(Hero).toEqual(desired);
});

test("check levelUp erorr", () => {
  const hero = new Undead("Dan");
  hero.health = 0;
  expect(() => hero.levelUp()).toThrowError();
});

test("check damage", () => {
  const desired = {
    attack: 25,
    defence: 25,
    health: 81.25,
    level: 1,
    name: "Dan",
    type: "Undead",
  };
  const hero = new Undead("Dan");
  hero.damage(25);
  expect(hero).toEqual(desired);
});

test("check damage for health 0", () => {
  const desired = {
    attack: 25,
    defence: 25,
    health: 0,
    level: 1,
    name: "Dan",
    type: "Undead",
  };
  const hero = new Undead("Dan");
  hero.health = 0;
  hero.damage(25);
  expect(hero).toEqual(desired);
});
