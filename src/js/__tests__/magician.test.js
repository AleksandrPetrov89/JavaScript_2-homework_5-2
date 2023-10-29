import Magician from '../classes/magician';

test('Проверка класса Magician', () => {
  const hero = new Magician('Ivan');
  expect(hero.type).toBe('Magician');
  expect(hero.attack).toBe(10);
  expect(hero.defence).toBe(40);
});
