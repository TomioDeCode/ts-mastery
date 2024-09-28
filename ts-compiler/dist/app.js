"use strict";
/******************************************
 * LECTURE 01: TYPESCRIPT || app.ts -w
 *****************************************/
console.log("Typescript Compiler Configuration");
/******************************************
 * LECTURE 01: CORE || app.ts -w
 *****************************************/
const button = document.getElementById("btn");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("Button is clicked!");
});
