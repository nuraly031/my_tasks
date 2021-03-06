const areBracketsBalanced = (str) => {
const stack = [];
  for (let bracket of str) {
    if (bracket === '(') {
      stack.push(bracket);
    } else if (bracket === ')') {
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

/***************
Are brackets balanced
Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
***************/