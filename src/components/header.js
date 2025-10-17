export function createHeader(profile) {
  return `
      <header class="header">
        <h1 id="mainTitle">${profile.firstName} ${profile.lastName}</h1>
        <img 
          src="img/uzkii.jpg" 
          alt="${profile.firstName}" 
          width="200" 
          height="200" 
          id="profileImage"
        />
      </header>
    `;
}

// Функция для приветствия по времени суток
export function getGreetingMessage() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Доброе утро";
  } else if (hour >= 12 && hour < 18) {
    return "Добрый день";
  } else if (hour >= 18 && hour < 22) {
    return "Добрый вечер";
  } else {
    return "Доброй ночи";
  }
}

// Функция для создания полного приветствия
export function createFullGreeting(visitorName = null) {
  const greeting = getGreetingMessage();
  if (visitorName) {
    return `${greeting}, ${visitorName}!`;
  } else {
    return `${greeting}, посетитель!`;
  }
}

// Функция для форматирования даты (день.месяц.год)
export function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

// Функция для форматирования времени (час:минуты:секунды)
export function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Функция для обновления даты и времени
export function updateDateTime() {
  const now = new Date();

  const dateElement = document.getElementById("currentDate");
  const timeElement = document.getElementById("currentTime");

  if (dateElement) {
    dateElement.textContent = `Дата: ${formatDate(now)}`;
  }

  if (timeElement) {
    timeElement.textContent = `Время: ${formatTime(now)}`;
  }
}
