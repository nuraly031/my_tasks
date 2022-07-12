
function getStringCount(object) {
  if (typeof object == 'string') return 1;
  if (!object) return 0;
  return Object.values(object).reduce((count, cur) => count + getStringCount(cur), 0);
}


/***************
getStringCount
Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

getStringCount
({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
}); // 3

getStringCount
(['1', '2', ['3']]) // 3
P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount
***************/