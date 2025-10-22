import { getGreetingMessage } from "../utils/greetingMessage.js";

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

// Функция для создания полного приветствия
export function createFullGreeting(visitorName = null) {
  const greeting = getGreetingMessage();
  if (visitorName) {
    return `${greeting}, ${visitorName}!`;
  } else {
    return `${greeting}, посетитель!`;
  }
}


