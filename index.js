/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const answer = prompt("Яка офіційна назва JavaScript?").trim();
// const officialJSName = "ECMAScript";

// if (answer === officialJSName) {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *? 70 === 01:10
 */

// const numberFromUser = prompt("Введіть число");

//  function minutesToHour(number){
//   let hours = String(Math.floor(number / 60)).padStart(2,"0");

//   let minutes = String(number % 60).padStart(2,"0");
//   console.log(`${hours}:${minutes}`);
//   return `${hours}:${minutes}`;
//  }

//  minutesToHour(numberFromUser);

//  /**
//  *? Напишіть цикл, який виводить у консоль
//  *? числа від max до min за спаданням.
//  *? Виведіть у консоль усі парні числа від min до max
//  */

//  function numbers(min, max){
//     for(let i = max; i >= min; i -= 1){
//         console.log(i);
//     }

//     for(let i = min; i <= max; i += 1){
//         if (i % 2 === 0){
//             console.log(i);
//         }
//     }
//  }
//  numbers(1,12)

/**
 *? Напишіть цикл, який пропонує ввести
 *? число більше 100 через prompt.
 *? Якщо відвідувач ввів інше число – попросити
 *? ввести ще раз і таке інше.
 *? Цикл повинен питати число, поки відвідувач не
 *? введе число більше 100 або не натисне кнопку
 *? Скасування в prompt
 */

// let userNamber = prompt(`ВВедіти число більше 100!`);

// while (userNamber < 100 && userNamber !== null) {
//     userNamber = prompt(`ВВедіти число більше 100!`);
// }

/**
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив,
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами
 */

//  const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]

//  const newArray = arr.slice().reverse()
//  newArray.splice(arr.indexOf('foo'), 1)

//  console.log(newArray.join(" "))

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let total = 0;
// let userNumber = prompt("Введіть число");

// while (userNumber !== null) {
//   total += Number(userNumber);
//   console.log(userNumber);
//   userNumber = prompt("Введіть число");
// }

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// let userKeys = Object.keys(user);

// for (let key of userKeys) {
//   console.log(`${key} : ${user[key]}`);
// }

/**
 *? У нас есть объект, в котором хранятся зарплаты
 *? нашей команды
 *? Напишите код для суммирования всех зарплат и
 *? сохраните его результат в переменной sum.
 *? Если объект salaries пуст, то результат должен быть 0
 */

//  const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const valuesSalaries = Object.values(salaries).reduce((sum, alt) => sum += alt, 0);
// console.log(valuesSalaries);

/**
 *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція шукає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(array, stonesName) {
//   const unicueStone = array.find((stone) => stone.name === stonesName);
//   console.log(unicueStone);
//   if (!unicueStone) {
//     return "Такого каменю немає";
//   }
//   return unicueStone.price * unicueStone.quantity;
// }
// console.log(calcTotalPrice(stones, "ffghhh"));

/**
 *? Напишіть функцію updateObject, яка приймає об'єкт та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1, c: 3}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */

// const obj = { a: 1, b: 2, c: 3 };

// const updateObject = (object, removeKey) => {
//   const result = { ...object };
//   delete result[removeKey];
//   return result;
// };

// console.log(updateObject(obj, "b"));
// console.log(obj);

///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//     { name: "apple", price: 200 },
//     { name: "orange", price: 300 },
//     { name: "grapes", price: 750 },
//   ];

// const result = fruits.map(fruit => {
//    return {...fruit, id : Date.now(), price : fruit.price*0.8};
// })

// console.log(result);

/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const result = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce((acc, tweet) => {
//     //   варіант 1

//     // if (acc[tweet]) {
//     //   acc[tweet] += 1;
//     //   return acc;
//     // } else {
//     //   acc[tweet] = 1;
//     //   return acc;
//     // }

//     //   варіант2
//     return {
//       ...acc,
//       [tweet]: acc[tweet] ? acc[tweet] + 1 : 1,
//     };
//   }, {});

// console.log(result);

/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
const concerts = {
  Київ: new Date("2020-04-01"),
  Умань: new Date("2023-07-02"),
  Вінниця: new Date("2020-04-21"),
  Одеса: new Date("2023-07-15"),
  Хмельницький: new Date("2020-04-18"),
  Харків: new Date("2023-07-10"),
};

console.table(concerts);

const cityNames = Object.keys(concerts);

const filteredCities = cityNames
  .filter((city) => concerts[city] > Date.now())
  .sort((a, b) => concerts[a] - concerts[b]);
console.log(filteredCities);
