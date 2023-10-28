import * as Classes from '../childClasses';

test.each([
  ['Bowman', 25, 25, 'I', 'IvanIvan001', 23, 'B'],
  ['Swordsman', 40, 10, 'I', 'IvanIvan001', 23, 'B'],
  ['Magician', 10, 40, 'I', 'IvanIvan001', 23, 'B'],
  ['Undead', 25, 25, 'I', 'IvanIvan001', 23, 'B'],
  ['Zombie', 40, 10, 'I', 'IvanIvan001', 23, 'B'],
  ['Daemon', 10, 40, 'I', 'IvanIvan001', 23, 'B'],
])(
  ('Проверка класса %s'),
  (type, attack, defence, errorName1, errorName2, errorName3, errorType) => {
    const character = new Classes[type]('Ivan');
    expect(character.level).toBe(1);
    expect(character.health).toBe(100);
    expect(character.name).toBe('Ivan');
    expect(character.type).toBe(type);
    expect(character.attack).toBe(attack);
    expect(character.defence).toBe(defence);
    const mistake1 = function check1() { character.name = errorName1; };
    expect(mistake1).toThrow(new Error('Ошибка при присвоении имени!'));
    const mistake2 = function check2() { character.name = errorName2; };
    expect(mistake2).toThrow(new Error('Ошибка при присвоении имени!'));
    const mistake3 = function check3() { character.name = errorName3; };
    expect(mistake3).toThrow(new Error('Ошибка при присвоении имени!'));
    const mistake4 = function check4() { character.type = errorType; };
    expect(mistake4).toThrow(new Error('Ошибка при присвоении типа персонажа!'));
  },
);
