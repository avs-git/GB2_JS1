/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 мы должны получить следующий
объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо
выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

const getSpreading = (stringedNum) => {
  if (!isNaN(stringedNum) && +stringedNum >= 0 && +stringedNum <= 999) {
    const numDigits = stringedNum.split("");
    // если число не трёхнзначное, то добиваем нулями в начале
    while (numDigits.length < 3) numDigits.unshift("0");

    return {
      hundreds: +numDigits[0],
      decades: +numDigits[1],
      units: +numDigits[2],
    };
  }

  console.log("!!! неверные данные");
  return {};
};

const stringedNum = prompt("Введите число 0 - 999");
console.log(getSpreading(stringedNum));
