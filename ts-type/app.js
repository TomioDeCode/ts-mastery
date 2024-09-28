/******************************************
 * LECTURE 1: CONSOLE
 *****************************************/
// console.log("This is my first typescript code!");
/******************************************
 * LECTURE 2: VARIABLES IN TYPESCRIPT
 *****************************************/
// let num = 100;
// let Num = 1000;
// const str = "Hello World!";
/******************************************
 * LECTURE 3: DATATYPES IN TYPESCRIPT
 *****************************************/
// 1.STRING DATATYPE
// const str = "This is string DataType!"
// 2. NUMBER TYPE
// let num = 123;
// const pi = 3.14;
// 3. BOOLEAN TYPE
// let isEligible = true;
// let isEqual = false;
// console.log(Boolean(null));
// console.log(Boolean("Hello"));
// 0, '', null, undefined
// let isGreater = 10 < 25;
// console.log(isGreater);
/******************************************
 * LECTURE 4: TYPE ASSIGNMENT & TYPE INFERENCE
 *****************************************/
// function sum(num1: number, num2: number, isPrint: boolean, msg: string) {
//   if (isPrint) {
//     let s = num1 + num2;
//     console.log(msg + " " + s);
//   }
//   return num1 + num2;
// }
// let n1: number = 10;
// let n2: number = 20;
// console.log(sum(n1, n2, false, "Sum is = "));
/******************************************
 * LECTURE 5: OBJECT TYPE IN TYPESCRIPT
 *****************************************/
// let person: {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     country: string;
//   };
// } = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "Indonesia",
//     country: "ID",
//   },
// };
// console.log(person);
/******************************************
 * LECTURE 6: ARRAYS IN TYPESCRIPT
 *****************************************/
// let person: (string | number)[] = ["John", 28, "male", 1000];
// let names: string[] = [];
// let birthday: number[] = [1998, 1989, 2007];
// names.push("John");
// for (let year of birthday) {
//   console.log(year);
// }
/******************************************
 * LECTURE 7: TUPLES IN TYPESCRIPT
 *****************************************/
// let employee: [number, string, number, boolean] = [123, "John", 2000, true];
// employee = [123, "Mark", 1200, false];
// console.log("🚀 ~ file: app.ts:97 ~ employee:", employee);
/******************************************
 * LECTURE 8: ENUMS IN TYPESCRIPT
 *****************************************/
// enum Roles {
//   ADMIN,
//   READ_ONLY,
//   WRITE_ONLY,
//   READ_WRITE,
// }
// const user = {
//   name: "John",
//   age: 30,
//   gender: "male",
//   role: Roles.ADMIN,
// };
// if (user.role === Roles.ADMIN) {
//   console.log("This User is an Admin!");
// }
/******************************************
 * LECTURE 9: ANY IN TYPESCRIPT
 *****************************************/
// let dynamicData: any;
// dynamicData = true;
// let arr: any[];
// arr = [1, true, "John", null, undefined];
// let test;
// console.log(typeof test);
/******************************************
 * LECTURE 10: UNION IN TYPESCRIPT
 *****************************************/
// let user: { name: string; age: number } | null;
// function getUsers() {
//   const uname = "John";
//   const age = 28,
//     user = { name: uname, age: age };
//   return user;
// }
// getUsers();
// function printStatus(msg: string, code: string | number | boolean | null) {
//   if (typeof code === "string") {
//     console.log(`${msg}. Status Code: ${code.trim()}`);
//   } else {
//     console.log(`${msg}. Status Code: ${code}`);
//   }
// }
// printStatus("Request was successful", 200);
// printStatus("Request was not found", "404");
/******************************************
 * LECTURE 11: LITERAL TYPE IN TYPESCRIPT
 *****************************************/
