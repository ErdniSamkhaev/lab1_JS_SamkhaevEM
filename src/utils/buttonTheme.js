export const switcher = document.getElementById("themeSwitcherSection");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const currentThemeIndicator = document.getElementById("currentTheme");

// Функция для переключения темы
export function toggleTheme(isDark) {
  if (isDark) {
    body.classList.add("dark-theme");
    currentThemeIndicator.textContent = "Темная тема";
  } else {
    body.classList.remove("dark-theme");
    currentThemeIndicator.textContent = "Светлая тема";
  }
  // Сохраняем состояние в localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Функция инициализации
export function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (themeToggle && switcher && currentThemeIndicator) {
    // Восстанавливаем тему из localStorage
    if (savedTheme === "dark") {
      themeToggle.checked = true;
      body.classList.add("dark-theme");
      currentThemeIndicator.textContent = "Темная тема";
    } else {
      themeToggle.checked = false;
      body.classList.remove("dark-theme");
      currentThemeIndicator.textContent = "Светлая тема";
    }

    // Обработчик для чекбокса
    themeToggle.addEventListener("change", function () {
      toggleTheme(this.checked);
    });
  }
}

// Вызываем инициализацию
initTheme();
