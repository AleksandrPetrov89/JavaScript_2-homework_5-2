import Character from '../character';

test.each([
  ['Bowman', 25, 25],
  ['Swordsman', 40, 10],
  ['Magician', 10, 40],
  ['Undead', 25, 25],
  ['Zombie', 40, 10],
  ['Daemon', 10, 40],
])(
  ('Проверка типа %s с атакой %i и защитой %i'),
  (type, attack, defence) => {
    const character = new Character('Ivan', type);
    expect(character.type).toBe(type);
    expect(character.attack).toBe(attack);
    expect(character.defence).toBe(defence);
  },
);

test.each([
  ['Iv'],
  ['IvanIvan01'],
])(
  ('Проверка присвоения имени %s'),
  (name) => {
    const character = new Character(name, 'Bowman');
    expect(character.name).toBe(name);
  },
);

test.each([
  ['I'],
  ['IvanIvan001'],
  [23],
])(
  ('Проверка появления ошибки при присвоении имени %s'),
  (name) => {
    const mistake = () => new Character(name, 'Bowman');
    expect(mistake).toThrow(new Error('Ошибка при присвоении имени!'));
  },
);

test('Проверка появления ошибки при присвоении некорректного типа', () => {
  const mistake = () => new Character('Ivan', 'B');
  expect(mistake).toThrow(new Error('Ошибка при присвоении типа персонажа!'));
});

test('Проверка присвоения уровня жизни и персонажа', () => {
  const character = new Character('Ivan', 'Bowman');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
});

test.each([
  ['Bowman', 30, 30],
  ['Swordsman', 48, 12],
  ['Magician', 12, 48],
  ['Undead', 30, 30],
  ['Zombie', 48, 12],
  ['Daemon', 12, 48],
])(
  ('Проверка работы метода levelUp() у типа %s'),
  (type, attack, defence) => {
    const character = new Character('Ivan', type);
    character.health = 1;
    character.levelUp();
    expect(character.attack).toBe(attack);
    expect(character.defence).toBe(defence);
    expect(character.health).toBe(100);
    character.health = 0;
    const mistake = () => character.levelUp();
    expect(mistake).toThrow(new Error('Повысить уровень нельзя! Персонаж мертв!'));
  },
);

test.each([
  ['Bowman', 25],
  ['Swordsman', 10],
  ['Magician', 40],
  ['Undead', 25],
  ['Zombie', 10],
  ['Daemon', 40],
])(
  ('Проверка работы метода damage() у типа %s'),
  (type, health) => {
    const character = new Character('Ivan', type);
    character.damage(100);
    expect(character.health).toBe(health);
    character.damage(200);
    expect(character.health).toBe(0);
  },
);
