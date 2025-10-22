import { createFullGreeting } from "../views/header.js";

// Обработчик для кнопки приветствия
export function helloButton() {
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
}
