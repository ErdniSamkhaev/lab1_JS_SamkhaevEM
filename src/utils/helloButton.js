import { createFullGreeting } from "../views/header.js";

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
      } else {
        greetingMessage.textContent = "Пожалуйста, введите ваше имя!";
      }
    });
  }
}
