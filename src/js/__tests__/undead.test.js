import Undead from '../classes/undead';

test('Проверка класса Undead', () => {
  const hero = new Undead('Ivan');
  expect(hero.type).toBe('Undead');
  expect(hero.attack).toBe(25);
  expect(hero.defence).toBe(25);
});
