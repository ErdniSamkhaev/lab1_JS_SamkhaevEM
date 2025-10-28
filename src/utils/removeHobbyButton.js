import { hobbies } from "../components/hobby.js";
import { displayHobbies } from "../views/body.js";

// Обработчик для кнопки "Удалить последнее увлечение"
export function removeHobbyButton() {
  const removeHobbyBtn = document.getElementById("removeHobbyBtn");
  if (removeHobbyBtn) {
    removeHobbyBtn.addEventListener("click", function () {
      // Проверяем, есть ли элементы в массиве перед удалением
      if (hobbies.length > 0) {
        hobbies.pop(); // Удаляем последний элемент из массива
        displayHobbies(); // Обновляем отображение
        console.log("Последнее увлечение удалено");
      } else {
        alert("Список увлечений пуст!");
      }
    });
  }
}
