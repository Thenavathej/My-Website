const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");

class Person {
    constructor(name, lastName, age, phone, email) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }

    displayPerson() {
        console.log(`Name: ${this.name}`);
        console.log(`Last name: ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Email: ${this.email}`);
    }
}

// Prevent default form submission and handle data
submitBtn.onclick = function(event) {
    event.preventDefault();

    const person1 = new Person(
        name.value,
        lastName.value,
        age.value,
        phone.value,
        email.value
    );

    person1.displayPerson();

    // Retrieve existing data from localStorage or initialize as empty array
    let persons = JSON.parse(localStorage.getItem("persons")) || [];

    // Add new person
    persons.push(person1);

    // Save updated array to localStorage
    localStorage.setItem("persons", JSON.stringify(persons));

    // Optional: clear the form
    document.querySelector("form").reset();
};
