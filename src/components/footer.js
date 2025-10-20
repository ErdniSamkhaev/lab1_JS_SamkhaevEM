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
