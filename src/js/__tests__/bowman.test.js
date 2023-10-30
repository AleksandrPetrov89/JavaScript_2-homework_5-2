import Bowman from '../classes/bowman';

test('Проверка класса Bowman', () => {
  const hero = new Bowman('Iv');
  const correct = {
    name: 'Iv', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(hero).toEqual(correct);
});
