// Create an object with properties
const person = {
    name: 'Jane Doe',
    age: 22,
    email: 'jane.doe@example.com',
    isStudent: true
  };
  
  // Access and update properties
  console.log(person.name);
  person['age'] = 23;
  
  // Add a new property and delete one
  person.city = 'New York';
  delete person.email;
  
  // Create a nested object
  const user = {
    name: 'John Smith',
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  };
  
  // Iterate over properties
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  //Method Properties

  // Add a greet() method
const personMethods = {
    name: 'Alice',
    greet() {
      return `Hello, my name is ${this.name}.`;
    }
  };
  
  // Add a method that checks if the user is a student
  const studentStatus = {
    isStudent: true,
    checkStatus() {
      return this.isStudent ? 'User is a student.' : 'User is not a student.';
    }
  };
  
  // Create a method using ES6 shorthand syntax
  const calculator = {
    add(a, b) {
      return a + b;
    }
  };
  
  // Create a method to calculate birth year
  const userBirthYear = {
    age: 30,
    getBirthYear() {
      return new Date().getFullYear() - this.age;
    }
  };