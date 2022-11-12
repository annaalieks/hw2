"use srict";

// **Задача про обчислення різниці часу**

// Напишіть функцію яка будe приймати 3 параметри

// - початкову дату (string)
// - кінцеву дату (string)
// - розмірність ('days', 'hours', 'minutes', seconds)



function durationBetweenDates(from = '26 Jun 1993', to = '10 Jul 1997', duration = 'days') {
    from = new Date(from);
    to = new Date(to);
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    if (duration === 'seconds') {
        return `${Math.abs((from - to) / seconds)} ${duration}`;
    } if (duration === 'minutes') {
        return `${Math.abs((from - to) / minutes)} ${duration}`;
    } if (duration === 'hours') {
        return `${Math.abs((from - to) / hours)} ${duration}`;
    } else {
        return `${Math.abs((from - to) / days)} ${duration}`;
    }
};

console.log(durationBetweenDates());
console.log(durationBetweenDates('26 Jun 1993', '10 Jul 1997', "seconds"));
console.log(durationBetweenDates('26 Jun 1993', '10 Jul 1997', "minutes"))
console.log(durationBetweenDates('26 Jun 1993', '10 Jul 1997', "hours"))

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

// function optimizer(priceData) {
//     return Object.entries(priceData).reduce(
//         (initialValue, [key, value]) => {
//             initialValue[key.toLowerCase()] = parseFloat(value).toFixed(2);
//             return initialValue;
//   }, {});
// };

function optimizer(priceData) {
    return Object.fromEntries(Object.entries(priceData).map(([key, value]) =>
        [key.toLowerCase(), parseFloat(value).toFixed(2)]))
};

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// **Задача про рекурсію та ітерацію**

// Напишіть:

// 1. Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

function recursiveOddSumTo(number) {
    if (number === 1) {
        return 1;
    } else if (number % 2 == 0) {
        return recursiveOddSumTo(number - 1);
    } else {
        return number + recursiveOddSumTo(number - 2);
    };
};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

// 1. Функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        } 
    }
    return sum;
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25