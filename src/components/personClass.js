export class Person {
  constructor(name, year, city) {
    this.name = name;
    this.year = year;
    this.city = city;
  }
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

export const me = new Person("Эрдни", 1993, "Москва");
console.log(me.getAge());
