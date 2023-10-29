import Bowman from '../classes/bowman';

test('Проверка класса Bowman', () => {
  const hero = new Bowman('Ivan');
  expect(hero.type).toBe('Bowman');
  expect(hero.attack).toBe(25);
  expect(hero.defence).toBe(25);
});
