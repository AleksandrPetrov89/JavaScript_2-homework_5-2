import Swordsman from '../classes/swordsman';

test('Проверка класса Swordsman', () => {
  const hero = new Swordsman('Ivan');
  const correct = {
    name: 'Ivan', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(hero).toEqual(correct);
});
