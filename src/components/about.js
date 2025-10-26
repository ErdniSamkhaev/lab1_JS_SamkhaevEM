import { me } from "./personClass.js";

export const profile = {
  firstName: "Эрдни",
  lastName: "Самхаев",
  year: 1993,
  shortBio: "Я разработчик",
  city: "Москва",
  country: "Россия",
  email: "erdnisamhaev@gmail.com",
  phone: "+79999999999",
  website: "https://erdnisamhaev.com",
  social: {
    facebook: "https://facebook.com/erdnisamhaev",
    twitter: "https://twitter.com/erdnisamhaev",
    instagram: "https://instagram.com/erdnisamhaev",
  },
};

// вывод в DOM для проверки
const aboutContent = document.getElementById("aboutContent");
aboutContent.innerHTML = `
  <p>Привет! Меня зовут ${profile.firstName} ${profile.lastName}, мне ${me.getAge()}.</p>
  <p>Год рождения: ${profile.year}</p>
  <p>Город: ${profile.city}</p>
  <p>${profile.shortBio}</p>
`;
