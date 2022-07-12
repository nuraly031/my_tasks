function wrapInParagraph(str){
let arr = str.split(" " && "\n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "<p>" + arr[i] + "</p>";
  }
  return arr.join('\n');
}

/***************
На входе есть текст, разделенный переносами строк На выходе каждая строка должна быть обернута тегом

 

Wrap Paragraph
Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег

.

Пример:

const text = `Some
simple multiline
text`;

console.log(wrapInParagraph(text)); // <p>Some</p>
// <p>simple multiline</p>
// <p>text</p>

const text2 = 'some\ntext';

console.log(wrapInParagraph(text2)); // <p>some</p>
// <p>text</p>
***************/