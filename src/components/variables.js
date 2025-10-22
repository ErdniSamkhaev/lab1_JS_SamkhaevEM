// 1. Примитивные типы данных
export const name = "Эрдни"; // строка
export let age = 32; // число
export const booleanVar = true; // булево значение
export let undefinedVar; // undefined (неопределенное значение)
export const nullVar = null; // null (пустое значение)
export const symbolVar = Symbol("уникальный символ"); // символ (ES6)

// 2. Объектные типы данных. (JSON формат)
export const profileLogData = {
  firstName: "Эрдни",
  lastName: "Самхаев",
  year: 1993,
  shortBio: "Я разработчик",
  city: "Москва",
  country: "Россия",
  email: "erdnisamhaev@gmail.com",
  phone: "+79999999999",
  website: "https://erdnisamhaev.com",
  social: {
    facebook: "https://facebook.com/erdnisamhaev",
    twitter: "https://twitter.com/erdnisamhaev",
    instagram: "https://instagram.com/erdnisamhaev",
  },
};

const arrayVar = [1, 2, 3, "строка", true]; // массив

const functionVar = function () {
  // функция
  return "Это функция";
};

const arrowFunctionVar = () => "Стрелочная функция"; // стрелочная функция

// 3. Специальные типы
const bigIntVar = 1234567890123456789012345678901234567890n; // BigInt (большие числа)
const dateVar = new Date(); // объект Date
const regexVar = /[a-zA-Z]/g; // регулярное выражение

// 4. Переменные с разными областями видимости
var globalVar = "Глобальная переменная"; // var (устаревший способ)
let blockVar = "Блочная переменная"; // let (новый способ)
const constantVar = "Константа"; // const (новый способ)

// 5. Константы и переменные с деструктуризацией
const [first, second, third] = [1, 2, 3]; // деструктуризация массива
const { firstName, lastName } = profileLogData; // деструктуризация объекта

// 6. Переменные с шаблонными строками
const templateStringVar = `Привет, ${name}! Тебе ${age} лет.`;

// 7. Переменные с логическими операторами
const andVar = true && "истина"; // логическое И
const orVar = false || "ложь"; // логическое ИЛИ
const nullishVar = null ?? "значение по умолчанию"; // nullish coalescing

// 8. Переменные с тернарным оператором
const ternaryVar = age >= 18 ? "совершеннолетний" : "несовершеннолетний";

// 9. Переменные с операторами сравнения
const equalVar = 10 === 10; // строгое равенство
const notEqualVar = 10 !== 11; // строгое неравенство
const greaterVar = 10 > 5; // больше
const lessVar = 10 < 15; // меньше
const greaterEqualVar = 10 >= 10; // больше или равно
const lessEqualVar = 10 <= 10; // меньше или равно



// --------------------------------------------------------------------------