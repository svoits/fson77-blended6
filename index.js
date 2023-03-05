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

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

let userKeys = Object.keys(user);

for (let key of userKeys) {
  console.log(`${key} : ${user[key]}`);
}
