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

// Восстановление темы при загрузке страницы
function restoreTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    themeToggle.checked = true;
    toggleTheme(true);
  } else {
    themeToggle.checked = false;
    toggleTheme(false);
  }
}

// Обработчик события для чекбокса
if (themeToggle && switcher) {
  themeToggle.addEventListener("change", function () {
    toggleTheme(this.checked);
  });

  // Восстанавливаем тему при загрузке
  restoreTheme();
}
