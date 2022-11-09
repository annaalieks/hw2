"use srict";

// **Задача про обчислення різниці часу**

// Напишіть функцію яка будe приймати 3 параметри

// - початкову дату (string)
// - кінцеву дату (string)
// - розмірність ('days', 'hours', 'minutes', seconds)

let startDate = new Date('26 Jun 1993').getTime();
let endDate = new Date('10 Jul 1997').getTime();
let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

let durationBetweenDates = (startDate, endDate, seconds) => (endDate - startDate) / seconds;

console.log(durationBetweenDates(), 'seconds');

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
// Приклади:

// durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  // поверне '86400 seconds'
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // поверне '362 days'

// **Задача про перетворення об'єкту**

// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
// Приклад:

// *// приклад об'єкту*
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAnGEs: '48.7584',
};

function optimizer(priceData) {
    return Object.keys(priceData).reduce(
        (initialValue, key) => {
            initialValue[key.toLowerCase()] = priceData[key];
            return initialValue;
  }, {});
};

// function optimizer(priceData) {
//     return Object.values(priceData).reduce(
//         (initialValue, value) => {
//             initialValue[Number(value).toFixed(2)] = priceData[value];
//             return initialValue;
//         }, {});
// };

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

for (const [key, value] of Object.entries(priceData)) {
  console.log(`${key.toLowerCase()}: ${Number(value).toFixed(2)}`);
};

// **Задача про рекурсію та ітерацію**

// Напишіть:

// 1. Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

// function recursiveOddSumTo(number) {

//   *// тут ваш код*

// };

// console.log(recursiveOddSumTo(1)) *// 1*
// console.log(recursiveOddSumTo(10)) *// 25*

// 1. Функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

// function iterativeOddSumTo(number) {

//   *// тут ваш код*

// };

// console.log(iterativeOddSumTo(1)) *// 1*
// console.log(iterativeOddSumTo(10)) *// 25*