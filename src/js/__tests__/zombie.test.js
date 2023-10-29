import Zombie from '../classes/zombie';

test('Проверка класса Zombie', () => {
  const hero = new Zombie('Ivan');
  expect(hero.type).toBe('Zombie');
  expect(hero.attack).toBe(40);
  expect(hero.defence).toBe(10);
});
