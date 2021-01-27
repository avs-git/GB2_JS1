/* 1. Почему код даёт именно такие результаты?
var a = 1,
  b = 1,
  c,
  d;
c = ++a;
alert(c); // 2
// префикс, a сначала увеличивается, потом записывается в c
d = b++;
alert(d); // 1
// постфикс. Сначала значение b присваивается в d, затем b увеличивается
c = 2 + ++a;
alert(c); // 5
// префикс, a сначала увеличивается, потом складывается и записывается в c
d = 2 + b++;
alert(d); // 4
// постфикс. Сначала значение b складывается и записывается в d, затем b увеличивается
alert(a); // 3
alert(b); // 3
// на данном этапе уже все префиксные и постфиксные инкременты выполнены, поэтому значение 3 в обоих случаях
*/

/*
2. Чему будет равен x в примере ниже?
let a = 2;
let x = 1 + (a *= 2);
// x === 5;
 */

/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

*/

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const a = getRandom(-10, 10);
const b = getRandom(-10, 10);

const calculate = (a, b) => {
  if (a < 0 && b < 0) return a * b;
  if (a >= 0 && b >= 0) return a - b;
  return a + b;
};

console.log(`a == ${a}, b == ${b}, result == ${calculate(a, b)}`);

/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать
вывод чисел от a до 15.
*/

const x = getRandom(0, 15);
console.log(x, typeof x);
switch (x) {
  case 0:
    console.log("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 1:
    console.log("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 2:
    console.log("2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 3:
    console.log("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 4:
    console.log(" 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 5:
    console.log("5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 6:
    console.log("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 7:
    console.log("7, 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 8:
    console.log("8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 9:
    console.log("9, 10, 11, 12, 13, 14, 15");
    break;
  case 10:
    console.log("10, 11, 12, 13, 14, 15");
    break;
  case 11:
    console.log("11, 12, 13, 14, 15");
    break;
  case 12:
    console.log("12, 13, 14, 15");
    break;
  case 13:
    console.log("13, 14, 15");
    break;
  case 14:
    console.log("14, 15");
    break;
  case 15:
    console.log("15");
    break;

  default:
    console.log("что-то пошло не так");
}

/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
 */

const add = (a, b) => a + b;
const diff = (a, b) => a - b;
const div = (a, b) => a / b;
const mult = (a, b) => a * b;

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */

const mathOperation = (arg1, arg2, operation) => {
  switch (operation) {
    case "+":
      return add(arg1, arg2);

    case "-":
      return diff(arg1, arg2);

    case "/":
      return div(arg1, arg2);

    case "*":
      return mult(arg1, arg2);

    default:
      console.log("что-то не так");
      return undefined;
  }
};

/*
 7) *Сравнить null и 0. Попробуйте объяснить результат.
Ответ: https://habr.com/ru/company/ruvds/blog/337732/

 */

/*
8) *С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
 */

const power = (val, pow) => (pow === 1 ? val : val * power(val, pow - 1));
