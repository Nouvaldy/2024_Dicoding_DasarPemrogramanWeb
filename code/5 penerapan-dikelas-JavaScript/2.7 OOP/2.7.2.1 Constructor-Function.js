//Membuat Objek dan Class menggunakan Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}
 
Person.prototype.eat = function() {
  console.log(`${this.name} is eating`);
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
 
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: Bob

person1.eat();
person2.eat();