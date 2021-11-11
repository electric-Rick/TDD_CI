const {sum, sub, multi  } = require('./sketch');

console.log("Arquivo carregado!")



test('Subtração de a - b? ',()=>{
    expect(multi(4,2)).toBe(2);
});

test('Multiplicação de a * b? ',()=>{
    expect(multi(4,2)).toBe(8);
});

test('Adição de 1+2? ', () => {
  expect(sum(1, 2)).toBe(3);
});