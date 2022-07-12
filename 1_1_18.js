function capitalize(str){
    let result = str.toLowerCase();
    let arr = result.split(" ");
    let newArr = arr;
    for (let i = 0; i < newArr.length; i++) {
      let current = newArr[i];
        if (current)
            newArr[i] = current.charAt(0).toUpperCase() + current.substr(1);
        }

    return newArr.join(" ");  
}

/***************
Capitalize
Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.

Пример:

const str = 'sOme RanDoM sTRING';
console.log(capitalize(str)); // Some Random String
***************/