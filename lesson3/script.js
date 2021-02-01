// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let i = 0;

while (i <= 100) {
  let j = 2;
  let isSimple = true;

  while (j < i) {
    if (i % j === 0) {
      isSimple = false;
      break;
    }
    j++;
  }

  // 0 и 1 не является простым числом
  if (isSimple && i > 1) console.log(i);
  i++;
}

/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
 */

const goods = [
  {
    title: "Товар 1",
    price: 100,
    quantity: 1,
  },
  {
    title: "Товар 2",
    price: 200,
    quantity: 2,
  },
  {
    title: "Товар 3",
    price: 300,
    quantity: 3,
  },
  {
    title: "Товар 4",
    price: 400,
    quantity: 4,
  },
  {
    title: "Товар 5",
    price: 500,
    quantity: 0,
  },
];

const countBasketPrice = (basket) =>
  basket.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

console.log("countBasketPrice: ", countBasketPrice(goods));

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for (let i = 0; i < 10; console.log(i++)) {}

// 4) *Нарисовать пирамиду с помощью console.log,
//   как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let starLine = "";
for (let i = 1; i <= 20; i++, console.log((starLine += "*"))) {}
