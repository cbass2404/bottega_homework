// - Write a class called Student that accepts a name, email, and favorite programming language.
// - Write two static methods and two instance methods.
// - The first instance method should return the student’s name, email, and fav language
// - The second instance method should return the students’ favorite programming language
// - The two static methods should just console.log whatever you’d like
// - Once you have that class finished, I would chalenge you to try and build a different class of your own

class Student {
  constructor(name, email, favLanguage) {
    this.name = name;
    this.email = email;
    this.favLanguage = favLanguage;
  }

  static display() {
    console.log(Student);
  }

  static student() {
    alert(this === student);
  }

  printData() {
    return `Name: ${this.name}, Email: ${this.email}, Favorite Language: ${this.favLanguage}`;
  }

  printLanguage() {
    return `${this.favLanguage} is their favorite language.`;
  }
}

const cory = new Student("Cory", "cory.bass.07@gmail.com", "Python");

console.log(cory);
console.log(cory.printData());
console.log(cory.printLanguage());
console.log(Student.display())
