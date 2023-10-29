import Daemon from '../classes/daemon';

test('Проверка класса Daemon', () => {
  const hero = new Daemon('Ivan');
  expect(hero.type).toBe('Daemon');
  expect(hero.attack).toBe(10);
  expect(hero.defence).toBe(40);
});
