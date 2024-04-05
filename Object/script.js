// OBJECT

// Calling objects
let programmer = {
    name: "Sardor",
    age: 20
}
console.log(programmer);
// ism - key, "Sardor" - value
console.log(typeof programmer); // finding type of given value

// Getting object properties
console.log(programmer.name);
console.log(programmer.age);

console.log(programmer['name']);
console.log(programmer['age']);

let School = {
    schNumber: 5,
    location: "Navai",
    specializedIn: "Maths",
    oldName: "School of Beruniy"
}
console.log(School.schNumber);
console.log(School.location);
console.log(School.specializedIn);
console.log(School.oldName);

console.log(School['schNumber']);
console.log(School['location']);
console.log(School['specializedIn']);
console.log(School['oldName']);

let company = {
    name: "Thompson School",
    opened: 2018,
    directions: {
        subject: "English, maths, russian",
        job: "Modern jobs"
    }
}
console.log(company.directions.subject);
console.log(company.directions.job);

let aboutMe = {
    name: "Asilbek",
    surname: 'Tojiyev',
    age: 15,
    location: {
        country: "Uzbekistan",
        city: "Navai",
        street: 'Beshkent',
        number: 68
    }
}
console.log(aboutMe);
console.log(aboutMe.location);

let Prog = {
    name: "John",
    age: 69,
    greeting: function() {
        console.log("Hello!");
    }
}
Prog.greeting()