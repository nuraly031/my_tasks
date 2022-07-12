
const createObjectCalculator = (initialA, initialB) => {
let calculator = {
      a: initialA,
      b: initialB,
      read(a, b) {
        this.a = a;
        this.b = b;
      },
      sum() {
        return this.a + this.b;
      },
      mul() {
        return this.a * this.b;
      },
    };
    return calculator;
};





/***************
createObjectCalculator
Реализуйте функцию createObjectCalculator, которая принимает в качестве аргументов два числа, а возвращает следующий объект:

Объект calculator (калькулятор) с тремя методами:

read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта. sum() (суммировать) возвращает сумму сохранённых значений. mul() (умножить) перемножает сохранённые значения и возвращает результат.

Гарантируется, что оба числа, передаваемых в read всегда будут числами.

Пример:

const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408
***************/