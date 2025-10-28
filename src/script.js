import { profile } from "./components/about.js";
import {
  name,
  age,
  booleanVar,
  undefinedVar,
  nullVar,
  symbolVar,
} from "./components/variables.js";
import { displayHobbies } from "./views/body.js";
import { updateDateTime } from "./views/footer.js";
import { createHeader, createFullGreeting } from "./views/header.js";
import { toggleAboutButton } from "./utils/toggleAboutButton.js";
import { helloButton } from "./utils/helloButton.js";
import { addHobbyButton } from "./utils/addHobbyButton.js";
import { randomFactButton } from "./utils/randomFact.js";
import { hobbies } from "./components/hobby.js";
import { initTheme } from "./utils/buttonTheme.js";
import { profileImage, initProfileImageAnimation } from "./views/header.js";
import { removeHobbyButton } from "./utils/removeHobbyButton.js";
import { getFromStorage } from "./utils/storageUtils.js";
import { initVisitTracker } from "./utils/visitTracker.js";
import { clearStorageButton } from "./utils/clearStorageButton.js";

console.log(name, age, booleanVar, undefinedVar, nullVar, symbolVar);
console.log(hobbies);
document.addEventListener("DOMContentLoaded", function () {
  // Инициализация отслеживания визитов
  initVisitTracker();

  // Инициализация заголовка
  const headerContainer = document.getElementById("headerContainer");
  if (headerContainer) {
    headerContainer.innerHTML = createHeader(profile);
    initProfileImageAnimation();
  }

  // Инициализация приветствия
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    // Проверяем, есть ли сохраненное имя в localStorage
    const savedName = getFromStorage("visitorName");
    if (savedName) {
      greetingElement.textContent = createFullGreeting(savedName);
      console.log("Загружено сохраненное имя из localStorage:", savedName);
    } else {
      greetingElement.textContent = createFullGreeting();
    }
  }

  // Инициализация увлечений
  displayHobbies();

  // Инициализация времени
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Инициализация интерактивных элементов
  toggleAboutButton();
  helloButton();
  addHobbyButton();
  removeHobbyButton();
  randomFactButton();
  initTheme();
  profileImage();
  clearStorageButton();
});
