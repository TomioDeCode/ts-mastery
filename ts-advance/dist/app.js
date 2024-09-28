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
// const User = {
//   firsName: "John",
//   age: 27,
//   gender: "Male",
//   city: "Madiun",
// };
// const { firsName: fullName, age,gender, city } = User;
// console.log(fullName, age, gender, city);
/******************************************
 * LECTURE 03: SPREAD OPERATORS
 *****************************************/
const users = ["John", "Mark", "Merry"];
console.log(users);
console.log(...users);
// Creating a shalow copy of arrays
const copyArrays = [...users];
copyArrays.push("Steve");
console.log(copyArrays);
// Creating an array from existing array
const extendedUsers = ["Ravin", "Alex", ...users];
console.log(extendedUsers);
// Spread Operator on Object
const person = {
    firsName: "John",
    age: 28,
    gender: "Male",
};
const employee = Object.assign(Object.assign({}, person), { salary: 1200, company: "Google" });
console.log(employee);
