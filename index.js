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
//  */
// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2023-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2023-07-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2023-07-10"),
// };

// console.table(concerts);

// const cityNames = Object.keys(concerts);

// const filteredCities = cityNames
//   .filter((city) => concerts[city] > Date.now())
//   .sort((a, b) => concerts[a] - concerts[b]);
// console.log(filteredCities);

// const arr = [
//   { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
//   { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
//   { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
//   { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
//   { name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 5 },
//   { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
//   { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
//   { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
//   { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
//   { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
//   { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
//   { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
//   { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 },
// ];
// - Получить массив ученых, родившихся в 19 веке.

// const result = arr.filter(person => person.born > 1800 && person.born <= 1900);
// console.log(result);

// const years = arr.reduce((sum, person) => sum + (person.dead - person.born) ,0);
// console.log(years);

// - Отсортировать ученых по алфавиту.

// const result = [...arr].sort(({ name: a }, { name: b }) => a.localeCompare(b));
// console.log(result);

// - Отсортировать ученых по количеству прожитых лет.

// const years = [...arr].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.log(years);
// - Удалить из массива ученых, родившихся в 15, 16 или 17 веках.
// - Найти ученого, который родился позже всех.
// - Найти год рождения Albert Einstein.
// - Найти ученых, фамилия которых начинается на букву "С".
// - Удалить из массива всех ученых, имя которых начинается на букву "A".
// - Найти ученого, который прожил больше всех и ученого, который меньше.
// - Найти ученых, у которых совпадают первые буквы имени и фамилии.
// - Узнать, все ли ученые работали в 19 веке.

// ************
// LESSON 3
// ************

// Напишіть функцію конструктор  User, у якої є три параметри userName, age, numbersOfPost і метод getInfo, який повертає рядок `Користувачеві ${this.username} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`

// function User(userName, age, numbersOfPost) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;

//   this.getInfo = function () {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//   };
// }

// const user1 = new User("John", 32, 12);
// console.log(user1);

//TODO:=============================================
//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// const Storage = function (array) {
//   this.items = array;

//   this.addItems = function (item) {
//     this.items.push(item);
//   }
//   this.removeItem = function(item) {
//     const ididx = this.items.indexOf(item);
//     if (ididx !== -1) {
//       this.items.splice(ididx, 1);
//     }
//   }
// }
// Storage.prototype.getItem = function (){
//   return this.items;
// }

// const exempl = new Storage([1, 8, 12]);
// console.log(exempl);
// console.log(exempl.getItems());
// console.log(exempl.addItems(8));
// console.log(exempl.getItems())
// console.log(exempl.removeItem(12));

//TODO:=============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const newClient = new Client("qwerty", "mail@mail.com");

// console.log(newClient.login);
// console.log((newClient.login = "newlogin"));

// console.log(newClient.email);
// console.log((newClient.email = "newemail@mail.com"));

//TODO:=============================================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel

// const obj = {
//   name: "Mango",
//   surname: "Worker",
//   age: 30,
//   position: "FE developer",
//   salary: 5000,
// };

// class Worker {
//   constructor({ name, age, salary }) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   getSalary() {
//     return this.salary;
//   }
// }

// class TopLevelWorker extends Worker {
//   constructor(obj, hierarchyLevel) {
//     super(obj);
//     this.hierarchyLevel = hierarchyLevel;
//   }

//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }

// const newTopLvl = new TopLevelWorker(obj, "Top 1");
// console.log(newTopLvl);

// const newClient = new Client("qwerty", "mail@mail.com");

// console.log(newClient.login);
// console.log((newClient.login = "newlogin"));

// console.log(newClient.email);
// console.log((newClient.email = "newemail@mail.com"));

//TODO:=============================================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами
// {
//   HIGHT: "hight",
//   LOW: "low",
// }
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

class Notes {
  static Priopity() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(text) {
    this.items = this.items.filter((item) => item.text !== text);
  }
  updatePriority(text, newPriority) {
    const index = this.items.findIndex((item) => item.text === text);
    this.items[index].priority = newPriority;
    console.log(this.items[index]);
    console.log(this.items[index].priority);
  }
}

const newNotes = new Notes();
newNotes.addNote({ text: "Note 1", priority: Notes.Priopity().HIGHT });
console.log(newNotes);
newNotes.addNote({ text: "Note 2", priority: Notes.Priopity().LOW });
newNotes.addNote({ text: "Note 3", priority: Notes.Priopity().HIGHT });
newNotes.removeNote("Note 3");
newNotes.updatePriority("Note 2", Notes.Priopity().HIGHT);
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
 class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  getInfo(){
    return { name: this.name, age: this.age}
  }
  feed(){
    console.log(`${this.name} eating `);
  }
 }

 class myCat extends Animal {
  constructor(name, age){
    super(name, age);

  }
  voice(){
    console.log(`${this.name} say mmmmay`)
  }
 }

 class Dog extends Animal {
  constructor(obj){
    super(obj);

  }
  voice(){
    console.log(`${this.name} say gav`)
  }
 }

 const myDog = new Dog( 'Luisa', 10);
myDog.voice();
console.log(myDog.getInfo());