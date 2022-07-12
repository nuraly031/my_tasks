
function optionalChaining (obj, chain) {
  let object = obj;
    for (let i = 0; i < chain.length - 1; i++) {
      object = object[chain[i]];
      if (typeof object !== "object") return undefined;
    }
    return object[chain[chain.length - 1]];
}


/***************
OptionalChaining
Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

Если какое-то из свойств не найдено - функция возвращает undefined.

Пример:

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}
optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined

optionalChaining(obj, ["a", "c", "d"]) // undefined
optionalChaining(obj, ["b", "d", "a"]) // undefined
***************/