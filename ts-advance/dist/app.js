"use strict";
/******************************************
 * LECTURE 01: ARRAY DESTRUCTURING
 *****************************************/
// const person = ["John", "Smith", 28, "Female"];
// const [firsName, lastName, age, gender = "Male"] = person;
// console.log(firsName, lastName, age, gender);
// console.log(person);
/******************************************
 * LECTURE 02: OBJECT DESTRUCTURING
 *****************************************/
const User = {
    firsName: "John",
    age: 27,
    gender: "Male",
    city: "Madiun",
};
const { firsName: fullName, age, gender, city } = User;
console.log(fullName, age, gender, city);
