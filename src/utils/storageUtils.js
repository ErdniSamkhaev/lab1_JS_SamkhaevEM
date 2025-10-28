// Сохранение данных в localStorage
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.error("Ошибка при сохранении в localStorage:", e);
    return false;
  }
}

// Получение данных из localStorage
export function getFromStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error("Ошибка при чтении из localStorage:", e);
    return null;
  }
}

// Удаление данных из localStorage
export function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error("Ошибка при удалении из localStorage:", e);
    return false;
  }
}

// Проверка существования ключа в localStorage
export function hasInStorage(key) {
  return localStorage.getItem(key) !== null;
}
