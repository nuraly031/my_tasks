
const calculatePrice = (orders) => {
if (orders === undefined) {
      return 0;
    } else if (orders.length === 0) {
      return 0;
    } else {
      return orders.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);
    }
};





/***************
Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.

Пример:

const data = [
  {
    type: 'food',
    price: 130,
  },
  {
    type: 'clothes',
    price: 7300,
  },
  {
    type: 'other',
    price: 1400,
  },
];

calculatePrice(data); // 8830‬
***************/