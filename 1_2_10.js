function findAllIdx(arr, value) {
let newArr = [];
  let idx = arr.indexOf(value);
  while (idx != -1) {
    newArr.push(idx);
    idx = arr.indexOf(value, idx + 1);
  }
  return newArr;
}

/***************
findAllIdx
Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.

findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
findAllIdx([1,1], 0) // []
***************/