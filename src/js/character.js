export default class Character {
  #name;

  #type;

  #typesOfClasses = [
    { type: 'Bowman', attack: 25, defence: 25 },
    { type: 'Swordsman', attack: 40, defence: 10 },
    { type: 'Magician', attack: 10, defence: 40 },
    { type: 'Undead', attack: 25, defence: 25 },
    { type: 'Zombie', attack: 40, defence: 10 },
    { type: 'Daemon', attack: 10, defence: 40 },
  ];

  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  set name(value) {
    if (typeof value === 'string' || value instanceof String) {
      if (value.length > 1 && value.length < 11) {
        this.#name = value;
        return;
      }
    }
    throw new Error('Ошибка при присвоении имени!');
  }

  get name() {
    return this.#name;
  }

  set type(value) {
    const check = (elem) => elem.type === value;
    if (this.#typesOfClasses.some(check)) {
      const category = this.#typesOfClasses.find(check);
      this.#type = category.type;
      this.attack = category.attack;
      this.defence = category.defence;
    } else {
      throw new Error('Ошибка при присвоении типа персонажа!');
    }
  }

  get type() {
    return this.#type;
  }
}
