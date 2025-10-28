import { removeFromStorage } from "./storageUtils.js";
import { deleteCookie } from "./cookieUtils.js";

export function clearStorageButton() {
  const clearBtn = document.getElementById("clearStorageBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      const confirm = window.confirm(
        "Вы уверены, что хотите очистить все сохраненные данные?"
      );
      if (confirm) {
        // Удаляем имя из localStorage
        removeFromStorage("visitorName");
        // Удаляем cookie с датой последнего визита
        deleteCookie("lastVisit");

        alert("Все сохраненные данные удалены!");
        console.log("localStorage и cookies очищены");

        // Перезагружаем страницу
        location.reload();
      }
    });
  }
}