// const str1 = "Hello World!";
// let str2 = "Some string";
// function roleMessage(role: 'admin' | 'read' | 'read-write' ) {
//   switch (role) {
//     case "admin":
//       console.log("You have admin permission on this site!");
//       break;
//     case "read":
//       console.log("You have read permission on this site!");
//       break;
//     case "read-write":
//       console.log("You have read / write permission on this site!");
//       break;
//     default:
//       console.log("unknown user permission!");
//   }
// }
// roleMessage("admin");
/******************************************
 * LECTURE 12: UNDERSTANDING TYPE IN TYPESCRIPT
 *****************************************/
// type StringType = string;
// let str: StringType = "Hello Type!";
// type StringOrNumber = string | number;
// function printStatus(msg: string, code: StringOrNumber) {
//   if (typeof code === "string") {
//     console.log(`${msg}. Status Code: ${code.trim()}`);
//   } else {
//     console.log(`${msg}. Status Code: ${code}`);
//   }
// }
// printStatus("Request was successful", 200);
// printStatus("Request was not found", "404");
// type RoleType = "admin" | "read" | "read-write";
// function roleMessage(role: RoleType) {
//   switch (role) {
//     case "admin":
//       console.log("You have admin permission on this site!");
//       break;
//     case "read":
//       console.log("You have read permission on this site!");
//       break;
//     case "read-write":
//       console.log("You have read / write permission on this site!");
//       break;
//     default:
//       console.log("unknown user permission!");
//   }
// }
// roleMessage("admin");
// type User = {
//   fistName: string;
//   lastName: string;
//   age: number;
// };
// function getFullName(user: User) {
//   return user.fistName + " " + user.lastName;
// }
// function isEligibleForVoting(user: User) {
//   return user.age >= 18;
// }
// let user: User = {
//   fistName: "John",
//   lastName: "Smith",
//   age: 24,
// };
// console.log(getFullName(user));
// console.log(isEligibleForVoting(user));
/******************************************
 * LECTURE 13: RETURN TYPE IN TYPESCRIPT
 *****************************************/
// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
//   return;
// }
// console.log(add(12, 23));
/******************************************
 * LECTURE 14: FUNCTION AS TYPE
 *****************************************/
// type User = {
//   name: string;
//   age: number;
// };
// function greetUser(user: User) {
//   const greetMsg = "Hello, " + user.name;
//   console.log(greetMsg);
// }
// function sum(num1: number, num2: number) {
//   return num1 + num2;
// }
// function isEligible(user: User) {
//   console.log(user.age >= 18);
// }
// let greet: (usr: User) => void;
// greet = greetUser;
// let user = { name: "John", age: 28 };
// greet(user);
// greet = sum;
// console.log(greet(user));
// greet = isEligible;
// greet(user);
/******************************************
 * LECTURE 15: FUNCTION TYPE FOR CALLBACK
 *****************************************/
// let addNumber: (n1: number, n2: number) => number;
// function sum(num1: number, num2: number) {
//   return num1 + num2;
// }
// function add(num1: number, num2: number) {
//   console.log(num1 + num2);
// }
// addNumber = sum;
// function getResult(
//   num1: number,
//   num2: number,
//   print: (str: string, n: number) => void
// ) {
//   const result = num1 + num2;
//   print("Sum = ", result);
// }
// function display(msg: string, result: number) {
//   console.log(msg + result);
// }
// getResult(12, 13, display);
/******************************************
 * LECTURE 16: UNKNOWN TYPE IN TYPESCRIPT
 *****************************************/
// let inputVal: unknown;
// let uName: string = "Something";
// inputVal = "Hello World!";
// if (typeof inputVal === "string") {
//   uName = inputVal;
// }
// console.log(uName);
// console.log(typeof inputVal);
/******************************************
 * LECTURE 17: NEVER TYPE IN TYPESCRIPT
 *****************************************/
function greetUser(name) {
    console.log("Hello, " + name);
}
// greetUser("John");
function createError(errorMsg, errorCode) {
    throw { message: errorMsg, code: errorCode };
}
// createError("Internal Server Error", 500);
console.log(greetUser("Mark"));
console.log(createError("Page Not Found!", 404));
