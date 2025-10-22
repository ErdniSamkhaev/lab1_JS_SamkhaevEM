import { hobbies } from "../components/hobby.js";
import { displayHobbies } from "../views/body.js";

// Обработчик для кнопки "Добавить увлечение"
export function addHobbyButton() {
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
}
