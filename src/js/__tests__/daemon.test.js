import Daemon from '../classes/daemon';

test('Проверка класса Daemon', () => {
  const hero = new Daemon('Ivan567891');
  const correct = {
    name: 'Ivan567891', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(hero).toEqual(correct);
});
