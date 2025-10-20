import { hobbies } from "./components/hobby.js";
import { createHeader, createFullGreeting } from "./components/header.js";
import { updateDateTime } from "./components/footer.js";

// 1. Примитивные типы данных
const name = "Эрдни"; // строка
let age = 32; // число
const booleanVar = true; // булево значение
let undefinedVar; // undefined (неопределенное значение)
const nullVar = null; // null (пустое значение)
const symbolVar = Symbol("уникальный символ"); // символ (ES6)

// 2. Объектные типы данных. (JSON формат)
const profile = {
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
const { firstName, lastName } = profile; // деструктуризация объекта

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

console.log(name, age, booleanVar, undefinedVar, nullVar, symbolVar);
console.log(profile);
console.log(arrayVar);
console.log(functionVar);
console.log(arrowFunctionVar);
console.log(bigIntVar);
console.log(dateVar);
console.log(regexVar);
console.log(globalVar, blockVar, constantVar);
console.log(first, second, third);
console.log(firstName, lastName);
console.log(templateStringVar);
console.log(andVar, orVar, nullishVar);
console.log(ternaryVar);
console.log(
  equalVar,
  notEqualVar,
  greaterVar,
  lessVar,
  greaterEqualVar,
  lessEqualVar
);

// --------------------------------------------------------------------------

// Создаем заголовок и вставляем в DOM
document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("headerContainer");
  if (headerContainer) {
    headerContainer.innerHTML = createHeader(profile);
  }

  // Добавляем приветствие по времени
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = createFullGreeting();
  }

  // Обработчик для кнопки приветствия
  const greetButton = document.getElementById("greetButton");
  const visitorNameInput = document.getElementById("visitorName");
  const greetingMessage = document.getElementById("greetingMessage");

  if (greetButton && visitorNameInput && greetingMessage) {
    greetButton.addEventListener("click", function () {
      const visitorName = visitorNameInput.value.trim();
      if (visitorName) {
        greetingMessage.textContent = createFullGreeting(visitorName);
      } else {
        greetingMessage.textContent = "Пожалуйста, введите ваше имя!";
      }
    });
  }
  // Обработчик для кнопки "Добавить увлечение"
  const addHobbyButton = document.getElementById("addHobbyButton");
  if (addHobbyButton) {
    addHobbyButton.addEventListener("click", function () {
      const newHobby = prompt("Введите новое увлечение:");
      if (newHobby) {
        hobbies.push(newHobby);
        displayHobbies();
      }
    });
  }

  // Обработчик для кнопки "Случайный факт"
  const randomFactButton = document.getElementById("randomFactButton");
  if (randomFactButton) {
    randomFactButton.addEventListener("click", function () {
      const facts = [
        "Я родился в 1993 году",
        "Живу в Москве",
        "Люблю программировать",
        "Играю в Dota 2",
        "Читаю книги",
      ];
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      alert(randomFact);
    });
  }

  // Обработчик для кнопки "Показать/скрыть подробности"
  const toggleAboutButton = document.getElementById("toggleAboutButton");
  const aboutContent = document.getElementById("aboutContent");
  if (toggleAboutButton && aboutContent) {
    toggleAboutButton.addEventListener("click", function () {
      if (aboutContent.style.display === "none") {
        aboutContent.style.display = "block";
        toggleAboutButton.textContent = "Скрыть подробности";
      } else {
        aboutContent.style.display = "none";
        toggleAboutButton.textContent = "Показать подробности";
      }
    });
  }
  // Обновляем дату и время при загрузке страницы
  updateDateTime();

  // Обновляем время каждую секунду
  setInterval(updateDateTime, 1000);
});
// вывод в DOM для проверки
// Функция для отображения увлечений
function displayHobbies() {
  const hobbyList = document.getElementById("hobbyList");
  hobbyList.innerHTML = ""; // Очищаем список

  hobbies.forEach((hobby) => {
    const li = document.createElement("li");

    if (typeof hobby === "string") {
      li.textContent = hobby;
    } else if (typeof hobby === "object" && hobby.name) {
      li.innerHTML = `
          <div class="hobby-item">
            <h4>${hobby.name}</h4>
            <p>${hobby.description}</p>
            ${
              hobby.image
                ? `<img src="${hobby.image}" alt="${hobby.name}" style="width: 300px; height: 300px;">`
                : ""
            }
          </div>
        `;
    }

    hobbyList.appendChild(li);
  });
}

// Вызываем функцию
displayHobbies();

// вывод в DOM для проверки
const aboutContent = document.getElementById("aboutContent");
aboutContent.innerHTML = `
  <p>Привет! Меня зовут ${profile.firstName} ${profile.lastName}</p>
  <p>Год рождения: ${profile.year}</p>
  <p>Город: ${profile.city}</p>
  <p>${profile.shortBio}</p>
`;

// вывод в консоль для проверки
console.log(name, age, profile, hobbies);
