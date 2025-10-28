import { createFullGreeting } from "../views/header.js";
import { saveToStorage } from "./storageUtils.js";

// Обработчик для кнопки приветствия
export function helloButton() {
  const greetButton = document.getElementById("greetButton");
  const visitorNameInput = document.getElementById("visitorName");
  const greetingId = document.getElementById("greeting");

  if (greetButton && visitorNameInput && greetingId) {
    greetButton.addEventListener("click", function () {
      const visitorName = visitorNameInput.value.trim();
      if (visitorName) {
        greetingId.textContent = createFullGreeting(visitorName);
        // Сохраняем имя в localStorage
        saveToStorage("visitorName", visitorName);
        console.log("Имя сохранено в localStorage:", visitorName);
        // Очищаем поле ввода после приветствия
        visitorNameInput.value = "";
      } else {
        greetingId.textContent = "Пожалуйста, введите ваше имя!";
      }
    });
  }
}
