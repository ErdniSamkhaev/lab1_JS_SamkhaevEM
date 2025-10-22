import { hobbies } from "../components/hobby.js";

// вывод в DOM для проверки
// Функция для отображения увлечений
export function displayHobbies() {
  const hobbyList = document.getElementById("hobbyList");
  hobbyList.innerHTML = ""; // Очищаем список

  hobbies.forEach((hobby) => {
    const li = document.createElement("li");

    if (typeof hobby === "string") {
      li.textContent = hobby;
    } else if (typeof hobby === "object" && hobby.name) {
      li.innerHTML = `
            <div class="hobby-item">
              <h4>${hobby.name}</h4>
              <p>${hobby.description}</p>
              ${
                hobby.image
                  ? `<img src="${hobby.image}" alt="${hobby.name}" style="width: 300px; height: 300px;">`
                  : ""
              }
            </div>
          `;
    }

    hobbyList.appendChild(li);
  });
}

// Вызываем функцию
displayHobbies();
