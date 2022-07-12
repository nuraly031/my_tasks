
function partition (array, callback) {
    //let newArr = [];
    let trueArray = [];
    let falseArray = [];
    if (typeof callback === "undefined") {
      callback = function (el) {
        return Boolean(el);
      };
    }
    for (i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    }
    return ([trueArray, falseArray]);
  }
  function callback(el) {
    if (el) {
      return true;
    } else {
      return false;
    }
}



/***************
Partition
Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

partition(array, callback) => [trueArray, falseArray]
Во время выполнения функция должна вызвать callback для каждого элемента массива array.

Сигнатура функции callback

callback(element) => boolean
element - Элемент массива на котором была вызвана функция callback

Если callback вернёт true то element с которым была вызвана функция должен попасть в массив trueArray

Если callback вернёт false то element с которым была вызвана функция должен попасть в массив falseArray

Функция должна правильно отрабатывать если callback возвращает приводимые к true false значения:

Приводимые к true
{} => true
1 => true
...
совокупность таких значений называется truthy
Приводимые к false
undefined => false
"" => false
0 => false
...
совокупность таких значений называется falsey 
Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray

Функция не должна менять изначальный массив

Примеры использования
Попроще

const numbers = [1,2,3,4,5,6];

partition(numbers, (element) => element > 3);
=> [ 
    [4, 5, 6], // trueArray 
    [1, 2, 3]  // falseArray
];
const numbers = [0, 1, 2, {}, false, "", "0"];

partition(numbers, (element) => element);
=> [ 
    [1, 2, {}, "0"], // trueArray 
    [0, false, ""]  // falseArray
];
Посложнее

const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
partition(users, (element) => element.active );
=> [
  [  
      { 'user': 'fred',    'age': 40, 'active': true }
  ],
  [  
      { 'user': 'barney',  'age': 36, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': false }
  ] 
]
***************/