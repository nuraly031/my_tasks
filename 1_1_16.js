function compareWithPrecision(a, b, precision) {
  return Math.abs(a - b) <= precision;
}	

/***************
compareWithPrecision
Напишите функцию, которая сравнивает два числа с определенной погрешностью.

Пример:

compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true
***************/