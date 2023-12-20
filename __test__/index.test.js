const { Triangle, Circle, Square } = require('../lib/shapes');

test('Sample test', () => {
  expect(1 + 1).toBe(2);
});

test('Triangle renders correctly', () => {
  const triangle = new Triangle();
  expect(triangle.render()).toBeTruthy();
});