const sum = require('./sketch');
console.log("Arquivo carregado!")
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});