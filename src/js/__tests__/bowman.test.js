import Bowman from '../classes/bowman';

test('Проверка класса Bowman', () => {
  const hero = new Bowman('Ivan');
  expect(hero.type).toBe('Bowman');
  expect(hero.attack).toBe(25);
  expect(hero.defence).toBe(25);
});

test('Проверка работы метода levelUp() у класса Bowman', () => {
  const hero = new Bowman('Ivan');
  hero.health = 1;
  hero.levelUp();
  expect(hero.level).toBe(2);
  expect(hero.health).toBe(100);
  expect(hero.attack).toBe(30);
  expect(hero.defence).toBe(30);
  hero.health = 0;
  const mistake = () => hero.levelUp();
  expect(mistake).toThrow(new Error('Повысить уровень нельзя! Персонаж мертв!'));
});

test('Проверка работы метода damage() у класса Bowman', () => {
  const hero = new Bowman('Ivan');
  hero.damage(100);
  expect(hero.health).toBe(25);
  hero.damage(200);
  expect(hero.health).toBe(0);
});
