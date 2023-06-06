class Person {
  constructor(public name: string) {}

  greet() {
    return `Hello ${this.name}`;
  }
}

const person = new Person("John");
