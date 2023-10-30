import Undead from '../classes/undead';

test('Проверка класса Undead', () => {
  const hero = new Undead('Ivan');
  const correct = {
    name: 'Ivan', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(hero).toEqual(correct);
});
