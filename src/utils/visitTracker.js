import { getCookie, setCookie } from "./cookieUtils.js";

// Инициализация отслеживания визитов
export function initVisitTracker() {
  const lastVisitCookie = getCookie("lastVisit");
  const lastVisitElement = document.getElementById("lastVisitInfo");

  if (lastVisitCookie && lastVisitElement) {
    // Декодируем дату (на случай если в ней есть специальные символы)
    const lastVisitDate = decodeURIComponent(lastVisitCookie);
    lastVisitElement.textContent = `Ваш последний визит: ${lastVisitDate}`;
    lastVisitElement.style.display = "block";
    console.log("Последний визит был:", lastVisitDate);
  } else if (lastVisitElement) {
    lastVisitElement.textContent = "Добро пожаловать! Это ваш первый визит.";
    lastVisitElement.style.display = "block";
  }

  // Сохраняем текущую дату визита
  const currentDate = new Date().toLocaleString("ru-RU");
  setCookie("lastVisit", encodeURIComponent(currentDate), 365); // Cookie на 365 дней
  console.log("Текущий визит сохранён:", currentDate);
}

// Получение информации о последнем визите
export function getLastVisitInfo() {
  const lastVisit = getCookie("lastVisit");
  if (lastVisit) {
    return decodeURIComponent(lastVisit);
  }
  return null;
}
