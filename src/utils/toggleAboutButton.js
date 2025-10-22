// Обработчик для кнопки "Показать/скрыть подробности"
export function toggleAboutButton() {
  const toggleAboutButton = document.getElementById("toggleAboutButton");
  const aboutContent = document.getElementById("aboutContent");
  if (toggleAboutButton && aboutContent) {
    toggleAboutButton.addEventListener("click", function () {
      if (aboutContent.style.display === "none") {
        aboutContent.style.display = "block";
        toggleAboutButton.textContent = "Скрыть подробности";
      } else {
        aboutContent.style.display = "none";
        toggleAboutButton.textContent = "Показать подробности";
      }
    });
  }
}
