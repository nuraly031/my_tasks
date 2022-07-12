const reverseLongWords = (str) => {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      arr[i] = arr[i].split("").reverse().join("");
    }
  }
  return arr.join(' ');
};

/***************
Stop gninnipS My sdroW!
Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.

Примеры:

reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw
reverseLongWords('This is a test'); // This is a test
reverseLongWords('This is another test'); // This is rehtona test
***************/