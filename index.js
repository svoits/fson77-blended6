//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const showMeButtonEl = document.querySelector("#alertButton");
const showMeInputEl = document.querySelector("#alertInput");

showMeButtonEl.addEventListener("click", onShowMeButtonClick);

function onShowMeButtonClick() {
  alert(showMeInputEl.value);
  showMeInputEl.value = "";
}

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const swapMeButtonEl = document.querySelector("#swapButton");
const swapMeFirstInputEl = document.querySelector("#leftSwapInput");
const swapMeSecondInputEl = document.querySelector("#rightSwapInput");


swapMeButtonEl.addEventListener("click", onSwapMeBtnClick);

function onSwapMeBtnClick(){
  const buffer = swapMeFirstInputEl.value;
  swapMeFirstInputEl.value = swapMeSecondInputEl.value;
  swapMeSecondInputEl.value = buffer;
}



//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const hideBtnEl = document.querySelector('#passwordButton');
const passwordInputEl = document.querySelector('#passwordInput');

hideBtnEl.addEventListener('click', onHideBtnClick);

function onHideBtnClick() {
  if(hideBtnEl.textContent === "Приховати"){
    hideBtnEl.textContent = "Розкрити";
    passwordInputEl.type = "password";
  } else{
    hideBtnEl.textContent = "Приховати";
    passwordInputEl.type = "text";
  }

}


//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const decreaseBtnEl = document.querySelector('#decrease');
const increaseBtnEl = document.querySelector('#increase');
const boxEl = document.querySelector('#box');

decreaseBtnEl.addEventListener('click', onDecreaseBtnClick);
increaseBtnEl.addEventListener('click', onIncreaseBtnClick);

function onDecreaseBtnClick() {
  const size = parseInt(getComputedStyle(boxEl).width);
  console.log(size);
  boxEl.style.width = `${size - 10}px`;
  boxEl.style.height = `${size - 10}px`;
}

function onIncreaseBtnClick() {
  const size = parseInt(getComputedStyle(boxEl).width);
  boxEl.style.width = `${size + 10}px`;
  boxEl.style.height = `${size + 10}px`;
}

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
