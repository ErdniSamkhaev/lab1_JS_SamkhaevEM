// Обработчик для кнопки "Случайный факт"
export function randomFactButton() {
  const randomFactButton = document.getElementById("randomFactButton");
  if (randomFactButton) {
    randomFactButton.addEventListener("click", function () {
      const facts = [
        "Я родился в 1993 году",
        "Живу в Москве",
        "Люблю программировать",
        "Играю в Dota 2",
        "Читаю книги",
      ];
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      alert(randomFact);
    });
  }
}
