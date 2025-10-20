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




