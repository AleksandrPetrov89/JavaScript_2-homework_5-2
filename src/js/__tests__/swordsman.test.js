import Swordsman from '../classes/swordsman';

test('Проверка класса Swordsman', () => {
  const hero = new Swordsman('Ivan');
  expect(hero.type).toBe('Swordsman');
  expect(hero.attack).toBe(40);
  expect(hero.defence).toBe(10);
});
