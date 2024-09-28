"use strict";
/******************************************
 * LECTURE 01: ARRAY DESTRUCTURING
 *****************************************/
const person = ["John", "Smith", 28, "Female"];
const [firsName, lastName, age, gender = "Male"] = person;
console.log(firsName, lastName, age, gender);
console.log(person);
