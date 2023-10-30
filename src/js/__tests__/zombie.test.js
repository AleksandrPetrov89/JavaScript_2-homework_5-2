import Zombie from '../classes/zombie';

test('Проверка класса Zombie', () => {
  const hero = new Zombie('Ivan');
  const correct = {
    name: 'Ivan', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(hero).toEqual(correct);
});
