// 2.12
// 1) WHILE цикл
// let i = 0;
// // WHILE - Пока условие верное, цикл срабатывает
// while (i < 3) {
//   console.log(i);
//   i++; // обычно используются постфиксные формы для увеличения i
// }
// let i = 3;
// while (i) {
//   console.log(i);
//   i--;
// }

// 2) DO WHILE цикл
// let i = 0;
// // Здесь в любом случае сработает секция DO, а затем проверится условие
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// 3) FOR цикл
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// 4) BREAK
// let sum = 0;
// // цикл отрабатывает бесконечно, т.к. все время true
// while (true) {
//   let value = +prompt("Введите число ", "");
//   if (!value) break;
//   sum += value;
// }
// console.log("Сумма: " + sum);

// 5) CONTINUE - можно выйти из текущей итерации (каждый проход в цикле)
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// 6) SWITCH - позволяет избежать кучи if else
// let a = 2 + 2;
// switch (a) {  // если case хотим с условием, то указываем в switch (true)
//   case 3:
//     console.log("Маловато");
//     break;
//   case 4:
//     console.log("В точку!");
//     break;
//   case 5:
//     console.log("Перебор");
//     break;
//   default:  // лучше использовать
//     console.log("Нет таких значений");
// }
//===========================================
// ЗАДАЧИ
// 1
/* const PENSION_MAN = 65;
const PENSION_WOMAN = 55;
let pensionUser;

let keyValidation; // для проверки на ввод числа

let nameUser;
let subNameUser;
let patronymicUser;
let yearUser;

do {
  nameUser = prompt("Введите имя: ", "");
} while (nameUser.length === 0);
do {
  subNameUser = prompt("Введите фамилию: ", "");
} while (subNameUser.length === 0);
do {
  patronymicUser = prompt("Введите отчество: ", "");
} while (patronymicUser.length === 0);
do {
  yearUser = prompt("Введите возраст (в годах): ", "");
  if (isNaN(+yearUser)) {
    alert("Введите снова");
    keyValidation = 1;
  } else {
    keyValidation = 0;
  }
} while (yearUser.length === 0 || keyValidation === 1);
let genderUser = confirm("Ваш пол - мужской?") ? "man" : "woman";

const DAYS_IN_YEAR = 365;
const yearUserDays = yearUser * DAYS_IN_YEAR;
const fiveYearLater = +yearUser + 5;

if (
  (genderUser === "woman" && +yearUser >= PENSION_WOMAN) ||
  (genderUser === "man" && +yearUser >= PENSION_MAN)
) {
  pensionUser = "вы на пенсии";
} else {
  pensionUser = "вам нужно еще поработать";
}
alert(`Ваше ФИО: ${subNameUser} ${nameUser} ${patronymicUser}
Ваш возраст в годах: ${yearUser}
Ваш возраст в днях: ${yearUserDays}
Через 5 лет вам будет: ${fiveYearLater}
Ваш пол: ${genderUser}
На данный момент ${pensionUser}`);
*/

// 2;
/* let stringUser;
let amountStringUser = 0;
let stringVowels = ["у", "е", "ы", "а", "о", "э", "я", "и", "ю"];
do {
  stringUser = prompt("Введите любую строку: ", "");
} while (stringUser.length === 0);

for (let i = 0; i < stringUser.length; i++) {
  for (let j = 0; j < stringVowels.length; j++) {
    if (stringVowels[j] === stringUser[i]) {
      amountStringUser += 1;
      break;
    }
  }
}
alert(`Количество русских гласных в вашей строке: ${amountStringUser}`);
*/

// 3
/*let keyValidation;
let i = 0;
let a;
let b;
let c;
do {
  if (i > 0 && i !== 20) {
    alert("Вы ввели пустую строку. Введите повторно");
  }
  a = prompt("Введите число a: ", "");
  b = prompt("Введите число b: ", "");
  c = prompt("Введите число c: ", "");
  if (isNaN(+a) || isNaN(+b) || isNaN(+c)) {
    alert("Скорее всего вы ввели строку, попробуйте снова!");
    keyValidation = 1;
    i = 19; // alert вверху не сработает, 20 - т.к. пользователь вряд ли ошибется 20 раз
  } else {
    keyValidation = 0;
  }
  ++i; // для показа alert
} while (
  a.length === 0 ||
  b.length === 0 ||
  c.length === 0 ||
  keyValidation === 1
); // пока во всех строках что-либо не появится и это будут числа
let D = b ** 2 - 4 * a * c;
if (D > 0) {
  let x1 = (-b + D ** (1 / 2)) / (2 * a);
  let x2 = (-b - D ** (1 / 2)) / (2 * a);
  // Проверка на целочисленность и вывод знаков после запятой
  if (Number.isInteger(x1) && Number.isInteger(x2)) {
    alert(`Корни уравнения: х1 = ${x1}, х2 = ${x2}`);
  } else if (Number.isInteger(x1)) {
    alert(`Корни уравнения: х1 = ${x1}, х2 = ${x2.toFixed(2)}`);
  } else if (Number.isInteger(x2)) {
    alert(`Корни уравнения: х1 = ${x1.toFixed(2)}, х2 = ${x2}`);
  } else {
    alert(`Корни уравнения: х1 = ${x1.toFixed(2)}, х2 = ${x2.toFixed(2)}`);
  }
} else if (D < 0) {
  alert("Квадратное уравнение не имеет действительных корней");
} else {
  let x = -b / (2 * a);
  alert(`Корень уравнения х = ${x}`);
}
*/

// 2.12
// Четные числа от 2 до 10
// let someNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let amountEvenNumbers = 0;
// let i = 0;
// через for
// for (let i = 0; i < someNumbers.length; i++) {
//   if (someNumbers[i] % 2 === 0) {
//     amountEvenNumbers += 1;
//   }
// }
// через while
// while (i < someNumbers.length) {
//   if (someNumbers[i] % 2 === 0) {
//     amountEvenNumbers += 1;
//   }
//   i++;
// }
// console.log(amountEvenNumbers);

// проверка валидности
// let someUserNumber;
// do {
//   someUserNumber = prompt("Введите больше 100 ", "");
// } while (someUserNumber <= 100 && someUserNumber);
// someUserNumber >= 100
//   ? alert("Вы ввели больше 100!")
//   : alert("Не получилось?!");

// вывод простых чисел
// let n;
// let simpleArray = [];
// let simpleAmount = 0;
// a = 0;
// do {
//   n = +prompt("Введите количество простых чисел", "");
// } while (!n);
// firstTime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue firstTime;
//   }
//   simpleArray[a] = i;
//   a++;
//   simpleAmount += 1;
// }
// alert(
//   `Простые числа от 1 до ${n}: ${simpleArray} в количестве ${simpleAmount}`
// );

// Switch в if..else
/* let browser = "Firefox";
if (browser === "Edge") {
  alert("Youve got the Edge!");
} else if (
  browser === "Firefox" ||
  browser === "Chrome" ||
  browser === "Opera" ||
  browser === "Safari"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
} */

// if..else в switch
/* const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
} */
