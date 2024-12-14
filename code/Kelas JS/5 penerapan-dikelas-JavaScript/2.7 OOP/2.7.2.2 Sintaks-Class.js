//Membuat Object dan Class menggunakan sintaks Class

class Person {

//Membuat Properti
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

//Membuat Method
  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Membuat instance(Objek) dari Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

person1.eat(); // Output: Alice is eating
person2.eat(); // Output: Bob is eating